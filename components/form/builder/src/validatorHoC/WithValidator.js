import React from 'react'
import PropTypes from 'prop-types'

const getErrorText = ({empty, notAllowed}, value) => {
  if (empty && !value) return empty.text
  if (notAllowed) {
    const error = Object.keys(notAllowed).find(
      key => notAllowed[key] && value.match(notAllowed[key].pattern)
    )
    return error && notAllowed[error].text
  }
}

const WithValidator = BaseComponent => {
  const FormField = ({errors, value, field, onError, showErrors, ...rest}) => {
    const errorText = getErrorText(errors, value)
    onError({[field]: errorText})
    return (
      <BaseComponent
        {...rest}
        errorText={showErrors ? errorText : ''}
        value={value}
      />
    )
  }

  FormField.displayName = 'FormField'

  FormField.propTypes = {
    errors: PropTypes.Object,
    field: PropTypes.string,
    value: PropTypes.string,
    onError: PropTypes.func,
    showErrors: PropTypes.bool
  }
  return FormField
}

WithValidator.displayName = 'WithValidator'

WithValidator.propTypes = {
  BaseComponent: PropTypes.element
}

export default WithValidator
