import {useReducer} from 'react'

const ACTIONS = {
  SET_STATE: 1
}

const STATE_REDUCER = (state, {action, payload}) => {
  switch (action) {
    case ACTIONS.SET_STATE:
      return {
        ...state,
        ...payload
      }

    default:
      return state
  }
}

export default function useStateReducer(initialState) {
  const [state, dispatch] = useReducer(STATE_REDUCER, initialState)
  const setState = payload => dispatch({action: ACTIONS.SET_STATE, payload})
  return [state, setState]
}
