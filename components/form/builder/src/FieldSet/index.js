import {isValidElement} from 'react'

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
  if (fieldset.hidden) {
    return null
  }

  const innerProps = fieldset.fields.map((props, index) => {
    const fieldTabIndex = field.tabIndex ?? tabIndex + index * 0.1
    return {
      ...props,
      tabIndex: fieldTabIndex,
      onChange,
      onFocus,
      onBlur,
      fieldSize,
      errors,
      alerts,
      renderer
    }
  })

  const rendererResponse = renderer({
    id: fieldset.id,
    name: fieldset.id,
    label: fieldset.label || '',
    fields: fieldset.fields,
    innerProps
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  const label = rendererResponse?.label || fieldset.label
  const icon = rendererResponse?.icon || fieldset.icon
  const fields = rendererResponse?.fields || fieldset.fields || []

  return (
    <fieldset className={`${baseClass} ${baseClass}-${fieldset.id}`}>
      {label && (
        <legend>
          {icon && <span>{icon}</span>}
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
