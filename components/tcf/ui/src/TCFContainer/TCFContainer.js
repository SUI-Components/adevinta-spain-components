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
  logo
}) {
  const [showLayer, setShowLayer] = useState(false)

  useEffect(() => {
    async function checkConsentStatus() {
      const {valid} = await loadUserConsent()
      if (!valid) {
        // When controling the option of a valid userConsent, but showing UI anyway,
        // uiVisible should also be called
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
            saveUserConsent={saveUserConsent}
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
            uiVisible={uiVisible}
            loadUserConsent={loadUserConsent}
            saveUserConsent={saveUserConsent}
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
            uiVisible={uiVisible}
            loadUserConsent={loadUserConsent}
            saveUserConsent={saveUserConsent}
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
  lang: PropTypes.string,
  logo: PropTypes.string
}
