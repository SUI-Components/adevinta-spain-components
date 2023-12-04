import PropTypes from 'prop-types'

import Checkbox from '../../../Checkbox/index.js'
import InlineButton from '../../../InlineButton/index.js'
import PickerSlider from '../../../PickerSlider/index.js'
import Radio from '../../../Radio/index.js'
import Select from '../../../Select/index.js'
import Stepper from '../../../Stepper/index.js'
import Switch from '../../../Switch/index.js'
import {DISPLAYS, FIELDS} from '../../index.js'

const PickerField = ({field, tabIndex, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  if (field.display === DISPLAYS[FIELDS.PICKER].SWITCH) {
    return (
      <Switch
        switchField={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  } else if (
    field.display === DISPLAYS[FIELDS.PICKER].AUTOCOMPLETE ||
    field.display === DISPLAYS[FIELDS.PICKER].DROPDOWN
  ) {
    return (
      <Select
        select={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].RADIO) {
    return (
      <Radio
        radio={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].CHECKBOX) {
    return (
      <Checkbox
        checkbox={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].BUTTON_INLINE) {
    return (
      <InlineButton
        inlineButton={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].STEPPER) {
    return (
      <Stepper
        stepper={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].SLIDER) {
    return (
      <PickerSlider
        slider={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  } else {
    // TODO: should be removed (backwards compatibility)
    return (
      <Select
        select={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  }
}

PickerField.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default PickerField
