import React, {useCallback} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../prop-types'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

import {FIELDS, DISPLAYS} from '../Standard'

// mapping between DSL standard and HTML input type attribute
const DISPLAY = {
  [DISPLAYS[FIELDS.TEXT].EMAIL]: 'email',
  [DISPLAYS[FIELDS.TEXT].PHONE]: 'tel',
  [DISPLAYS[FIELDS.TEXT].TEXT]: 'text',
  [DISPLAYS[FIELDS.TEXT].DEFAULT]: 'text'
}

const Input = ({
  input,
  tabIndex,
  onChange,
  onBlur,
  size,
  leftAddon,
  rightAddon,
  errors
}) => {
  const errorMessages = errors[input.id]
  const onChangeCallback = useCallback(
    evt => {
      return onChange(input.id, evt.target.value)
    },
    [input, onChange]
  )
  const onBlurCallback = () => onBlur(input.id)

  let nextProps = {}
  switch (input.type) {
    case FIELDS.TEXT: {
      nextProps = {type: DISPLAY[input.display] || 'text'} // this is the html input type (not the field type related to DSL form-builder)

      const constraints = input.constraints || []

      nextProps = constraints.reduce((acc, constraint) => {
        return {
          ...acc,
          ...(constraint?.property?.maxlength && {
            maxLength: constraint?.property?.maxlength
          }),
          ...(constraint?.property?.minlength && {
            minLength: constraint?.property?.minlength
          }),
          ...(constraint?.property?.notnull === '' && {
            required: true
          }),
          ...(constraint?.property?.pattern && {
            pattern: constraint?.property?.pattern
          })
        }
      }, nextProps)
      break
    }
    case FIELDS.NUMERIC: {
      nextProps = {
        type: 'number'
      } // this is the html type (not the field type related to DSL form-builder)
      const constraints = input.constraints || []
      nextProps = constraints.reduce((acc, constraint) => {
        return {
          ...acc,
          ...(constraint?.property?.max && {
            max: constraint?.property?.max
          }), // Que hacemos con el constraints[].message ?!
          ...(constraint?.property?.min && {
            min: constraint?.property?.min
          }),
          ...(constraint?.property?.notnull === '' && {
            required: constraint?.property?.notnull
          })
        }
      }, nextProps)
      break
    }
  }

  nextProps = {
    ...nextProps,
    ...(input.hidden && {
      hidden: true
    }),
    ...(input.disabled && {
      disabled: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    })
  }

  const inputProps = {
    id: input.id,
    name: input.id,
    label: input.label || '',
    tabIndex,
    placeholder: input.hint,
    helpText: input.help,
    value: input.value || '',
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    size,
    leftAddon,
    rightAddon,
    ...nextProps
  }

  if (!nextProps.type) {
    return <span>Unknown Input type {input.type}</span>
  }

  if (nextProps.hidden) {
    return null
  }

  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Input sui-FormBuilder-${inputProps.id}`}
    >
      <MoleculeInputField {...inputProps} />
    </div>
  )
}

Input.displayName = 'Input'
Input.propTypes = {
  input: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  leftAddon: PropTypes.string,
  rightAddon: PropTypes.string,
  errors: PropTypes.object
}

export default React.memo(Input, createComponentMemo('input'))
