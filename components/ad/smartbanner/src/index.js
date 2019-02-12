import PropTypes from 'prop-types'
import React from 'react'
import IconCloseDefault from '@schibstedspain/sui-svgiconset/lib/X'
import cx from 'classnames'

import RatingStar from './RatingStar'

function AdSmartbanner({
  buttonText,
  customRatingIcons,
  icon: IconClose,
  imageUrl,
  onClick,
  onClose,
  ratingMax,
  ratingValue,
  staticPosition,
  text,
  title
}) {
  const className = cx('sui-AdSmartbanner', {
    'is-static': staticPosition
  })

  return (
    <div className={className}>
      <button className="sui-AdSmartbanner-buttonClose" onClick={onClose}>
        <IconClose svgClass="sui-AdSmartbanner-buttonCloseIcon" />
      </button>
      <div className="sui-AdSmartbanner-primary">
        <img alt="logo" src={imageUrl} className="sui-AdSmartbanner-logo" />
      </div>
      <div className="sui-AdSmartbanner-secondary">
        <h3 className="sui-AdSmartbanner-title">{title}</h3>
        <p className="sui-AdSmartbanner-text">{text}</p>
        {ratingValue !== null && (
          <RatingStar
            ratingValue={ratingValue}
            ratingMax={ratingMax}
            icons={customRatingIcons}
          />
        )}
      </div>
      <button className="sui-AdSmartbanner-buttonInstall" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  )
}

AdSmartbanner.propTypes = {
  buttonText: PropTypes.string.isRequired,
  customRatingIcons: PropTypes.object,
  icon: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  ratingMax: PropTypes.number,
  ratingValue: PropTypes.number,
  staticPosition: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

AdSmartbanner.defaultProps = {
  icon: IconCloseDefault,
  ratingValue: null,
  staticPosition: false
}

AdSmartbanner.displayName = 'AdSmartbanner'

export default AdSmartbanner
