import React, {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M18.5 6c.4-.4 1-.4 1.4 0s.4 1 0 1.4L9.7 17.7c-.4.4-1 .4-1.4 0l-4.5-4.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L9 15.6 18.5 6z" />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
