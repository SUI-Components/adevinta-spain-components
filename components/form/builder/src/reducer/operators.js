import {
  IN,
  INPATTERN,
  NIN,
  NINPATTERN,
  EXISTS,
  NEXISTS,
  CHANGED,
  NOTCHANGED,
  EQUALS,
  GREATERTHAN,
  LESSTHAN
} from './constants'
import {pickFieldById} from './fields'
import {LocalizationFactory} from '../Standard/Localization/LocalizationFactory'

export const operators = {
  [IN]: (id, values, fields) => {
    const field = pickFieldById(fields, id)
    const shouldApply = values.some(value => value === field.value)
    return shouldApply
  },
  [NIN]: (id, values, fields) => {
    return !operators.IN(id, values, fields)
  },
  [INPATTERN]: (id, values, fields) => {
    const field = pickFieldById(fields, id)
    const shouldApply = values.some(value => field.value?.match(value))
    return shouldApply
  },
  [NINPATTERN]: (id, values, fields) => {
    return !operators.INPATTERN(id, values, fields)
  },
  [EXISTS]: (id, fields) => {
    const field = pickFieldById(fields, id)
    return Boolean(field && field.value)
  },
  [NEXISTS]: (id, fields) => {
    return !operators.EXISTS(id, fields)
  },
  [CHANGED]: (id, changeField) => id === changeField,
  [NOTCHANGED]: (id, changeField) => id !== changeField,
  [EQUALS]: (id, values, fields, locale) => {
    const field = pickFieldById(fields, id)
    let value = field.value
    const equalTo = values[0]
    if (typeof equalTo === 'number') {
      const localization = LocalizationFactory({value, locale})
      value = localization.fromStringToLocaleFloat()
    }
    const shouldApply = equalTo === value
    return shouldApply
  },
  [GREATERTHAN]: (id, values, fields, locale) => {
    const field = pickFieldById(fields, id)
    let value = field.value
    if (typeof field.value === 'string') {
      const localization = LocalizationFactory({value, locale})
      value = localization.fromStringToLocaleFloat()
    }
    const shouldApply = value > values[0]
    return shouldApply
  },
  [LESSTHAN]: (id, values, fields, locale) => {
    const field = pickFieldById(fields, id)
    let value = field.value
    if (typeof field.value === 'string') {
      const localization = LocalizationFactory({value, locale})
      value = localization.fromStringToLocaleFloat()
    }
    const shouldApply = value < values[0]
    return shouldApply
  }
}
