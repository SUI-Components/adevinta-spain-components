import {isValidElement, memo, useCallback, useEffect, useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {removeAccents} from '@s-ui/js/lib/string'
import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'

import {createComponentMemo, field} from '../../prop-types/index.js'

const fromTextToValue = datalist => text => {
  const item = datalist.find(item => item.text.toLowerCase() === text.toLowerCase())
  return item?.value
}

const DropdownAutosuggestSelect = ({select, tabIndex, onChange, onFocus, onBlur, size, errors, alerts, renderer}) => {
  const errorMessages = errors[select.id]
  const alertMessages = alerts[select.id]

  const {datalist = []} = select
  const fromTextToValueWithDatalist = fromTextToValue(datalist)
  const selectedOption = datalist.find(item => item.value === select.value)
  const [localStateText, setLocalStateText] = useState(selectedOption?.text || '')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    const option = datalist.find(item => item.value === select.value)
    setLocalStateText(option?.text || '')
  }, [select.value, datalist])

  const onChangeCallback = useCallback((evt, {value: text}) => {
    setLocalStateText(text)
    setIsOpen(true)
  }, [])

  const onSelectCallback = useCallback(
    (evt, {value: text}) => {
      const value = fromTextToValueWithDatalist(text)
      setLocalStateText(text)
      onChange(select.id, value, {text})
      setIsOpen(false)
      setTimeout(() => inputRef.current?.blur(), 0)
    },
    [fromTextToValueWithDatalist, onChange, select]
  )

  const blurFocusParams = {
    type: select.type,
    display: select.display,
    label: select.label
  }

  const onFocusCallback = () => {
    setIsOpen(true)
    onFocus(select.id, blurFocusParams)
  }

  const onBlurCallback = () => {
    setIsOpen(false)
    onBlur(select.id, blurFocusParams)
  }

  // transform constraints to props
  const constraints = select.constraints || []
  let constraintsProps = {}
  constraintsProps = constraints.reduce((acc, constraint) => {
    if (constraint?.property?.notnull === '') {
      return {
        ...acc,
        required: true
      }
    } else {
      return acc
    }
  }, constraintsProps)

  const normalize = str => removeAccents(str.toLowerCase()).replace(/\W|_/g)

  const getSuggestions = suggestionText =>
    suggestionText ? datalist.filter(({text}) => normalize(text).match(normalize(suggestionText))) : datalist

  const suggestions = getSuggestions(localStateText)

  /**
   * Show empty suggestion text when:
   * - There's no matching options
   * - Have a message to display
   * - There are no other errors involved
   */
  const showEmptySuggestionText =
    !suggestions.length && !!localStateText && select.emptySuggestionText && !errorMessages?.length

  const errorText = errorMessages?.length
    ? errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    : ''

  const alertText = alertMessages?.length
    ? alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    : ''

  const autosuggestProps = {
    autoComplete: select.autoComplete ?? 'off',
    id: select.id,
    label: select.label,
    name: select.name,
    placeholder: select.hint,
    onChange: onChangeCallback,
    onSelect: onSelectCallback,
    helpText: select.help && <p>{select.help}</p>,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    value: localStateText,
    tabIndex,
    isOpen,
    refMoleculeAutosuggestInput: inputRef,
    ...(select.disabled && {disabled: true}),
    ...(select.hidden && {hidden: true}),
    ...(!!errorMessages && {errorText}),
    ...(!!alertMessages && {alertText}),
    ...(showEmptySuggestionText && {errorText: [select.emptySuggestionText]}),
    selectSize: size,
    ...constraintsProps
  }

  if (autosuggestProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: select.id,
    innerProps: {
      ...autosuggestProps,
      display: select.display,
      datalist,
      getSuggestions
    }
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  const {inputSize, iconArrowDown, ...extraProps} = rendererResponse || {}
  const rightIcon = iconArrowDown ? (
    <span className={isOpen ? 'sui-FormBuilder-DropdownAutosuggestSelect-arrow--open' : ''}>{iconArrowDown}</span>
  ) : null

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-DropdownAutosuggestSelect${
        inputSize ? ` sui-FormBuilder-DropdownAutosuggestSelect--${inputSize}` : ''
      } sui-FormBuilder-${autosuggestProps.id}`}
      onMouseDown={e => {
        if (e.target.tagName !== 'INPUT') e.preventDefault()
      }}
    >
      <MoleculeAutosuggestField {...autosuggestProps} {...extraProps} {...(rightIcon && {rightIcon})}>
        {suggestions.map((suggestion, i) => (
          <MoleculeAutosuggestOption key={suggestion.value} value={suggestion.text}>
            {suggestion.text}
          </MoleculeAutosuggestOption>
        ))}
      </MoleculeAutosuggestField>
    </div>
  )
}

DropdownAutosuggestSelect.displayName = 'DropdownAutosuggestSelect'
DropdownAutosuggestSelect.propTypes = {
  select: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(DropdownAutosuggestSelect, createComponentMemo('select'))
