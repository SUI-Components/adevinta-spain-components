import {useState} from 'react'

import AtomButton, {
  // atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import {BASE_CLASS} from '../../config.js'
import useDomain from '../../hooks/useDomain.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'
import useI18n from '../../hooks/useI18n.js'
import PasswordInputField from '../molecules/PasswordInputField.js'
const PasswordChangeForm = () => {
  const i18n = useI18n()
  const domain = useDomain()
  const {getCurrentToken} = useGetCurrentToken()
  const {token} = getCurrentToken()
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleChange = e => {
    const {value} = e?.target
    setNewPassword(value)
    console.log('handleChange', value)
  }
  const handleChangeRepeat = e => {
    const {value} = e?.target
    setRepeatPassword(value)
    console.log('handleChange repeat', value)
  }

  const handleSubmit = () => {
    console.log('handleSubmit: Call to use case')
    domain
      .get('change_password_use_case')
      .execute({password: newPassword, token})
      .then(([error, result]) => {
        if (error) {
          console.log('error', error)
        } else {
          console.log('result', result)
        }
      })
  }

  return (
    <>
      <div className={`${BASE_CLASS}-formInput`}>
        <PasswordInputField
          // errorText={errorText}
          id="new_password"
          label={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL')}
          name="new_password"
          onChange={handleChange}
          placeholder={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.PLACEHOLDER')}
          value={newPassword}
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
          placeholder={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.PLACEHOLDER')}
          value={repeatPassword}
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
  )
}

PasswordChangeForm.displayName = 'PasswordChangeForm'

export default PasswordChangeForm
