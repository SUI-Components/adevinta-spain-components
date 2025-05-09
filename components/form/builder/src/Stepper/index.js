import {isValidElement, memo} from 'react'

import PropTypes from 'prop-types'

import MoleculeDataCounter from '@s-ui/react-molecule-data-counter'

import {createComponentMemo, field} from '../prop-types/index.js'

export const OPERATIONS = {
  ADD: '+',
  SUBSTRACT: '-'
}

const Stepper = ({stepper, tabIndex, onChange, errors, alerts, renderer}) => {
  const errorMessages = errors[stepper.id]
  const alertMessages = alerts[stepper.id]

  const onChangeHandler = (__, {value}) => onChange(stepper.id, value)

  const errorText = errorMessages?.length
    ? errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    : ''

  const alertText = alertMessages?.length
    ? alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    : ''

  const stepperProps = {
    id: stepper.id,
    inputDisabled: stepper.inputDisabled,
    label: stepper.label,
    max: stepper.max,
    maxValueErrorText: stepper.maxValueErrorText,
    min: stepper.min,
    minValueErrorText: stepper.minValueErrorText,
    tabIndex,
    value: stepper.value,
    ...(stepper.disabled && {disabled: true}),
    ...(stepper.hidden && {hidden: true}),
    ...(!!errorMessages && {errorText}),
    ...(!!alertMessages && {alertText})
  }

  if (stepperProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: stepper.id,
    innerProps: {
      ...stepperProps
    }
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div className={`sui-FormBuilder-field sui-FormBuilder-Stepper sui-FormBuilder-${stepperProps.id || tabIndex}`}>
      <MoleculeDataCounter {...stepperProps} {...rendererResponse} onChange={onChangeHandler} />
    </div>
  )
}

Stepper.displayName = 'Stepper'
Stepper.propTypes = {
  stepper: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(Stepper, createComponentMemo('stepper'))
