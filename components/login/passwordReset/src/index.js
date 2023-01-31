import PropTypes from 'prop-types'

import PasswordResetHandler from './components/PasswordResetHandler.js'
import {STAGE_PASSWORD_CHANGE, STAGE_PASSWORD_RESET_START} from './config.js'
import {PasswordResetProvider} from './context.js'

export default function LoginPasswordReset(props) {
  return (
    <PasswordResetProvider {...props}>
      <PasswordResetHandler icon={props.icon} />
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
  endpoints: PropTypes.shape({
    /* Endpoint to start the reset process */
    resetPassword: PropTypes.string.isRequired,
    /* Endpoint to change the password */
    changePassword: PropTypes.string.isRequired
  }),
  /* Allows to override total or partially the i18n dictionary */
  i18n: PropTypes.object,
  /* Function executed every time an event is submitted */
  onEvent: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}
