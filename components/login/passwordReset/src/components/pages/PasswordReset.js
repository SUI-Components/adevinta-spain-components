import {BASE_CLASS, STAGE_PASSWORD_RESET_START} from '../../config.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'
import UserAcquisitionText from '../atoms/UserAcquisitionText.js'
import PasswordChangeForm from '../organisms/PasswordChangeForm.js'
import PasswordResetForm from '../organisms/PasswordResetForm.js'
import StageInfo from '../organisms/StageInfo.js'
import Form from '../templates/Form.js'

const PasswordReset = () => {
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()
  const isInitialStep = stage === STAGE_PASSWORD_RESET_START

  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-item`}>
        <StageInfo />
      </div>
      <div className={`${BASE_CLASS}-item`}>
        <Form>
          {isInitialStep ? (
            <>
              <PasswordResetForm />
              <UserAcquisitionText />
            </>
          ) : (
            <>
              <PasswordChangeForm />
            </>
          )}
        </Form>
      </div>
      <div className={`${BASE_CLASS}-item ${BASE_CLASS}-itemFalse`} />
    </div>
  )
}

PasswordReset.displayName = 'PasswordReset'

export default PasswordReset
