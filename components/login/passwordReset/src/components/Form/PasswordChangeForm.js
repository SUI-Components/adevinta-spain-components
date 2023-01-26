import {useState} from 'react'

import AtomButton, {
  // atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'
import MoleculeInputField from '@s-ui/react-molecule-input-field'

import {
  BASE_CLASS,
  DEFAULT_EYE_CLOSED_OUTLINE,
  DEFAULT_EYE_OPEN_OUTLINE
} from './../../config.js'
import useI18n from './../../hooks/useI18n.js'
const PasswordChangeForm = () => {
  const i18n = useI18n()
  const [newPassword, setNewPassword] = useState('')
  const [typeNewPasswordField, setTypeNewPasswordField] =
    useState('sui-password')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [typeRepeatPasswordField, setTypeRepeatPasswordField] =
    useState('sui-password')

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
  }

  return (
    <>
      <div className={`${BASE_CLASS}-formInput`}>
        <MoleculeInputField
          // errorText={errorText}
          id="new_password"
          label={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.NEW_PASSWORD_LABEL')}
          name="new_password"
          onChange={handleChange}
          placeholder={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.PLACEHOLDER')}
          size="l"
          type={typeNewPasswordField}
          rightIcon={
            typeNewPasswordField === 'sui-password'
              ? DEFAULT_EYE_CLOSED_OUTLINE
              : DEFAULT_EYE_OPEN_OUTLINE
          }
          onClickRightIcon={() =>
            typeNewPasswordField === 'sui-password'
              ? setTypeNewPasswordField('text')
              : setTypeNewPasswordField('sui-password')
          }
          pwHideLabel=""
          pwShowLabel=""
          value={newPassword}
        />
      </div>
      <div className={`${BASE_CLASS}-formInput`}>
        <MoleculeInputField
          // errorText={errorText}
          id="repeat_password"
          label={i18n.t(
            'LOGIN_CROSS.PASSWORD_RESET.STEP_2.REPEAT_PASSWORD_LABEL'
          )}
          name="repeat_password"
          onChange={handleChangeRepeat}
          placeholder={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.PLACEHOLDER')}
          size="l"
          type={typeRepeatPasswordField}
          rightIcon={
            typeRepeatPasswordField === 'sui-password'
              ? DEFAULT_EYE_CLOSED_OUTLINE
              : DEFAULT_EYE_OPEN_OUTLINE
          }
          onClickRightIcon={() =>
            typeRepeatPasswordField === 'sui-password'
              ? setTypeRepeatPasswordField('text')
              : setTypeRepeatPasswordField('sui-password')
          }
          pwHideLabel=""
          pwShowLabel=""
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
