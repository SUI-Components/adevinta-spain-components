import {isValidElement, memo} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../prop-types'
import MoleculeDataCounter from '@s-ui/react-molecule-data-counter'

export const OPERATIONS = {
  ADD: '+',
  SUBSTRACT: '-'
}

const Stepper = ({stepper, tabIndex, onChange, errors, alerts, renderer}) => {
  const errorMessages = errors[stepper.id]
  const alertMessages = alerts[stepper.id]

  const onChangeHandler = (__, {value}) => onChange(stepper.id, value)

  const stepperProps = {
    id: stepper.id,
    inputDisabled: stepper.inputDisabled,
    label: stepper.label,
    max: stepper.max,
    maxValueErrorText: stepper.maxValueErrorText,
    min: stepper.min,
    minValueErrorText: stepper.minValueErrorText,
    tabIndex: tabIndex,
    value: stepper.value,
    ...(stepper.disabled && {
      disabled: true
    }),
    ...(stepper.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    })
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
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Stepper sui-FormBuilder-${stepperProps.id ||
        tabIndex}`}
    >
      <MoleculeDataCounter {...stepperProps} onChange={onChangeHandler} />
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
