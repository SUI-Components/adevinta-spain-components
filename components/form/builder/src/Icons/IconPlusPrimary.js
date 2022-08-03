import {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M11 13H6.51a1 1 0 110-2H11V6.52a1 1 0 012 0V11h4.49a1 1 0 010 2H13v4.49a1 1 0 01-2 0z"
    />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
