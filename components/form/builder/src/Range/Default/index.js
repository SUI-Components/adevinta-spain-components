import {isValidElement, memo, useCallback, useState, useEffect} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../../prop-types/index.js'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

const joinInputValues = inputValues =>
  inputValues ? Object.values(inputValues).join(',') : ''
const splitInputValues = inputValues =>
  inputValues?.split(',').reduce((acc, curr, index) => {
    if (index === 0) {
      return {...acc, from: curr}
    }

    return {...acc, to: curr}
  }, {})

const DefaultRange = ({
  range,
  tabIndex,
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

  const {datalist = []} = range

  const rangeProps = {
    id: range.id,
    display: range.display,
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
    innerProps: {...rangeProps, datalist}
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-DefaultRange sui-FormBuilder-${rangeProps.id}`}
    >
      <MoleculeInputField {...fromInputProps} {...rendererResponse} />
      <MoleculeInputField {...toInputProps} {...rendererResponse} />
    </div>
  )
}

DefaultRange.displayName = 'DefaultRange'
DefaultRange.propTypes = {
  range: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(DefaultRange, createComponentMemo('range'))
