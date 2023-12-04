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
const useState = ({onCompleteAllTasks}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState
  })
  const stateRef = useRef(state)
  stateRef.current = state

  const setState = state => dispatch({type: ACTIONS.SET_STATE, payload: state})
  const toggleTab = () => dispatch({type: ACTIONS.TOOGLE_TAB})

  const executeUseCase = (useCaseName, params, next = () => null) =>
    domain
      .get(useCaseName)
      .execute(params)
      .then(result => {
        setState(result)
        next(result)
      })

  const checkIfAllTasksHaveBeenFinished = (taskId, state) => {
    // No notice on not-visible tasks
    if (_isVisibleTask(taskId, state) === false) return

    const completedTasks = countCompletedTasks(state)
    const allTasks = countTasks(state)
    if (completedTasks === allTasks && allTasks > 0) onCompleteAllTasks(state)
  }

  useDomainEventSubscriptions(domain, executeUseCase, onCompleteAllTasks)

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
    executeUseCase(
      'finish_work_task_use_case',
      {
        localState: stateRef.current,
        taskId,
        workId,
        result
      },
      state => checkIfAllTasksHaveBeenFinished(taskId, state)
    )

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
  // TODO: Most of this functions will be migrated to domain soon
  const getState = () => stateRef.current
  const getTask = (taskId, state = getState()) => state.tasks.find(task => task.id === taskId)
  // Work status check
  const _isVisibleWork = (work, state = getState()) => work.isVisible || state.isDevModeEnabled
  const _isFinishedWork = work => work.status === domain.get('config').get('AVAILABLE_STATUS').COMPLETED
  const _isErroredWork = work => work.status === domain.get('config').get('AVAILABLE_STATUS').ERROR
  // Counts the number of work that meets a specific criteria
  const _countWorkFromTask = (taskId, countCriteria, state = getState()) => {
    const task = getTask(taskId, state)
    if (task === undefined) return 0

    return task.work.filter(countCriteria).length
  }

  // Count visible work from a specific task
  const countWork = (taskId, state = getState()) => {
    return _countWorkFromTask(taskId, work => _isVisibleWork(work, state), state)
  }
  // Count visible and finished work from a specific task
  const countFinishedWork = (taskId, state = getState()) => {
    return _countWorkFromTask(taskId, work => _isVisibleWork(work, state) && _isFinishedWork(work))
  }

  const countErroredWork = taskId => {
    return _countWorkFromTask(taskId, work => _isErroredWork(work))
  }

  // Checks if a task is visible
  const _isVisibleTask = (taskId, state = getState()) => countWork(taskId, state) > 0
  // Checks if a task has errored work
  const _isErroredTask = taskId => countErroredWork(taskId) > 0
  // Counts the number of tasks that are being processed
  const countInProgressTasks = () =>
    getState().tasks.filter(
      task =>
        _isVisibleTask(task.id) && countWork(task.id) > countFinishedWork(task.id) && _isErroredTask(task.id) === false
    ).length
  // Counts the number of tasks that finished
  const countCompletedTasks = (state = getState()) =>
    state.tasks.filter(
      task => _isVisibleTask(task.id, state) && countWork(task.id, state) === countFinishedWork(task.id, state)
    ).length

  // Counts the number of tasks that are visible, regardless of their status
  const countTasks = (state = getState()) => state.tasks.filter(task => _isVisibleTask(task.id, state)).length

  const getInProgressTaskPercentage = () => {
    const inProgressTask = getState().tasks.find(
      task => task.status === domain.get('config').get('AVAILABLE_STATUS').IN_PROGRESS
    )

    if (inProgressTask === undefined) return 0

    const work = countWork(inProgressTask.id)
    const finishedWork = countFinishedWork(inProgressTask.id)

    const inProgressWork = inProgressTask.work.find(
      work => work.status === domain.get('config').get('AVAILABLE_STATUS').IN_PROGRESS
    )

    let inProgressWorkPercentage = 0
    if (inProgressWork !== undefined) {
      inProgressWorkPercentage = inProgressWork.percentage
    }
    const completionPercentage = Math.round(((finishedWork + inProgressWorkPercentage / 100) * 100) / work)

    return completionPercentage
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
    countTasks,
    countWork,
    getInProgressTaskPercentage
  }
}

export default useState
