import PropTypes from 'prop-types'

import Input from '../../../Input/index.js'
import TextArea from '../../../TextArea/index.js'
import {DISPLAYS, FIELDS} from '../../index.js'

const TextField = ({field, tabIndex, onChange, onFocus, onBlur, errors, alerts, renderer}) => {
  if (field.display === DISPLAYS[FIELDS.TEXT].MULTILINE)
    return (
      <TextArea
        textArea={field}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        errors={errors}
        alerts={alerts}
        renderer={renderer}
      />
    )
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

TextField.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tabIndex: PropTypes.number,
  field: PropTypes.object,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default TextField
