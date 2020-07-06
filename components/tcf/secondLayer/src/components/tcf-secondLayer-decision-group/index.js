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
  onConsentChange,
  onLegitimateInterestChange,
  onAcceptAll,
  onRejectAll,
  vendorList
}) {
  return (
    <>
      <div className={`${baseClass}-title-container`}>
        <h2 className={`${baseClass}-title`}>{name}</h2>
        <div className={`${baseClass}-buttons`}>
          <SuiButton size="small" design="outline" onClick={onRejectAll}>
            {i18n.DISABLE_BUTTON}
          </SuiButton>
          <SuiButton size="small" onClick={onAcceptAll}>
            {i18n.ENABLE_BUTTON}
          </SuiButton>
        </div>
      </div>
      {state &&
        descriptions &&
        Object.keys(descriptions).map((key, index) => {
          return (
            <TcfSecondLayerUserDecision
              key={`${key}-${index}`}
              baseClass={`${baseClass}-item`}
              info={descriptions[key]}
              consentValue={state.consents[key]}
              legitimateInterestValue={state.legitimateInterests[key]}
              i18n={i18n}
              vendorList={vendorList}
              onConsentChange={value => onConsentChange({index: key, value})}
              onLegitimateInterestChange={value =>
                onLegitimateInterestChange({index: key, value})
              }
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
  onConsentChange: PropTypes.func,
  onLegitimateInterestChange: PropTypes.func,
  onAcceptAll: PropTypes.func,
  onRejectAll: PropTypes.func,
  vendorList: PropTypes.object
}
