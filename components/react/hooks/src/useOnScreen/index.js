import {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

export function useNearScreen({offset = '200px'} = {}) {
  return useOnScreen({once: true, offset})
}

export default function useOnScreen({ref, once = true, offset = '0px'} = {}) {
  // State and setter for storing whether element is visible or not
  const [isIntersecting, setIntersecting] = useState(false)
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
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting)
          if (entry.isIntersecting) {
            // Unobserve now if we've set once option
            once && observer && observer.unobserve(current)
          }
        },
        {
          rootMargin: offset
        }
      )

      current && observer.observe(current)
    })

    return () => {
      observer && observer.unobserve(current)
    }
  }, [offset, once, ref])

  return [isIntersecting, outerRef]
}

useOnScreen.displayName = 'HookUseOnScreen'
useOnScreen.propTypes = {
  ref: PropTypes.element,
  rootMargin: PropTypes.string
}
