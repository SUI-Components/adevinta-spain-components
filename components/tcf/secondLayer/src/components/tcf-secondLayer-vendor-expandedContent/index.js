import React from 'react'
import PropTypes from 'prop-types'

export default function TcfSecondLayerVendorExpandedContent({
  info,
  i18n,
  baseClass,
  vendorList
}) {
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
  const Information = ({ids, vendorList}) =>
    ids.map(id => (
      <div key={`${id}-purposes`} className={`${baseClass}-paragraph`}>
        <p className={`${baseClass}-text ${baseClass}-text--expanded`}>
          <strong>{vendorList && `${vendorList[id]?.name}: `}</strong>
        </p>
        <p className={`${baseClass}-text ${baseClass}-text--expanded`}>
          {vendorList && vendorList[id]?.description}
        </p>
      </div>
    ))
  return (
    <>
      {info.policyUrl && <PolicyUrl />}
      {!!info.purposes?.length && vendorList.purposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.PURPOSES}</h3>
      )}
      {!!info.purposes?.length && vendorList.purposes && (
        <Information ids={info.purposes} vendorList={vendorList.purposes} />
      )}
      {!!info.legIntPurposes.length && vendorList.purposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.LEGITIMATE_INTEREST_PURPOSES}</h3>
      )}
      {!!info.legIntPurposes?.length && vendorList.purposes && (
        <Information
          ids={info.legIntPurposes}
          vendorList={vendorList.purposes}
        />
      )}
      {!!info.specialPurposes?.length && vendorList.specialPurposes && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_PURPOSES}</h3>
      )}
      {!!info.specialPurposes?.length && vendorList.specialPurposes && (
        <Information
          ids={info.specialPurposes}
          vendorList={vendorList.specialPurposes}
        />
      )}
      {!!info.features?.length && vendorList.features && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.FEATURES}</h3>
      )}
      {!!info.features?.length && vendorList.features && (
        <Information ids={info.features} vendorList={vendorList.features} />
      )}
      {!!info.specialFeatures?.length && vendorList.specialFeatures && (
        <h3>{i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_FEATURES}</h3>
      )}
      {!!info.specialFeatures?.length && vendorList.specialFeatures && (
        <Information
          ids={info.specialFeatures}
          vendorList={vendorList.specialFeatures}
        />
      )}
    </>
  )
}

TcfSecondLayerVendorExpandedContent.propTypes = {
  info: PropTypes.object.isRequired,
  baseClass: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  vendorList: PropTypes.object.isRequired
}
