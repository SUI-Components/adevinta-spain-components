import React from 'react'
import PropTypes from 'prop-types'

import Switch from '../../../Switch'
import Select from '../../../Select'
import Checkbox from '../../../Checkbox'
import InlineButton from '../../../InlineButton'

import {FIELDS, DISPLAYS} from '../../index'

const PickerField = ({field, tabIndex, onChange, onBlur, errors, alerts}) => {
  if (field.display === DISPLAYS[FIELDS.PICKER].SWITCH) {
    return (
      <Switch
        switchField={field}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
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
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].RADIO) {
    return <p>radio button TODO</p>
  } else if (field.display === DISPLAYS[FIELDS.PICKER].CHECKBOX) {
    return (
      <Checkbox
        checkbox={field}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].BUTTON_INLINE) {
    return (
      <InlineButton
        inlineButton={field}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
      />
    )
  } else {
    // TODO: should be removed (backwards compatibility)
    return (
      <Select
        select={field}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
      />
    )
  }
}

PickerField.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default PickerField
