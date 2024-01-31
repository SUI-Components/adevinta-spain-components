import PropTypes from 'prop-types'

import {field} from '../prop-types'
import {DISPLAYS, FIELDS} from '../Standard'
import AutosuggestSelect from './Autosuggest'
import DefaultSelect from './Default'

const Select = ({select, onChange, onFocus, onBlur, tabIndex, size, errors, alerts, renderer}) => {
  let Field
  switch (select.display) {
    case DISPLAYS[FIELDS.PICKER].AUTOCOMPLETE:
      Field = (
        <AutosuggestSelect
          select={select}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          tabIndex={tabIndex}
          size={size}
          errors={errors}
          alerts={alerts}
          renderer={renderer}
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
          onFocus={onFocus}
          onBlur={onBlur}
          tabIndex={tabIndex}
          size={size}
          errors={errors}
          alerts={alerts}
          renderer={renderer}
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
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default Select
