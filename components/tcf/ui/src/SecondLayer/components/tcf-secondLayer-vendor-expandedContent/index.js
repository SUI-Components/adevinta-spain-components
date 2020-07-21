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
      <h6 className={`${baseClass}-title`}>
        {i18n.VENDOR_PAGE.GROUPS.EXPANDED.POLICY_URL}
      </h6>
      <p>
        <a
          className={`${baseClass}-link`}
          href={info.policyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.policyUrl}
        </a>
      </p>
    </>
  )
  const Information = ({ids, vendorList}) =>
    ids.map(id => (
      <>
        <p key={`${id}-purposes`}>
          <strong>{vendorList && `${vendorList[id]?.name}: `}</strong>
        </p>
        <p>{vendorList && vendorList[id]?.description}</p>
      </>
    ))
  return (
    <>
      {info.policyUrl && <PolicyUrl />}
      {!!info.purposes?.length && vendorList.purposes && (
        <h6 className={`${baseClass}-title`}>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.PURPOSES}
        </h6>
      )}
      {!!info.purposes?.length && vendorList.purposes && (
        <Information ids={info.purposes} vendorList={vendorList.purposes} />
      )}
      {!!info.legIntPurposes.length && vendorList.purposes && (
        <h6 className={`${baseClass}-title`}>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.LEGITIMATE_INTEREST_PURPOSES}
        </h6>
      )}
      {!!info.legIntPurposes?.length && vendorList.purposes && (
        <Information
          ids={info.legIntPurposes}
          vendorList={vendorList.purposes}
        />
      )}
      {!!info.specialPurposes?.length && vendorList.specialPurposes && (
        <h6 className={`${baseClass}-title`}>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_PURPOSES}
        </h6>
      )}
      {!!info.specialPurposes?.length && vendorList.specialPurposes && (
        <Information
          ids={info.specialPurposes}
          vendorList={vendorList.specialPurposes}
        />
      )}
      {!!info.features?.length && vendorList.features && (
        <h6 className={`${baseClass}-title`}>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.FEATURES}
        </h6>
      )}
      {!!info.features?.length && vendorList.features && (
        <Information ids={info.features} vendorList={vendorList.features} />
      )}
      {!!info.specialFeatures?.length && vendorList.specialFeatures && (
        <h6 className={`${baseClass}-title`}>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.SPECIAL_FEATURES}
        </h6>
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
