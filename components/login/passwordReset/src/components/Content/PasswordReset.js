import PropTypes from 'prop-types'

import {BASE_CLASS, STAGE_PASSWORD_RESET_START} from '../../config.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'
import PasswordChangeForm from '../Form/PasswordChangeForm.js'
import PasswordResetForm from '../Form/PasswordResetForm.js'
import UserAcquisitionText from '../Info/UserAcquisitionText.js'
import Form from './Form.js'
import StageInfo from './StageInfo.js'

const PasswordReset = ({icons}) => {
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()
  const isInitialStep = stage === STAGE_PASSWORD_RESET_START
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-item`}>
        <StageInfo />
      </div>
      <div className={`${BASE_CLASS}-item`}>
        <Form icons={icons}>
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
