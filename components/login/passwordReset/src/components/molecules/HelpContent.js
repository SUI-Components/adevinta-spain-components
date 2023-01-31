import useI18n from '../../hooks/useI18n.js'
import {BASE_CLASS} from '../../config.js'
import MoleculeHelpContentTooltip from './HelpContentTooltip.js'
import AtomIcon from '../atoms/Icon.js'

const MoleculeHelpContent = () => {
  const i18n = useI18n()
  return (
    <div className={`${BASE_CLASS}-helpContent`}>
      {/* <Icon /> */}
      {/* <Icon icon={DEFAULT_TOOLTIP_INFO_ICON} /> */}
      <AtomIcon icon="https://frtassets.fotocasa.es/ut/statics/img/service-desk.svg" />

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
          <MoleculeHelpContentTooltip />
        </div>
      </div>
    </div>
  )
}

MoleculeHelpContent.displayName = 'MoleculeHelpContent'

export default MoleculeHelpContent
