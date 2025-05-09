import {isValidElement, memo} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomSlider from '@s-ui/react-atom-slider'
import MoleculeField from '@s-ui/react-molecule-field'

import {createComponentMemo} from '../prop-types/index.js'

const PickerSlider = ({slider, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  const {id, datalist} = slider
  const className = cx('sui-FormBuilder-field', 'sui-FormBuilder-PickerSlider', `sui-FormBuilder-${id}`)
  const min = 0
  const max = datalist.length - 1
  const value = datalist.findIndex(data => data.value === slider.value)
  const errorMessages = errors[id]
  const alertMessages = alerts[id]

  const formatter = index => {
    return datalist[index].text
  }

  const handleChange = (event, {value: index}) => {
    onChange(id, datalist[index].value)
  }

  const handleBlur = () =>
    onBlur(id, {
      type: slider.type,
      display: slider.display,
      label: slider.label
    })

  const handleFocus = () =>
    onFocus(id, {
      type: slider.type,
      display: slider.display,
      label: slider.label
    })

  if (slider.hidden) {
    return null
  }

  const errorText = errorMessages?.length
    ? errorMessages.map((errorMessage, index) => <p key={`${errorMessage}-${index}`}>{errorMessage}</p>)
    : ''

  const alertText = alertMessages?.length
    ? alertMessages.map((alertMessage, index) => <p key={`${alertMessage}-${index}`}>{alertMessage}</p>)
    : ''

  const helpText = slider.help && <p>{slider.help}</p>
  const marks = [formatter(min), formatter(max)]

  const response = renderer({
    id: slider.id,
    innerProps: {
      ...slider,
      helpText,
      errorText,
      alertText,
      value,
      min,
      max,
      marks,
      valueLabelFormatter: formatter,
      onChange: handleChange,
      onBlur: handleBlur,
      onFocus: handleFocus
    }
  })

  if (isValidElement(response)) return response

  return (
    <div className={className}>
      <MoleculeField
        name={slider.name || slider.id}
        label={slider.label}
        helpText={helpText}
        errorText={errorText}
        alertText={alertText}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        <AtomSlider
          id={id}
          value={value}
          min={min}
          max={max}
          valueLabelFormatter={formatter}
          valueLabel={true}
          hideTooltip={true}
          marks={marks}
          {...response}
        />
      </MoleculeField>
    </div>
  )
}

PickerSlider.displayName = 'PickerSlider'
PickerSlider.propTypes = {
  slider: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func.isRequired
}

export default memo(PickerSlider, createComponentMemo('slider'))
