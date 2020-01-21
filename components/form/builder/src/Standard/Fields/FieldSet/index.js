import React from 'react'
import PropTypes from 'prop-types'

import FieldSet from '../../../FieldSet'

const FieldSetField = ({field, tabIndex, onChange, errors}) => {
  return (
    <FieldSet
      fieldset={field}
      onChange={onChange}
      tabIndex={tabIndex}
      errors={errors}
    />
  )
}

FieldSetField.propTypes = {
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object
}

export default FieldSetField
