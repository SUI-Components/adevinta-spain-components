import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'

import Input from '../../../Input/index.js'
import TextArea from '../../../TextArea/index.js'
import {DISPLAYS, FIELDS} from '../../index.js'

const MultiField = ({
  field,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  errors,
  alerts,
  renderer
}) => {
  const {fields} = field || {}

  const rendererResponse = renderer({
    id: field.id,
    type: field.type,
    innerProps: fields.map(props => ({
      ...props,
      tabIndex,
      onChange,
      onFocus,
      onBlur,
      errors,
      alerts
    }))
  })

  return rendererResponse
}

MultiField.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default MultiField
