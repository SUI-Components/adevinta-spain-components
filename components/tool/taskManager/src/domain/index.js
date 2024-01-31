import {EntryPointFactory} from '@s-ui/domain'

import Config from './config.js'

const importTaskFactory = () => import('./task/UseCases/factory.js')

const taskUseCases = {
  run_simple_task_use_case: [importTaskFactory, 'runSimpleTaskUseCase'],
  run_task_use_case: [importTaskFactory, 'runTaskUseCase'],
  set_work_percentage_task_use_case: [importTaskFactory, 'setWorkPercentageTaskUseCase'],
  finish_work_task_use_case: [importTaskFactory, 'finishWorkTaskUseCase'],
  cancel_work_task_use_case: [importTaskFactory, 'cancelWorkTaskUseCase'],
  error_work_task_use_case: [importTaskFactory, 'errorWorkTaskUseCase'],
  process_queued_task_use_case: [importTaskFactory, 'processQueuedTaskUseCase'],
  process_in_progress_task_use_case: [importTaskFactory, 'processInProgressTaskUseCase'],
  mark_error_task_use_case: [importTaskFactory, 'markErrorTaskUseCase']
}

const useCases = {
  ...taskUseCases
}

export default EntryPointFactory({config: new Config(), useCases})
