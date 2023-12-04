import useMount from '@s-ui/react-hooks/lib/useMount/index.js'

const useDomainEventSubscriptions = (domain, executeUseCase) => {
  useMount(() => {
    const subscriptions = []
    subscriptions.push(
      domain
        .get('run_simple_task_use_case')
        .subscribe(({result}) => executeUseCase('process_queued_task_use_case', {localState: result})),
      domain
        .get('run_task_use_case')
        .subscribe(({result}) => executeUseCase('process_queued_task_use_case', {localState: result})),
      domain.get('finish_work_task_use_case').subscribe(({result}) =>
        executeUseCase('process_in_progress_task_use_case', {
          localState: result
        })
      ),
      /* domain.get('cancel_work_task_use_case')
        .subscribe(({result}) => executeUseCase('process_task_use_case',{localState: result})), */
      domain.get('error_work_task_use_case').subscribe(async ({result}) => {
        const nextState = await domain.get('mark_error_task_use_case').execute({
          localState: result
        })

        executeUseCase('process_in_progress_task_use_case', {
          localState: nextState
        })
      })
    )

    return () => subscriptions.forEach(subscription => subscription.unsubscribe())
  })
}

export default useDomainEventSubscriptions
