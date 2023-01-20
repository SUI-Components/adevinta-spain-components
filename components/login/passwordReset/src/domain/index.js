import {EntryPointFactory} from '@s-ui/domain'

import Config from './config.js'

const importPasswordFactory = () => import('./password/UseCases/factory.js')

const passwordUseCases = {
  reset_password_use_case: [importPasswordFactory, 'resetPasswordUseCase']
}

const useCases = {
  ...passwordUseCases
}

export default EntryPointFactory({config: new Config(), useCases})
