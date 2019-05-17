import React from 'react'
import PropTypes from 'prop-types'

import MoleculeSelectField from '@s-ui/react-molecule-select-field'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

const IconCloseTag = () => <span>x</span>
const IconArrowDown = () => <span>▼</span>

const Select = ({
  errorText,
  label,
  id,
  value,
  items,
  placeholder,
  disabled,
  onChange
}) => (
  <MoleculeSelectField
    iconCloseTag={<IconCloseTag />}
    iconArrowDown={<IconArrowDown />}
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

Select.displayName = 'Select'

Select.propTypes = {
  errorText: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.obj),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

export default Select
