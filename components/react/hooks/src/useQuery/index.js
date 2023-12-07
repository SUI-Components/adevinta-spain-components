import {useEffect, useRef} from 'react'

import useRequest from '@s-ui/react-hooks/lib/useRequest/index.js'
export * from '@s-ui/react-hooks/lib/useRequest/index.js'

const useQuery = (query, {refetchInterval, isExecuteOnMountDisabled, ...options} = {}, deps = []) => {
  const {data, refetch, ...others} = useRequest(query, options)
  const isInitializedRef = useRef(data !== undefined || isExecuteOnMountDisabled)

  useEffect(() => {
    const handleRefresh = () => {
      if (!document.hidden) {
        refetch()
      }
    }

    if (!isInitializedRef.current) {
      refetch()
    }

    let intervalId

    if (refetchInterval) {
      intervalId = setInterval(handleRefresh, refetchInterval)
    }

    return () => {
      if (refetchInterval) {
        clearInterval(intervalId)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, refetchInterval, isExecuteOnMountDisabled, ...deps])

  return {
    refetch,
    data,
    ...others
  }
}

export default useQuery
