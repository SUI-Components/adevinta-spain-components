import {STAGE_PASSWORD_RESET_START} from '../config.js'
import useGetCurrentToken from '../hooks/useGetCurrentToken.js'
import Form from './Form/index.js'
import PasswordChangeForm from './Form/PasswordChangeForm.js'
import PasswordResetForm from './Form/PasswordResetForm.js'
import UserAcquisitionText from './Form/UserAcquisitionText.js'

const FormHandler = () => {
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()
  const isInitialStep = stage === STAGE_PASSWORD_RESET_START

  return (
    <div className="sui-LoginPasswordReset-formHandler">
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
  )
}

FormHandler.displayName = 'FormHandler'

export default FormHandler
