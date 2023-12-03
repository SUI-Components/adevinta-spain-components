import PropTypes from 'prop-types'

import ThumbnailBasic from '@s-ui/react-thumbnail-basic'

const ThumbnailList = ({captionText, fallback, items = [], onClick, placeholder, target, rounded}) => (
  <ul className="sui-ThumbnailList">
    {items.map((item, index) => (
      <li className="sui-ThumbnailList-item" key={index}>
        <ThumbnailBasic
          alt={item.alt}
          captionText={captionText}
          fallback={fallback}
          href={item.href}
          imgSources={item.sources}
          onClick={ev => onClick(ev, index)}
          placeholder={placeholder}
          src={item.src}
          target={target}
          rounded={rounded}
        />
      </li>
    ))}
  </ul>
)

ThumbnailList.displayName = 'ThumbnailList'

ThumbnailList.propTypes = {
  /**
   * array of thumbnail/basic props
   * https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  items: PropTypes.array,
  /**
   * https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  captionText: PropTypes.string.isRequired,
  /**
   * @link https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  placeholder: PropTypes.object.isRequired,
  /**
   * @link https://sui-components.now.sh/workbench/thumbnail/basic/documentation/api
   */
  fallback: PropTypes.object,
  /**
   * HTML anchor target
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /**
   * onClick callback
   */
  onClick: PropTypes.func,
  /** rounded inner image */
  rounded: PropTypes.bool
}

export default ThumbnailList
