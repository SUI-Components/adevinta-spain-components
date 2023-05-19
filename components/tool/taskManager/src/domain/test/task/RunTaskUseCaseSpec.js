/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Domain from '../../index.js'

describe('[Domain] RunTaskUseCase', () => {
  const domain = new Domain()
  const config = domain.get('config')
  const useCase = domain.get('run_task_use_case')

  it('should successfully add a new task with multiple work items', async () => {
    // Given
    const localState = {
      tasks: []
    }

    // When
    const result = await useCase.execute({
      localState,
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
          parentId: 'MY_WORK_WITH_CUSTOM_ID',
          name: 'Second work, with random id, that depends on the first one',
          onComplete: () => null,
          onError: () => null,
          start: () => null
        }
      ]
    })

    // Then
    expect(result).to.have.property('tasks')
    expect(result.tasks).to.have.length(1)

    const task = result.tasks[0]
    expect(task.id).to.be.a('string')
    expect(task.createdAt).to.be.an.instanceOf(Date)
    expect(task.name).to.eql('Test task')

    expect(task).to.have.property('work')
    expect(task.work).to.have.length(2)

    const assertWork = work => {
      expect(work.createdAt).to.be.an.instanceOf(Date)
      expect(work.name).to.be.an('string')
      expect(work.start).to.be.a('function')
      expect(work.onComplete).to.be.a('function')
      expect(work.onError).to.be.a('function')
      expect(work.id).to.be.a('string')
      expect(work.taskId).to.eql(task.id)
      expect(work.status).to.eql(config.get('AVAILABLE_STATUS').QUEUED)
    }
    assertWork(task.work[0])
    assertWork(task.work[1])
  })
})
