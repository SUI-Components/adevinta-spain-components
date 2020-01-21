import React from 'react'
import PropTypes from 'prop-types'

import Input from '../../../Input'
import TextArea from '../../../TextArea'

import {FIELDS, DISPLAYS} from '../../index'

const TextField = ({field, tabIndex, onChange, errors}) => {
  if (field.display === DISPLAYS[FIELDS.TEXT].MULTILINE)
    return (
      <TextArea
        textArea={field}
        onChange={onChange}
        tabIndex={tabIndex}
        errors={errors}
      />
    )
  return (
    <Input
      input={field}
      onChange={onChange}
      tabIndex={tabIndex}
      errors={errors}
    />
  )
}

TextField.propTypes = {
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object
}

export default TextField
