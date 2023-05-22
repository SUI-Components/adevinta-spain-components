/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Domain from '../../index.js'

describe('[Domain] RunSimpleTaskUseCase', () => {
  const domain = new Domain()
  const config = domain.get('config')
  const useCase = domain.get('run_simple_task_use_case')

  it('should successfully add a new task with one single work inside', async () => {
    // Given
    const localState = {
      tasks: []
    }

    // When
    const nextState = await useCase.execute({
      localState,
      name: 'Test task',
      start: () => null
    })

    // Then
    expect(nextState).to.have.property('tasks')
    expect(nextState.tasks).to.have.length(1)

    const task = nextState.tasks[0]
    expect(task.id).to.be.a('string')
    expect(task.createdAt).to.be.an.instanceOf(Date)
    expect(task.name).to.eql('Test task')

    expect(task).to.have.property('work')
    expect(task.work).to.have.length(1)

    const work = task.work[0]
    expect(work.createdAt).to.be.an.instanceOf(Date)
    expect(work.name).to.eql('Test task')
    expect(work.start).to.be.a('function')
    expect(work.id).to.be.a('string')
    expect(work.taskId).to.eql(task.id)
    expect(work.status).to.eql(config.get('AVAILABLE_STATUS').QUEUED)
  })
})
