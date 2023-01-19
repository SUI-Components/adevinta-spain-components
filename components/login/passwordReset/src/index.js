import PropTypes from 'prop-types'

import FormHandler from './components/FormHandler.js'
import StageInfo from './components/StageInfo.js'
import {BASE_CLASS} from './config.js'
import {PasswordResetProvider} from './context.js'

export default function LoginPasswordReset({i18n: customI18n}) {
  return (
    <PasswordResetProvider customI18n={customI18n}>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}-item`}>
          <StageInfo />
        </div>
        <div className={`${BASE_CLASS}-item`}>
          <FormHandler />
        </div>
        <div className={`${BASE_CLASS}-item ${BASE_CLASS}-itemFalse`} />
      </div>
    </PasswordResetProvider>
  )
}

LoginPasswordReset.displayName = 'LoginPasswordReset'
LoginPasswordReset.propTypes = {
  i18n: PropTypes.object
}
