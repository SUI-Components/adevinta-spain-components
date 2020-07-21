import React, {useState} from 'react'
import PropTypes from 'prop-types'

import AtomSwitch from '@s-ui/react-atom-switch'
import Button from '@s-ui/react-atom-button'

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

  const Switchs = () =>
    hasConsent && (
      <AtomSwitch
        type="single"
        name="groupItem"
        value={consentValue}
        label={i18n.CONSENT_COPY}
        onToggle={() => onConsentChange(consentValue)}
      />
    )

  return (
    <>
      <div className={`${baseClass} ${baseClass}--vendors`}>
        <div className={`${baseClass}-texts`}>
          <h6 className={`${baseClass}-title`}>{info.name}</h6>
          <p>{info.description}</p>
          {expanded && expandedContent({info, baseClass})}
          <Button design="link" onClick={() => setExpanded(!expanded)}>
            {expanded
              ? i18n.SECOND_LAYER.READ_LESS
              : i18n.SECOND_LAYER.READ_MORE}
          </Button>
        </div>
        {hasConsent ? <Switchs /> : null}
      </div>
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
