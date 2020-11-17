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

  const secondsToTimeUnits = totalSeconds => {
    const result = {}
    let remaining = totalSeconds
    const divideTimeUnits = (key, divider) => {
      const wholeTimeUnit = Math.floor(remaining / divider)
      if (wholeTimeUnit) {
        result[key] = wholeTimeUnit
      }
      remaining = remaining % divider
    }
    divideTimeUnits('days', 86400)
    divideTimeUnits('hours', 3600)
    divideTimeUnits('minutes', 60)
    result.seconds = remaining
    return result
  }

  const userReadableTimeUnits = seconds => {
    if (seconds <= 0) {
      return i18n.VENDOR_PAGE.GROUPS.EXPANDED.COOKIES.NEGATIVE_OR_ZERO_MAX_AGE
    }
    const time = secondsToTimeUnits(seconds)
    let s
    s = time.days ? `${time.days} ${i18n.DAYS} ` : ''
    s += time.hours ? `${time.hours} ${i18n.HOURS} ` : ''
    s += time.minutes ? `${time.minutes} ${i18n.MINUTES} ` : ''
    s += time.seconds ? `${time.seconds} ${i18n.SECONDS}` : ''
    return s
  }

  const CookieAgeInfo = () => {
    return (
      <>
        <h6 className={`${baseClass}-title`}>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.COOKIES.TITLE}
        </h6>
        <p>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.COOKIES.COOKIES_MAX_AGE_SECONDS}:{' '}
          {userReadableTimeUnits(info.cookieMaxAgeSeconds)}
        </p>
        <p>
          {i18n.VENDOR_PAGE.GROUPS.EXPANDED.COOKIES.USES_NON_COOKIE_ACCESS}:{' '}
          {info.usesNonCookieAccess ? i18n.YES : i18n.NO}
        </p>
        {info.deviceStorageDisclosureUrl && (
          <>
            <a
              href={info.deviceStorageDisclosureUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                i18n.VENDOR_PAGE.GROUPS.EXPANDED.COOKIES
                  .DEVICE_STORAGE_DISCLOSURE_URL
              }
            </a>
          </>
        )}
      </>
    )
  }

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
      <CookieAgeInfo />
    </>
  )
}

TcfSecondLayerVendorExpandedContent.propTypes = {
  info: PropTypes.object.isRequired,
  baseClass: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  vendorList: PropTypes.object.isRequired
}
