import {Component} from 'react'

import classnames from 'classnames'
import PropTypes from 'prop-types'

import {filterObjectKeys} from './libs'

class ImagePlaceholder extends Component {
  static IMAGE_CLASS = 'sui-ImagePlaceholder-image'
  static CLASSNAME = 'sui-ImagePlaceholder'

  state = {
    imageLoaded: false,
    error: false
  }

  onLoad = () => {
    this.setState({imageLoaded: true})
    this.props.onLoad && this.props.onLoad()
  }

  onError = () => {
    this.setState({
      imageLoaded: false,
      error: true
    })

    this.props.onError && this.props.onError()
  }

  get _classNames() {
    const {className, rounded} = this.props
    return classnames(
      ImagePlaceholder.CLASSNAME,
      className,
      rounded && `${ImagePlaceholder.CLASSNAME}--rounded`
    )
  }

  get _imageClassNames() {
    return classnames(
      ImagePlaceholder.IMAGE_CLASS,
      this.state.imageLoaded || `${ImagePlaceholder.IMAGE_CLASS}--hidden`
    )
  }

  get _imageProps() {
    const imageProps = Object.keys(htmlImgProps)
    return filterObjectKeys(this.props, imageProps)
  }

  _renderPlaceholder() {
    return (
      <img
        {...this.props.placeholder}
        className={ImagePlaceholder.IMAGE_CLASS}
      />
    )
  }

  /**
   * onLoad & onError are intercepted as we need the state handling functions
   * to do our magic
   */
  _renderFallback() {
    return (
      <img
        className={this._imageClassNames}
        onLoad={() => this.onLoad()}
        onError={() => this.onError()}
        {...this.props.fallback}
      />
    )
  }

  render() {
    const {fallback, imgSources} = this.props
    return (
      <div className={this._classNames}>
        {this.state.error ? (
          fallback && this._renderFallback()
        ) : (
          <picture>
            {imgSources.map((source, idx) => (
              <source key={idx} media={source.media} srcSet={source.srcset} />
            ))}
            <img
              className={this._imageClassNames}
              onLoad={() => this.onLoad()}
              onError={() => this.onError()}
              {...this._imageProps}
            />
          </picture>
        )}
        {this.state.imageLoaded || this._renderPlaceholder()}
      </div>
    )
  }
}

ImagePlaceholder.displayName = 'ImagePlaceholder'

/**
 * <img> props, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 */
const htmlImgProps = {
  alt: PropTypes.string.isRequired,
  crossorigin: PropTypes.string,
  height: PropTypes.string,
  ismap: PropTypes.bool,
  longdesc: PropTypes.string,
  referrerpolicy: PropTypes.string,
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  usemap: PropTypes.string,
  width: PropTypes.string
}

ImagePlaceholder.propTypes = {
  className: PropTypes.string,
  /**
   * To be shown until the src prop is loaded
   */
  placeholder: PropTypes.shape(htmlImgProps).isRequired,
  /**
   * Image to be loaded in case the src prop does not load
   */
  fallback: PropTypes.shape(htmlImgProps),
  /**
   * Image property but intercepted by the component in order to do its magic
   */
  onError: PropTypes.func,
  /**
   * Image property but intercepted by the component in order to do its magic
   */
  onLoad: PropTypes.func,
  /**
   * html picture sources, object {media, srcset} expected
   */
  imgSources: PropTypes.array,
  /** rounded corners */
  rounded: PropTypes.bool,
  /**
   * <img> prop
   */
  ...htmlImgProps
}

ImagePlaceholder.defaultProps = {
  imgSources: []
}

export default ImagePlaceholder
