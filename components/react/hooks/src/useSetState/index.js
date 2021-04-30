import {useState, useCallback} from 'react'

export default function useSetState(initialState = {}) {
  const [state, update] = useState(initialState)
  const setState = useCallback(
    (patch = {}) => {
      update({...state, ...patch})
    },
    [state]
  )
  return [state, setState]
}
