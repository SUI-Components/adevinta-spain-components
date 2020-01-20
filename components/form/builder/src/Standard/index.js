// map the DSL standard to JS: https://docs.mpi-internal.com/scmspain/all--lib-form-builder-docs/form-specification/field/

import {pickFieldById} from '../reducer/fields'

const FIELDS = {
  TEXT: 'text',
  NUMERIC: 'numeric',
  FIELDSET: 'fieldset',
  PICKER: 'picker'
}

const DISPLAYS = {
  [FIELDS.TEXT]: {
    MULTILINE: 'multiline',
    EMAIL: 'email',
    PHONE: 'phone', // not part of the DSL standard
    TEXT: 'text', // not part of the DSL standard
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
    BUTTON_INLINE: 'button-inline'
  }
}

const CONSTRAINTS = {
  notnull: 'valueMissing',
  pattern: 'patternMismatch',
  maxlength: 'tooLong',
  minlength: 'tooShort'
}

const errorMessagesFromField = (fields, fieldId) => {
  const field = pickFieldById(fields, fieldId)
  let errorMessages = []
  const constraints = field.constraints || []
  const elementValidity = document.getElementById(field.id)?.validity

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
    field.type === FIELDS.TEXT &&
    field.display === DISPLAYS[FIELDS.TEXT].MULTILINE
  ) {
    const textAreaHasMinLength = field.constraints.find(
      constraint => constraint.property?.minlength
    )
    const textAreaValue = document.getElementById(field.id)?.value

    if (
      textAreaValue?.length <
      parseInt(textAreaHasMinLength?.property?.minlength)
    )
      errorMessages = [...errorMessages, textAreaHasMinLength.message]
  }

  // custom validation: pattern constraint in html input (type=checkbox) is not natively supported, need to handle it manually
  if (
    field.type === FIELDS.PICKER &&
    field.display === DISPLAYS[FIELDS.PICKER].CHECKBOX
  ) {
    const checkboxValue = JSON.parse(document.getElementById(field.id)?.value)

    const checkboxShouldBeTrueConstraint = field.constraints.find(
      constraint => constraint.property?.pattern === '^true$'
    )

    // if should be true according to field, and is false show error message
    if (checkboxShouldBeTrueConstraint && !checkboxValue)
      errorMessages = [checkboxShouldBeTrueConstraint.message, ...errorMessages]
  }

  return errorMessages
}

export {FIELDS, DISPLAYS, CONSTRAINTS, errorMessagesFromField}
