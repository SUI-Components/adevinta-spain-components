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
  const FormField = ({errors, showErrors, value, ...rest}) => {
    const errorText = (showErrors || value) && getErrorText(errors, value)
    return <BaseComponent {...rest} errorText={errorText} value={value} />
  }

  FormField.displayName = 'FormField'

  FormField.propTypes = {
    type: PropTypes.string,
    errors: PropTypes.Object,
    showErrors: PropTypes.bool,
    value: PropTypes.string
  }
  return FormField
}

WithValidator.displayName = 'WithValidator'

WithValidator.propTypes = {
  BaseComponent: PropTypes.element
}

export default WithValidator
