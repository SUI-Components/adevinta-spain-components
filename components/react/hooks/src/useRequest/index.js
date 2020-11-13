import {useReducer, useRef, useEffect, useCallback} from 'react'

export const STATUSES = {
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success'
}

const ACTIONS = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
  RESET: 'reset'
}

const initialState = {
  status: STATUSES.LOADING,
  data: null,
  error: null
}

const getInitialState = ({initialData, initialStatus}) => {
  const data = typeof initialData === 'function' ? initialData() : initialData
  const status = data ? STATUSES.SUCCESS : initialStatus || initialState.status

  return {
    status,
    data,
    error: null
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return initialState
    case ACTIONS.ERROR:
      return {
        ...initialState,
        status: STATUSES.ERROR,
        error: action.payload.error
      }
    case ACTIONS.SUCCESS:
      return {
        ...initialState,
        status: STATUSES.SUCCESS,
        data: action.payload.data
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

const useRequest = (
  request,
  {initialStatus, initialData, onSuccess, onError} = {}
) => {
  const [{status, data, ...others}, dispatch] = useReducer(
    reducer,
    getInitialState({initialStatus, initialData})
  )
  const requestRef = useRef(request)
  const onSuccessRef = useRef(onSuccess)
  const onErrorRef = useRef(onError)
  const isMountedRef = useRef(false)

  const refetch = useCallback(async (...args) => {
    dispatch({type: ACTIONS.LOADING})

    const [error, data] = await requestRef.current(...args)

    if (!isMountedRef.current) {
      return
    }

    if (error) {
      dispatch({type: ACTIONS.ERROR, payload: {error}})

      if (onErrorRef.current) {
        onErrorRef.current(error)
      }

      return
    }

    dispatch({type: ACTIONS.SUCCESS, payload: {data}})

    if (onSuccessRef.current) {
      onSuccessRef.current(data)
    }
  }, [])

  const reset = () => {
    dispatch({type: ACTIONS.ERROR, payload: {initialStatus}})
  }

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
    onErrorRef.current = onErrorRef
  }, [onError])

  return {
    status,
    reset,
    refetch,
    data,
    isLoading: status === STATUSES.LOADING,
    isError: status === STATUSES.ERROR,
    isSuccess: status === STATUSES.SUCCESS,
    ...others
  }
}

export default useRequest
