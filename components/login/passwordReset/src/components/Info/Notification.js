import PropTypes from 'prop-types'

import MoleculeNotification, {BRDS_SIZE, TYPES, VARIATIONS} from '@s-ui/react-molecule-notification'

import {BASE_CLASS} from '../../config.js'
const Notification = ({notificationText, isError = false}) => {
  return (
    <div className={`${BASE_CLASS}-formNotification`}>
      <MoleculeNotification
        autoClose={null}
        icon=" "
        roundedCorners={BRDS_SIZE.medium}
        showCloseButton={false}
        text={notificationText}
        type={isError ? TYPES.error : TYPES.success}
        variation={VARIATIONS.negative}
      />
    </div>
  )
}

Notification.displayName = 'Notification'

Notification.propTypes = {
  notificationText: PropTypes.string,
  isError: PropTypes.bool
}

export default Notification
