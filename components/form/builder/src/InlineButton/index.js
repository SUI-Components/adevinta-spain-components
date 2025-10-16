import {isValidElement, memo, useCallback} from 'react'

import PropTypes from 'prop-types'

import AtomButton, {atomButtonDesigns} from '@s-ui/react-atom-button'
import MoleculeButtonGroupField from '@s-ui/react-molecule-button-group-field'

import {createComponentMemo, field} from '../prop-types/index.js'

const InlineButton = ({inlineButton, tabIndex, onChange, errors, alerts, renderer}) => {
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

  const errorText = errorMessages?.length
    ? errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    : ''

  const alertText = alertMessages?.length
    ? alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    : ''

  const inlineButtonProps = {
    id: inlineButton.id,
    label: inlineButton.label,
    tabIndex,
    value: inlineButton.value || '',
    onChange: onChangeCallback,
    ...(inlineButton.disabled && {disabled: true}),
    ...(inlineButton.hidden && {hidden: true}),
    ...(!!errorMessages && {errorText}),
    ...(!!alertMessages && {alertText})
  }

  if (inlineButtonProps.hidden) {
    return null
  }

  const {selectedIcon: SelectedIcon, ...rendererResponse} =
    renderer({
      id: inlineButton.id,
      innerProps: {...inlineButtonProps, datalist, display: inlineButton.display}
    }) || {}

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-InlineButton sui-FormBuilder-${
        inlineButtonProps.id || tabIndex
      }`}
      role="radiogroup"
    >
      <MoleculeButtonGroupField {...inlineButtonProps} {...rendererResponse}>
        {rendererResponse?.children ||
          datalist.map((button, index) => (
            <AtomButton
              aria-checked={button.value === inlineButton.value}
              aria-label={button.ariaLabel ?? button.text}
              design={button.value === inlineButton.value ? atomButtonDesigns.SOLID : atomButtonDesigns.OUTLINE}
              disabled={button.disabled}
              id={button.id ?? `${inlineButton.id}-${button.value}`}
              key={button.text}
              leftIcon={rendererResponse?.datalist?.[index]?.leftIcon}
              onClick={() => onClickHandler(button.value)}
              role="radio"
              type="button"
              {...(button.value === inlineButton.value && SelectedIcon && {leftIcon: SelectedIcon})}
            >
              {button.text}
            </AtomButton>
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

export default memo(InlineButton, createComponentMemo('inlineButton'))
