import {isValidElement, memo} from 'react'

import PropTypes from 'prop-types'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

import {createComponentMemo, field} from '../../prop-types/index.js'

const joinInputValues = (inputValues = {}) => {
  const {from, to} = inputValues
  return [from, to].join(',')
}

const splitInputValues = inputValues => {
  const [from, to] = inputValues?.split(',') || []
  return {
    ...(from && {from}),
    ...(to && {to})
  }
}

const DefaultRange = ({range, tabIndex, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  const fromInputId = `${range.id}-from`
  const toInputId = `${range.id}-to`

  const inputValues = splitInputValues(range.value)

  const onChangeCallback = (ev, {value, name}) => {
    const inputId = name?.split('-')[1]
    const nextValue = inputId
      ? joinInputValues({
          ...inputValues,
          [`${inputId}`]: value
        })
      : value
    onChange(range.id, nextValue)
  }

  const onBlurCallback = ev => onBlur(ev.target.id)
  const onFocusCallback = ev => onFocus(ev.target.id)

  const rangeProps = {
    id: range.id,
    display: range.display,
    value: range.value,
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    ...(range.disabled && {
      disabled: true
    }),
    ...(range.hidden && {
      hidden: true
    })
  }

  const fromInputProps = {
    id: fromInputId,
    name: fromInputId,
    label: range.label || '',
    placeholder: 'Desde',
    type: 'number',
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    helpText: range.help && <p>{range.help}</p>,
    tabIndex
  }

  const toInputProps = {
    id: toInputId,
    name: toInputId,
    placeholder: 'Hasta',
    type: 'number',
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    helpText: range.help && <p>{range.help}</p>,
    tabIndex
  }

  if (rangeProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: rangeProps.id,
    innerProps: rangeProps
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  const {children, ...rendererProps} = rendererResponse
  const {from: fromValue = '', to: toValue = ''} = rendererProps.value
    ? splitInputValues(rendererProps.value)
    : inputValues

  return (
    <div className={`sui-FormBuilder-field sui-FormBuilder-DefaultRange sui-FormBuilder-${rangeProps.id}`}>
      <div className={`sui-FormBuilder-DefaultRange-inputs`}>
        <div className="sui-FormBuilder-Input sui-FormBuilder-DefaultRange-from">
          <MoleculeInputField {...fromInputProps} {...rendererProps} value={fromValue} />
        </div>
        <div className="sui-FormBuilder-Input sui-FormBuilder-DefaultRange-to">
          <MoleculeInputField {...toInputProps} {...rendererProps} value={toValue} />
        </div>
      </div>
      {children}
    </div>
  )
}

DefaultRange.displayName = 'DefaultRange'
DefaultRange.propTypes = {
  range: field,
  tabIndex: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(DefaultRange, createComponentMemo('range'))
