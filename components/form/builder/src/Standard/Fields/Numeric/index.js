import React from 'react'
import PropTypes from 'prop-types'

import Input from '../../../Input'

import {FIELDS, DISPLAYS} from '../../index'

const NumericField = ({field, tabIndex, onChange, errors}) => {
  /* TODO: add the possibility to customize rightAddon in the DSL */
  if (field.display === DISPLAYS[FIELDS.NUMERIC].MONEY) {
    return (
      <Input
        input={field}
        onChange={onChange}
        tabIndex={tabIndex}
        rightAddon="€"
        errors={errors}
      />
    )
  } else {
    return (
      <Input
        input={field}
        onChange={onChange}
        tabIndex={tabIndex}
        errors={errors}
      />
    )
  }
}

NumericField.propTypes = {
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object
}

export default NumericField
