import React from 'react'
import PropTypes from 'prop-types'

export default function IconAngleDown({
  size = 24,
  strokeColor = 'none',
  strokeWidth = 0,
  fillColor = '#777',
  svgClass = 'mt-Icon'
}) {
  const inlineStyling = {
    fill: fillColor,
    stroke: strokeColor,
    strokeWidth: strokeWidth
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={inlineStyling}
      className={svgClass}
      viewBox="0 0 24 24"
    >
      <path
        d="M12,16.6L3.8,8.4c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0L12,15l7.4-7.4c0.2-0.2,0.6-0.2,0.8,0
c0.2,0.2,0.2,0.6,0,0.8L12,16.6z"
      />
    </svg>
  )
}

IconAngleDown.propTypes = {
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  fillColor: PropTypes.string,
  size: PropTypes.number,
  svgClass: PropTypes.string
}
