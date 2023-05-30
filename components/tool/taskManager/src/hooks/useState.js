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

  const getState = () => stateRef.current
  const setState = state => dispatch({type: ACTIONS.SET_STATE, payload: state})
  const toggleTab = () => dispatch({type: ACTIONS.TOOGLE_TAB})

  const executeUseCase = (useCaseName, params) =>
    domain
      .get(useCaseName)
      .execute(params)
      .then(result => setState(result))

  useDomainEventSubscriptions(domain, executeUseCase)

  const getTask = taskId => getState().tasks.find(task => task.id === taskId)

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

  const setPercentage = (taskId, workId, percentage) =>
    executeUseCase('set_work_percentage_task_use_case', {
      localState: stateRef.current,
      taskId,
      workId,
      percentage
    })

  const finishWork = (taskId, workId, result = null) =>
    executeUseCase('finish_work_task_use_case', {
      localState: stateRef.current,
      taskId,
      workId,
      result
    })

  const cancelWork = (taskId, workId) =>
    executeUseCase('cancel_work_task_use_case', {
      localState: stateRef.current,
      taskId,
      workId
    })

  const errorWork = (taskId, workId, log) =>
    executeUseCase('error_work_task_use_case', {
      localState: stateRef.current,
      log,
      taskId,
      workId
    })

  return {
    cancelWork,
    errorWork,
    finishWork,
    getState,
    getTask,
    runSimpleTask,
    runTask,
    setPercentage,
    toggleTab
  }
}

export default useState
