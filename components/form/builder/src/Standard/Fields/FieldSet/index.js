import PropTypes from 'prop-types'

import FieldSet from '../../../FieldSet'

const FieldSetField = ({
  field,
  tabIndex,
  onChange,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  return (
    <FieldSet
      fieldset={field}
      onChange={onChange}
      onBlur={onBlur}
      tabIndex={tabIndex}
      errors={errors}
      alerts={alerts}
      renderer={renderer}
    />
  )
}

FieldSetField.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default FieldSetField
