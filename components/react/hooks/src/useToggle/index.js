import {useReducer} from 'react'

function _toggler(state, action) {
  return typeof action === 'boolean' ? action : !state
}

export default function useToggle(initialValue = false) {
  return useReducer(_toggler, initialValue)
}
