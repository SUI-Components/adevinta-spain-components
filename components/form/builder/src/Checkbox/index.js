import {isValidElement, memo} from 'react'

import PropTypes from 'prop-types'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

import IconCheck from '../Icons/IconCheck.js'
import {createComponentMemo, field} from '../prop-types/index.js'

const Checkbox = ({checkbox, tabIndex, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  const errorMessages = errors[checkbox.id]
  const alertMessages = alerts[checkbox.id]

  const checked = ['true', true].includes(checkbox.value)

  const onChangeCallback = e => {
    return onChange(checkbox.id, JSON.stringify(e.target.checked))
  }

  const onBlurCallback = () => onBlur(checkbox.id)

  const onFocusCallback = () => onFocus(checkbox.id)

  // transform constraints to props
  const constraints = checkbox.constraints || []
  let checkboxProps
  checkboxProps = constraints.reduce((acc, constraint) => {
    return {
      ...acc,
      ...(constraint?.property?.notnull === '' && {
        required: true
      })
    }
  }, checkboxProps)

  const errorText = errorMessages?.length
    ? errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    : ''

  const alertText = alertMessages?.length
    ? alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    : ''

  checkboxProps = {
    ...checkboxProps,
    id: checkbox.id,
    label: checkbox.label,
    value: checked,
    checked,
    checkedIcon: IconCheck,
    onChange: onChangeCallback,
    onFocus: onFocusCallback,
    onBlur: onBlurCallback,
    tabIndex,
    intermediate: false,
    ...(checkbox.disabled && {disabled: true}),
    ...(checkbox.hidden && {hidden: true}),
    ...(!!errorMessages && {errorText}),
    ...(!!alertMessages && {alertText})
  }

  if (checkboxProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: checkbox.id,
    innerProps: checkboxProps
  })

  // render custom component
  if (isValidElement(rendererResponse)) {
    return rendererResponse
  }

  // render SUI component
  return (
    <div className={`sui-FormBuilder-field sui-FormBuilder-Switch sui-FormBuilder-${checkboxProps.id || tabIndex}`}>
      <MoleculeCheckboxField {...checkboxProps} {...rendererResponse} />
    </div>
  )
}

Checkbox.displayName = 'Switch'
Checkbox.propTypes = {
  tabIndex: PropTypes.number,
  checkbox: field,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(Checkbox, createComponentMemo('checkbox'))
