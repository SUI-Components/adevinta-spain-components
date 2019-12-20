import React from 'react'

export default function IconClose({
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
      viewBox="0 0 64 64"
    >
      <path d="M60,62a2,2,0,0,1-1.41-.59L32,34.83,5.41,61.41a2,2,0,0,1-2.83-2.83L29.17,32,2.59,5.41A2,2,0,0,1,5.41,2.59L32,29.17,58.59,2.59a2,2,0,0,1,2.83,2.83L34.83,32,61.41,58.59A2,2,0,0,1,60,62Z" />
    </svg>
  )
}

IconClose.propTypes = {
  strokeColor: 'none',
  strokeWidth: 0,
  fillColor: '#777777',
  size: 24,
  svgClass: 'mt-Icon'
}
