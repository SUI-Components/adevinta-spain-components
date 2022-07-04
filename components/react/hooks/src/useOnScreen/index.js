import {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

export function useNearScreen({initialValue = false, offset = '200px'} = {}) {
  return useOnScreen({once: true, offset, initialValue})
}

export default function useOnScreen({
  initialValue = false,
  offset = '0px',
  once = true,
  threshold,
  ref
} = {}) {
  // State and setter for storing whether element is visible or not
  const [isIntersecting, setIntersecting] = useState(initialValue)
  const outerRef = useRef()

  useEffect(() => {
    const usableRef = ref || outerRef
    const {current} = usableRef || {}
    if (!current) return

    // Some devices support IntersectionObserver API partially so we must check that it is completely supported
    // See https://github.com/w3c/IntersectionObserver/issues/211
    const isIntersectionObserverEnabled =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype

    let observer
    ;(isIntersectionObserverEnabled
      ? Promise.resolve()
      : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting)
          if (entry.isIntersecting) {
            // Unobserve now if we've set once option
            once && observer && observer.unobserve(current)
          }
        },
        {
          rootMargin: offset,
          threshold
        }
      )

      current && observer.observe(current)
    })

    return () => {
      observer && observer.unobserve(current)
    }
  }, [offset, once, ref, threshold])

  return [isIntersecting, outerRef]
}

useOnScreen.displayName = 'HookUseOnScreen'
useOnScreen.propTypes = {
  initialValue: PropTypes.bool,
  offset: PropTypes.string,
  once: PropTypes.bool,
  ref: PropTypes.element,
  threshold: PropTypes.number
}
