/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import Domain from '../../index.js'

chai.use(sinonChai)

describe('[Domain] FinishWorkTaskUseCase', () => {
  const domain = new Domain()
  const config = domain.get('config')
  const runSimpleTaskUseCase = domain.get('run_simple_task_use_case')
  const finishWorkTaskUseCase = domain.get('finish_work_task_use_case')

  it('should update the work internal information when it finishes', async () => {
    // Given
    const localState = await runSimpleTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Simple task with one work',
      start: () => null
    })

    // When
    const stateResult = await finishWorkTaskUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id
    })

    // Then
    const task = stateResult.tasks[0]
    const work = task.work[0]
    expect(work.status).to.eql(config.get('AVAILABLE_STATUS').COMPLETED)
    expect(work.percentage).to.eql(100)
    expect(work.finishedAt).to.not.eql(null)
  })

  it('should execute the onComplete method when a work is finished', async () => {
    // Given
    const localState = await runSimpleTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Simple task with one work',
      start: () => null,
      onComplete: sinon.spy()
    })

    // When
    const stateResult = await finishWorkTaskUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id
    })

    // Then
    const task = stateResult.tasks[0]
    const work = task.work[0]
    expect(work.onComplete).to.have.callCount(1)
    expect(work.onComplete).to.have.been.calledWith(work)
  })
})
