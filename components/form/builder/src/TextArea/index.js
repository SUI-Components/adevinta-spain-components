import React, {useCallback} from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'

import MoleculeTextAreaField from '@s-ui/react-molecule-textarea-field'

const TextArea = ({textArea, tabIndex, onChange, errors}) => {
  const errorMessages = errors[textArea.id]

  const onChangeCallback = useCallback(
    evt => {
      return onChange(textArea.id, evt.target.value)
    },
    [onChange, textArea]
  )

  let nextProps = {}

  // transform constraints to props
  const constraints = textArea.constraints || []
  nextProps = constraints.reduce((acc, constraint) => {
    return {
      ...acc,
      ...(constraint?.property?.maxlength && {
        maxChars: constraint?.property?.maxlength
      }),
      ...(constraint?.property?.maxlength && {
        maxLength: constraint?.property?.maxlength
      }),
      ...(constraint?.property?.minlength && {
        minLength: constraint?.property?.minlength
      }),
      ...(constraint?.property?.notnull === '' && {
        required: true
      })
    }
  }, nextProps)

  nextProps = {
    ...nextProps,
    ...(textArea.hidden && {
      hidden: true
    }),
    ...(textArea.disabled && {
      disabled: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    })
  }

  const textAreaProps = {
    placeholder: textArea.hint,
    id: textArea.id,
    name: textArea.id,
    label: textArea.label || '',
    tabIndex,
    value: textArea.value || '',
    onChange: onChangeCallback,
    ...nextProps
  }

  if (nextProps.hidden) {
    return null
  }

  return (
    <div
      className={`ma-FormBuilder-field ma-FormBuilder-TextArea ma-FormBuilder-${textAreaProps.id}`}
    >
      <MoleculeTextAreaField
        {...textAreaProps}
        textCharacters="caracteres"
        size="long"
      />
    </div>
  )
}

TextArea.displayName = 'TextArea'
TextArea.propTypes = {
  textArea: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  errors: PropTypes.object
}

export default TextArea
