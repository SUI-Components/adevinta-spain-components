import {isValidElement} from 'react'

import PropTypes from 'prop-types'

import {field} from '../prop-types/index.js'
import FieldSetField from '../Standard/Fields/FieldSet/index.js'
import MultiPickerField from '../Standard/Fields/Multicheckbox/index.js'
import NumericField from '../Standard/Fields/Numeric/index.js'
import PickerField from '../Standard/Fields/Picker/index.js'
import RangeField from '../Standard/Fields/Range/index.js'
// fields
import TextField from '../Standard/Fields/Text/index.js'
import {FIELDS} from '../Standard/index.js'

const ProxyField = ({field, tabIndex, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  let Field
  switch (field.type) {
    case FIELDS.TEXT:
      Field = TextField({
        field,
        tabIndex,
        onChange,
        onFocus,
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
        onFocus,
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
        onFocus,
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
        onFocus,
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
        onFocus,
        onBlur,
        errors,
        alerts,
        renderer
      })
      break

    case FIELDS.RANGE:
      Field = RangeField({
        field,
        tabIndex,
        onChange,
        onFocus,
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
          onFocus,
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
  onFocus: PropTypes.func,
  tabIndex: PropTypes.number,
  field,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default ProxyField
