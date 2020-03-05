/* eslint-disable react/prop-types */
import AtomPanel from '@s-ui/react-atom-panel'
import React from 'react'
import PropTypes from 'prop-types'
import SuiTagChip from '@s-ui/react-tag-chip'

const CardImageCover = ({
  media,
  title,
  text,
  tag,
  tagChip: TagChip,
  linkFactory: Link,
  url
}) => {
  const onClick = () => {
    if (url) window.location.href = url
  }
  const BASE_CLASS = 'sui-CardImageCover'
  const TITLE_CLASS = `${BASE_CLASS}-title`
  const LINK_CLASS = `${BASE_CLASS}-link`
  const INNER_CLASS = `${BASE_CLASS}-inner`
  const TEXT_CLASS = `${BASE_CLASS}-text`
  return (
    <div className={BASE_CLASS}>
      <AtomPanel src={media.src} resized>
        <div className={INNER_CLASS} onClick={onClick}>
          {tag && (
            <div>
              <TagChip
                rel={tag.rel}
                label={tag.text}
                link={tag.url}
                linkFactory={Link}
                className={tag.className}
              />
            </div>
          )}
          <h2 className={TITLE_CLASS}>
            <Link href={url} title={title} className={LINK_CLASS}>
              {title}
            </Link>
          </h2>
          <p className={TEXT_CLASS}>{text}</p>
        </div>
      </AtomPanel>
    </div>
  )
}

CardImageCover.displayName = 'CardImageCover'

CardImageCover.propTypes = {
  /**
   * URL for the main card link
   */
  url: PropTypes.string.isRequired,
  /**
   * Factory for the component that will hold the card lin
   */
  linkFactory: PropTypes.func,
  /**
   * Media object (now only image)
   */
  media: PropTypes.shape({
    /**
     * Alternative text for the image
     */
    alt: PropTypes.string,
    /**
     * Image source.
     */
    src: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Card title
   */
  title: PropTypes.string.isRequired,
  /**
   * Text text
   */
  text: PropTypes.string.isRequired,
  /**
   * Tag object
   */
  tag: PropTypes.shape({
    /**
     *  Custom tag class name
     */
    className: PropTypes.string,
    /**
     * Tag URL
     */
    url: PropTypes.string.isRequired,
    /**
     * Tag translated text
     */
    text: PropTypes.string.isRequired,
    /**
     * Tag type used to style it as desired
     */
    type: PropTypes.string,
    /**
     * Tag rel used to know if tag must be indexed
     */
    rel: PropTypes.string
  }),
  /**
   * Tag chip component
   */
  tagChip: PropTypes.func
}

CardImageCover.defaultProps = {
  tagChip: SuiTagChip,
  linkFactory: ({children, ...rest}) => <a {...rest}>{children}</a>
}

export default CardImageCover
