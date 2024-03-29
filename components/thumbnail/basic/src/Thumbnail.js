import PropTypes from 'prop-types'

import ImagePlaceholder from '@s-ui/react-image-placeholder'

const BASE_CLASS = 'sui-ThumbnailBasic'
const CAPTION_CLASS = 'sui-ThumbnailBasic-caption'
const CAPTION_TEXT_CLASS = 'sui-ThumbnailBasic-caption-text'

const Thumbnail = function ({captionText, ...placeholderProps}) {
  return (
    <figure className={BASE_CLASS}>
      <ImagePlaceholder className={`${BASE_CLASS}-image`} {...placeholderProps} />
      {captionText && (
        <figcaption className={CAPTION_CLASS}>
          <div className={CAPTION_TEXT_CLASS}>{captionText}</div>
        </figcaption>
      )}
    </figure>
  )
}

Thumbnail.propTypes = {
  /**
   * Image source
   */
  src: PropTypes.string.isRequired,
  /**
   * Image alt
   */
  alt: PropTypes.string.isRequired,
  /**
   * Text shown at the buttom of the component
   */
  captionText: PropTypes.string,
  /**
   * Img props to be shown until the image loads
   */
  placeholder: PropTypes.object,
  /**
   * Img props to be shown if the image fails loading
   */
  fallback: PropTypes.object,
  /**
   * html picture sources, object {media, srcset} expected
   */
  imgSources: PropTypes.array
}

export default Thumbnail
