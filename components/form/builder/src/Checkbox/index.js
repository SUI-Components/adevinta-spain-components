import React from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../prop-types'
import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'
import IconCheck from '../Icons/IconCheck'

const Checkbox = ({checkbox, tabIndex, onChange, onBlur, errors, alerts}) => {
  const errorMessages = errors[checkbox.id]
  const alertMessages = alerts[checkbox.id]

  let checked = 'false'
  try {
    checked = JSON.parse(checkbox.value)
  } catch (e) {
    console.error('Impossible to convert to json checkbox value', checkbox)
  }

  const onChangeCallback = e => {
    return onChange(checkbox.id, JSON.stringify(e.target.checked))
  }

  const onBlurCallback = () => onBlur(checkbox.id)

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
    onBlur: onBlurCallback,
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
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
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
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default React.memo(Checkbox, createComponentMemo('checkbox'))
