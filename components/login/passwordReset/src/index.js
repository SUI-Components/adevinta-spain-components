import PropTypes from 'prop-types'

import FormHandler from './components/FormHandler.js'
import StageInfo from './components/StageInfo.js'
import {PasswordResetProvider} from './context.js'

export default function LoginPasswordReset({i18n: customI18n}) {
  return (
    <PasswordResetProvider customI18n={customI18n}>
      <div className="sui-LoginPasswordReset">
        <StageInfo />
        <FormHandler />
      </div>
    </PasswordResetProvider>
  )
}

LoginPasswordReset.displayName = 'LoginPasswordReset'
LoginPasswordReset.propTypes = {
  i18n: PropTypes.object
}
