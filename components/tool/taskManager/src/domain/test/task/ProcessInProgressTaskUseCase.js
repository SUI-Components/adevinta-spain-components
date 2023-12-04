/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import Domain from '../../index.js'

chai.use(sinonChai)

describe('[Domain] ProcessInProgressTaskUseCase', () => {
  const domain = new Domain()
  const config = domain.get('config')
  const finishWorkTaskUseCase = domain.get('finish_work_task_use_case')
  const runTaskUseCase = domain.get('run_task_use_case')
  const processQueuedTaskUseCase = domain.get('process_queued_task_use_case')
  const processInProgressTaskUseCase = domain.get('process_in_progress_task_use_case')

  it('should mark as completed all in progress tasks that does not have runnable queued work', async () => {
    // Given
    let localState = await runTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Test task',
      work: [
        {
          id: 'MY_WORK_WITH_CUSTOM_ID',
          name: 'First work',
          onComplete: () => null,
          onError: () => null,
          start: () => null
        }
      ]
    })

    localState = await processQueuedTaskUseCase.execute({
      localState
    })

    localState = await finishWorkTaskUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id
    })

    // When
    const nextState = await processInProgressTaskUseCase.execute({
      localState
    })

    // Then
    expect(nextState.tasks[0].status).to.eql(config.get('AVAILABLE_STATUS').COMPLETED)
  })

  it('should execute all runnable queued work from queued tasks', async () => {
    // Given
    let localState = await runTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Test task',
      work: [
        {
          id: 'MY_WORK_WITH_CUSTOM_ID',
          name: 'First work',
          onComplete: () => null,
          onError: () => null,
          start: () => null
        },
        {
          name: 'Second work',
          start: sinon.spy()
        }
      ]
    })

    localState = await processQueuedTaskUseCase.execute({
      localState
    })

    localState = await finishWorkTaskUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id
    })

    // When
    const nextState = await processInProgressTaskUseCase.execute({
      localState
    })

    // Then
    const task = nextState.tasks[0]
    const work = task.work[1]
    expect(work.status).to.eql(config.get('AVAILABLE_STATUS').IN_PROGRESS)
    expect(work.start).to.have.callCount(1)
  })
})
