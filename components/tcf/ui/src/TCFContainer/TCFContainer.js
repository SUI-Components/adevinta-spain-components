import React, {Suspense, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const FirstLayer = React.lazy(() => import('@s-ui/react-tcf-first-layer'))
const SecondLayer = React.lazy(() => import('@s-ui/react-tcf-second-layer'))

export default function TCFContainer({
  getVendorList,
  loadUserConsent,
  saveUserConsent,
  uiVisible,
  isMobile,
  isTablet,
  lang,
  logo,
  showVendors
}) {
  const [showLayer, setShowLayer] = useState(false)

  useEffect(() => {
    if (showVendors) {
      uiVisible({visible: true})
      setShowLayer(3)
    }
  }, [showVendors, uiVisible])

  useEffect(() => {
    async function checkConsentStatus() {
      const {valid} = await loadUserConsent()
      if (!valid) {
        uiVisible({visible: true})
        setShowLayer(1)
      }
    }
    checkConsentStatus()
  }, [])

  const handleOpenSecondLayer = () => {
    setShowLayer(2)
  }
  const handleSecondLayerGoBack = () => {
    setShowLayer(1)
  }
  const handleOpenCookiepolicyLayer = () => {
    setShowLayer(3)
  }
  const handleSaveUserConsent = ({purpose, vendor, specialFeatures}) => {
    uiVisible({visible: false})
    saveUserConsent({purpose, vendor, specialFeatures})
  }

  return (
    <>
      {showLayer === 1 && (
        <Suspense fallback={<div />}>
          <FirstLayer
            isMobile={isMobile}
            isTablet={isTablet}
            lang={lang}
            logo={logo}
            getVendorList={getVendorList}
            loadUserConsent={loadUserConsent}
            saveUserConsent={handleSaveUserConsent}
            openSecondLayer={handleOpenSecondLayer}
            openCookiepolicyLayer={handleOpenCookiepolicyLayer}
          />
        </Suspense>
      )}
      {showLayer === 2 && (
        <Suspense fallback={<div />}>
          <SecondLayer
            isMobile={isMobile}
            lang={lang}
            logo={logo}
            loadUserConsent={loadUserConsent}
            saveUserConsent={handleSaveUserConsent}
            getVendorList={getVendorList}
            onGoBack={handleSecondLayerGoBack}
          />
        </Suspense>
      )}
      {showLayer === 3 && (
        <Suspense fallback={<div />}>
          <SecondLayer
            isVendorLayer
            isMobile={isMobile}
            lang={lang}
            logo={logo}
            loadUserConsent={loadUserConsent}
            saveUserConsent={handleSaveUserConsent}
            getVendorList={getVendorList}
            onGoBack={handleSecondLayerGoBack}
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
  uiVisible: PropTypes.func,
  saveUserConsent: PropTypes.func,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
  showVendors: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string
}
