import React from 'react'
import PropTypes from 'prop-types'

import SuiButton from '@s-ui/react-atom-button'

import TcfSecondLayerUserDecision from '../tcf-secondLayer-user-decision'
export default function TcfSecondLayerDecisionGroup({
  name,
  i18n,
  baseClass,
  descriptions,
  state,
  filteredIds,
  hasConsent,
  onConsentChange,
  onAcceptAll,
  onRejectAll,
  vendorList,
  expandedContent
}) {
  let descriptionKeys =
    descriptions && Object.keys(descriptions).map(key => parseInt(key))
  if (filteredIds) {
    descriptionKeys = descriptionKeys.filter(key => filteredIds.includes(key))
  }
  if (!descriptionKeys?.length) {
    return null
  }

  return (
    <>
      <div className={`${baseClass}-title-container`}>
        <h2 className={`${baseClass}-title`}>{name}</h2>
        {hasConsent ? (
          <div className={`${baseClass}-buttons`}>
            <SuiButton size="small" design="outline" onClick={onRejectAll}>
              {i18n.DISABLE_BUTTON}
            </SuiButton>
            <SuiButton size="small" onClick={onAcceptAll}>
              {i18n.ENABLE_BUTTON}
            </SuiButton>
          </div>
        ) : null}
      </div>
      {descriptionKeys.map((key, index) => {
        const consentValue = state?.consents
          ? state.consents[key]
          : state?.[key]
        return (
          <TcfSecondLayerUserDecision
            key={`${key}-${index}`}
            baseClass={`${baseClass}-item`}
            info={descriptions[key]}
            consentValue={consentValue}
            hasConsent={hasConsent}
            i18n={i18n}
            vendorList={vendorList}
            onConsentChange={value => onConsentChange({index: key, value})}
            expandedContent={expandedContent}
          />
        )
      })}
    </>
  )
}

TcfSecondLayerDecisionGroup.propTypes = {
  name: PropTypes.string,
  i18n: PropTypes.object,
  baseClass: PropTypes.string,
  descriptions: PropTypes.object,
  state: PropTypes.object,
  filteredIds: PropTypes.arrayOf(PropTypes.number),
  hasConsent: PropTypes.bool,
  onConsentChange: PropTypes.func,
  onAcceptAll: PropTypes.func,
  onRejectAll: PropTypes.func,
  vendorList: PropTypes.object,
  expandedContent: PropTypes.func
}
