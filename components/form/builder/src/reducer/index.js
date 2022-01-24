import {applyRules} from './rules'
import {RULES} from './constants'

export const reducer = (
  rules,
  formID,
  baseAPIURL,
  responseInterceptor,
  requestInterceptor,
  locale
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
        baseAPIURL,
        responseInterceptor,
        requestInterceptor,
        locale
      )
      return nextFields
    default:
      return fields
  }
}
