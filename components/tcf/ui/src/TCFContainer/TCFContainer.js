import React, {Suspense, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const CONSENT_STATUS_NOT_ACCEPTED = 'NOT_ACCEPTED'
const FirstLayer = React.lazy(() => import('@s-ui/sui-tcf-first-layer'))
// const SecondLayer = React.lazy(() => import('@s-ui/sui-tcf-second-layer'))
const SecondLayer = () => <div>SECOND LAYER MOCK</div>

export default function TCFContainer({
  getConsentStatus,
  loadUserConsent,
  saveUserConsent
}) {
  const [showFirstLayer, setShowFirstLayer] = useState(false)
  const [showSecondLayer, setShowSecondLayer] = useState(false)

  useEffect(() => {
    async function checkConsentStatus() {
      const consentStatus = await getConsentStatus()
      const isConsentNotAccepted = consentStatus === CONSENT_STATUS_NOT_ACCEPTED
      if (showFirstLayer !== isConsentNotAccepted) {
        setShowFirstLayer(isConsentNotAccepted)
      }
    }
    checkConsentStatus()
  }, [])

  const handleOpenSecondLayer = () => {
    setShowSecondLayer(true)
    setShowFirstLayer(false)
  }

  return (
    <>
      {showFirstLayer && (
        <Suspense fallback={<div />}>
          <FirstLayer
            loadUserConsent={loadUserConsent}
            saveUserConsent={saveUserConsent}
            openSecondLayer={handleOpenSecondLayer}
          />
        </Suspense>
      )}
      {showSecondLayer && (
        <Suspense fallback={<div />}>
          <SecondLayer
            loadUserConsent={loadUserConsent}
            saveUserConsent={saveUserConsent}
          />
        </Suspense>
      )}
    </>
  )
}

TCFContainer.displayName = 'TcfUi'

TCFContainer.propTypes = {
  getConsentStatus: PropTypes.func,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func
}
