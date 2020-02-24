import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ReactSlidy from 'react-slidy'
import cx from 'classnames'
import IconCamera from '@s-ui/react-icons/lib/Camera'

export const IMAGE_SLIDER_COUNTER_POSITIONS = {
  BOTTOM_CENTER: 'bottomCenter',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
}
const NO_OP = () => {}
const TARGET_BLANK = '_blank'

const defaultLinkFactory = ({href, target, className, children, key}) => ( // eslint-disable-line
  <a href={href} target={target} className={className} key={key}>
    {children}
  </a>
)

const defaultCounterPatternFactory = ({current, total}) => `${current}/${total}`

/**
 * @param {Array} images List given by props.images.
 * @return {Array} List of img elements.
 */
const getSlides = (images = [], linkFactory) => {
  return images.map((image, index) => {
    const {alt, key: imageKey, link, src, target = TARGET_BLANK, title} = image

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
}

export default function ImageSlider({
  images = [],
  handleClick = NO_OP,
  sliderOptions = {},
  linkFactory = defaultLinkFactory,
  enableCounter = false,
  counterPosition = IMAGE_SLIDER_COUNTER_POSITIONS.BOTTOM_RIGHT,
  counterIcon = IconCamera,
  counterPatternFactory = defaultCounterPatternFactory
}) {
  const [currentSlide, setCurrentSlide] = useState(
    sliderOptions.initialSlide || 0
  )
  const slides = getSlides(images, linkFactory)

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

  const handleAfterSlide = ({currentSlide}) => {
    setCurrentSlide(currentSlide)
    sliderOptions.doAfterSlide && sliderOptions.doAfterSlide(currentSlide)
  }

  return (
    slides.length > 0 && (
      <div onClick={handleClick} className="sui-ImageSlider">
        {slides.length > 1 ? (
          <ReactSlidy {...sliderOptions} doAfterSlide={handleAfterSlide}>
            {slides}
          </ReactSlidy>
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

ImageSlider.displayName = 'ImageSlider'
