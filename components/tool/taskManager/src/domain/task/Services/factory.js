import {TaskEntitiesFactory} from '../Entities/factory.js'
import {TaskRepositoriesFactory} from '../Repositories/factory.js'
import {CancelWorkTaskService} from './CancelWorkTaskService.js'
import {ErrorWorkTaskService} from './ErrorWorkTaskService.js'
import {FinishWorkTaskService} from './FinishWorkTaskService.js'
import {MarkErrorTaskService} from './MarkErrorTaskService.js'
import {ProcessInProgressTaskService} from './ProcessInProgressTaskService.js'
import {ProcessQueuedTaskService} from './ProcessQueuedTaskService.js'
import {RunSimpleTaskService} from './RunSimpleTaskService.js'
import {RunTaskService} from './RunTaskService.js'
import {SetWorkPercentageTaskService} from './SetWorkPercentageTaskService.js'

export class TaskServicesFactory {
  static runSimpleTaskService = ({config, localState}) =>
    new RunSimpleTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      }),
      taskEntityFactory: TaskEntitiesFactory.taskEntity
    })

  static runTaskService = ({config, localState}) =>
    new RunTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      }),
      taskEntityFactory: TaskEntitiesFactory.taskEntity
    })

  static setWorkPercentageTaskService = ({config, localState}) =>
    new SetWorkPercentageTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      })
    })

  static finishWorkTaskService = ({config, localState}) =>
    new FinishWorkTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      })
    })

  static cancelWorkTaskService = ({config, localState}) =>
    new CancelWorkTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      })
    })

  static errorWorkTaskService = ({config, localState}) =>
    new ErrorWorkTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      })
    })

  static processQueuedTaskService = ({config, localState}) =>
    new ProcessQueuedTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      })
    })

  static processInProgressTaskService = ({config, localState}) =>
    new ProcessInProgressTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      })
    })

  static markErrorTaskService = ({config, localState}) =>
    new MarkErrorTaskService({
      config,
      taskRepository: TaskRepositoriesFactory.localStateTaskRepository({
        config,
        localState
      })
    })
}
