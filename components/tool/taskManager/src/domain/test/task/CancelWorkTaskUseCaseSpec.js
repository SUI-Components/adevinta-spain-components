/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Domain from '../../index.js'

describe('[Domain] CancelWorkTaskUseCase', () => {
  const domain = new Domain()
  const config = domain.get('config')
  const runSimpleTaskUseCase = domain.get('run_simple_task_use_case')
  const cancelWorkTaskUseCase = domain.get('cancel_work_task_use_case')

  it('should update the work internal information when it is cancelled', async () => {
    // Given
    const localState = await runSimpleTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Simple task with one work',
      start: () => null
    })

    // When
    const stateResult = await cancelWorkTaskUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id
    })

    // Then
    const task = stateResult.tasks[0]
    const work = task.work[0]
    expect(work.status).to.eql(config.get('AVAILABLE_STATUS').CANCELLED)
    expect(work.finishedAt).to.not.eql(null)
  })
})
