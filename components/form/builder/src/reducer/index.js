import {applyRules} from './rules'
import {RULES} from './constants'

export const reducer = (
  rules,
  formID,
  responseInterceptor,
  requestInterceptor
) => async (fields, action) => {
  const {type, id} = action
  let nextFields
  switch (type) {
    case RULES:
      nextFields = await applyRules(
        fields,
        rules,
        id,
        formID,
        responseInterceptor,
        requestInterceptor
      )
      return nextFields
    default:
      return fields
  }
}
