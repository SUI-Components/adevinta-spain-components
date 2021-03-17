import {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

export default function useOnElementBelowViewport({
  ref,
  visibilityThreshold = 0
} = {}) {
  // State and setter for storing whether element is below the viewport or not
  const [isBelow, setIsBelow] = useState(true)
  const outerRef = useRef()

  useEffect(() => {
    const usableRef = ref || outerRef
    const {current} = usableRef || {}
    if (!current) return

    let observer
    ;(window.IntersectionObserver
      ? Promise.resolve()
      : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          // Only intersection from below matters
          if (entry.boundingClientRect.top < 0) return
          setIsBelow(!entry.isIntersecting)
        },
        {threshold: visibilityThreshold}
      )

      current && observer.observe(current)
    })

    return () => {
      observer && observer.unobserve(current)
    }
  }, [ref, visibilityThreshold])

  return [isBelow, outerRef]
}

useOnElementBelowViewport.displayName = 'HookUseOnScreen'
useOnElementBelowViewport.propTypes = {
  /**
   * The reference to the element we're checking on.
   */
  ref: PropTypes.element,
  /**
   * This is forwarded to the IntersectionObserver. See `threshold` option:
   * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   */
  visibilityThreshold: PropTypes.number
}
