import React from 'react'
import PropTypes from 'prop-types'

import Input from '../../../Input'
import TextArea from '../../../TextArea'

import {FIELDS, DISPLAYS} from '../../index'

const TextField = ({field, tabIndex, onChange, onBlur, errors, alerts}) => {
  if (field.display === DISPLAYS[FIELDS.TEXT].MULTILINE)
    return (
      <TextArea
        textArea={field}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
      />
    )
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

TextField.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object
}

export default TextField
