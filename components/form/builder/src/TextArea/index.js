import React, {useCallback} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../prop-types'

import MoleculeTextAreaField from '@s-ui/react-molecule-textarea-field'

const TextArea = ({
  textArea,
  tabIndex,
  onChange,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  const errorMessages = errors[textArea.id]
  const alertMessages = alerts[textArea.id]

  const onChangeCallback = useCallback(
    evt => {
      return onChange(textArea.id, evt.target.value)
    },
    [onChange, textArea]
  )

  const onBlurCallback = () => onBlur(textArea.id)

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
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    })
  }

  const textAreaProps = {
    placeholder: textArea.hint,
    id: textArea.id,
    name: textArea.id,
    label: textArea.label || '',
    help: textArea.help,
    tabIndex,
    value: textArea.value || '',
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    ...nextProps
  }

  if (nextProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: textArea.id,
    innerProps: textAreaProps
  })

  // render custom component
  if (React.isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-TextArea sui-FormBuilder-${textAreaProps.id}`}
    >
      <MoleculeTextAreaField {...textAreaProps} {...rendererResponse} />
    </div>
  )
}

TextArea.displayName = 'TextArea'
TextArea.propTypes = {
  textArea: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default React.memo(TextArea, createComponentMemo('textArea'))
