import {useCallback} from 'react'

export default function useMergeRefs(...refs) {
  return useCallback(node => {
    refs.forEach(ref => {
      if (typeof ref === 'function') ref(node)
      else if (ref !== null) ref.current = node
    })
  }, refs)
}
