import {EntryPointFactory} from '@s-ui/domain'

import Config from './config.js'

/* const importActivityFactory = () => import('./activity/UseCases/factory.js')

const activityUseCases = {
  get_account_activity_use_case: [
    importActivityFactory,
    'getAccountActivityUseCase'
  ]
} */

const useCases = {
  // ...activityUseCases
}

export default EntryPointFactory({config: new Config(), useCases})
