import React, {Suspense, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const CONSENT_STATUS_NOT_ACCEPTED = 'NOT_ACCEPTED'
const FirstLayer = React.lazy(() => import('@s-ui/sui-tcf-first-layer'))
const SecondLayer = React.lazy(() => import('@s-ui/sui-tcf-second-layer'))

export default function TCFContainer({
  getVendorList,
  getConsentStatus,
  loadUserConsent,
  saveUserConsent
}) {
  const [showLayer, setShowLayer] = useState(false)

  useEffect(() => {
    async function checkConsentStatus() {
      const consentStatus = await getConsentStatus()
      if (consentStatus === CONSENT_STATUS_NOT_ACCEPTED) {
        setShowLayer(1)
      }
    }
    checkConsentStatus()
  }, [])

  const handleOpenSecondLayer = () => {
    setShowLayer(2)
  }

  return (
    <>
      {showLayer === 1 && (
        <Suspense fallback={<div />}>
          <FirstLayer
            getVendorList={getVendorList}
            loadUserConsent={loadUserConsent}
            saveUserConsent={saveUserConsent}
            openSecondLayer={handleOpenSecondLayer}
          />
        </Suspense>
      )}
      {showLayer === 2 && (
        <Suspense fallback={<div />}>
          <SecondLayer
            isOpen
            loadUserConsent={loadUserConsent}
            saveUserConsent={saveUserConsent}
            getVendorList={getVendorList}
          />
        </Suspense>
      )}
    </>
  )
}

TCFContainer.displayName = 'TcfUi'

TCFContainer.propTypes = {
  getConsentStatus: PropTypes.func,
  getVendorList: PropTypes.func,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func
}
