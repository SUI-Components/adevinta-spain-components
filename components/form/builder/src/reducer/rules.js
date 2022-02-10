/* eslint-disable no-console */
import {operators} from './operators'
import {
  IN,
  INPATTERN,
  NIN,
  NINPATTERN,
  EXISTS,
  NEXISTS,
  CHANGED,
  REMOTE,
  EQUALS,
  GREATERTHAN,
  LESSTHAN,
  GREATERTHANEQUALS,
  LESSTHANEQUALS,
  SUPERSET,
  NSUPERSET,
  HIDDEN
} from './constants'
import {changeFieldById, fieldsToQP} from './fields'

const fetch = config =>
  new Promise((resolve, reject) => {
    const {url, headers} = config
    const request = new window.XMLHttpRequest()
    request.onreadystatechange = function () {
      if (request.readyState === window.XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response)
        } else {
          reject(Error(request.status))
        }
      }
    }

    request.onerror = function () {
      reject(Error('Network Error'))
    }
    request.open('GET', url, true)
    headers &&
      Object.entries(headers).map(([header, value]) =>
        request.setRequestHeader(header, value)
      )

    request.responseType = 'json'
    request.withCredentials = true
    request.send()
  })

export const shouldApplyRule = (fields, changeField, locale) => when => {
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
      case INPATTERN:
        isValid = operators.INPATTERN(rule.id, rule.value, fields, changeField)
        break
      case NINPATTERN:
        isValid = operators.NINPATTERN(rule.id, rule.value, fields, changeField)
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
      case EQUALS:
        isValid = operators.EQUALS(rule.id, rule.value, fields, locale)
        break
      case GREATERTHAN:
        isValid = operators.GREATERTHAN(rule.id, rule.value, fields, locale)
        break
      case GREATERTHANEQUALS:
        isValid = operators.GREATERTHANEQUALS(
          rule.id,
          rule.value,
          fields,
          locale
        )
        break
      case LESSTHANEQUALS:
        isValid = operators.LESSTHANEQUALS(rule.id, rule.value, fields, locale)
        break
      case LESSTHAN:
        isValid = operators.LESSTHAN(rule.id, rule.value, fields, locale)
        break
      case SUPERSET:
        isValid = operators.SUPERSET(rule.id, rule.value, fields, locale)
        break
      case NSUPERSET:
        isValid = operators.NSUPERSET(rule.id, rule.value, fields, locale)
        break
      case HIDDEN:
        isValid = operators.HIDDEN(rule.id, fields)
        break
      default:
        console.warn(`Unknown operator ${rule.operator}`)
        isValid = false
    }

    return acc && isValid
  }, true)
  return isValid
}

export const fetchRemoteFields = (
  fields,
  formID,
  baseAPIURL,
  responseInterceptor,
  requestInterceptor,
  extraParams
) => async fieldsToChanges => {
  const remoteFieldsToChange = await Promise.all(
    Object.entries(fieldsToChanges)
      .filter(([field, nextValue]) => nextValue.remote === REMOTE)
      .map(async ([field, nextValue]) => {
        const defaultUrl = encodeURI(
          `${baseAPIURL}/fieldrules/${field}?${fieldsToQP(fields, formID)}`
        )

        const defaultConfig = {url: defaultUrl}

        const requestInterceptorConfig = await requestInterceptor({
          baseAPIURL,
          fieldID: field,
          fields,
          extraParams
        })
        // Config must be follow the Axios pattern
        // https://github.com/axios/axios
        const config = requestInterceptorConfig || defaultConfig

        const {remote, ...resetValue} = nextValue
        return fetch(config)
          .then(async json => {
            const {url} = config
            const nextJSON = await responseInterceptor({
              field,
              url,
              response:
                typeof json === 'string' || json instanceof String
                  ? JSON.parse(json)
                  : json
            })
            return [field, {...resetValue, ...nextJSON}]
          })
          .catch(error => {
            console.error(
              `FAILED requesting remote nextValue for ${field} with error: ${error}`
            )
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
  baseAPIURL,
  responseInterceptor,
  requestInterceptor,
  locale,
  extraParams
) => {
  const shouldApplyRuleForFieldsAndChangeField = shouldApplyRule(
    fields,
    changeField,
    locale
  )
  const fetchRemoteFieldsForFieldsAndFormID = fetchRemoteFields(
    fields,
    formID,
    baseAPIURL,
    responseInterceptor,
    requestInterceptor,
    extraParams
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
