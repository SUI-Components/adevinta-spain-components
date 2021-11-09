import PropTypes from 'prop-types'

import Multipicker from '../../../Multicheckbox'
import MultiButton from '../../../MultiButton'
import Select from '../../../Select/Default'

import {FIELDS, DISPLAYS} from '../../index'

export default function MultipickerField({
  alerts,
  errors,
  field,
  onBlur,
  onChange,
  onFocus,
  renderer,
  tabIndex
}) {
  switch (field.display) {
    case DISPLAYS[FIELDS.MULTIPICKER].BUTTON:
      return (
        <MultiButton
          alerts={alerts}
          errors={errors}
          multiButton={field}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          renderer={renderer}
          tabIndex={tabIndex}
        />
      )
    case DISPLAYS[FIELDS.MULTIPICKER].DROPDOWN:
      return (
        <Select
          alerts={alerts}
          errors={errors}
          multiselection
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          renderer={renderer}
          select={field}
          tabIndex={tabIndex}
        />
      )
    default:
      return (
        <Multipicker
          alerts={alerts}
          errors={errors}
          multipicker={field}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          renderer={renderer}
          tabIndex={tabIndex}
        />
      )
  }
}

MultipickerField.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}
