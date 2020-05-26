import {deepFlatten, pipe, clean, head} from './fn-utils'

export const datalistEntries = fields => {
  const entries = deepFlatten(
    fields.map(field => {
      if (field.fields) {
        return datalistEntries(field.fields)
      }

      const entry =
        field.type === 'picker' &&
        field.datalist &&
        field.datalist.find(entry => entry.value === field.value)

      return entry && {[field.id]: entry}
    })
  )
    .filter(Boolean)
    .reduce((acc, entry) => {
      return {...acc, ...entry}
    }, {})
  return entries
}

export const fieldsToArrayOfString = fields => {
  return Object.entries(fieldsToObject(fields)).map(field => {
    const [id, value] = field
    return `${id}=${value}`
  })
}

export const fieldsToObject = fields => {
  const listFields = deepFlatten(
    fields.map(field => {
      if (field.fields) {
        return fieldsToArrayOfString(field.fields).map(string => {
          const [key, value] = string.split('=')
          return {[key]: value || ''}
        })
      }

      return {[field.id]: field.value || ''}
    })
  ).reduce((acc, field) => {
    const [id, value] = head(Object.entries(field))
    acc[id] = value
    return acc
  }, {})

  return listFields
}

export const fieldsNamesInOrderOfDefinition = fields => {
  const names = deepFlatten(
    fields.map(field => {
      if (field.fields) {
        return fieldsNamesInOrderOfDefinition(field.fields)
      }
      return field.id
    })
  )
  return names
}

export const fieldsToQP = (fields, formID) => {
  const qs = `form_id=${formID}&${fieldsToArrayOfString(fields).join('&')}`
  return qs
}

export const changeFieldById = (fields, id, nextField) => {
  let nextFields = fields
  const fieldIndex = fields.findIndex(field => field.id === id)

  if (fieldIndex !== -1) {
    nextFields = [
      ...fields.slice(0, fieldIndex),
      {...fields[fieldIndex], ...nextField},
      ...fields.slice(fieldIndex + 1)
    ]
    return nextFields
  }

  nextFields = nextFields.map(field => {
    if (!field.fields) {
      return field
    }

    field.fields = changeFieldById(field.fields, id, nextField)
    return field
  })

  return nextFields
}

export const pickFieldById = (fields, id) => {
  let field = fields.find(field => field.id === id)
  if (!field) {
    field = pipe(
      deepFlatten,
      clean,
      head
    )(
      fields
        .filter(field => Array.isArray(field.fields))
        .map(field => pickFieldById(field.fields, id))
    )
  }
  return field
}

export const mergeWithInitFields = (fields, initFields) => {}
