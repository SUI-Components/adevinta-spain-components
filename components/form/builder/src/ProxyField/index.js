import React from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'

import {FIELDS} from '../Standard'

// fields
import TextField from '../Standard/Fields/Text'
import NumericField from '../Standard/Fields/Numeric'
import FieldSetField from '../Standard/Fields/FieldSet'
import PickerField from '../Standard/Fields/Picker'

const ProxyField = ({
  field,
  tabIndex,
  onChange,
  onBlur,
  fieldSize,
  errors,
  alerts
}) => {
  let Field
  switch (field.type) {
    case FIELDS.TEXT:
      Field = TextField({field, tabIndex, onChange, onBlur, errors, alerts})
      break

    case FIELDS.NUMERIC:
      Field = NumericField({field, tabIndex, onChange, onBlur, errors, alerts})
      break

    case FIELDS.FIELDSET:
      Field = FieldSetField({field, tabIndex, onChange, onBlur, errors, alerts})
      break

    case FIELDS.PICKER:
      Field = PickerField({field, tabIndex, onChange, onBlur, errors, alerts})
      break

    default:
      Field = (
        <p>
          Unknown Field type <span>{field.type}</span>
        </p>
      )
  }

  return Field
}

ProxyField.displayName = 'ProxyField'
ProxyField.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field,
  fieldSize: PropTypes.string,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default ProxyField
