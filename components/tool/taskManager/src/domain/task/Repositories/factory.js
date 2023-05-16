import {TaskEntitiesFactory} from '../Entities/factory.js'
import {LocalStateTaskRepository} from './LocalStateTaskRepository.js'

export class TaskRepositoriesFactory {
  static localStateTaskRepository = ({config, localState}) =>
    new LocalStateTaskRepository({
      config,
      localState,
      taskEntityFactory: TaskEntitiesFactory.taskEntity,
      workTaskEntityFactory: TaskEntitiesFactory.workTaskEntity
    })
}
