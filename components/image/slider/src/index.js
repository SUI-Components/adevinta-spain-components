import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import cloneDeep from 'lodash.clonedeep'
import cx from 'classnames'
import IconCamera from '@schibstedspain/sui-svgiconset/lib/Camera'

export const IMAGE_SLIDER_COUNTER_POSITIONS = {
  BOTTOM_CENTER: 'bottomCenter',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
}
const NO_OP = () => {}
const TARGET_BLANK = '_blank'

function ImageSlider(props) {
  const {
    counterPosition,
    counterIcon,
    counterPatternFactory,
    sliderOptions: initialSliderOptions
  } = props
  const sliderOptions = cloneDeep(initialSliderOptions)
  sliderOptions.doAfterSlide = doAfterSlideParams => {
    const {currentSlide} = doAfterSlideParams
    setCurrentSlide(currentSlide)
    initialSliderOptions.doAfterSlide &&
      initialSliderOptions.doAfterSlide(doAfterSlideParams)
  }

  const [currentSlide, setCurrentSlide] = useState(
    sliderOptions.initialSlide || 0
  )

  const buildCounter = totalImages => {
    const classNames = cx(
      'sui-ImageSlider-counter',
      `sui-ImageSlider-counter--${counterPosition}`
    )
    const Icon = counterIcon
    return (
      <div className={classNames}>
        <Icon svgClass="sui-ImageSlider-counterIcon" />
        <span className="sui-ImageSlider-counterText">
          {counterPatternFactory({
            current: currentSlide + 1,
            total: totalImages
          })}
        </span>
      </div>
    )
  }

  /**
   * @param {Array} images List given by props.images.
   * @return {Array} List of img elements.
   */
  const getSlides = (images, linkFactory) => {
    if (images && images.length) {
      return images.map((image, index) => {
        const {
          key: imageKey,
          alt,
          link,
          src,
          target = TARGET_BLANK,
          title
        } = image

        const key = imageKey ? imageKey + index : index
        const img = (
          <img
            alt={alt}
            className="sui-ImageSlider-image"
            key={key}
            src={src}
            title={title}
          />
        )
        return link
          ? linkFactory({
              key,
              target,
              className: '',
              children: img,
              href: link
            })
          : img
      })
    } else {
      return []
    }
  }

  const {enableCounter, handleClick, images, linkFactory} = props
  const slides = getSlides(images, linkFactory)

  return (
    slides.length > 0 && (
      <div onClick={handleClick} className="sui-ImageSlider">
        {slides.length > 1 ? (
          <ReactSlidy {...sliderOptions}>{slides}</ReactSlidy>
        ) : (
          slides
        )}
        {enableCounter && buildCounter(slides.length)}
      </div>
    )
  )
}

ImageSlider.propTypes = {
  /**
   * List of objects with src and alt properties.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      /**
       * If you want to change images dynamically, you should change this key when chaning items of the slider
       */
      key: PropTypes.string,
      link: PropTypes.string,
      target: PropTypes.string
    }).isRequired
  ),
  /**
   * Callback executed when clicking over the slider.
   */
  handleClick: PropTypes.func,
  /**
   * Custom configuration options to pass to react-slidy component.
   */
  sliderOptions: PropTypes.shape({
    classNameArrows: PropTypes.string,
    doAfterSlide: PropTypes.func,
    lazyLoadSlider: PropTypes.bool,
    initialSlide: PropTypes.number
  }),
  linkFactory: PropTypes.func,
  /**
   * Wheter or not display image counter.
   */
  enableCounter: PropTypes.bool,
  /**
   * Counter position.
   */
  counterPosition: PropTypes.oneOf(
    Object.values(IMAGE_SLIDER_COUNTER_POSITIONS)
  ),
  /**
   * Custom icon for counter
   */
  counterIcon: PropTypes.func,
  /**
   * Counter text factory that receives an object like {current, total} and returns a string/node.
   */
  counterPatternFactory: PropTypes.func
}

ImageSlider.defaultProps = {
  images: [],
  /**
   * This function will receive the onClick arguments
   */
  handleClick: NO_OP,
  /**
   * If not set, react-slidy will be created with its default properties.
   */
  sliderOptions: {},
  /**
   * Link component factory.
   */
  linkFactory: ({href, target, className, children, key} = {}) => ( // eslint-disable-line
    <a href={href} target={target} className={className} key={key}>
      {children}
    </a>
  ),
  enableCounter: false,
  counterPosition: IMAGE_SLIDER_COUNTER_POSITIONS.BOTTOM_RIGHT,
  counterIcon: IconCamera,
  counterPatternFactory: ({current, total}) => `${current}/${total}`
}

ImageSlider.displayName = 'ImageSlider'

export default ImageSlider
