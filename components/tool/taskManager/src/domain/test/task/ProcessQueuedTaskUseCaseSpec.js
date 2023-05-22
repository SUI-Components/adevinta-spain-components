/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import Domain from '../../index.js'

chai.use(sinonChai)

describe('[Domain] ProcessQueuedTaskUseCase', () => {
  const domain = new Domain()
  const config = domain.get('config')
  const runTaskUseCase = domain.get('run_task_use_case')
  const processQueuedTaskUseCase = domain.get('process_queued_task_use_case')

  it('should mark as completed all queued tasks that does not have runnable queued work', async() => {
    // Given
    const localState = await runTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Test task',
      work: []
    })

    // When
    const nextState = await processQueuedTaskUseCase.execute({
      localState
    })

    // Then
    expect(nextState.tasks[0].status).to.eql(config.get('AVAILABLE_STATUS').COMPLETED)
  })

  it('should mark as in progress all queued tasks that have runnable queued work', async () => {
    // Given
    const localState = await runTaskUseCase.execute({
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

    // When
    const nextState = await processQueuedTaskUseCase.execute({
      localState
    })

    // Then
    expect(nextState.tasks[0].status).to.eql(config.get('AVAILABLE_STATUS').IN_PROGRESS)
  })

  it ('should execute all runnable queued work from queued tasks', async () => {
    // Given
    const localState = await runTaskUseCase.execute({
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
          start: sinon.spy()
        }
      ]
    })

    // When
    const nextState = await processQueuedTaskUseCase.execute({
      localState
    })

    // Then
    const task = nextState.tasks[0]
    const work = task.work[0]
    expect(task.status).to.eql(config.get('AVAILABLE_STATUS').IN_PROGRESS)
    expect(work.start).to.have.callCount(1)
  })
})
