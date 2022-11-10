import {useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomImage, {FETCHPRIORITY} from '@s-ui/react-atom-image'
import IconCamera from '@s-ui/react-icons/lib/Camera'
import MoleculeCarousel from '@s-ui/react-molecule-carousel'

export {FETCHPRIORITY}

export const IMAGE_SLIDER_COUNTER_POSITIONS = {
  BOTTOM_CENTER: 'bottomCenter',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
}
export const IMAGE_SLIDER_CONTENT_TYPES = {
  IMAGE: 'image',
  NODE: 'node'
}
const NO_OP = () => {}
const TARGET_BLANK = '_blank'

const defaultLinkFactory = (
  {href, target, className, children, key} // eslint-disable-line
) => (
  <a href={href} target={target} className={className} key={key}>
    {children}
  </a>
)

const defaultCounterPatternFactory = ({current, total}) => `${current}/${total}`

/**
 * @param {Array} images List given by props.images.
 * @return {Array} List of img or node elements.
 */
const getSlides = (currentSlide, content = [], linkFactory) => {
  return content.map((contentItem, index) => {
    const {
      alt,
      fetchpriority,
      height,
      key: imageKey,
      link,
      sources,
      src,
      target = TARGET_BLANK,
      title,
      type = IMAGE_SLIDER_CONTENT_TYPES.IMAGE,
      width
    } = contentItem

    const key = imageKey ? imageKey + index : index
    const children =
      type === IMAGE_SLIDER_CONTENT_TYPES.IMAGE ? (
        <AtomImage
          alt={alt}
          aria-selected={currentSlide === index}
          className="sui-ImageSlider-image"
          fetchpriority={fetchpriority}
          height={height}
          key={key}
          sources={sources}
          src={src}
          title={title}
          width={width}
        />
      ) : (
        contentItem
      )

    return link
      ? linkFactory({
          key,
          target,
          className: '',
          children,
          href: link
        })
      : children
  })
}

export default function ImageSlider({
  images: content = [],
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
  const slides = getSlides(currentSlide, content, linkFactory)
  const hasSingleImage = slides.length === 1
  const {useFullHeight} = sliderOptions

  const BASE_CLASS = cx('sui-ImageSlider', {
    'sui-ImageSlider--single': hasSingleImage,
    'sui-ImageSlider--fullHeight': useFullHeight
  })

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
      <div onClick={handleClick} className={BASE_CLASS}>
        {slides.length > 1 ? (
          <MoleculeCarousel {...sliderOptions} doAfterSlide={handleAfterSlide}>
            {slides}
          </MoleculeCarousel>
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
      fetchpriority: PropTypes.oneOf(Object.values(FETCHPRIORITY)),
      /**
       * If you want to change images dynamically, you should change this key when chaining items of the slider
       */
      key: PropTypes.string,
      link: PropTypes.string,
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          srcset: PropTypes.string,
          media: PropTypes.string
        })
      ),
      target: PropTypes.string,
      type: PropTypes.oneOf(Object.values(IMAGE_SLIDER_CONTENT_TYPES))
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
    imageObjectFit: PropTypes.oneOf(['cover', 'contain']),
    initialSlide: PropTypes.number,
    numOfSlides: PropTypes.number
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
