import {useRef, useCallback} from 'react'

import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect'

export default function useCallbackRef(fn, deps = []) {
  const ref = useRef(fn)

  useIsomorphicLayoutEffect(() => {
    ref.current = fn
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback((...args) => ref.current?.(...args), deps)
}
