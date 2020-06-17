import React, {Suspense, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const FirstLayer = React.lazy(() => import('@s-ui/react-tcf-first-layer'))
const SecondLayer = React.lazy(() => import('@s-ui/react-tcf-second-layer'))

export default function TCFContainer({
  getVendorList,
  loadUserConsent,
  saveUserConsent
}) {
  const [showLayer, setShowLayer] = useState(false)

  useEffect(() => {
    async function checkConsentStatus() {
      const {valid} = await loadUserConsent()
      if (!valid) {
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
  getVendorList: PropTypes.func,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func
}
