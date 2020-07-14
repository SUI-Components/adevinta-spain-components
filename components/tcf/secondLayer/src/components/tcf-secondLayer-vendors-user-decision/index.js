import React, {useState} from 'react'
import PropTypes from 'prop-types'

import SuiSwitch from '@s-ui/react-atom-switch'

export default function TcfSecondLayerVendorsUserDecision({
  onConsentChange,
  baseClass,
  info,
  consentValue,
  hasConsent = true,
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
          <p className={`${baseClass}-title`}>{info.name}</p>
          <p className={`${baseClass}-text`}>{info.description}</p>
          <p
            className={`${baseClass}-link`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? i18n.SECOND_LAYER.READ_LESS
              : i18n.SECOND_LAYER.READ_MORE}
          </p>
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

TcfSecondLayerVendorsUserDecision.propTypes = {
  baseClass: PropTypes.string,
  hasConsent: PropTypes.bool,
  info: PropTypes.object,
  consentValue: PropTypes.bool,
  onConsentChange: PropTypes.func,
  i18n: PropTypes.object,
  expandedContent: PropTypes.func.isRequired
}

TcfSecondLayerVendorsUserDecision.defaultProps = {
  hasConsent: true
}
