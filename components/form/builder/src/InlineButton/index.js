import React, {useCallback} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../prop-types'
import MoleculeButtonGroupField from '@s-ui/react-molecule-button-group-field'
import Button from '@s-ui/react-atom-button'

const InlineButton = ({
  inlineButton,
  tabIndex,
  onChange,
  errors,
  alerts,
  renderer
}) => {
  const errorMessages = errors[inlineButton.id]
  const alertMessages = alerts[inlineButton.id]
  const datalist = inlineButton.datalist

  const onClickHandler = value => {
    return onChange(inlineButton.id, value)
  }

  const onChangeCallback = useCallback(
    value => {
      return onChange(inlineButton.id, value)
    },
    [onChange, inlineButton]
  )

  const inlineButtonProps = {
    id: inlineButton.id,
    label: inlineButton.label,
    tabIndex: tabIndex,
    value: inlineButton.value || '',
    onChange: onChangeCallback,
    ...(inlineButton.disabled && {
      disabled: true
    }),
    ...(inlineButton.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    })
  }

  if (inlineButtonProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: inlineButton.id,
    innerProps: {...inlineButtonProps, datalist}
  })

  // render custom component
  if (React.isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-InlineButton sui-FormBuilder-${inlineButtonProps.id ||
        tabIndex}`}
    >
      <MoleculeButtonGroupField {...inlineButtonProps} {...rendererResponse}>
        {datalist.map(button => (
          <Button
            key={button.text}
            design={button.value === inlineButton.value ? 'solid' : 'outline'}
            onClick={() => onClickHandler(button.value)}
            isSubmit={false}
            isButton
          >
            {button.text}
          </Button>
        ))}
      </MoleculeButtonGroupField>
    </div>
  )
}

InlineButton.displayName = 'InlineButton'
InlineButton.propTypes = {
  inlineButton: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default React.memo(InlineButton, createComponentMemo('inlineButton'))
