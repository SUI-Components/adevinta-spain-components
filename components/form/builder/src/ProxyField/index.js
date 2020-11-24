import {isValidElement} from 'react'
import PropTypes from 'prop-types'
import {field} from '../prop-types'

import {FIELDS} from '../Standard'

// fields
import TextField from '../Standard/Fields/Text'
import NumericField from '../Standard/Fields/Numeric'
import FieldSetField from '../Standard/Fields/FieldSet'
import PickerField from '../Standard/Fields/Picker'
import MultiPickerField from '../Standard/Fields/Multicheckbox'

const ProxyField = ({
  field,
  tabIndex,
  onChange,
  onBlur,
  fieldSize,
  errors,
  alerts,
  renderer
}) => {
  let Field
  switch (field.type) {
    case FIELDS.TEXT:
      Field = TextField({
        field,
        tabIndex,
        onChange,
        onBlur,
        errors,
        alerts,
        renderer
      })
      break

    case FIELDS.NUMERIC:
      Field = NumericField({
        field,
        tabIndex,
        onChange,
        onBlur,
        errors,
        alerts,
        renderer
      })
      break

    case FIELDS.FIELDSET:
      Field = FieldSetField({
        field,
        tabIndex,
        onChange,
        onBlur,
        errors,
        alerts,
        renderer
      })
      break

    case FIELDS.PICKER:
      Field = PickerField({
        field,
        tabIndex,
        onChange,
        onBlur,
        errors,
        alerts,
        renderer
      })
      break

    case FIELDS.MULTIPICKER:
      Field = MultiPickerField({
        field,
        tabIndex,
        onChange,
        onBlur,
        errors,
        alerts,
        renderer
      })
      break

    default: {
      const rendererResponse = renderer({
        id: field.id,
        innerProps: {
          field,
          tabIndex,
          onChange,
          onBlur,
          errors,
          alerts
        }
      })
      if (isValidElement(rendererResponse)) {
        Field = rendererResponse
      } else {
        Field = (
          <p>
            Unknown Field type <span>{field.type}</span>
          </p>
        )
      }
      break
    }
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
