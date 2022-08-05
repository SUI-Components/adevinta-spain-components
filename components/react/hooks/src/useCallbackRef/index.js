import {useCallback, useRef} from 'react'

import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect'

export default function useCallbackRef(fn) {
  const ref = useRef(fn)

  useIsomorphicLayoutEffect(() => {
    ref.current = fn
  })

  return useCallback((...args) => ref.current?.(...args), [])
}
