import useRequest, {STATUSES} from '../useRequest/index.js'
export * from '../useRequest/index.js'

const useMutation = (mutation, options = {}) => {
  const {refetch: mutate, ...others} = useRequest(mutation, {
    ...options,
    initialStatus: STATUSES.IDLE
  })

  return [mutate, others]
}

export default useMutation
