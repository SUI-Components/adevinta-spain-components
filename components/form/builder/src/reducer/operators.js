import {
  CHANGED,
  EQUALS,
  EXISTS,
  GREATERTHAN,
  GREATERTHANEQUALS,
  IN,
  INPATTERN,
  LESSTHAN,
  LESSTHANEQUALS,
  NEXISTS,
  NIN,
  NINPATTERN,
  NSUPERSET,
  SUPERSET,
  HIDDEN
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
  [GREATERTHANEQUALS]: (id, values, fields, locale) => {
    const field = pickFieldById(fields, id)
    let value = field.value
    if (typeof field.value === 'string') {
      const localization = LocalizationFactory({value, locale})
      value = localization.fromStringToLocaleFloat()
    }
    const shouldApply = value >= values[0]
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
  },
  [LESSTHANEQUALS]: (id, values, fields, locale) => {
    const field = pickFieldById(fields, id)
    let value = field.value
    if (typeof field.value === 'string') {
      const localization = LocalizationFactory({value, locale})
      value = localization.fromStringToLocaleFloat()
    }
    const shouldApply = value <= values[0]
    return shouldApply
  },
  [SUPERSET]: (id, values, fields) => {
    const {value: fieldValue} = pickFieldById(fields, id)
    const isEmpty = !fieldValue.length
    const hasExpectedValues = values.every(i => fieldValue.includes(i))
    return !isEmpty && hasExpectedValues
  },
  [NSUPERSET]: (id, values, fields) => {
    const {value: fieldValue} = pickFieldById(fields, id)
    const isEmpty = !fieldValue.length
    const hasNotExpectedValues = values.some(i => !fieldValue.includes(i))
    return isEmpty || hasNotExpectedValues
  },
  [HIDDEN]: (id, fields) => {
    const {hidden} = pickFieldById(fields, id)
    return hidden === true
  }
}
