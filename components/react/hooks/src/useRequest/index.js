import {useCallback, useEffect, useReducer, useRef} from 'react'

export const STATUSES = {
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success'
}

const ACTIONS = {
  FETCHING: 'fetching',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
  REPLACE: 'replace',
  RESET: 'reset'
}

const initialState = {
  status: STATUSES.LOADING,
  data: null,
  error: null,
  isFetching: false
}

const getInitialState = ({initialData, initialStatus}) => {
  const data = typeof initialData === 'function' ? initialData() : initialData
  const status = data !== undefined ? STATUSES.SUCCESS : initialStatus || initialState.status

  return {
    status,
    data,
    error: null
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case ACTIONS.LOADING:
      return {
        ...initialState,
        isFetching: true,
        data: state.data
      }
    case ACTIONS.ERROR:
      return {
        ...initialState,
        status: STATUSES.ERROR,
        error: action.payload.error,
        data: state.data
      }
    case ACTIONS.SUCCESS:
      return {
        ...initialState,
        status: STATUSES.SUCCESS,
        data: action.payload.data
      }
    case ACTIONS.REPLACE:
      return {
        ...initialState,
        status: STATUSES.SUCCESS,
        data: action.payload.isHard ? action.payload.data : {...state.data, ...action.payload.data}
      }
    case ACTIONS.RESET:
      return {
        ...initialState,
        status: action.payload.initialStatus
      }
    default:
      return state
  }
}

const useRequest = (request, {initialStatus, initialData, onSuccess, onError} = {}) => {
  const [{status, data, ...others}, dispatch] = useReducer(reducer, getInitialState({initialStatus, initialData}))
  const requestRef = useRef(request)
  const onSuccessRef = useRef(onSuccess)
  const onErrorRef = useRef(onError)
  const isMountedRef = useRef(false)

  const handleError = error => {
    dispatch({type: ACTIONS.ERROR, payload: {error}})

    if (onErrorRef.current) {
      onErrorRef.current(error)
    }
  }

  const fetch = useCallback(async (...args) => {
    try {
      const [error, data] = await requestRef.current(...args)

      if (!isMountedRef.current) {
        return
      }

      if (error) {
        return handleError(error)
      }

      dispatch({type: ACTIONS.SUCCESS, payload: {data}})

      if (onSuccessRef.current) {
        onSuccessRef.current(data)
      }
    } catch (error) {
      handleError(error)
    }
  }, [])

  const refresh = useCallback(
    async (...args) => {
      dispatch({type: ACTIONS.FETCHING})

      fetch(...args)
    },
    [fetch]
  )

  const refetch = useCallback(
    async (...args) => {
      dispatch({type: ACTIONS.LOADING})

      fetch(...args)
    },
    [fetch]
  )

  const replace = useCallback((data, isHard) => {
    dispatch({type: ACTIONS.REPLACE, payload: {data, isHard}})
  }, [])

  const reset = useCallback(() => {
    dispatch({
      type: ACTIONS.RESET,
      payload: {initialStatus}
    })
  }, [initialStatus])

  useEffect(() => {
    isMountedRef.current = true

    return () => {
      isMountedRef.current = false
    }
  }, [])

  useEffect(() => {
    requestRef.current = request
  }, [request])

  useEffect(() => {
    onSuccessRef.current = onSuccess
  }, [onSuccess])

  useEffect(() => {
    onErrorRef.current = onError
  }, [onError])

  return {
    status,
    reset,
    replace,
    refresh,
    refetch,
    data,
    isLoading: status === STATUSES.LOADING,
    isError: status === STATUSES.ERROR,
    isSuccess: status === STATUSES.SUCCESS,
    ...others
  }
}

export default useRequest
