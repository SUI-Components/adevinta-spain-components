/* eslint-disable no-console */
import {operators} from './operators'
import {IN, NIN, EXISTS, NEXISTS, CHANGED, REMOTE} from './constants'
import {changeFieldById, fieldsToQP} from './fields'

const fetch = url =>
  new Promise((resolve, reject) => {
    const request = new window.XMLHttpRequest()
    request.responseType = 'json'
    request.withCredentials = true
    request.onreadystatechange = function() {
      if (request.readyState === window.XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response)
        } else {
          reject(Error(request.status))
        }
      }
    }

    request.onerror = function() {
      reject(Error('Network Error'))
    }
    request.open('GET', url, true)
    request.send()
  })

export const shouldApplyRule = (fields, changeField) => when => {
  // Reduce works as AND operator, all rules should be true
  const isValid = when.reduce((acc, rule) => {
    // if (rule.id !== changeField) {
    if (!when.some(rule => rule.id === changeField)) {
      return false
    }

    let isValid
    switch (rule.operator) {
      case IN:
        isValid = operators.IN(rule.id, rule.value, fields, changeField)
        break
      case NIN:
        isValid = operators.NIN(rule.id, rule.value, fields, changeField)
        break
      case EXISTS:
        isValid = operators.EXISTS(rule.id, fields)
        break
      case NEXISTS:
        isValid = operators.NEXISTS(rule.id, fields)
        break
      case CHANGED:
        isValid = operators.CHANGED(rule.id, changeField)
        break
      default:
        console.warn(`Unkown operator ${rule.operator}`)
        isValid = false
    }

    return acc && isValid
  }, true)
  return isValid
}

export const fetchRemoteFields = (
  fields,
  formID,
  requestInterceptor,
  urlInterceptor
) => async fieldsToChanges => {
  const remoteFieldsToChange = await Promise.all(
    Object.entries(fieldsToChanges)
      .filter(([field, nextValue]) => nextValue.remote === REMOTE)
      .map(([field, nextValue]) => {
        const url =
          urlInterceptor({fieldID: field, fields}) ||
          `https://ptaformbuilder-classifiedads.spain.schibsted.io/fieldrules/${field}?${fieldsToQP(
            fields,
            formID
          )}`
        const {remote, ...resetValue} = nextValue
        return fetch(url)
          .then(json => {
            const nextJSON = requestInterceptor({url, response: json})
            return [field, {...resetValue, ...nextJSON}]
          })
          .catch(() => {
            console.error(`FAIL requesting remote nextValue for ${field}`)
            return [field, {}]
          })
      })
  )
  return remoteFieldsToChange
}

export const applyRules = async (
  fields,
  rules,
  changeField,
  formID,
  requestInterceptor,
  urlInterceptor
) => {
  const shouldApplyRuleForFieldsAndChangeField = shouldApplyRule(
    fields,
    changeField
  )
  const fetchRemoteFieldsForFieldsAndFormID = fetchRemoteFields(
    fields,
    formID,
    requestInterceptor,
    urlInterceptor
  )

  const fieldsToChanges = Object.entries(rules).reduce(
    (acc, [idField, rulesField]) => {
      // Find works as OR operator, and we want the first match
      const firstMatch = rulesField.find(ruleField =>
        shouldApplyRuleForFieldsAndChangeField(ruleField.when)
      )

      return {
        ...acc,
        ...(firstMatch && {
          [idField]: {
            ...firstMatch.then.data,
            ...(firstMatch.then.remote && {remote: REMOTE})
          }
        })
      }
    },
    {}
  )
  const remoteFieldsToChange = await fetchRemoteFieldsForFieldsAndFormID(
    fieldsToChanges
  )

  let nextFields = Object.entries(fieldsToChanges)
    .filter(([idField, nextValue]) => {
      return nextValue !== REMOTE
    })
    .reduce((acc, [idField, nextValue]) => {
      return changeFieldById(acc, idField, nextValue)
    }, fields)

  nextFields = remoteFieldsToChange.reduce((acc, [idField, nextValue]) => {
    return changeFieldById(acc, idField, nextValue)
  }, nextFields)

  return nextFields
}
