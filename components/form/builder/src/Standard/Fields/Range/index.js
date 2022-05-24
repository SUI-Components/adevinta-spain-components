import PropTypes from 'prop-types'

import DefaultRange from '../../../Range/Default/index.js'

const RangeField = ({
  field,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
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
