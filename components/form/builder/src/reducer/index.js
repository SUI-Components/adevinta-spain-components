import {applyRules} from './rules'
import {RULES} from './constants'

export const reducer = (
  rules,
  formID,
  requestInterceptor,
  urlInterceptor
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
        requestInterceptor,
        urlInterceptor
      )
      return nextFields
    default:
      return fields
  }
}
