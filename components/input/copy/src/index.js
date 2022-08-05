import React, {useState} from 'react'

import PropTypes from 'prop-types'

import AtomButton from '@s-ui/react-atom-button'
import AtomInput from '@s-ui/react-atom-input'
import {useCopyToClipboard} from '@s-ui/react-hooks'

const baseClass = 'sui-InputCopy'

export default function InputCopy({
  buttonProps = {},
  buttonText = 'Copy',
  buttonTextAfterCopied = 'Copied',
  isCopied: isCopiedFromProps = false,
  labelText,
  onCopy = () => {},
  textToCopy,
  timeoutReactivateButton
}) {
  const [isCopied, setIsCopied] = useState(isCopiedFromProps)
  const [, copyToClipboard] = useCopyToClipboard()

  const handleCopy = (event, onClick = () => {}) => {
    copyToClipboard(textToCopy)
    setIsCopied(true)

    onClick(event)
    onCopy(event)

    timeoutReactivateButton &&
      window.setTimeout(() => {
        setIsCopied(false)
      }, timeoutReactivateButton)
  }

  const copyButtonProps = isCopied
    ? {
        children: buttonTextAfterCopied,
        color: 'success',
        design: 'outline',
        ...buttonProps
      }
    : {
        children: buttonText,
        design: 'outline',
        ...buttonProps,
        onClick: event => handleCopy(event, buttonProps.onClick)
      }

  return (
    <div className={baseClass}>
      {labelText && <label className={`${baseClass}-label`}>{labelText}</label>}
      <AtomInput
        button={
          <AtomButton className={`${baseClass}-button`} {...copyButtonProps} />
        }
        disabled
        value={textToCopy}
      />
    </div>
  )
}

InputCopy.displayName = 'InputCopy'
InputCopy.propTypes = {
  buttonProps: PropTypes.object,
  buttonText: PropTypes.string,
  buttonTextAfterCopied: PropTypes.string,
  isCopied: PropTypes.bool,
  labelText: PropTypes.string,
  onCopy: PropTypes.func,
  textToCopy: PropTypes.string,
  timeoutReactivateButton: PropTypes.string
}
