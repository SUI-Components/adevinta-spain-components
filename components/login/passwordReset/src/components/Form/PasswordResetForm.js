// import {Link} from 'react-router-dom'
import {useState} from 'react'

import AtomButton, {
  // atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'
import MoleculeInputField from '@s-ui/react-molecule-input-field'

import {BASE_CLASS} from '../../config.js'
import useDomain from '../../hooks/useDomain.js'
import useI18n from '../../hooks/useI18n.js'
import Notification from '../Info/Notification.js'
import LoginButton from '../Input/LoginButton.js'

const PasswordResetForm = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [notificationState, setNotificationState] = useState({
    text: '',
    isError: false
  })

  const i18n = useI18n()
  const domain = useDomain()

  const checkIfInputIsEmpty = value => {
    const isEmpty = value.length === 0
    isEmpty
      ? setErrorText(
          i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.ERRORS.EMPTY_EMAIL')
        )
      : setErrorText('')
    return isEmpty
  }

  const handleChange = e => {
    const {value} = e?.target
    setEmail(value)
    checkIfInputIsEmpty(value)
    setIsLoading(false)
  }

  const executeResetPasswordUseCase = ({onSuccessText}) => {
    domain
      .get('reset_password_use_case')
      .execute({email})
      .then(([error, result]) => {
        if (error) {
          setNotificationState({
            text: i18n.t('LOGIN_CROSS.PASSWORD_RESET.ERRORS.GENERIC_ERROR'),
            isError: true
          })
        } else {
          setNotificationState({
            text: onSuccessText,
            isError: false
          })
        }
        setIsLoading(false)
      })
  }

  const handleSubmit = () => {
    setIsLoading(true)

    executeResetPasswordUseCase({
      onSuccessText: i18n.t(
        'LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUCCESS.EMAIL_SENDED',
        {
          email
        }
      )
    })
  }

  const handleResend = () => {
    executeResetPasswordUseCase({
      onSuccessText: i18n.t(
        'LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUCCESS.EMAIL_RESEND',
        {
          email
        }
      )
    })
  }

  return (
    <>
      {notificationState.text ? (
        <Notification
          notificationText={notificationState.text}
          isError={notificationState.isError}
          handleResend={handleResend}
        />
      ) : null}
      {!notificationState.text ? (
        <div className={`${BASE_CLASS}-formInput`}>
          <MoleculeInputField
            errorText={errorText}
            id="email"
            label={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.EMAIL_LABEL')}
            name="email"
            onChange={handleChange}
            placeholder={i18n.t(
              'LOGIN_CROSS.PASSWORD_RESET.STEP_1.EMAIL_PLACEHOLDER'
            )}
            size="l"
            type="text"
            value={email}
          />
        </div>
      ) : null}
      <div className={`${BASE_CLASS}-formButtons`}>
        {!notificationState.text ? (
          <div className={`${BASE_CLASS}-formButton`}>
            <AtomButton
              // disabled={} // TODO
              fullWidth
              isLoading={isLoading} // TODO
              onClick={handleSubmit} // TODO
              shape={atomButtonShapes.CIRCULAR}
              size={atomButtonSizes.LARGE}
            >
              {i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUBMIT_BUTTON')}
            </AtomButton>
          </div>
        ) : null}
        <div className={`${BASE_CLASS}-formButton`}>
          <LoginButton />
        </div>
      </div>
    </>
  )
}

PasswordResetForm.displayName = 'PasswordResetForm'

export default PasswordResetForm
