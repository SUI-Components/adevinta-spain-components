import {useState} from 'react'

import PropTypes from 'prop-types'

import AtomButton, {
  // atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import {BASE_CLASS} from '../../config.js'
import useDomain from '../../hooks/useDomain.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'
import useI18n from '../../hooks/useI18n.js'
import Notification from '../Info/Notification.js'
import LoginButton from '../Input/LoginButton.js'
import PasswordInputField from '../Input/PasswordInputField.js'
const PasswordChangeForm = ({icons}) => {
  const i18n = useI18n()
  const domain = useDomain()
  const {getCurrentToken} = useGetCurrentToken()
  const {token} = getCurrentToken()
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [notificationState, setNotificationState] = useState({
    text: '',
    isError: false
  })

  const handleChange = e => {
    const {value} = e?.target
    setNewPassword(value)
  }
  const handleChangeRepeat = e => {
    const {value} = e?.target
    setRepeatPassword(value)
  }

  const handleSubmit = () => {
    domain
      .get('change_password_use_case')
      .execute({password: newPassword, token})
      .then(([error]) => {
        if (error) {
          setNotificationState({
            text: i18n.t(
              'LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.SERVER_ERROR'
            ),
            isError: true
          })
          return
        }

        setNotificationState({
          text: i18n.t(
            'LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUCCESS.PASSWORD_CHANGED'
          ),
          isError: false
        })
      })
  }

  return (
    <>
      {notificationState.text ? (
        <>
          <Notification
            notificationText={notificationState.text}
            isError={notificationState.isError}
          />
          <div className={`${BASE_CLASS}-formButtons`}>
            <div className={`${BASE_CLASS}-formButton`}>
              <LoginButton />
            </div>
          </div>
        </>
      ) : null}
      {!notificationState.text ? (
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
            <div className={`${BASE_CLASS}-formButton`}>
              <AtomButton
                // disabled={}  // TODO
                fullWidth
                // isLoading={isLoading}  // TODO
                onClick={handleSubmit}
                shape={atomButtonShapes.CIRCULAR}
                size={atomButtonSizes.LARGE}
              >
                {i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.SUBMIT_BUTTON')}
              </AtomButton>
            </div>
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
