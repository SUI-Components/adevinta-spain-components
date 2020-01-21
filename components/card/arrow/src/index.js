/* eslint-disable react/prop-types */

import React from 'react'
import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'

import Chevronright from '@schibstedspain/sui-svgiconset/lib/Chevronright'

const CardArrow = ({media, text, icon, linkFactory: Link, link}) => {
  /**
   * If there is no Icon prop, set one by default
   */
  const Icon = icon || Chevronright
  return (
    <div className="sui-CardArrow">
      <Link className="sui-CardArrow-link" href={link}>
        {media && (
          <div className="sui-CardArrow-img">
            <AtomImage src={media.src} alt={media.alt} />
          </div>
        )}
        <div className="sui-CardArrow-inner">
          <h3 className="sui-CardArrow-innerTitle">{text.title}</h3>
          {text.description && (
            <p className="sui-CardArrow-innerDescription">{text.description}</p>
          )}
        </div>
        <Icon svgClass="sui-CardArrow-icon" className="sui-CardArrow-icon" />
      </Link>
    </div>
  )
}

CardArrow.displayName = 'CardArrow'

CardArrow.propTypes = {
  /**
   * Media src/alt props
   */
  media: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  /**
   * Text title/description props
   */
  text: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  /**
   * Icon optional prop
   */
  icon: PropTypes.func,
  /**
   * Factory for the component that will hold the card link.
   */
  linkFactory: PropTypes.func,
  /**
   * URL for the link that wraps the whole card.
   */
  link: PropTypes.string.isRequired
}

CardArrow.defaultProps = {
  linkFactory: ({children, ...rest}) => <a {...rest}>{children}</a>
}

export default CardArrow
