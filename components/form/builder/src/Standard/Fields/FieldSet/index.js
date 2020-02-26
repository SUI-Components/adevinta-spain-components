import React from 'react'
import PropTypes from 'prop-types'

import FieldSet from '../../../FieldSet'

const FieldSetField = ({field, tabIndex, onChange, onBlur, errors, alerts}) => {
  return (
    <FieldSet
      fieldset={field}
      onChange={onChange}
      onBlur={onBlur}
      tabIndex={tabIndex}
      errors={errors}
      alerts={alerts}
    />
  )
}

FieldSetField.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default FieldSetField
