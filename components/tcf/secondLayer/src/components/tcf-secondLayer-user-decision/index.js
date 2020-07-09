import React, {useState} from 'react'
import PropTypes from 'prop-types'

import SuiSwitch from '@s-ui/react-atom-switch'

import IconAccordion from '../iconAccordion'

export default function TcfSecondLayerUserDecision({
  onConsentChange,
  onLegitimateInterestChange,
  baseClass,
  info,
  consentValue,
  legitimateInterestValue,
  hasConsent = true,
  hasLegitimateInterest = true,
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
      {hasLegitimateInterest && (
        <SuiSwitch
          type="single"
          name="groupItem"
          value={legitimateInterestValue}
          label={i18n.LEGITIMATE_INTEREST_COPY}
          onToggle={() => onLegitimateInterestChange(legitimateInterestValue)}
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
        {hasConsent || hasLegitimateInterest ? <Switchs /> : null}
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
  hasLegitimateInterest: PropTypes.bool,
  info: PropTypes.object,
  consentValue: PropTypes.bool,
  legitimateInterestValue: PropTypes.bool,
  onConsentChange: PropTypes.func,
  onLegitimateInterestChange: PropTypes.func,
  vendorList: PropTypes.object,
  i18n: PropTypes.object,
  expandedContent: PropTypes.func.isRequired
}

TcfSecondLayerUserDecision.defaultProps = {
  hasConsent: true,
  hasLegitimateInterest: true
}
