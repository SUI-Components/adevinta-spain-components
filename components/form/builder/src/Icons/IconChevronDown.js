import React, {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M16.8 9.2c.4-.4 1-.3 1.4.1.4.4.3 1-.1 1.4l-5 4.5c-.4.3-1 .3-1.3 0l-5-4.5c-.4-.4-.4-1-.1-1.4.4-.4 1-.4 1.4-.1l4.3 3.9 4.4-3.9z" />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
