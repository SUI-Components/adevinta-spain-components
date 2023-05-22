import {TaskEntitiesFactory} from '../Entities/factory.js'
import {StatusTaskValueObject} from './StatusTaskValueObject.js'
import {WorkListTaskValueObject} from './WorkListTaskValueObject.js'

export class TaskValueObjectsFactory {
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

  static workListTaskValueObject = (config, work = [], taskId = null) => {
    const workEntities = work.map(workItem =>
      TaskEntitiesFactory.workTaskEntity({config, taskId, ...workItem})
    )
    return new WorkListTaskValueObject({work: workEntities})
  }
}
