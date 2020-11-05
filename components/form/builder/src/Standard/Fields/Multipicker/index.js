import React from 'react'
import PropTypes from 'prop-types'

import Multipicker from '../../../MultiPicker'

const MultipickerField = ({
  field,
  tabIndex,
  onChange,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  return (
    <Multipicker
      multipicker={field}
      onChange={onChange}
      onBlur={onBlur}
      tabIndex={tabIndex}
      errors={errors}
      alerts={alerts}
      renderer={renderer}
    />
  )
}

MultipickerField.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default MultipickerField
