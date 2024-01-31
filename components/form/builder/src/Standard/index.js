// map the DSL standard to JS: https://docs.mpi-internal.com/scmspain/all--lib-form-builder-docs/form-specification/field/

import {fieldsNamesInOrderOfDefinition, pickFieldById} from '../reducer/fields.js'
import {LocalizationFactory} from './../Standard/Localization/LocalizationFactory.js'
const FIELDS = {
  TEXT: 'text',
  NUMERIC: 'numeric',
  FIELDSET: 'fieldset',
  PICKER: 'picker',
  MULTIPICKER: 'multipicker',
  RANGE: 'range'
}

const DISPLAYS = {
  [FIELDS.TEXT]: {
    MULTILINE: 'multiline',
    EMAIL: 'email',
    PHONE: 'phone', // not part of the DSL standard
    TEXT: 'text', // not part of the DSL standard
    NUMERIC: 'numeric', // not part of the DSL standard
    DEFAULT: ''
  },
  [FIELDS.NUMERIC]: {
    MONEY: 'money',
    SURFACE: 'surface',
    DEFAULT: ''
  },
  [FIELDS.PICKER]: {
    SWITCH: 'switch',
    AUTOCOMPLETE: 'autocomplete',
    DROPDOWN: 'dropdown',
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
    BUTTON_INLINE: 'button-inline',
    STEPPER: 'stepper',
    SLIDER: 'slider'
  },
  [FIELDS.MULTIPICKER]: {
    BUTTON: 'button',
    DROPDOWN: 'dropdown'
  },
  [FIELDS.RANGE]: {
    DEFAULT: ''
  }
}

const CONSTRAINTS = {
  notnull: 'valueMissing',
  pattern: 'patternMismatch',
  maxlength: 'tooLong',
  minlength: 'tooShort',
  max: 'rangeOverflow',
  min: 'rangeUnderflow'
}

const checkConstraintsFromField = (field, locale) => {
  let errorMessages = []
  const constraints = field.constraints || []
  const elementNode = document.getElementById(field.id)
  const elementValidity = elementNode?.validity
  // if element has no validity is not a form element
  // if element has not constraints there is no need to validate
  if (elementValidity && !!constraints) {
    errorMessages = constraints
      .filter(constraint => {
        // for each constraint property defined in the field
        const validityRule = CONSTRAINTS[Object.keys(constraint?.property)[0]]
        // if true, the constraint is not satisfied, so add the constraint to errors
        if (elementValidity[validityRule]) return true
        return false
      })
      // return
      .map(constraint => constraint.message)
  }

  // custom validation: minlength constraint in html textarea is not working as expected, need to handle it manually
  if (
    // if is a field text and display multiline
    field.type === FIELDS.TEXT &&
    field.display === DISPLAYS[FIELDS.TEXT].MULTILINE &&
    // if element validity is tooShort means that it is working as expected and it is not required manual validation
    !elementValidity.tooShort
  ) {
    const textAreaHasMinLength = field.constraints?.find(constraint => constraint.property?.minlength)
    const textAreaValue = elementNode?.value

    if (textAreaValue?.length < parseInt(textAreaHasMinLength?.property?.minlength))
      errorMessages = [...errorMessages, textAreaHasMinLength.message]
  }

  // custom validation: pattern constraint in html input (type=checkbox) is not natively supported, need to handle it manually
  if (field.type === FIELDS.PICKER && field.display === DISPLAYS[FIELDS.PICKER].CHECKBOX) {
    const checkboxValue = elementNode?.value === 'true'

    const checkboxShouldBeTrueConstraint = field.constraints?.find(
      constraint => constraint.property?.pattern === '^true$'
    )

    // if should be true according to field, and is false show error message
    if (checkboxShouldBeTrueConstraint && !checkboxValue)
      errorMessages = [checkboxShouldBeTrueConstraint.message, ...errorMessages]
  }

  // cutom validation: min html attributes in input type text are not nativelly supported
  if (
    // if is a field text and display text or default
    (field.type === FIELDS.TEXT && field.display === DISPLAYS[FIELDS.TEXT].TEXT) ||
    field.display === DISPLAYS[FIELDS.TEXT].DEFAULT
  ) {
    const inputHasMin = field.constraints?.find(constraint => constraint.property?.min)
    const localization = LocalizationFactory({
      value: elementNode?.value,
      locale
    })
    const inputValueAsNumber = localization.fromStringToLocaleFloat()

    if (inputValueAsNumber < parseFloat(inputHasMin?.property?.min))
      errorMessages = [...errorMessages, inputHasMin.message]
  }
  // cutom validation: max html attributes in input type text are not nativelly supported
  if (
    // if is a field text and display text or default
    (field.type === FIELDS.TEXT && field.display === DISPLAYS[FIELDS.TEXT].TEXT) ||
    field.display === DISPLAYS[FIELDS.TEXT].DEFAULT
  ) {
    const inputHasMax = field.constraints?.find(constraint => constraint.property?.max)

    const localization = LocalizationFactory({
      value: elementNode?.value,
      locale
    })
    const inputValueAsNumber = localization.fromStringToLocaleFloat()

    if (inputValueAsNumber > parseFloat(inputHasMax?.property?.max)) {
      errorMessages = [...errorMessages, inputHasMax.message]
    }
  }

  return errorMessages
}

const checkConstraintsFactory =
  (json, locale) =>
  ({for: fieldID, all}) => {
    let fieldsToValidate = []
    if (all && fieldID) {
      window.console.warn(
        '[form/builder]: checkConstraintsFactory: both modes validate all fields and validate a concrete field are not compatible, please use one of them'
      )
    } else if (all) {
      fieldsToValidate = fieldsNamesInOrderOfDefinition(json?.form?.fields)
    } else if (fieldID) {
      fieldsToValidate = [fieldID]
    } else {
      window.console.warn(
        '[form/builder]: checkConstraintsFactory: Specify if you want to validate a specific field or all the fields'
      )
    }

    const fieldsWithErrors = {}
    fieldsToValidate.forEach(fieldId => {
      const field = pickFieldById(json.form.fields, fieldId)
      if (!field.hidden) {
        fieldsWithErrors[field.id] = checkConstraintsFromField(field, locale)
      } else {
        fieldsWithErrors[field.id] = []
      }
    })
    return fieldsWithErrors
  }

export {FIELDS, DISPLAYS, CONSTRAINTS, checkConstraintsFactory}
