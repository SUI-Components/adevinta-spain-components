import {isValidElement, memo, useCallback, useState} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../../prop-types'

import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'
import IconClose from '../../Icons/IconClose'
import {removeAccents} from '@s-ui/js/lib/string'

const fromValueToText = datalist => value => {
  const item = datalist.find(item => item.value === value)
  return item?.text
}

const fromTextToValue = datalist => text => {
  const item = datalist.find(
    item => item.text.toLowerCase() === text.toLowerCase()
  )
  return item?.value
}

const AutosuggestSelect = ({
  select,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  size,
  errors,
  alerts,
  renderer
}) => {
  const errorMessages = errors[select.id]
  const alertMessages = alerts[select.id]

  const {datalist = []} = select
  const fromTextToValueWithDatalist = fromTextToValue(datalist)
  const fromValueToTextWithDatalist = fromValueToText(datalist)
  const textFromValueProp = fromValueToTextWithDatalist(select.value)
  const [localStateText, setLocalStateText] = useState('')

  // case: a value is forced from outside the component
  // if text from prop is different from current local state text, update local text state
  if (textFromValueProp && textFromValueProp !== localStateText)
    setLocalStateText(textFromValueProp)

  const onChangeCallback = useCallback(
    (evt, {value: text}) => {
      const value = fromTextToValueWithDatalist(text)
      setLocalStateText(text)
      onChange(select.id, value)
    },
    [fromTextToValueWithDatalist, onChange, select]
  )

  const onFocusCallback = () => onFocus(select.id)

  const onBlurCallback = () => onBlur(select.id)

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

  const autosuggestProps = {
    id: select.id,
    label: select.label,
    name: select.name,
    placeholder: select.hint,
    onChange: onChangeCallback,
    helpText: select.help,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    iconClear: <IconClose />,
    value: localStateText,
    tabIndex,
    ...(select.disabled && {
      disabled: true
    }),
    ...(select.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    }),
    selectSize: size,
    ...constraintsProps
  }

  if (autosuggestProps.hidden) {
    return null
  }

  const normalize = str => removeAccents(str.toLowerCase())

  const suggestions = localStateText
    ? datalist.filter(({text, value}) =>
        normalize(text).match(normalize(localStateText))
      )
    : datalist

  const rendererResponse = renderer({
    id: select.id,
    innerProps: {...autosuggestProps, datalist}
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-AutosuggestSelect sui-FormBuilder-${autosuggestProps.id}`}
    >
      {autosuggestProps.label && (
        <label className="sui-FormBuilder-label" htmlFor={autosuggestProps.id}>
          {autosuggestProps.label}
        </label>
      )}
      <MoleculeAutosuggestField {...autosuggestProps} {...rendererResponse}>
        {suggestions.map((suggestion, i) => (
          <MoleculeAutosuggestOption
            key={suggestion.value}
            value={suggestion.text}
          >
            {suggestion.text}
          </MoleculeAutosuggestOption>
        ))}
      </MoleculeAutosuggestField>
    </div>
  )
}

AutosuggestSelect.displayName = 'AutosuggestSelect'
AutosuggestSelect.propTypes = {
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

export default memo(AutosuggestSelect, createComponentMemo('select'))
