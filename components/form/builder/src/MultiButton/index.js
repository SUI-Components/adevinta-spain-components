import {isValidElement, memo} from 'react'
import PropTypes from 'prop-types'
import AtomTag from '@s-ui/react-atom-tag'
import MoleculeField from '@s-ui/react-molecule-field'

import {field, createComponentMemo} from '../prop-types'

const MultiButton = ({
  alerts,
  errors,
  multiButton,
  onBlur,
  onChange,
  onFocus,
  renderer,
  tabIndex
}) => {
  const errorMessages = errors[multiButton.id]
  const alertMessages = alerts[multiButton.id]

  const onClickCallback = ({value, checked}) => {
    const newValue = checked
      ? multiButton.value?.filter(id => id !== value)
      : [...(multiButton.value || []), value]

    return onChange(multiButton.id, newValue)
  }

  const onFocusCallback = () => onFocus(multiButton.id)

  const onBlurCallback = () => onBlur(multiButton.id)

  const multiButtonProps = {
    id: multiButton.id,
    label: multiButton.label,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    tabIndex: tabIndex,
    value: multiButton.value,
    ...(multiButton.disabled && {
      disabled: true
    }),
    ...(multiButton.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    })
  }

  if (multiButtonProps.hidden) return null

  const rendererResponse = renderer({
    id: multiButton.id,
    innerProps: multiButtonProps
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-MultiButton sui-FormBuilder-${
        multiButtonProps.id || tabIndex
      }`}
    >
      <MoleculeField {...multiButtonProps}>
        <div className="sui-FormBuilder-MultiButton-itemList">
          {multiButton.datalist.map(({value, text}) => {
            const checked = multiButton.value?.some(id => id === value)

            return (
              <AtomTag
                {...multiButtonProps}
                {...rendererResponse}
                key={value}
                onClick={() => onClickCallback({value, checked})}
                design={checked ? 'solid' : 'outline'}
                label={text}
                id={value}
              />
            )
          })}
        </div>
      </MoleculeField>
    </div>
  )
}

MultiButton.displayName = 'MultiButton'

MultiButton.propTypes = {
  alerts: PropTypes.object,
  errors: PropTypes.object,
  multiButton: field,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  renderer: PropTypes.func,
  tabIndex: PropTypes.number
}

export default memo(MultiButton, createComponentMemo('multiButton'))
