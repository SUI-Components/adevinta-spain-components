import {BASE_CLASS} from '../../config.js'
import useI18n from '../../hooks/useI18n.js'
const UserAcquisitionText = () => {
  const i18n = useI18n()
  return (
    <div className={`${BASE_CLASS}-formFooter`}>
      <span
        dangerouslySetInnerHTML={{
          __html: i18n.t('LOGIN_CROSS.PASSWORD_RESET.INFO')
        }}
      />
    </div>
  )
}

UserAcquisitionText.displayName = 'UserAcquisitionText'

export default UserAcquisitionText
