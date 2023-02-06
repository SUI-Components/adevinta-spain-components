import {EntryPointFactory} from '@s-ui/domain'

import Config from './config.js'

const importPasswordFactory = () => import('./password/UseCases/factory.js')

const passwordUseCases = {
  change_password_use_case: [importPasswordFactory, 'changePasswordUseCase'],
  reset_password_use_case: [importPasswordFactory, 'resetPasswordUseCase'],
  validate_email_password_use_case: [
    importPasswordFactory,
    'validateEmailPasswordUseCase'
  ],
  validate_password_use_case: [importPasswordFactory, 'validatePasswordUseCase']
}

const useCases = {
  ...passwordUseCases
}

export default EntryPointFactory({config: new Config(), useCases})
