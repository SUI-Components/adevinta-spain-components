import {TaskServicesFactory} from '../Services/factory.js'
import {CancelWorkTaskUseCase} from './CancelWorkTaskUseCase.js'
import {ErrorWorkTaskUseCase} from './ErrorWorkTaskUseCase.js'
import {FinishWorkTaskUseCase} from './FinishWorkTaskUseCase.js'
import {MarkErrorTaskUseCase} from './MarkErrorTaskUseCase.js'
import {ProcessInProgressTaskUseCase} from './ProcessInProgressTaskUseCase.js'
import {ProcessQueuedTaskUseCase} from './ProcessQueuedTaskUseCase.js'
import {RunSimpleTaskUseCase} from './RunSimpleTaskUseCase.js'
import {RunTaskUseCase} from './RunTaskUseCase.js'
import {SetWorkPercentageTaskUseCase} from './SetWorkPercentageTaskUseCase.js'

export default class TaskUseCasesFactory {
  static runTaskUseCase = ({config}) => {
    const runTaskUseCase = new RunTaskUseCase({
      config,
      runTaskServiceFactory: TaskServicesFactory.runTaskService
    })
    return runTaskUseCase
  }

  static runSimpleTaskUseCase = ({config}) => {
    const runSimpleTaskUseCase = new RunSimpleTaskUseCase({
      config,
      runSimpleTaskServiceFactory: TaskServicesFactory.runSimpleTaskService
    })
    return runSimpleTaskUseCase
  }

  static setWorkPercentageTaskUseCase = ({config}) =>
    new SetWorkPercentageTaskUseCase({
      config,
      setWorkPercentageTaskServiceFactory: TaskServicesFactory.setWorkPercentageTaskService
    })

  static finishWorkTaskUseCase = ({config}) =>
    new FinishWorkTaskUseCase({
      config,
      finishWorkTaskServiceFactory: TaskServicesFactory.finishWorkTaskService
    })

  static cancelWorkTaskUseCase = ({config}) =>
    new CancelWorkTaskUseCase({
      config,
      cancelWorkTaskServiceFactory: TaskServicesFactory.cancelWorkTaskService
    })

  static errorWorkTaskUseCase = ({config}) =>
    new ErrorWorkTaskUseCase({
      config,
      errorWorkTaskServiceFactory: TaskServicesFactory.errorWorkTaskService
    })

  static processQueuedTaskUseCase = ({config}) =>
    new ProcessQueuedTaskUseCase({
      config,
      processQueuedTaskServiceFactory: TaskServicesFactory.processQueuedTaskService
    })

  static processInProgressTaskUseCase = ({config}) =>
    new ProcessInProgressTaskUseCase({
      config,
      processInProgressTaskServiceFactory: TaskServicesFactory.processInProgressTaskService
    })

  static markErrorTaskUseCase = ({config}) =>
    new MarkErrorTaskUseCase({
      config,
      markErrorTaskServiceFactory: TaskServicesFactory.markErrorTaskService
    })
}
