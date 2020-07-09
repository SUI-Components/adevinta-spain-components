import React, {useState} from 'react'
import PropTypes from 'prop-types'

import SuiSwitch from '@s-ui/react-atom-switch'

import IconAccordion from '../iconAccordion'

export default function TcfSecondLayerUserDecision({
  onConsentChange,
  baseClass,
  info,
  consentValue,
  hasConsent = true,
  vendorList,
  expandedContent,
  i18n
}) {
  const [expanded, setExpanded] = useState(false)

  const handleItemClick = () => {
    setExpanded(!expanded)
  }

  const Switchs = () => (
    <div className={`${baseClass}-switchs`}>
      {hasConsent && (
        <SuiSwitch
          type="single"
          name="groupItem"
          value={consentValue}
          label={i18n.CONSENT_COPY}
          onToggle={() => onConsentChange(consentValue)}
        />
      )}
    </div>
  )

  return (
    <>
      <div className={`${baseClass}-container`}>
        <div
          className={`${baseClass}-container-clicklable`}
          onClick={handleItemClick}
        >
          <IconAccordion
            baseClass={
              expanded
                ? `${baseClass}-icon-accordion ${baseClass}-icon-accordion--expanded`
                : `${baseClass}-icon-accordion`
            }
          />
          <p className={`${baseClass}-text`}>{info.name}</p>
        </div>
        {hasConsent ? <Switchs /> : null}
      </div>
      {expanded && (
        <div className={`${baseClass}-container--expanded`}>
          {expandedContent({info, baseClass})}
        </div>
      )}
    </>
  )
}

TcfSecondLayerUserDecision.propTypes = {
  baseClass: PropTypes.string,
  hasConsent: PropTypes.bool,
  info: PropTypes.object,
  consentValue: PropTypes.bool,
  onConsentChange: PropTypes.func,
  vendorList: PropTypes.object,
  i18n: PropTypes.object,
  expandedContent: PropTypes.func.isRequired
}

TcfSecondLayerUserDecision.defaultProps = {
  hasConsent: true
}
