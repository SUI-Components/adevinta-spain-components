/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import AtomImage from '@s-ui/react-atom-image'
import Chevronright from '@s-ui/react-icons/lib/Chevronright'

const HEADING_TAGS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p'
}

const CardArrow = ({media, text, icon, linkFactory: Link, link}) => {
  /**
   * If there is no Icon prop, set one by default
   */
  const Icon = icon || Chevronright

  const {headingTag: Heading = HEADING_TAGS.h3} = text

  return (
    <div className="sui-CardArrow">
      <Link className="sui-CardArrow-link" href={link}>
        {media && (
          <div className="sui-CardArrow-img">
            <AtomImage src={media.src} alt={media.alt} />
          </div>
        )}
        <div className="sui-CardArrow-inner">
          <Heading className="sui-CardArrow-innerTitle">{text.title}</Heading>
          {text.description && <p className="sui-CardArrow-innerDescription">{text.description}</p>}
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
    description: PropTypes.string,
    headingTag: PropTypes.oneOf(Object.keys(HEADING_TAGS))
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

export {HEADING_TAGS as cardArrowHeadingTags}
export default CardArrow
