import PropTypes from 'prop-types'

const MultiField = ({
  field,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  const {fields} = field || {}

  const rendererResponse = renderer({
    id: field.id,
    display: field.display,
    innerProps: fields.map(props => ({
      ...props,
      tabIndex,
      onChange,
      onFocus,
      onBlur,
      errors,
      alerts
    }))
  })

  return rendererResponse
}

MultiField.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default MultiField
