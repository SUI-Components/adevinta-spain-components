import MoleculeInputField from '@s-ui/react-molecule-input-field'

import {BASE_CLASS, EVENTS} from '../../config.js'
import useLoginFormState from '../../hooks/components/useLoginFormState.js'
// import useDomain from '../../hooks/useDomain.js'
import useEventBus from '../../hooks/useEventBus.js'
import useI18n from '../../hooks/useI18n.js'
import Notification from '../Info/Notification.js'
// import LoginButton from '../Input/LoginButton.js'
import SubmitButton from '../Input/SubmitButton.js'

const LoginForm = () => {
  const {
    state: {
      // defaultDisabledSubmitButton,
      email,
      password,
      isLoading,
      notification,
      emailErrorText,
      passwordErrorText
    },
    setEmail,
    setPassword
    // setNotification,
    // setIsLoading
  } = useLoginFormState()

  const i18n = useI18n()
  // const domain = useDomain()
  const {emit} = useEventBus()

  const {LOGIN} = EVENTS

  // const getErrorText = value => {
  //   return domain
  //     .get('validate_email_password_use_case')
  //     .execute({email: value})
  //     .then(([error]) => {
  //       switch (error?.constructor?.name) {
  //         case undefined:
  //           return ''
  //         case 'EmptyEmailPasswordError':
  //           emit(RESET_PASSWORD_EMAIL_VALIDATION_ERROR, {email, error})
  //           return i18n.t(
  //             'LOGIN_CROSS.PASSWORD_RESET.STEP_1.ERRORS.EMPTY_EMAIL'
  //           )
  //         default:
  //           emit(RESET_PASSWORD_EMAIL_VALIDATION_ERROR, {email, error})
  //           return i18n.t(
  //             'LOGIN_CROSS.PASSWORD_RESET.STEP_1.ERRORS.INVALID_EMAIL'
  //           )
  //       }
  //     })
  // }

  const handleEmailChange = e => {
    const {value} = e?.target
    setEmail({email: value})
  }
  const handlePasswordChange = e => {
    const {value} = e?.target
    setPassword({password: value})
  }

  // const executeResetPasswordUseCase = ({onSuccessText}) => {
  //   domain
  //     .get('reset_password_use_case')
  //     .execute({email})
  //     .then(([error]) => {
  //       if (error) {
  //         emit(RESET_PASSWORD_ERROR, {email})
  //         setNotification({
  //           text: i18n.t('LOGIN_CROSS.PASSWORD_RESET.ERRORS.GENERIC_ERROR'),
  //           isError: true
  //         })
  //         return
  //       }

  //       emit(RESET_PASSWORD_SUCCESS, {email})
  //       setNotification({
  //         text: onSuccessText,
  //         isError: false
  //       })
  //     })
  // }

  const handleSubmit = () => {
    emit(LOGIN, {
      email,
      password
    })
    // emit(RESET_PASSWORD_BUTTON_CLICK, {email})
    // getErrorText(email).then(errorText => {
    //   if (errorText) {
    //     setErrorText({errorText})
    //     return
    //   }
    //   setIsLoading(true)
    //   executeResetPasswordUseCase({
    //     onSuccessText: i18n.t(
    //       'LOGIN_CROSS.PASSWORD_RESET.STEP_1.SUCCESS.EMAIL_SENDED',
    //       {
    //         email
    //       }
    //     )
    //   })
    // })
  }

  return (
    <>
      {notification.text ? (
        <>
          <Notification
            notificationText={notification.text}
            isError={notification.isError}
          />
        </>
      ) : null}
      {!notification.text ? (
        <>
          <div className={`${BASE_CLASS}-formInput no-margin`}>
            <MoleculeInputField
              errorText={emailErrorText}
              id="email"
              label={i18n.t('LOGIN_CROSS.LOGIN.EMAIL')}
              name="email"
              onChange={handleEmailChange}
              placeholder={i18n.t(
                'LOGIN_CROSS.PASSWORD_RESET.STEP_1.EMAIL_PLACEHOLDER'
              )}
              size="l"
              type="text"
              value={email}
            />
          </div>
          <div className={`${BASE_CLASS}-formInput`}>
            <MoleculeInputField
              errorText={passwordErrorText}
              id="password"
              label={i18n.t('LOGIN_CROSS.LOGIN.PASSWORD')}
              name="password"
              onChange={handlePasswordChange}
              placeholder={i18n.t('LOGIN_CROSS.LOGIN.ENTER_YOUR_PASSWORD')}
              size="l"
              type="password"
              value={password}
            />
          </div>
          <div className={`${BASE_CLASS}-formInput`}>
            <div className={`${BASE_CLASS}-formLink`}>
              {i18n.t('LOGIN_CROSS.LOGIN.FORGOT_YOUR_PASSWORD')}
            </div>
          </div>
          {/* <div className={`${BASE_CLASS}-formInput`}>
            {i18n.t('LOGIN_CROSS.LOGIN.RELAYING_ON_THIS_DEVICE')}
          </div> */}
        </>
      ) : null}
      <div className={`${BASE_CLASS}-formButtons`}>
        {!notification.text ? (
          <SubmitButton isEnabled isLoading={isLoading} onClick={handleSubmit}>
            {i18n.t('LOGIN_CROSS.LOGIN.SUBMIT_BUTTON')}
          </SubmitButton>
        ) : null}

        {/* <LoginButton /> */}
      </div>
    </>
  )
}

LoginForm.displayName = 'LoginForm'

export default LoginForm
