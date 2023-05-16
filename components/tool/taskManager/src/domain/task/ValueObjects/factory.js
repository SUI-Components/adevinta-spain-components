import {TaskEntitiesFactory} from '../Entities/factory.js'
import {PriorityTaskValueObject} from './PriorityTaskValueObject.js'
import {StatusTaskValueObject} from './StatusTaskValueObject.js'
import {WorkListTaskValueObject} from './WorkListTaskValueObject.js'

export class TaskValueObjectsFactory {
  static priorityTaskValueObject = (
    config,
    priority = config.get('AVAILABLE_PRIORITIES').LOW
  ) => {
    const priorityValueObject = new PriorityTaskValueObject({
      config,
      value: priority
    })

    priorityValueObject.validate()
    return priorityValueObject
  }

  static statusTaskValueObject = (
    config,
    status = config.get('AVAILABLE_STATUS').QUEUED
  ) => {
    const statusValueObject = new StatusTaskValueObject({
      config,
      value: status
    })

    statusValueObject.validate()

    return statusValueObject
  }

  static workListTaskValueObject = (config, work = []) => {
    const workEntities = work.map(workItem =>
      TaskEntitiesFactory.workTaskEntity({config, ...workItem})
    )
    return new WorkListTaskValueObject({work: workEntities})
  }
}
