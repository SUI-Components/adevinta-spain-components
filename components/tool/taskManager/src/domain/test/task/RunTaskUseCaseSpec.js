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
    const nextState = await useCase.execute({
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
    expect(nextState).to.have.property('tasks')
    expect(nextState.tasks).to.have.length(1)

    const task = nextState.tasks[0]
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

  it('should mark as not visible all works by default when the "isVisible" param is not specified', async () => {
    // Given
    const localState = {
      tasks: []
    }

    // When
    const nextState = await useCase.execute({
      localState,
      name: 'Test task',
      work: [
        {
          name: 'First work',
          onComplete: () => null,
          onError: () => null,
          start: () => null
        }
      ]
    })

    // Then
    const firstWork = nextState.tasks[0].work[0]
    expect(firstWork.isVisible).to.eql(false)
  })

  it('should mark as visible a work when the "isVisible" param is set as true', async () => {
    // Given
    const localState = {
      tasks: []
    }

    // When
    const nextState = await useCase.execute({
      localState,
      name: 'Test task',
      work: [
        {
          name: 'First work',
          onComplete: () => null,
          onError: () => null,
          start: () => null,
          isVisible: true
        }
      ]
    })

    // Then
    const firstWork = nextState.tasks[0].work[0]
    expect(firstWork.isVisible).to.eql(true)
  })

  it('should include a prop to know how many works from a task are visible', async () => {
    // Given
    const localState = {
      tasks: []
    }

    // When
    const nextState = await useCase.execute({
      localState,
      name: 'Test task',
      work: [
        {
          name: 'Work 1',
          onComplete: () => null,
          onError: () => null,
          start: () => null,
          isVisible: true
        },
        {
          name: 'Work 2',
          onComplete: () => null,
          onError: () => null,
          start: () => null,
          isVisible: true
        },
        {
          name: 'Work 3',
          onComplete: () => null,
          onError: () => null,
          start: () => null,
          isVisible: false
        },
        {
          name: 'Work 4',
          onComplete: () => null,
          onError: () => null,
          start: () => null,
          isVisible: false
        }
      ]
    })

    // Then
    expect(nextState.tasks[0].visibleWork).to.eql(2)
  })
})
