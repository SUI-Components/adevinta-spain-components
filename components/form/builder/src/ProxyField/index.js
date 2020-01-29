import React from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'

import {FIELDS} from '../Standard'

// fields
import TextField from '../Standard/Fields/Text'
import NumericField from '../Standard/Fields/Numeric'
import FieldSetField from '../Standard/Fields/FieldSet'
import PickerField from '../Standard/Fields/Picker'

const ProxyField = ({field, tabIndex, onChange, fieldSize, errors}) => {
  let Field
  switch (field.type) {
    case FIELDS.TEXT:
      Field = TextField({field, tabIndex, onChange, errors})
      break

    case FIELDS.NUMERIC:
      Field = NumericField({field, tabIndex, onChange, errors})
      break

    case FIELDS.FIELDSET:
      Field = FieldSetField({field, tabIndex, onChange, errors})
      break

    case FIELDS.PICKER:
      Field = PickerField({field, tabIndex, onChange, errors})
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
  tabIndex: PropTypes.number,
  field,
  fieldSize: PropTypes.string,
  errors: PropTypes.object
}

export default ProxyField
