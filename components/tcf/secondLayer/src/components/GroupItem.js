import React, {useState} from 'react'
import PropTypes from 'prop-types'

import SuiSwitch from '@s-ui/react-atom-switch'

import IconAccordion from './iconAccordion'

export default function GroupItem({
  onItemChange,
  baseClass,
  itemInfo,
  itemValue,
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
        href={itemInfo.policyUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {itemInfo.policyUrl}
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
      {itemInfo.policyUrl && <PolicyUrl />}
      {!!itemInfo.purposes?.length && vendorList.purposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.PURPOSES}</h3>
      )}
      {!!itemInfo.purposes?.length && vendorList.purposes && (
        <Information
          purposeIds={itemInfo.purposes}
          vendorList={vendorList.purposes}
        />
      )}
      {!!itemInfo.legIntPurposes.length && vendorList.purposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.LEGITIMATE_INTEREST_PURPOSES}</h3>
      )}
      {!!itemInfo.legIntPurposes?.length && vendorList.purposes && (
        <Information
          purposeIds={itemInfo.legIntPurposes}
          vendorList={vendorList.purposes}
        />
      )}
      {!!itemInfo.specialPurposes?.length && vendorList.specialPurposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_PURPOSES}</h3>
      )}
      {!!itemInfo.specialPurposes?.length && vendorList.specialPurposes && (
        <Information
          purposeIds={itemInfo.specialPurposes}
          vendorList={vendorList.specialPurposes}
        />
      )}
      {!!itemInfo.features?.length && vendorList.features && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.FEATURES}</h3>
      )}
      {!!itemInfo.features?.length && vendorList.features && (
        <Information
          featureIds={itemInfo.features}
          vendorList={vendorList.features}
        />
      )}
      {!!itemInfo.specialFeatures?.length && vendorList.specialFeatures && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_FEATURES}</h3>
      )}
      {!!itemInfo.specialFeatures?.length && vendorList.specialFeatures && (
        <Information
          featureIds={itemInfo.specialFeatures}
          vendorList={vendorList.specialFeatures}
        />
      )}
    </>
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
          <p className={`${baseClass}-text`}>{itemInfo.name}</p>
        </div>
        <SuiSwitch
          type="single"
          name="groupItem"
          value={itemValue}
          onToggle={() => onItemChange(itemValue)}
        />
      </div>
      {expanded && (
        <div className={`${baseClass}-container--expanded`}>
          <ExpandedContent />
        </div>
      )}
    </>
  )
}

GroupItem.propTypes = {
  baseClass: PropTypes.string,
  itemInfo: PropTypes.object,
  itemValue: PropTypes.object,
  name: PropTypes.string,
  onItemChange: PropTypes.func,
  vendorList: PropTypes.object,
  i18n: PropTypes.object
}
