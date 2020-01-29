import React from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'
import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'
import IconCheck from '../Icons/IconCheck'

const Checkbox = ({checkbox, tabIndex, onChange, errors}) => {
  const errorMessages = errors[checkbox.id]
  let checked = 'false'
  try {
    checked = JSON.parse(checkbox.value)
  } catch (e) {
    console.error('Impossible to convert to json checkbox value', checkbox)
  }

  const onChangeCallback = e => {
    return onChange(checkbox.id, JSON.stringify(e.target.checked))
  }

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

  checkboxProps = {
    ...checkboxProps,
    id: checkbox.id,
    label: checkbox.label,
    checked,
    value: checked,
    checkedIcon: IconCheck,
    onChange: onChangeCallback,
    tabIndex: tabIndex,
    intermediate: false,
    ...(checkbox.disabled && {
      disabled: true
    }),
    ...(checkbox.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    })
  }

  if (checkboxProps.hidden) {
    return null
  }
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Switch sui-FormBuilder-${checkboxProps.id ||
        tabIndex}`}
    >
      <MoleculeCheckboxField {...checkboxProps} />
    </div>
  )
}

Checkbox.displayName = 'Switch'
Checkbox.propTypes = {
  tabIndex: PropTypes.number,
  checkbox: field,
  onChange: PropTypes.func,
  errors: PropTypes.object
}

export default React.memo(Checkbox, (nextProps, prevProps) => {
  return (
    JSON.stringify(nextProps.checkbox) === JSON.stringify(prevProps.checkbox) &&
    nextProps.errors[nextProps.checkbox.id] ===
      prevProps.errors[prevProps.checkbox.id] &&
    nextProps.onChange === prevProps.onChange
  )
})
