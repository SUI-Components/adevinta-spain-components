import {useEffect, useReducer, useMemo} from 'react'

export const ACTIONS = {
  prev: 'prev',
  next: 'next',
  reset: 'reset'
}

function reducer(state, action) {
  const update = typeof action === 'function' ? action(state) : action
  const nextState = {...state, ...update}
  return {
    ...nextState,
    step: nextState.history[nextState.history.length - 1]
  }
}

export default function useSteps(initialStep) {
  const [stepState, setState] = useReducer(reducer, {
    history: [initialStep],
    lastAction: null,
    step: initialStep
  })

  useEffect(() => {
    setState({history: [initialStep]})
  }, [initialStep])

  // Define and memoize the navigation handlers next, prev and reset
  const {next, prev, reset} = useMemo(
    () => ({
      next: nextStep => {
        setState(({history}) => ({
          history: [...history, nextStep],
          lastAction: ACTIONS.next
        }))
      },
      prev: () => {
        setState(({history}) => ({
          history: history.slice(0, -1),
          lastAction: ACTIONS.prev
        }))
      },
      reset: () => {
        setState({history: [initialStep], lastAction: 'reset'})
      }
    }),
    [initialStep]
  )

  const isActive = receivedStep => receivedStep === stepState.step

  return {
    next,
    prev: stepState.history.length > 1 ? prev : null,
    reset: stepState.history.length > 1 ? reset : () => {},
    isActive,
    ...stepState
  }
}
