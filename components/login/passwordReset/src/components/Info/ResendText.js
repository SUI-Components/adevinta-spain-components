import PropTypes from 'prop-types'

import {BASE_CLASS} from '../../config.js'
import useI18n from '../../hooks/useI18n.js'
const ResendText = ({handleResend}) => {
  const i18n = useI18n()
  return (
    <div className={`${BASE_CLASS}-formNotification`}>
      <p className={`${BASE_CLASS}-formText`}>
        <div
          className={`${BASE_CLASS}-formTextTitle`}
          dangerouslySetInnerHTML={{
            __html: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.RESEND_TITLE')
          }}
        />
        <span
          dangerouslySetInnerHTML={{
            __html: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.RESEND_TEXT')
          }}
        />
        {` `}
        <span className={`${BASE_CLASS}-formTextAnchor`} onClick={handleResend}>
          {i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.RESEND_LINK')}
        </span>
        .
      </p>
    </div>
  )
}

ResendText.displayName = 'ResendText'

ResendText.propTypes = {
  handleResend: PropTypes.func
}

export default ResendText
