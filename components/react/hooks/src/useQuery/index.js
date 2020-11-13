import {useRef, useEffect} from 'react'
import useRequest from '../useRequest'

const useQuery = (query, {refetchInterval, ...options} = {}) => {
  const {data, refetch, ...others} = useRequest(query, options)
  const isInitializedRef = useRef(!!data)

  useEffect(() => {
    if (!isInitializedRef.current) {
      refetch()
    }

    const intervalId = refetchInterval && setInterval(refetch, refetchInterval)

    return () => {
      clearInterval(intervalId)
    }
  }, [refetch, refetchInterval])

  return {
    refetch,
    data,
    ...others
  }
}

export default useQuery
