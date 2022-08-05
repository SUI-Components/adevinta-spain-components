import {isValidElement, memo, useCallback} from 'react'

import PropTypes from 'prop-types'

import MoleculeInputField from '@s-ui/react-molecule-input-field'

import {createComponentMemo, field} from '../prop-types'
import {DISPLAYS, FIELDS} from '../Standard'

// mapping between DSL standard and HTML input type attribute
const DISPLAY = {
  [DISPLAYS[FIELDS.TEXT].EMAIL]: 'email',
  [DISPLAYS[FIELDS.TEXT].PHONE]: 'tel',
  [DISPLAYS[FIELDS.TEXT].NUMERIC]: 'text',
  [DISPLAYS[FIELDS.TEXT].TEXT]: 'text',
  [DISPLAYS[FIELDS.TEXT].DEFAULT]: 'text'
}

const INPUT_MODES = {
  DECIMAL: 'decimal'
}

const Input = ({
  input,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  size,
  leftAddon,
  rightAddon,
  errors,
  alerts,
  renderer
}) => {
  const errorMessages = errors[input.id]
  const alertMessages = alerts[input.id]

  const onChangeCallback = useCallback(
    evt => {
      return onChange(input.id, evt.target.value)
    },
    [input, onChange]
  )

  const onFocusCallback = () => onFocus(input.id)

  const onBlurCallback = () => onBlur(input.id)

  let nextProps = {}
  switch (input.type) {
    case FIELDS.TEXT: {
      nextProps = {type: DISPLAY[input.display] || 'text'} // this is the html input type (not the field type related to DSL form-builder)

      if (input.display === DISPLAYS[FIELDS.TEXT].NUMERIC) {
        nextProps.inputMode = INPUT_MODES.DECIMAL
      }

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
            required: true
          }),
          ...(constraint?.property?.pattern && {
            pattern: constraint?.property?.pattern
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
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
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
    onFocus: onFocusCallback,
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

  const rendererResponse = renderer({id: input.id, innerProps: inputProps})

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Input sui-FormBuilder-${inputProps.id}`}
    >
      <MoleculeInputField {...inputProps} {...rendererResponse} />
    </div>
  )
}

Input.displayName = 'Input'
Input.propTypes = {
  input: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  leftAddon: PropTypes.string,
  rightAddon: PropTypes.string,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(Input, createComponentMemo('input'))
