import React, {useCallback, useState} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../../prop-types'

import MoleculeAutosuggestField from '@s-ui/react-molecule-autosuggest-field'
import MoleculeAutosuggestOption from '@s-ui/react-molecule-dropdown-option'
import IconClose from '../../Icons/IconClose'

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

const AutosuggestSelect = ({select, tabIndex, onChange, size, errors}) => {
  const errorMessages = errors[select.id]
  const {datalist = []} = select
  const fromTextToValueWithDatalist = fromTextToValue(datalist)
  const fromValueToTextWithDatalist = fromValueToText(datalist)
  const text = fromValueToTextWithDatalist(select.value)
  const [stateText, setStateText] = useState(text)

  const onChangeCallback = useCallback(
    (evt, {value: text}) => {
      const value = fromTextToValueWithDatalist(text)
      setStateText(text)
      onChange(select.id, value)
    },
    [fromTextToValueWithDatalist, onChange, select]
  )

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
    iconClear: <IconClose />,
    value: stateText,
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
    ...constraintsProps,
    selectSize: size
  }

  if (autosuggestProps.hidden) {
    return null
  }

  const suggestions = stateText
    ? datalist.filter(({text, value}) =>
        text.toLowerCase().match(stateText.toLowerCase())
      )
    : datalist

  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-AutosuggestSelect sui-FormBuilder-${autosuggestProps.id}`}
    >
      {autosuggestProps.label && (
        <label className="sui-FormBuilder-label" htmlFor={autosuggestProps.id}>
          {autosuggestProps.label}
        </label>
      )}
      <MoleculeAutosuggestField {...autosuggestProps}>
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
  size: PropTypes.string,
  errors: PropTypes.object
}

export default React.memo(AutosuggestSelect, createComponentMemo('select'))
