import useI18n from '../../hooks/useI18n.js'
import {BASE_CLASS} from './../../config.js'
import HelpContentTooltip from './HelpContentTooltip.js'
import Icon from './Icon.js'

const HelpContent = () => {
  const i18n = useI18n()
  return (
    <div className={`${BASE_CLASS}-helpContent`}>
      {/* <Icon /> */}
      {/* <Icon icon={DEFAULT_TOOLTIP_INFO_ICON} /> */}
      <Icon icon="https://frtassets.fotocasa.es/ut/statics/img/service-desk.svg" />

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

export default HelpContent
