/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import Domain from '../../index.js'

chai.use(sinonChai)

describe('[Domain] ErrorWorkTaskUseCase', () => {
  const domain = new Domain()
  const config = domain.get('config')
  const runSimpleTaskUseCase = domain.get('run_simple_task_use_case')
  const errorWorkTaskUseCase = domain.get('error_work_task_use_case')

  it('should update the work internal information when it causes an error', async () => {
    // Given
    const localState = await runSimpleTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Simple task with one work',
      start: () => null
    })

    // When
    const stateResult = await errorWorkTaskUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id,
      log: 'Horrible error happened!'
    })

    // Then
    const task = stateResult.tasks[0]
    const work = task.work[0]
    expect(work.status).to.eql(config.get('AVAILABLE_STATUS').ERROR)
    expect(work.finishedAt).to.not.eql(null)
    expect(work.log).to.eql('Horrible error happened!')
  })

  it('should execute the onError method when an error occurs', async () => {
    // Given
    const localState = await runSimpleTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Simple task with one work',
      start: () => null,
      onError: sinon.spy()
    })

    // When
    const stateResult = await errorWorkTaskUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id
    })

    // Then
    const task = stateResult.tasks[0]
    const work = task.work[0]
    expect(work.onError).to.have.callCount(1)
    expect(work.onError).to.have.been.calledWith(work)
  })
})
