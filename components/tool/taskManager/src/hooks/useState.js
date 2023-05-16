import {useReducer, useRef} from 'react'

import Domain from '../domain/index.js'
import useDomainEventSubscriptions from './useDomainEventSubscriptions.js'

const domain = new Domain()

const ACTIONS = {
  SET_STATE: 'SET_STATE',
  TOOGLE_TAB: 'toggleTab'
}

const initialState = {
  tasks: [],
  toggleTab: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_STATE:
      return {
        ...state,
        ...action.payload
      }

    case ACTIONS.TOOGLE_TAB:
      return {
        ...state,
        toggleTab: !state.toggleTab
      }

    default:
      return state
  }
}

// Create a custom hook that uses the reducer and returns the state and dispatch function
const useState = () => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState
  })
  const stateRef = useRef(state)
  stateRef.current = state
  const setState = state => dispatch({type: ACTIONS.SET_STATE, payload: state})
  const toggleTab = () => dispatch({type: ACTIONS.TOOGLE_TAB})

  const executeUseCase = (useCaseName, params) =>
    domain
      .get(useCaseName)
      .execute(params)
      .then(result => setState(result))

  useDomainEventSubscriptions(domain, executeUseCase)

  const runSimpleTask = task =>
    executeUseCase('run_simple_task_use_case', {
      localState: stateRef.current,
      ...task
    })

  const runTask = task =>
    executeUseCase('run_task_use_case', {
      localState: stateRef.current,
      ...task
    })

  const setPercentage = (workId, percentage) =>
    executeUseCase('set_work_percentage_task_use_case', {
      localState: stateRef.current,
      workId,
      percentage
    })

  const finishWork = workId =>
    executeUseCase('finish_work_task_use_case', {
      localState: stateRef.current,
      workId
    })

  const cancelWork = workId =>
    executeUseCase('cancel_work_task_use_case', {
      localState: stateRef.current,
      workId
    })

  const errorWork = (workId, log) =>
    executeUseCase('error_work_task_use_case', {
      localState: stateRef.current,
      log,
      workId
    })

  return {
    state,
    cancelWork,
    errorWork,
    runTask,
    runSimpleTask,
    setPercentage,
    finishWork,
    toggleTab
  }
}

export default useState
