import React from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../prop-types'
import MoleculeRadioButtonGroup from '@s-ui/react-molecule-radio-button-group'
import MoleculeRadioButtonField from '@s-ui/react-molecule-radio-button-field'

const Radio = ({radio, tabIndex, onChange, errors, alerts}) => {
  const errorMessages = errors[radio.id]
  const alertMessages = alerts[radio.id]

  const onChangeHandler = value => {
    return onChange(radio.id, value)
  }

  const radioProps = {
    id: radio.id,
    label: radio.label,
    tabIndex: tabIndex,
    value: radio.value,
    ...(radio.disabled && {
      disabled: true
    }),
    ...(radio.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    })
  }

  if (radioProps.hidden) {
    return null
  }

  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-Radio sui-FormBuilder-${radioProps.id ||
        tabIndex}`}
    >
      <MoleculeRadioButtonGroup
        onChange={(_, {value}) => {
          onChangeHandler(value)
        }}
        {...radioProps}
      >
        {radio?.datalist.map(button => (
          <MoleculeRadioButtonField
            id={button.value}
            key={button.value}
            value={button.value}
            label={button.text}
            helpText={button.hint}
          />
        ))}
      </MoleculeRadioButtonGroup>
    </div>
  )
}

Radio.displayName = 'Radio'
Radio.propTypes = {
  radio: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default React.memo(Radio, createComponentMemo('radio'))
