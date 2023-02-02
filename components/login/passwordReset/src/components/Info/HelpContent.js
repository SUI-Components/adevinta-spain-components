import PropTypes from 'prop-types'

import {BASE_CLASS, DEFAULT_ATC_ICON} from '../../config.js'
import useI18n from '../../hooks/useI18n.js'
import AtomIcon from '../Icon/Icon.js'
import HelpContentTooltip from './HelpContentTooltip.js'

const HelpContent = ({icons}) => {
  const i18n = useI18n()

  return (
    <div className={`${BASE_CLASS}-helpContent`}>
      <AtomIcon icon={icons.helpContent || DEFAULT_ATC_ICON} />
      <div className="">
        <div className={`${BASE_CLASS}-helpContentTitle`}>
          {i18n.t('LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TITLE')}
        </div>
        <div className={`${BASE_CLASS}-helpContentText`}>
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TEXT')
            }}
          ></span>
          <HelpContentTooltip />
        </div>
      </div>
    </div>
  )
}

HelpContent.displayName = 'HelpContent'
HelpContent.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object)
}
export default HelpContent
