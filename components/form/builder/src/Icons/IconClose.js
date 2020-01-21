import React, {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg className={className} viewBox="0 0 64 64">
    <path d="M60 62a2 2 0 0 1-1.41-.59L32 34.83 5.41 61.41a2 2 0 0 1-2.83-2.83L29.17 32 2.59 5.41a2 2 0 0 1 2.82-2.82L32 29.17 58.59 2.59a2 2 0 0 1 2.83 2.83L34.83 32l26.58 26.59A2 2 0 0 1 60 62z" />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
