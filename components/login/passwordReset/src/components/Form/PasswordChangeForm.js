import PropTypes from 'prop-types'

import {BASE_CLASS, EVENTS} from '../../config.js'
import useDisplayExpiredTokenError from '../../hooks/components/useDisplayExpiredTokenError.js'
import usePasswordChangeFormState from '../../hooks/components/usePasswordChangeFormState.js'
import useDomain from '../../hooks/useDomain.js'
import useEventBus from '../../hooks/useEventBus.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'
import useI18n from '../../hooks/useI18n.js'
import Notification from '../Info/Notification.js'
import LoginButton from '../Input/LoginButton.js'
import PasswordInputField from '../Input/PasswordInputField.js'
import SubmitButton from '../Input/SubmitButton.js'

const PasswordChangeForm = ({icons}) => {
  const i18n = useI18n()
  const domain = useDomain()
  const {getCurrentToken} = useGetCurrentToken()
  const {token} = getCurrentToken()
  const {emit} = useEventBus()

  const {
    CHANGE_PASSWORD_BUTTON_CLICK,
    CHANGE_PASSWORD_ERROR,
    CHANGE_PASSWORD_SUCCESS
  } = EVENTS

  const {
    state: {
      defaultDisabledSubmitButton,
      newPassword,
      repeatPassword,
      isLoading,
      notification,
      newPasswordErrorText,
      repeatPasswordErrorText
    },
    setNewPassword,
    setRepeatPassword,
    setNotification,
    setIsLoading
  } = usePasswordChangeFormState()

  useDisplayExpiredTokenError(setNotification)

  const getNewPasswordErrors = value => {
    return domain
      .get('validate_password_use_case')
      .execute({password: value})
      .then(([error]) => {
        switch (error?.constructor?.name) {
          case undefined:
            return ''
          case 'EmptyPasswordError':
            return i18n.t(
              'LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.EMPTY_PASSWORD'
            )
          default:
            return i18n.t(
              'LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.INVALID_PASSWORD'
            )
        }
      })
  }

  const getRepeatPasswordErrors = (
    repeatPasswordValue,
    newPasswordValue = newPassword
  ) => {
    if (
      repeatPasswordValue !== newPasswordValue &&
      repeatPasswordValue !== ''
    ) {
      return i18n.t(
        'LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.PASSWORDS_NOT_MATCH'
      )
    }

    return ''
  }

  const handleChange = e => {
    const {value} = e?.target
    getNewPasswordErrors(value).then(errorText => {
      const repeatPasswordErrorText = getRepeatPasswordErrors(
        repeatPassword,
        value
      )
      setNewPassword({
        newPassword: value,
        newPasswordErrorText: errorText,
        repeatPasswordErrorText
      })
    })
  }
  const handleChangeRepeat = e => {
    const {value} = e?.target

    getNewPasswordErrors(newPassword).then(errorText => {
      const repeatPasswordErrorText = getRepeatPasswordErrors(value)
      setRepeatPassword({
        repeatPassword: value,
        newPasswordErrorText: errorText,
        repeatPasswordErrorText
      })
    })
  }

  const handleSubmit = () => {
    emit(CHANGE_PASSWORD_BUTTON_CLICK, {})
    setIsLoading(true)
    domain
      .get('change_password_use_case')
      .execute({password: newPassword, token})
      .then(([error]) => {
        let isError = false
        let text = i18n.t(
          'LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUCCESS.PASSWORD_CHANGED'
        )

        if (error) {
          emit(CHANGE_PASSWORD_ERROR, {error})
          text = i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.SERVER_ERROR')
          isError = true
        } else emit(CHANGE_PASSWORD_SUCCESS, {})

        setNotification({
          text,
          isError
        })
      })
  }

  const isSubmitButtonEnabled = () =>
    defaultDisabledSubmitButton === false &&
    newPasswordErrorText.length === 0 &&
    repeatPasswordErrorText.length === 0 &&
    repeatPassword.length > 0

  return (
    <>
      {notification.text ? (
        <>
          <Notification
            notificationText={notification.text}
            isError={notification.isError}
          />
          <div className={`${BASE_CLASS}-formButtons`}>
            <LoginButton />
          </div>
        </>
      ) : null}
      {!notification.text ? (
        <>
          <div className={`${BASE_CLASS}-formInput`}>
            <PasswordInputField
              errorText={newPasswordErrorText}
              id="new_password"
              label={i18n.t(
                'LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL'
              )}
              name="new_password"
              onChange={handleChange}
              placeholder={i18n.t(
                'LOGIN_CROSS.PASSWORD_RESET.STEP_2.PLACEHOLDER'
              )}
              value={newPassword}
              icons={icons}
            />
          </div>
          <div className={`${BASE_CLASS}-formInput`}>
            <PasswordInputField
              errorText={repeatPasswordErrorText}
              id="repeat_password"
              label={i18n.t(
                'LOGIN_CROSS.PASSWORD_RESET.STEP_2.REPEAT_PASSWORD_LABEL'
              )}
              name="repeat_password"
              onChange={handleChangeRepeat}
              placeholder={i18n.t(
                'LOGIN_CROSS.PASSWORD_RESET.STEP_2.PLACEHOLDER'
              )}
              value={repeatPassword}
              icons={icons}
            />
          </div>
          <div className={`${BASE_CLASS}-formButtons`}>
            <SubmitButton
              isEnabled={isSubmitButtonEnabled()}
              isLoading={isLoading}
              onClick={handleSubmit}
            >
              {i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUBMIT_BUTTON')}
            </SubmitButton>
          </div>
        </>
      ) : null}
    </>
  )
}

PasswordChangeForm.displayName = 'PasswordChangeForm'
PasswordChangeForm.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object)
}
export default PasswordChangeForm
