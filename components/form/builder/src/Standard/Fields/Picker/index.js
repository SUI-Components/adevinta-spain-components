import React from 'react'
import PropTypes from 'prop-types'

import Switch from '../../../Switch'
import Select from '../../../Select'
import Checkbox from '../../../Checkbox'
import InlineButton from '../../../InlineButton'

import {FIELDS, DISPLAYS} from '../../index'

const PickerField = ({field, tabIndex, onChange, errors}) => {
  if (field.display === DISPLAYS[FIELDS.PICKER].SWITCH) {
    return (
      <Switch
        switchField={field}
        onChange={onChange}
        tabIndex={tabIndex}
        errors={errors}
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
        tabIndex={tabIndex}
        errors={errors}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].RADIO) {
    return <p>radio button TODO</p>
  } else if (field.display === DISPLAYS[FIELDS.PICKER].CHECKBOX) {
    return (
      <Checkbox
        checkbox={field}
        onChange={onChange}
        tabIndex={tabIndex}
        errors={errors}
      />
    )
  } else if (field.display === DISPLAYS[FIELDS.PICKER].BUTTON_INLINE) {
    return (
      <InlineButton
        inlineButton={field}
        onChange={onChange}
        tabIndex={tabIndex}
        errors={errors}
      />
    )
  } else {
    // TODO: should be removed (backwards compatibility)
    return (
      <Select
        select={field}
        onChange={onChange}
        tabIndex={tabIndex}
        errors={errors}
      />
    )
  }
}

PickerField.propTypes = {
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object
}

export default PickerField
