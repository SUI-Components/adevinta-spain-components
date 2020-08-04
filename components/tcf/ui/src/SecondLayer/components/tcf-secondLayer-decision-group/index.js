import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import Button from '@s-ui/react-atom-button'

import TcfSecondLayerUserDecision from '../tcf-secondLayer-user-decision'
import TcfSecondLayerVendorsUserDecision from '../tcf-secondLayer-vendors-user-decision'
export function TcfSecondLayerDecisionGroup({
  baseClass,
  decisionKey = 'consents',
  descriptions,
  expandedContent,
  filteredIds,
  hasConsent,
  i18n,
  isVendorLayer,
  name,
  onAcceptAll,
  onConsentChange,
  onRejectAll,
  state,
  vendorList
}) {
  const [descriptionKeys, setDescriptionKeys] = useState(null)
  useEffect(() => {
    const asyncUseEffect = async () => {
      let keys =
        descriptions && Object.keys(descriptions).map(key => parseInt(key))
      if (filteredIds) {
        const toFilter = await filteredIds()
        keys = keys.filter(key => toFilter.includes(key))
      }
      setDescriptionKeys(keys)
    }
    asyncUseEffect()
  }, [descriptions, filteredIds])
  if (!descriptionKeys?.length) {
    return null
  }
  const ButtonAll = React.memo(() => (
    <div className={`${baseClass}Header-buttons`}>
      <Button
        size="small"
        design="outline"
        onClick={() => onRejectAll({decisionKey})}
      >
        {i18n.DISABLE_BUTTON}
      </Button>
      <Button size="small" onClick={() => onAcceptAll({decisionKey})}>
        {i18n.ENABLE_BUTTON}
      </Button>
    </div>
  ))

  return (
    <>
      <div className={`${baseClass}Header`}>
        <h5 className={`${baseClass}Header-title`}>{name}</h5>
        {hasConsent ? <ButtonAll /> : null}
      </div>
      {/* sui-TcfSecondLayer-group-item- */}
      {/* sui-TcfSecondLayer-group-item--vendors */}
      {descriptionKeys.map((key, index) => {
        const consentValue = state?.[decisionKey]
          ? state[decisionKey][key]
          : state?.[key]
        return isVendorLayer ? (
          <TcfSecondLayerUserDecision
            key={`${key}-${index}`}
            baseClass={`${baseClass}`}
            info={descriptions[key]}
            consentValue={consentValue}
            hasConsent={hasConsent}
            i18n={i18n}
            vendorList={vendorList}
            onConsentChange={value =>
              onConsentChange({index: key, value, decisionKey})
            }
            expandedContent={expandedContent}
          />
        ) : (
          <TcfSecondLayerVendorsUserDecision
            key={`${key}-${index}`}
            baseClass={`${baseClass}`}
            info={descriptions[key]}
            consentValue={consentValue}
            hasConsent={hasConsent}
            i18n={i18n}
            onConsentChange={value =>
              onConsentChange({index: key, value, decisionKey})
            }
            expandedContent={expandedContent}
          />
        )
      })}
    </>
  )
}

TcfSecondLayerDecisionGroup.defaultProps = {
  decisionKey: 'consents'
}

TcfSecondLayerDecisionGroup.propTypes = {
  baseClass: PropTypes.string,
  decisionKey: PropTypes.string,
  descriptions: PropTypes.object,
  expandedContent: PropTypes.func,
  filteredIds: PropTypes.func,
  hasConsent: PropTypes.bool,
  i18n: PropTypes.object,
  isVendorLayer: PropTypes.bool,
  name: PropTypes.string,
  onAcceptAll: PropTypes.func,
  onConsentChange: PropTypes.func,
  onRejectAll: PropTypes.func,
  state: PropTypes.object,
  vendorList: PropTypes.object
}

export default React.memo(TcfSecondLayerDecisionGroup)
