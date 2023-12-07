import useRequest, {STATUSES} from '@s-ui/react-hooks/lib/useRequest/index.js'
export * from '@s-ui/react-hooks/lib/useRequest/index.js'

const useMutation = (mutation, options = {}) => {
  const {refetch: mutate, ...others} = useRequest(mutation, {
    ...options,
    initialStatus: STATUSES.IDLE
  })

  return [mutate, others]
}

export default useMutation
