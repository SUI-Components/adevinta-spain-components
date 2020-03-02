import React from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'

import ProxyField from '../ProxyField'

const baseClass = 'sui-FormBuilder'

const FieldSet = ({
  fieldset,
  tabIndex,
  onChange,
  onBlur,
  fieldSize,
  errors,
  alerts
}) => {
  const {fields = [], label} = fieldset

  if (fieldset.hidden) {
    return null
  }

  return (
    <fieldset className={`${baseClass}-FieldSet ${baseClass}-${fieldset.id}`}>
      {label && (
        <legend>
          <span>{label}</span>
        </legend>
      )}
      <div className={`${baseClass}-FieldSetContainer`}>
        {fields.map((field, index) => (
          <ProxyField
            onChange={onChange}
            onBlur={onBlur}
            key={field.id}
            field={field}
            tabIndex={tabIndex + index * 0.1}
            fieldSize={fieldSize}
            errors={errors}
            alerts={alerts}
          />
        ))}
      </div>
    </fieldset>
  )
}

FieldSet.displayName = 'FieldSet'
FieldSet.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  fieldset: field,
  tabIndex: PropTypes.number,
  fieldSize: PropTypes.string,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default FieldSet
