import {useCallback, useEffect, useRef} from 'react'

export default function useMountedState(value, delay) {
  const mountedRef = useRef(false)

  const get = useCallback(() => mountedRef.current, [])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return get
}
