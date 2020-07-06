import React, {useState} from 'react'
import PropTypes from 'prop-types'

import SuiSwitch from '@s-ui/react-atom-switch'

import TcfSecondLayerIconAccordion from '../iconAccordion'

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
  i18n
}) {
  const [expanded, setExpanded] = useState(false)

  const handleItemClick = () => {
    setExpanded(!expanded)
  }

  const PolicyUrl = () => (
    <>
      <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.POLICY_URL}</h3>
      <a
        className={`${baseClass}-text ${baseClass}-text--expanded`}
        href={info.policyUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {info.policyUrl}
      </a>
    </>
  )
  const Information = ({purposeIds, vendorList}) =>
    purposeIds.map(id => (
      <div key={`${id}-purposes`} className={`${baseClass}-paragraph`}>
        <p className={`${baseClass}-text ${baseClass}-text--expanded`}>
          <strong>{vendorList && `${vendorList[id]?.name}: `}</strong>
        </p>
        <p className={`${baseClass}-text ${baseClass}-text--expanded`}>
          {vendorList && vendorList[id]?.description}
        </p>
      </div>
    ))

  const ExpandedContent = () => (
    <>
      {info.policyUrl && <PolicyUrl />}
      {!!info.purposes?.length && vendorList.purposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.PURPOSES}</h3>
      )}
      {!!info.purposes?.length && vendorList.purposes && (
        <Information
          purposeIds={info.purposes}
          vendorList={vendorList.purposes}
        />
      )}
      {!!info.legIntPurposes.length && vendorList.purposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.LEGITIMATE_INTEREST_PURPOSES}</h3>
      )}
      {!!info.legIntPurposes?.length && vendorList.purposes && (
        <Information
          purposeIds={info.legIntPurposes}
          vendorList={vendorList.purposes}
        />
      )}
      {!!info.specialPurposes?.length && vendorList.specialPurposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_PURPOSES}</h3>
      )}
      {!!info.specialPurposes?.length && vendorList.specialPurposes && (
        <Information
          purposeIds={info.specialPurposes}
          vendorList={vendorList.specialPurposes}
        />
      )}
      {!!info.features?.length && vendorList.features && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.FEATURES}</h3>
      )}
      {!!info.features?.length && vendorList.features && (
        <Information
          purposeIds={info.features}
          vendorList={vendorList.features}
        />
      )}
      {!!info.specialFeatures?.length && vendorList.specialFeatures && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_FEATURES}</h3>
      )}
      {!!info.specialFeatures?.length && vendorList.specialFeatures && (
        <Information
          purposeIds={info.specialFeatures}
          vendorList={vendorList.specialFeatures}
        />
      )}
    </>
  )

  const Switchs = () => (
    <div className={`${baseClass}-switchs`}>
      {hasConsent && (
        <SuiSwitch
          type="single"
          name="groupItem"
          value={consentValue}
          label="Consentimiento"
          onToggle={() => onConsentChange(consentValue)}
        />
      )}
      {hasLegitimateInterest && (
        <SuiSwitch
          type="single"
          name="groupItem"
          value={legitimateInterestValue}
          label="Interés legítimo"
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
          <TcfSecondLayerIconAccordion
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
          <ExpandedContent />
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
  i18n: PropTypes.object
}

TcfSecondLayerUserDecision.defaultProps = {
  hasConsent: true,
  hasLegitimateInterest: true
}
