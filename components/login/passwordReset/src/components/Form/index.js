import {BASE_CLASS, STAGE_PASSWORD_RESET_START} from '../../config.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'
import useI18n from './../../hooks/useI18n.js'
import PasswordChangeForm from './PasswordChangeForm.js'
import PasswordResetForm from './PasswordResetForm.js'
import UserAcquisitionText from './UserAcquisitionText.js'

const Form = () => {
  const i18n = useI18n()
  const title = i18n.t('LOGIN_CROSS.PASSWORD_RESET.REMEMBER_PASSWORD_TITLE')
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()
  const isInitialStep = stage === STAGE_PASSWORD_RESET_START
  const Form = isInitialStep ? PasswordResetForm : PasswordChangeForm

  return (
    <>
      <div className={`${BASE_CLASS}-form`}>
        <div className={`${BASE_CLASS}-formHeader`}>
          <h1 className={`${BASE_CLASS}-formHeaderTitle`}>{title}</h1>
        </div>
        <div className={`${BASE_CLASS}-formContent`}>
          <Form />
          {isInitialStep ? <UserAcquisitionText /> : null}
        </div>
      </div>

      <div className="sui-LoginPasswordReset-banner">BANNER ;-)</div>
    </>
  )
}

Form.displayName = 'Form'

export default Form
