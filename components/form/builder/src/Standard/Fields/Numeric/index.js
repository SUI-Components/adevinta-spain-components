import PropTypes from 'prop-types'

import Input from '../../../Input'
import {DISPLAYS, FIELDS} from '../../index'

const NumericField = ({
  field,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  /* TODO: add the possibility to customize rightAddon in the DSL */
  if (field.display === DISPLAYS[FIELDS.NUMERIC].MONEY) {
    return (
      <Input
        input={field}
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
      <Input
        input={field}
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

NumericField.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default NumericField
