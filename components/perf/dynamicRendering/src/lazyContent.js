import React from 'react'
import PropTypes from 'prop-types'
import {useNearScreen} from '@s-ui/react-hooks'

export default function LazyContent({
  children,
  rootMargin = '100px 0px 0px',
  placeholder,
  height
}) {
  const [isNearScreen, fromRef] = useNearScreen({offset: rootMargin})

  if (isNearScreen) {
    return children
  } else if (placeholder) {
    return <div ref={fromRef}>{placeholder}</div>
  } else {
    return (
      <div ref={fromRef} style={{height: `${height}px`, marginBottom: '1px'}} />
    )
  }
}

LazyContent.propTypes = {
  /**
   * Wrapped content that will be rendered, or not, depending your userAgent and if is interescting. As explained in the README.md
   */
  children: PropTypes.any,

  /**
   * Number that determines the height of the component that we're waiting in pixels.
   */
  height: PropTypes.number,

  /**
   * A component or html element that is used as a placeholder
   */
  placeholder: PropTypes.element,

  /**
   * String in the format of the css margin property. the values serves to grow or shrink
   * each side of the root element's bounding box before computing intersections.
   */
  rootMargin: PropTypes.string
}
