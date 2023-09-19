import {SharedValueObjectsFactory} from '../../shared/ValueObjects/factory.js'
import {TaskValueObjectsFactory} from '../ValueObjects/factory.js'
import {TaskEntity} from './TaskEntity.js'
import {WorkTaskEntity} from './WorkTaskEntity.js'

export class TaskEntitiesFactory {
  static taskEntity = ({
    config,
    id,
    log,
    name,
    work,
    status,
    createdAt,
    finishedAt = null,
    updatedAt = null
  }) => {
    const taskId = SharedValueObjectsFactory.idSharedValueObject(id)
    return new TaskEntity({
      config,
      createdAt: SharedValueObjectsFactory.dateSharedValueObject(createdAt),
      finishedAt: SharedValueObjectsFactory.dateSharedValueObject(finishedAt),
      id: taskId,
      log: SharedValueObjectsFactory.stringSharedValueObject(log),
      name: SharedValueObjectsFactory.stringSharedValueObject(name),
      status: TaskValueObjectsFactory.statusTaskValueObject(config, status),
      updatedAt: SharedValueObjectsFactory.dateSharedValueObject(updatedAt),
      work: TaskValueObjectsFactory.workListTaskValueObject(
        config,
        work,
        taskId.get()
      )
    })
  }

  static workTaskEntity = ({
    canBeInterrupted = false,
    config,
    createdAt,
    finishedAt = null,
    id,
    isVisible = false,
    log,
    name,
    onComplete,
    onError,
    parentId = null,
    percentage,
    result = null,
    retryAttempts,
    start,
    status,
    taskId = null,
    updatedAt = null
  }) =>
    new WorkTaskEntity({
      canBeInterrupted,
      config,
      createdAt: SharedValueObjectsFactory.dateSharedValueObject(createdAt),
      finishedAt: SharedValueObjectsFactory.dateSharedValueObject(finishedAt),
      id: SharedValueObjectsFactory.idSharedValueObject(id),
      isVisible,
      log: SharedValueObjectsFactory.stringSharedValueObject(log),
      name: SharedValueObjectsFactory.stringSharedValueObject(name),
      onComplete:
        SharedValueObjectsFactory.callbackSharedValueObject(onComplete),
      onError: SharedValueObjectsFactory.callbackSharedValueObject(onError),
      parentId: SharedValueObjectsFactory.idSharedValueObject(parentId),
      percentage: SharedValueObjectsFactory.numberSharedValueObject(percentage),
      result: TaskValueObjectsFactory.workResultTaskValueObject(result),
      retryAttempts:
        SharedValueObjectsFactory.numberSharedValueObject(retryAttempts),
      start: SharedValueObjectsFactory.callbackSharedValueObject(start),
      status: TaskValueObjectsFactory.statusTaskValueObject(config, status),
      taskId: SharedValueObjectsFactory.idSharedValueObject(taskId),
      updatedAt: SharedValueObjectsFactory.dateSharedValueObject(updatedAt)
    })
}
