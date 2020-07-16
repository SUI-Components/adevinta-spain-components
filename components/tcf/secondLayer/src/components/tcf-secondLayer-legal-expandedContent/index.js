import React from 'react'
import PropTypes from 'prop-types'

export default function TcfSecondLayerLegalExpandedContent({baseClass, info}) {
  return (
    <>
      {info.descriptionLegal.split('\n').map((element, index) => (
        <p
          key={index}
          className={element.includes('*') ? `${baseClass}-list` : ''}
        >
          {element.replace(/\*/g, '- ')}{' '}
        </p>
      ))}
    </>
  )
}

TcfSecondLayerLegalExpandedContent.propTypes = {
  baseClass: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired
}
