import React from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'

import {FIELDS, DISPLAYS} from '../Standard'

import DefaultSelect from './Default'
import AutosuggestSelect from './Autosuggest'

const Select = ({select, onChange, onBlur, tabIndex, size, errors, alerts}) => {
  let Field
  switch (select.display) {
    case DISPLAYS[FIELDS.PICKER].AUTOCOMPLETE:
      Field = (
        <AutosuggestSelect
          select={select}
          onChange={onChange}
          onBlur={onBlur}
          tabIndex={tabIndex}
          size={size}
          errors={errors}
          alerts={alerts}
        />
      )
      break
    case DISPLAYS[FIELDS.PICKER].DROPDOWN:
    default:
      // TODO: default case mantains backwards compatibility
      Field = (
        <DefaultSelect
          select={select}
          onChange={onChange}
          onBlur={onBlur}
          tabIndex={tabIndex}
          size={size}
          errors={errors}
          alerts={alerts}
        />
      )
  }

  return Field
}

Select.displayName = 'Select'
Select.propTypes = {
  select: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default Select
