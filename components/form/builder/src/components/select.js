import React from 'react'
import PropTypes from 'prop-types'

import MoleculeSelectField from '@s-ui/react-molecule-select-field'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

import IconAngleDown from '@schibstedspain/mt-svg-icons/lib/IconAngleDown'
import IconClose from '@schibstedspain/mt-svg-icons/lib/IconClose'

const Select = ({
  errorText,
  label,
  id,
  value,
  items,
  placeholder,
  disabled,
  onChange,
  BASE_CLASS
}) => {
  const FORM_ICON_CLOSE_CLASS = `${BASE_CLASS}-iconSelectClose`
  const FORM_ICON_ARROW_CLASS = `${BASE_CLASS}-iconSelectArrow`
  return (
    <MoleculeSelectField
      iconCloseTag={<IconClose size={10} svgClass={FORM_ICON_CLOSE_CLASS} />}
      iconArrowDown={
        <IconAngleDown size={24} svgClass={FORM_ICON_ARROW_CLASS} />
      }
      errorText={errorText}
      label={label}
      id={id}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(_, {value}) => onChange(value)}
    >
      {items.map(({name}, i) => (
        <MoleculeSelectOption key={i} value={name}>
          {name}
        </MoleculeSelectOption>
      ))}
    </MoleculeSelectField>
  )
}

Select.displayName = 'Select'

Select.propTypes = {
  errorText: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.obj),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  BASE_CLASS: PropTypes.string
}

export default Select
