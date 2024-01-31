import {isValidElement, memo} from 'react'

import PropTypes from 'prop-types'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'
import MoleculeField from '@s-ui/react-molecule-field'

import IconCheck from '../Icons/IconCheck'
import {createComponentMemo, field} from '../prop-types'

const Multipicker = ({multipicker, tabIndex, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  const errorMessages = errors[multipicker.id]
  const alertMessages = alerts[multipicker.id]

  const onChangeCallback = e => {
    const targetId = e.target.id
    const checked = e.target.checked
    let newValue = []

    if (checked) {
      newValue = [...multipicker.value, targetId]
    } else {
      newValue = multipicker.value.filter(id => id !== targetId)
    }
    return onChange(multipicker.id, newValue)
  }

  const onFocusCallback = () => onFocus(multipicker.id)

  const onBlurCallback = () => onBlur(multipicker.id)

  const multipickerProps = {
    id: multipicker.id,
    label: multipicker.label,
    value: multipicker.value,
    checkedIcon: IconCheck,
    onChange: onChangeCallback,
    onFocus: onFocusCallback,
    onBlur: onBlurCallback,
    tabIndex,
    intermediate: false,
    ...(multipicker.disabled && {
      disabled: true
    }),
    ...(multipicker.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    })
  }

  if (multipickerProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: multipicker.id,
    innerProps: multipickerProps
  })

  // render custom component
  if (isValidElement(rendererResponse)) {
    return rendererResponse
  }

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Multipicker sui-FormBuilder-${multipickerProps.id || tabIndex}`}
    >
      <MoleculeField {...multipickerProps}>
        {multipicker.datalist.map(item => (
          <MoleculeCheckboxField
            {...multipickerProps}
            {...rendererResponse}
            key={item.value}
            label={item.text}
            id={item.value}
            checked={multipicker?.value?.some(id => id === item.value)}
          />
        ))}
      </MoleculeField>
    </div>
  )
}

Multipicker.displayName = 'Multipicker'
Multipicker.propTypes = {
  tabIndex: PropTypes.number,
  multipicker: field,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(Multipicker, createComponentMemo('multipicker'))
