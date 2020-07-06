import React from 'react'
import PropTypes from 'prop-types'

export default function TcfSecondLayerIconAccordion({baseClass}) {
  return (
    <svg className={baseClass} width="32px" height="32px" viewBox="0 0 32 32">
      <path d="M30,9l1,1c1,1,1,2,0,2L17,25c-1,1-2,1-2,0 L2,12c-1-1-1-2,0-2l1-1c1-1,2-1,2,0L16,20L28,9 C28,8,29,8,30,9z" />
    </svg>
  )
}
TcfSecondLayerIconAccordion.propTypes = {
  baseClass: PropTypes.string
}
