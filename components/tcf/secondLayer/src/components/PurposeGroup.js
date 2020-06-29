import React from 'react'
import PropTypes from 'prop-types'

import SuiButton from '@s-ui/react-atom-button'

import GroupItem from './GroupItem'
export default function PurposeGroup({
  name,
  i18n,
  baseClass,
  descriptions,
  state,
  onConsentsChange,
  onAcceptAll,
  onRejectAll,
  isVendor,
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
            <GroupItem
              key={`${key}-${index}`}
              baseClass={`${baseClass}-item`}
              itemInfo={descriptions[key]}
              itemValue={state.consents[key]}
              isVendor={isVendor}
              i18n={i18n}
              vendorList={vendorList}
              onItemChange={value => onConsentsChange({index: key, value})}
            />
          )
        })}
    </>
  )
}

PurposeGroup.propTypes = {
  name: PropTypes.string,
  i18n: PropTypes.object,
  baseClass: PropTypes.string,
  descriptions: PropTypes.object,
  consents: PropTypes.object,
  state: PropTypes.object,
  onConsentsChange: PropTypes.func,
  onAcceptAll: PropTypes.func,
  onRejectAll: PropTypes.func,
  vendorList: PropTypes.object,
  isVendor: PropTypes.bool
}
