import {isValidElement, memo, useCallback} from 'react'

import PropTypes from 'prop-types'

import MoleculeSwitch from '@s-ui/react-atom-switch'

import {createComponentMemo, field} from '../prop-types'

const Switch = ({switchField, tabIndex, onChange, errors, alerts, renderer}) => {
  const errorMessages = errors[switchField.id]
  const alertMessages = alerts[switchField.id]

  const switched = ['true', true].includes(switchField.value)

  const onChangeCallback = useCallback(
    value => {
      return onChange(switchField.id, JSON.stringify(value))
    },
    [onChange, switchField]
  )
  const switchProps = {
    name: switchField.id,
    label: switchField.label,
    initialValue: switched,
    value: switched,
    onToggle: onChangeCallback,
    type: 'single',
    ...(switchField.disabled && {
      disabled: true
    }),
    ...(switchField.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    })
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
      <MoleculeSwitch {...switchProps} {...rendererResponse} />
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
