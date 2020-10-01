/* eslint-disable react-hooks/exhaustive-deps */
import React, {Suspense, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useConsent} from '@s-ui/react-tcf-services'

const FirstLayer = React.lazy(() => import('../FirstLayer'))
const SecondLayer = React.lazy(() => import('../SecondLayer'))

export default function TCFContainer({
  isTestAcceptedWithUserScroll = true,
  isTestForceModal = false,
  logo,
  onCloseModal,
  showVendors
}) {
  const [showLayer, setShowLayer] = useState(0)
  const {uiVisible, loadUserConsent, saveUserConsent} = useConsent()
  useEffect(() => {
    if (showVendors) {
      uiVisible({visible: true})
      setShowLayer(2)
    }
  }, [showVendors, uiVisible])

  useEffect(() => {
    async function checkConsentStatus() {
      const userConsent = await loadUserConsent()
      const {valid} = userConsent
      if (!valid) {
        uiVisible({visible: true})
        setShowLayer(1)
      }
    }
    checkConsentStatus().catch(() => {
      setShowLayer(0)
    })
  }, [])

  const handleOpenSecondLayer = () => {
    setShowLayer(2)
  }
  const handleVendorsClick = () => {
    setShowLayer(3)
  }
  const handleSecondLayerGoBack = () => {
    if (showVendors) {
      onCloseModal && onCloseModal()
      setShowLayer(0)
    } else {
      setShowLayer(1)
    }
  }
  const handleThirdLayerGoBack = () => {
    setShowLayer(2)
  }
  const handleOpenCookiePolicyLayer = () => {
    setShowLayer(3)
  }
  const handleSaveUserConsent = async () => {
    await saveUserConsent()
    uiVisible({visible: false})
    onCloseModal && onCloseModal()
    setShowLayer(0)
  }

  return (
    <>
      {showLayer === 1 && (
        <Suspense fallback={<div />}>
          <FirstLayer
            isTestAcceptedWithUserScroll={isTestAcceptedWithUserScroll}
            isTestForceModal={isTestForceModal}
            logo={logo}
            onOpenCookiePolicyLayer={handleOpenCookiePolicyLayer}
            onOpenSecondLayer={handleOpenSecondLayer}
            onSaveUserConsent={handleSaveUserConsent}
          />
        </Suspense>
      )}
      {showLayer === 2 && (
        <Suspense fallback={<div />}>
          <SecondLayer
            logo={logo}
            onSaveUserConsent={handleSaveUserConsent}
            onGoBack={handleSecondLayerGoBack}
            onVendorsClick={handleVendorsClick}
          />
        </Suspense>
      )}
      {showLayer === 3 && (
        <Suspense fallback={<div />}>
          <SecondLayer
            isVendorLayer
            logo={logo}
            onSaveUserConsent={handleSaveUserConsent}
            onGoBack={handleThirdLayerGoBack}
          />
        </Suspense>
      )}
    </>
  )
}

TCFContainer.displayName = 'TcfUi'

TCFContainer.propTypes = {
  isTestAcceptedWithUserScroll: PropTypes.bool,
  isTestForceModal: PropTypes.bool,
  logo: PropTypes.string,
  onCloseModal: PropTypes.func,
  showVendors: PropTypes.bool
}
