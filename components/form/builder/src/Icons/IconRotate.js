import {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 10H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2zm0 2v8H4v-8zm.26-9.61a1 1 0 01-.08 1.32l-.1.09-.25.2A11 11 0 0122 15a1 1 0 01-2 0 9 9 0 00-8.3-9l.3.27a1 1 0 01.15 1.31l-.08.1a1 1 0 01-1.31.16l-.1-.08-2.33-2.09a1 1 0 010-1.46l.09-.08 2.47-1.92a1 1 0 011.37.18z"
    />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
