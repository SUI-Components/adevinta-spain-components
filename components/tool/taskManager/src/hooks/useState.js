import {useReducer, useRef} from 'react'

import Domain from '../domain/index.js'
import useDomainEventSubscriptions from './useDomainEventSubscriptions.js'

const domain = new Domain()

const ACTIONS = {
  ENABLE_DEV_MODE: 'ENABLE_DEV_MODE',
  SET_STATE: 'SET_STATE',
  TOOGLE_TAB: 'toggleTab'
}

const initialState = {
  tasks: [],
  toggleTab: false,
  isDevModeEnabled: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ENABLE_DEV_MODE:
      return {
        ...state,
        isDevModeEnabled: true
      }

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

  const enableDevMode = () => dispatch({type: ACTIONS.ENABLE_DEV_MODE})

  // Getters
  const getState = () => stateRef.current
  const getTask = taskId => getState().tasks.find(task => task.id === taskId)

  const _isVisibleWork = work => work.isVisible || getState().isDevModeEnabled
  const _isFinishedWork = work =>
    work.status === domain.get('config').get('AVAILABLE_STATUS').COMPLETED
  const _countWorkFromTask = (taskId, countCriteria) => {
    const task = getTask(taskId)
    if (task === undefined) return 0

    return task.work.filter(countCriteria).length
  }

  // De una tarea concreta, conocer el work que está visible
  const countWork = taskId => {
    return _countWorkFromTask(taskId, work => _isVisibleWork(work))
  }
  // De una tarea concreta, conocer el work que está visible y completado
  const countFinishedWork = taskId => {
    return _countWorkFromTask(
      taskId,
      work => _isVisibleWork(work) && _isFinishedWork(work)
    )
  }

  // Número de tareas que están in progress y visibles
  const _isVisibleTask = taskId => {
    // Una task es visible cuando tiene work visible
    return countWork(taskId) > 0
  }
  const countInProgressTasks = () => {
    const tasks = getState().tasks
    // Si está visible, y su visibleWork es distinto al finished...
    return tasks.filter(
      task =>
        _isVisibleTask(task.id) &&
        countWork(task.id) > countFinishedWork(task.id)
    ).length
  }

  return {
    cancelWork,
    domain,
    enableDevMode,
    errorWork,
    finishWork,
    getState,
    getTask,
    runSimpleTask,
    runTask,
    setPercentage,
    toggleTab,
    /* getters */
    countFinishedWork,
    countInProgressTasks,
    countWork
  }
}

export default useState
