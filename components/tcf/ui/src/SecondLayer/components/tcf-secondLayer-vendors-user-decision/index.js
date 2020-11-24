import {useRef, useState} from 'react'
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
  const parentRef = useRef(null)
  const handleReadLessClick = () => {
    parentRef.current.scrollIntoView()
    setExpanded(!expanded)
  }
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
      <div className={`${baseClass} ${baseClass}--vendors`} ref={parentRef}>
        <div className={`${baseClass}-texts`}>
          <h6 className={`${baseClass}-title`}>{info.name}</h6>
          <p>{info.description}</p>
          <div
            className={`${baseClass}-expanded ${
              expanded ? `${baseClass}-expanded--isActive` : ''
            }`}
          >
            <Button design="link" onClick={() => setExpanded(!expanded)}>
              {i18n.SECOND_LAYER.READ_MORE}
            </Button>
            {expanded && expandedContent({info, baseClass})}
            <Button design="link" onClick={handleReadLessClick}>
              {i18n.SECOND_LAYER.READ_LESS}
            </Button>
          </div>
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
