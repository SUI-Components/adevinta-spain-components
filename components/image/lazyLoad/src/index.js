import PropTypes from 'prop-types'
import cx from 'classnames'
import SpinnerBasic from '@s-ui/react-spinner-basic'
import {useNearScreen} from '@s-ui/react-hooks'

const BASE_CLASS = 'sui-ImageLazyLoad'
/**
 * Component that will print defer loading images with an optional and specific
 * aspect ratio.
 */
export default function ImageLazyLoad({
  alt = '',
  title = '',
  aspectRatio = '',
  onError = () => {},
  offsetVertical = 100,
  showSpinner = true,
  src
}) {
  const [isNearScreen, fromRef] = useNearScreen({offset: `${offsetVertical}px`})

  const lazyLoadWrapClassName = cx(BASE_CLASS, {
    [`${BASE_CLASS}--ratio-${aspectRatio.replace(':', '-')}`]: aspectRatio
  })

  return (
    <div className={lazyLoadWrapClassName} ref={fromRef}>
      {!isNearScreen && showSpinner && (
        <div className={`${BASE_CLASS}-spinner`}>
          <SpinnerBasic />
        </div>
      )}
      <div className={`${BASE_CLASS}-imageWrap`}>
        {isNearScreen && (
          <img
            alt={alt}
            className={`${BASE_CLASS}-image`}
            onError={onError}
            src={src}
            title={title}
          />
        )}
      </div>
    </div>
  )
}

ImageLazyLoad.propTypes = {
  /**
   * Specify how to handle, can be useful to specify a fallback image.
   */
  onError: PropTypes.func,
  /**
   * This option allows you to specify how far above and below the viewport you
   * want to begin displaying your content.
   */
  offsetVertical: PropTypes.number,
  /**
   * Image element source.
   */
  src: PropTypes.string.isRequired,
  /**
   * Image alternative text.
   */
  alt: PropTypes.string,
  /**
   * Image title text.
   */
  title: PropTypes.string,
  /**
   * Flag to show a spinner while the image resource is loading.
   */
  showSpinner: PropTypes.bool,
  /**
   * Optional aspect ratio of the image.
   */
  aspectRatio: PropTypes.oneOf([
    '1:1',
    '5:4',
    '4:3',
    '3:2',
    '5:3',
    '16:9',
    '3:1'
  ])
}

ImageLazyLoad.displayName = 'ImageLazyLoad'
