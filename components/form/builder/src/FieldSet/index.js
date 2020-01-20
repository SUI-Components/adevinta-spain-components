import React from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'

import ProxyField from '../ProxyField'

const baseClass = 'ma-FormBuilder'

const FieldSet = ({fieldset, tabIndex, onChange, fieldSize, errors}) => {
  const {fields = [], label} = fieldset
  return (
    <fieldset className={`${baseClass}-FieldSet`}>
      {label && (
        <legend>
          <span>{label}</span>
        </legend>
      )}
      <div className={`${baseClass}-FieldSetContainer`}>
        {fields.map((field, index) => (
          <ProxyField
            onChange={onChange}
            key={field.id}
            field={field}
            tabIndex={tabIndex + index * 0.1}
            fieldSize={fieldSize}
            errors={errors}
          />
        ))}
      </div>
    </fieldset>
  )
}

FieldSet.displayName = 'FieldSet'
FieldSet.propTypes = {
  onChange: PropTypes.func,
  fieldset: field,
  tabIndex: PropTypes.number,
  fieldSize: PropTypes.string,
  errors: PropTypes.object
}

export default FieldSet
