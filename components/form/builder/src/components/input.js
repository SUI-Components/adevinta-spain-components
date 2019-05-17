import React from 'react'
import PropTypes from 'prop-types'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

const Input = ({type, errorText, label, id, value, placeholder, onChange}) => (
  <MoleculeInputField
    type={type}
    errorText={errorText}
    label={label}
    id={id}
    value={value}
    placeholder={placeholder}
    onChange={(_, {value}) => onChange(value)}
  />
)

Input.displayName = 'Input'

Input.propTypes = {
  type: PropTypes.string,
  errorText: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
