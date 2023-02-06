import PropTypes from 'prop-types'

import {BASE_CLASS} from '../../config.js'

const ButtonWrapper = ({children}) => (
  <div className={`${BASE_CLASS}-formButton`}>{children}</div>
)

ButtonWrapper.displayName = 'ButtonWrapper'
ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ButtonWrapper
