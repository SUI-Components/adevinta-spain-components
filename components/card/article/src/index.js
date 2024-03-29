/* eslint-disable react/prop-types */
import cx from 'classnames'
import PropTypes from 'prop-types'

import SuiAtomTag from '@s-ui/react-atom-tag'
import Commentsquare from '@s-ui/react-icons/lib/Commentsquare'
import MediaPlay from '@s-ui/react-icons/lib/Mediaplay'
import ImageLazyLoad from '@s-ui/react-image-lazy-load'

const cardArticleMediaClassName = video =>
  cx('sui-CardArticle-media', {
    'sui-CardArticle-media--video': video
  })

const CardArticleMedia = ({src, alt = ''}) => {
  return <img src={src} alt={alt} />
}

const _renderComments = ({icon, url, count}, Link) => {
  const IconComment = icon || Commentsquare

  return (
    <div className="sui-CardArticle-commentsWrap">
      <Link href={url} className="sui-CardArticle-comments" title={count}>
        <IconComment svgClass="sui-CardArticle-commentsIcon" />
        {count}
      </Link>
    </div>
  )
}

/**
 * Article card containing a media object, title, description and some editorial
 * information (tag and comments).
 */
export default function CardArticle({
  linkFactory: Link,
  link,
  media,
  title,
  description,
  tag,
  tagChip: TagChip,
  comments,
  lazyLoad,
  featured,
  video
}) {
  const cardInfoClassName = cx('sui-CardArticle-info', {
    'is-featured': featured
  })
  const MediaIcon = media.icon || MediaPlay
  return (
    <div className="sui-CardArticle">
      <Link href={link} className="sui-CardArticle-link" title={title}>
        <div className={cardArticleMediaClassName(video)}>
          {video && <MediaIcon svgClass="sui-CardArticle-mediaIcon" />}
          {lazyLoad ? <ImageLazyLoad {...lazyLoad} {...media} /> : <CardArticleMedia {...media} video={video} />}
        </div>
      </Link>
      <div className={cardInfoClassName}>
        <div className="sui-CardArticle-infoInner">
          {tag && <TagChip rel={tag.rel} label={tag.text} href={tag.url} linkFactory={Link} type={tag.type} />}
          {comments && _renderComments(comments, Link)}
        </div>
      </div>
      <Link href={link} className="sui-CardArticle-link" title={title}>
        <div className="sui-CardArticle-content">
          {title && <header className="sui-CardArticle-title">{title}</header>}
          <div className="sui-CardArticle-description">{description}</div>
        </div>
      </Link>
    </div>
  )
}

CardArticle.propTypes = {
  /**
   * URL for the link that wraps the whole card.
   */
  link: PropTypes.string.isRequired,
  /**
   * Factory for the component that will hold the card link.
   */
  linkFactory: PropTypes.func,
  /**
   * Media object (now only image).
   */
  media: PropTypes.shape({
    /**
     * Alternative text for the image.
     */
    alt: PropTypes.string,
    /**
     * Image source.
     */
    src: PropTypes.string.isRequired,
    /**
     * media icon
     */
    icon: PropTypes.func
  }),
  /**
   * Optional card title.
   */
  title: PropTypes.string,
  /**
   * Text description.
   */
  description: PropTypes.string.isRequired,
  /**
   * Editorial tag object.
   */
  tag: PropTypes.shape({
    /**
     * Tag URL.
     */
    url: PropTypes.string.isRequired,
    /**
     * Tag translated text.
     */
    text: PropTypes.string.isRequired,
    /**
     * Tag type used to style it as desired.
     */
    type: PropTypes.string,
    /**
     * Tag rel used to know if tag must be indexed
     */
    rel: PropTypes.string
  }),
  /**
   * Comments object.
   */
  comments: PropTypes.shape({
    /**
     * Comments URL.
     */
    url: PropTypes.string.isRequired,
    /**
     * Comments count.
     */
    count: PropTypes.number.isRequired,
    /**
     * Comments custom icon (React component).
     */
    icon: PropTypes.func
  }),
  /**
   * Featured flag
   */
  featured: PropTypes.bool,
  /**
   * Lazy load flag / config.
   */
  lazyLoad: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
   * Tag chip component
   */
  tagChip: PropTypes.func,
  /**
   * Video flag (displays media icon)
   */
  video: PropTypes.bool
}

CardArticle.defaultProps = {
  tagChip: SuiAtomTag,
  featured: false,
  linkFactory: ({children, ...rest}) => <a {...rest}>{children}</a>
}

CardArticle.displayName = 'CardArticle'
