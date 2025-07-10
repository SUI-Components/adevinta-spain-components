import {isValidElement, memo, useCallback} from 'react'

import PropTypes from 'prop-types'

import AtomSwitch, {atomSwitchColors, atomSwitchDesigns} from '@s-ui/react-atom-switch'

import {createComponentMemo, field} from '../prop-types/index.js'

const Switch = ({switchField, tabIndex, onChange, errors, alerts, renderer}) => {
  const errorMessages = errors[switchField.id]
  const alertMessages = alerts[switchField.id]

  const switched = ['true', true].includes(switchField.value)

  const onChangeCallback = useCallback(
    (event, {checked}) => {
      return onChange(switchField.id, JSON.stringify(checked))
    },
    [onChange, switchField]
  )

  const errorText = errorMessages?.length
    ? errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    : ''

  const alertText = alertMessages?.length
    ? alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    : ''

  const switchProps = {
    color: atomSwitchColors.PRIMARY,
    design: atomSwitchDesigns.SINGLE,
    defaultChecked: switched,
    label: switchField.label,
    name: switchField.id,
    onToggle: onChangeCallback,
    checked: switched,
    ...(switchField.disabled && {disabled: true}),
    ...(switchField.hidden && {hidden: true}),
    ...(!!errorMessages && {errorText}),
    ...(!!alertMessages && {alertText})
  }

  if (switchProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: switchField.id,
    innerProps: switchProps
  })
  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div className={`sui-FormBuilder-field sui-FormBuilder-Switch sui-FormBuilder-${switchProps.id || tabIndex}`}>
      <AtomSwitch {...switchProps} {...rendererResponse} />
    </div>
  )
}

Switch.displayName = 'Switch'
Switch.propTypes = {
  tabIndex: PropTypes.number,
  switchField: field,
  onChange: PropTypes.func,
  errors: PropTypes.objects,
  alerts: PropTypes.objects,
  renderer: PropTypes.func
}

export default memo(Switch, createComponentMemo('switchField'))
