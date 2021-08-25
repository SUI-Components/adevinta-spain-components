import PropTypes from 'prop-types'

import Multipicker from '../../../Multicheckbox'
import MultiButton from '../../../MultiButton'

import {FIELDS, DISPLAYS} from '../../index'

const MultipickerField = ({
  field,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  if (field.display === DISPLAYS[FIELDS.MULTIPICKER].BUTTON) {
    return (
      <MultiButton
        multiButton={field}
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
    return (
      <Multipicker
        multipicker={field}
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

export default MultipickerField
