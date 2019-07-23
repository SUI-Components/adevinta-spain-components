import {useState} from 'react'

export default function useLegacyState(initialState = {}) {
  const [state, setState] = useState(initialState)
  const setLegacyState = newState =>
    setState(prevState => ({...prevState, ...newState}))
  return [state, setLegacyState]
}
