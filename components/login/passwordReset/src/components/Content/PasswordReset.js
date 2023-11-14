import PropTypes from 'prop-types'

import {BASE_CLASS, STAGE_PASSWORD_RESET_START} from '../../config.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'
import useI18n from '../../hooks/useI18n.js'
import PasswordChangeForm from '../Form/PasswordChangeForm.js'
import PasswordResetForm from '../Form/PasswordResetForm.js'
import UserAcquisitionText from '../Info/UserAcquisitionText.js'
import Form from './Form.js'
import StageInfo from './StageInfo.js'

const PasswordReset = ({icons}) => {
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()
  const i18n = useI18n()

  const isInitialStep = stage === STAGE_PASSWORD_RESET_START

  const title = i18n.t('LOGIN_CROSS.PASSWORD_RESET.REMEMBER_PASSWORD_TITLE')
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-item`}>
        <StageInfo />
      </div>
      <div className={`${BASE_CLASS}-item`}>
        <Form icons={icons} title={title}>
          {isInitialStep ? (
            <>
              <PasswordResetForm icons={icons} />
              <UserAcquisitionText />
            </>
          ) : (
            <>
              <PasswordChangeForm icons={icons} />
            </>
          )}
        </Form>
      </div>
    </div>
  )
}

PasswordReset.displayName = 'PasswordReset'

PasswordReset.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object)
}

export default PasswordReset
