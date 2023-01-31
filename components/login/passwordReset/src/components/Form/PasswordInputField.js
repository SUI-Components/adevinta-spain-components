import {useState} from 'react'

import PropTypes from 'prop-types'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

import {
  DEFAULT_EYE_CLOSED_OUTLINE,
  DEFAULT_EYE_OPEN_OUTLINE
} from './../../config.js'

const PasswordInputField = ({
  id,
  label,
  name,
  onChange,
  placeholder,
  value
}) => {
  const [fieldType, setFieldType] = useState('sui-password')

  return (
    <MoleculeInputField
      // errorText={errorText}
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      size="l"
      type={fieldType}
      rightIcon={
        fieldType === 'sui-password'
          ? DEFAULT_EYE_CLOSED_OUTLINE
          : DEFAULT_EYE_OPEN_OUTLINE
      }
      onClickRightIcon={() =>
        fieldType === 'sui-password'
          ? setFieldType('text')
          : setFieldType('sui-password')
      }
      pwHideLabel=""
      pwShowLabel=""
      value={value}
    />
  )
}

PasswordInputField.displayName = 'PasswordInputField'
PasswordInputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default PasswordInputField
