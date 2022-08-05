import PropTypes from 'prop-types'

import {field} from '../prop-types'
import ProxyField from '../ProxyField'

const baseClass = 'sui-FormBuilder-FieldSet'

const FieldSet = ({
  fieldset,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  fieldSize,
  errors,
  alerts,
  renderer
}) => {
  const {fields = [], label} = fieldset

  if (fieldset.hidden) {
    return null
  }

  return (
    <fieldset className={`${baseClass} ${baseClass}-${fieldset.id}`}>
      {label && (
        <legend>
          <span>{label}</span>
        </legend>
      )}
      <div className={`${baseClass}Container`}>
        {fields.map((field, index) => {
          const fieldTabIndex = field.tabIndex ?? tabIndex + index * 0.1
          return (
            <ProxyField
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              key={field.id}
              field={field}
              tabIndex={fieldTabIndex}
              fieldSize={fieldSize}
              errors={errors}
              alerts={alerts}
              renderer={renderer}
            />
          )
        })}
      </div>
    </fieldset>
  )
}

FieldSet.displayName = 'FieldSet'
FieldSet.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  fieldset: field,
  tabIndex: PropTypes.number,
  fieldSize: PropTypes.string,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default FieldSet
