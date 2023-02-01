import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import AtomTooltip from '@s-ui/react-atom-tooltip'

import {BASE_CLASS, DEFAULT_TOOLTIP_INFO_ICON} from '../../config.js'
import useI18n from '../../hooks/useI18n.js'

const HelpContentTooltip = () => {
  const i18n = useI18n()
  const tooltipText = i18n.t('LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TOOLTIP')
  const iconTooltip = (
    <div className={`${BASE_CLASS}-helpContentIconTooltip`}>
      <AtomIcon size={ATOM_ICON_SIZES.medium}>
        {DEFAULT_TOOLTIP_INFO_ICON}
      </AtomIcon>
    </div>
  )

  const ATOM_TOOLTIP_OPTION = {
    placement: 'bottom'
  }
  return (
    <AtomTooltip
      {...ATOM_TOOLTIP_OPTION}
      content={() => (
        <div
          className={`${BASE_CLASS}-helpContentTextTooltip`}
          dangerouslySetInnerHTML={{
            __html: tooltipText
          }}
        ></div>
      )}
    >
      {iconTooltip}
    </AtomTooltip>
  )
}

HelpContentTooltip.displayName = 'HelpContentTooltip'

export default HelpContentTooltip
