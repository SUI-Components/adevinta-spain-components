import React from 'react'
import PropTypes from 'prop-types'

export default function TcfSecondLayerPurposeExpandedContent({
  baseClass,
  info
}) {
  return (
    <>
      <h4>{info.description}</h4>
      <p>{info.descriptionLegal}</p>
    </>
  )
}

TcfSecondLayerPurposeExpandedContent.propTypes = {
  baseClass: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired
}
