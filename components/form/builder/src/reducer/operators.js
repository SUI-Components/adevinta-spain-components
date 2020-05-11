import {
  IN,
  NIN,
  EXISTS,
  NEXISTS,
  CHANGED,
  EQUALS,
  GREATERTHAN,
  LESSTHAN
} from './constants'
import {pickFieldById} from './fields'

export const operators = {
  [IN]: (id, values, fields) => {
    const field = pickFieldById(fields, id)
    const shouldApply = values.some(value => value === field.value)
    return shouldApply
  },
  [NIN]: (id, values, fields) => {
    return !operators.IN(id, values, fields)
  },
  [EXISTS]: (id, fields) => {
    const field = pickFieldById(fields, id)
    return Boolean(field && field.value)
  },
  [NEXISTS]: (id, fields) => {
    return !operators.EXISTS(id, fields)
  },
  [CHANGED]: (id, changeField) => id === changeField,
  [EQUALS]: (id, values, fields) => {
    const field = pickFieldById(fields, id)
    const shouldApply = values[0] === field.value
    return shouldApply
  },
  [GREATERTHAN]: (id, values, fields) => {
    const field = pickFieldById(fields, id)
    const shouldApply = field.value > values[0]
    return shouldApply
  },
  [LESSTHAN]: (id, values, fields) => {
    const field = pickFieldById(fields, id)
    const shouldApply = field.value < values[0]
    debugger // eslint-disable-line
    return shouldApply
  }
}
