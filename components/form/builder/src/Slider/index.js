import {memo} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomSlider from '@s-ui/react-atom-slider'
import MoleculeField from '@s-ui/react-molecule-field'

import {createComponentMemo} from '../prop-types/index.js'

const Slider = ({slider, onChange, onFocus, onBlur, errors, alerts}) => {
  const {id, datalist} = slider
  const className = cx(
    'sui-FormBuilder-field',
    'sui-FormBuilder-Slider',
    `sui-FormBuilder-${id}`
  )
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

  return (
    <div className={className}>
      <MoleculeField
        name={id}
        label={slider.label}
        helpText={slider.help}
        errorText={errorMessages && errorMessages.join('\n')}
        alertText={alertMessages && alertMessages.join('\n')}
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
          marks={[formatter(min), formatter(max)]}
        />
      </MoleculeField>
    </div>
  )
}

Slider.displayName = 'Slider'
Slider.propTypes = {
  slider: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default memo(Slider, createComponentMemo('slider'))
