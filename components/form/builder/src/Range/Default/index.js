import {isValidElement, memo, useCallback, useState, useEffect} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../../prop-types/index.js'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

const joinInputValues = inputValues =>
  inputValues ? Object.values(inputValues).join(',') : ''

const splitInputValues = inputValues => {
  const [from, to] = inputValues?.split(',') || []
  return {
    ...(from && {from}),
    ...(to && {to})
  }
}

const DefaultRange = ({
  range,
  onChange,
  onFocus,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  const fromInputId = `${range.id}From`
  const toInputId = `${range.id}To`

  const [inputValues, setInputValues] = useState(splitInputValues(range.value))

  console.log({range: range.value})

  useEffect(() => {
    onChange(range.id, joinInputValues(inputValues))
  }, [inputValues, onChange, range])

  const onChangeCallback = useCallback(
    (ev, {value, name}) => {
      if (name === fromInputId) {
        setInputValues(prev => ({...prev, from: value}))
      }
      if (name === toInputId) {
        setInputValues(prev => ({...prev, to: value}))
      }
    },
    [fromInputId, toInputId]
  )

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
    value: inputValues?.from,
    placeholder: 'Desde',
    type: 'number',
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    helpText: range.help,
    tabIndex: '0'
  }

  const toInputProps = {
    id: toInputId,
    name: toInputId,
    value: inputValues?.to,
    placeholder: 'Hasta',
    type: 'number',
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    helpText: range.help,
    tabIndex: '0'
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
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-DefaultRange sui-FormBuilder-${rangeProps.id}`}
    >
      <div className="sui-FormBuilder-DefaultRange-from">
        <MoleculeInputField {...fromInputProps} {...rendererResponse} />
      </div>
      <div className="sui-FormBuilder-DefaultRange-to">
        <MoleculeInputField {...toInputProps} {...rendererResponse} />
      </div>
    </div>
  )
}

DefaultRange.displayName = 'DefaultRange'
DefaultRange.propTypes = {
  range: field,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(DefaultRange, createComponentMemo('range'))
