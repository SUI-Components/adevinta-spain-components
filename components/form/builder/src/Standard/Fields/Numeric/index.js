import React from 'react'
import PropTypes from 'prop-types'

import Input from '../../../Input'

import {FIELDS, DISPLAYS} from '../../index'

const NumericField = ({field, tabIndex, onChange, onBlur, errors, alerts}) => {
  /* TODO: add the possibility to customize rightAddon in the DSL */
  if (field.display === DISPLAYS[FIELDS.NUMERIC].MONEY) {
    return (
      <Input
        input={field}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={tabIndex}
        rightAddon="€"
        errors={errors}
        alerts={alerts}
      />
    )
  } else {
    return (
      <Input
        input={field}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
      />
    )
  }
}

NumericField.propTypes = {
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default NumericField
