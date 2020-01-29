import {changeFieldById} from './fields'
import {applyRules} from './rules'
import {CHANGE} from './constants'

export const reducer = (
  rules,
  formID,
  requestInterceptor,
  urlInterceptor
) => async (fields, action) => {
  const {type, id, value} = action
  let nextFields
  switch (type) {
    case CHANGE:
      nextFields = changeFieldById(fields, id, {value})
      nextFields = await applyRules(
        nextFields,
        rules,
        id,
        formID,
        requestInterceptor,
        urlInterceptor
      )
      return nextFields
    default:
      return fields
  }
}
