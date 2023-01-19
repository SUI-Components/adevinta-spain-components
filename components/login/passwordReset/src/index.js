import PropTypes from 'prop-types'

import PasswordResetHandler from './components/PasswordResetHandler.js'
import {STAGE_PASSWORD_CHANGE, STAGE_PASSWORD_RESET_START} from './config.js'
import {PasswordResetProvider} from './context.js'

export default function LoginPasswordReset(props) {
  return (
    <PasswordResetProvider {...props}>
      <PasswordResetHandler />
    </PasswordResetProvider>
  )
}

LoginPasswordReset.displayName = 'LoginPasswordReset'
LoginPasswordReset.propTypes = {
  /* Allows to define which stage will be rendered in case the component is loaded in SSR mode */
  defaultStage: PropTypes.oneOf([
    STAGE_PASSWORD_RESET_START,
    STAGE_PASSWORD_CHANGE
  ]),
  /* Allows to override total or partially the i18n dictionary */
  i18n: PropTypes.object
}
