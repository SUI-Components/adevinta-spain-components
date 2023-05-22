/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Domain from '../../index.js'

describe('[Domain] SetWorkPercentageTaskUseCase', () => {
  const domain = new Domain()
  const runSimpleTaskUseCase = domain.get('run_simple_task_use_case')
  const setWorkPercentageUseCase = domain.get(
    'set_work_percentage_task_use_case'
  )

  it('should successfully modify the completion percentage of an specific work', async () => {
    // Given
    const localState = await runSimpleTaskUseCase.execute({
      localState: {
        tasks: []
      },
      name: 'Simple task with one work',
      start: () => null
    })

    // When
    const nextState = await setWorkPercentageUseCase.execute({
      localState,
      workId: localState.tasks[0].work[0].id,
      taskId: localState.tasks[0].id,
      percentage: 25
    })

    // Then
    const task = nextState.tasks[0]
    const work = task.work[0]
    expect(work.percentage).to.eql(25)
  })
})
