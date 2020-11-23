import {memo, useState} from 'react'
import PropTypes from 'prop-types'

import AtomSwitch from '@s-ui/react-atom-switch'

export function TcfSecondLayerUserDecision({
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

  const Switchs = memo(
    () =>
      hasConsent && (
        <AtomSwitch
          type="single"
          name="groupItem"
          value={consentValue}
          label={i18n.CONSENT_COPY}
          onToggle={() => onConsentChange(consentValue)}
        />
      )
  )

  return (
    <>
      <div className={`${baseClass}`}>
        <div className={`${baseClass}-accordion`} onClick={handleItemClick}>
          <svg
            className={
              expanded
                ? `${baseClass}-icon ${baseClass}-icon--open`
                : `${baseClass}-icon`
            }
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M8 10.296l5.75-6.517c.122-.138.333-.15.47-.029.139.122.152.333.03.47L8.445 10.8c-.113.127-.275.2-.445.2-.17 0-.332-.073-.445-.2L1.75 4.22c-.122-.137-.109-.348.03-.47.137-.122.348-.109.47.03L8 10.295z" />
          </svg>

          <span>{info.name}</span>
        </div>
        {hasConsent ? <Switchs /> : null}
      </div>
      {expanded && (
        <div className={`${baseClass}Description`}>
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
  i18n: PropTypes.object,
  expandedContent: PropTypes.func.isRequired
}

TcfSecondLayerUserDecision.defaultProps = {
  hasConsent: true
}
export default memo(TcfSecondLayerUserDecision)
