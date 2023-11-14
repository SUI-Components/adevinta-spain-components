import PropTypes from 'prop-types'

import {BASE_CLASS} from '../../config.js'
import HelpContent from '../Info/HelpContent.js'

const Form = ({children, icons, title}) => {
  return (
    <>
      <div className={`${BASE_CLASS}-form`}>
        <div className={`${BASE_CLASS}-formHeader`}>
          <h1 className={`${BASE_CLASS}-formHeaderTitle`}>{title}</h1>
        </div>
        <div className={`${BASE_CLASS}-formContent`}>{children}</div>
      </div>
      <HelpContent icons={icons} />
    </>
  )
}

Form.displayName = 'Form'
Form.propTypes = {
  children: PropTypes.node.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default Form
