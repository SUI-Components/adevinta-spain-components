import PropTypes from 'prop-types'

import AtomButton, {
  // atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import {BASE_CLASS} from '../../config.js'
import useDisplayExpiredTokenError from '../../hooks/components/useDisplayExpiredTokenError.js'
import usePasswordChangeFormState from '../../hooks/components/usePasswordChangeFormState.js'
import useDomain from '../../hooks/useDomain.js'
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

  const {
    state: {newPassword, repeatPassword, isLoading, notification},
    setNewPassword,
    setRepeatPassword,
    setNotification,
    setIsLoading
  } = usePasswordChangeFormState()

  useDisplayExpiredTokenError(setNotification)

  const handleChange = e => {
    const {value} = e?.target
    setNewPassword(value)
  }
  const handleChangeRepeat = e => {
    const {value} = e?.target
    setRepeatPassword(value)
  }

  const handleSubmit = () => {
    setIsLoading(true)
    domain
      .get('change_password_use_case')
      .execute({password: newPassword, token})
      .then(([error]) => {
        if (error) {
          setNotification({
            text: i18n.t(
              'LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.SERVER_ERROR'
            ),
            isError: true
          })
          return
        }

        setNotification({
          text: i18n.t(
            'LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUCCESS.PASSWORD_CHANGED'
          ),
          isError: false
        })
      })
  }

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
              // errorText={errorText}
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
              // errorText={errorText}
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
            <SubmitButton isLoading={isLoading} onClick={handleSubmit}>
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
