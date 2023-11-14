import useI18n from '../../hooks/useI18n.js'
import {BASE_CLASS} from '../../config.js'

const LoginInfo = () => {
  const i18n = useI18n()

  const title = i18n.t('LOGIN_CROSS.LOGIN.INTRO_TITLE')
  const text = i18n.t('LOGIN_CROSS.LOGIN.INTRO_TEXT')
  return (
    <div className={`${BASE_CLASS}-stageInfo`}>
      <h1 className={`${BASE_CLASS}-stageInfoTitle`}>{title}</h1>
      <p className={`${BASE_CLASS}-stageInfoMessage`}>{text}</p>
    </div>
  )
}

LoginInfo.displayName = 'LoginInfo'

export default LoginInfo
