import PropTypes from 'prop-types'

import MoleculeNotification, {
  BRDS_SIZE,
  TYPES,
  VARIATIONS
} from '@s-ui/react-molecule-notification'

import {BASE_CLASS} from './../../config.js'
import useI18n from './../../hooks/useI18n.js'
const Notification = ({notificationText, handleResend}) => {
  const i18n = useI18n()
  return (
    <div className={`${BASE_CLASS}-formNotification`}>
      <MoleculeNotification
        autoClose={null}
        icon=" "
        roundedCorners={BRDS_SIZE.medium}
        showCloseButton={false}
        text={notificationText}
        type={TYPES.success}
        variation={VARIATIONS.negative}
      />
      <p className={`${BASE_CLASS}-formText`}>
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

Notification.displayName = 'Notification'

Notification.propTypes = {
  handleResend: PropTypes.func,
  notificationText: PropTypes.string
}

export default Notification
