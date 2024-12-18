import PropTypes from 'prop-types'

import InlineButton from '../../../InlineButton/index.js'
import DefaultRange from '../../../Range/Default/index.js'
import {DISPLAYS, FIELDS} from '../../index.js'

const RangeField = ({field, tabIndex, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  if (field.display === DISPLAYS[FIELDS.RANGE].BUTTON_INLINE) {
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
  } else {
    return (
      <DefaultRange
        range={field}
        onChange={onChange}
        tabIndex={tabIndex}
        onFocus={onFocus}
        onBlur={onBlur}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
  }
}

RangeField.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default RangeField
