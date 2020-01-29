import React from 'react'

import PropTypes from 'prop-types'
import {field} from '../prop-types'

import {FIELDS, DISPLAYS} from '../Standard'

import DefaultSelect from './Default'
import AutosuggestSelect from './Autosuggest'

const Select = ({select, onChange, tabIndex, size, errors}) => {
  let Field
  switch (select.display) {
    case DISPLAYS[FIELDS.PICKER].AUTOCOMPLETE:
      Field = (
        <AutosuggestSelect
          select={select}
          onChange={onChange}
          tabIndex={tabIndex}
          size={size}
          errors={errors}
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
          tabIndex={tabIndex}
          size={size}
          errors={errors}
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
  errors: PropTypes.object
}

export default Select
