import React, {useCallback} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../prop-types'
import MoleculeSwitch from '@s-ui/react-atom-switch'

const Switch = ({switchField, tabIndex, onChange, errors}) => {
  const errorMessages = errors[switchField.id]

  const onChangeCallback = useCallback(
    value => {
      return onChange(switchField.id, JSON.stringify(value))
    },
    [onChange, switchField]
  )
  const {id} = switchField

  const switchProps = {
    name: id,
    label: switchField.label,
    labelLeft: 'NOP',
    labelRight: 'ZIP',
    value: JSON.parse(switchField.value || 'false'),
    onToggle: onChangeCallback,
    type: 'single',
    ...(switchField.disabled && {
      disabled: true
    }),
    ...(switchField.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    })
  }

  if (switchProps.hidden) {
    return null
  }

  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Switch sui-FormBuilder-${switchProps.id ||
        tabIndex}`}
    >
      <MoleculeSwitch {...switchProps} />
    </div>
  )
}

Switch.displayName = 'Switch'
Switch.propTypes = {
  tabIndex: PropTypes.number,
  switchField: field,
  onChange: PropTypes.func,
  errors: PropTypes.objects
}

export default React.memo(Switch, createComponentMemo('switchField'))
