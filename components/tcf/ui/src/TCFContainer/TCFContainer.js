/* eslint-disable react-hooks/exhaustive-deps */
import React, {Suspense, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useConsent} from '@s-ui/react-tcf-services'
import {
  LAYER_BANNER,
  LAYER_OFF,
  LAYER_PURPOSES,
  LAYER_VENDORS
} from '../constants'

const FirstLayer = React.lazy(() => import('../FirstLayer'))
const SecondLayer = React.lazy(() => import('../SecondLayer'))

export default function TCFContainer({
  isTestAcceptedWithUserScroll = true,
  isTestForceModal = false,
  logo,
  onCloseModal,
  showPurposesLayer
}) {
  const [showLayer, setShowLayer] = useState(LAYER_OFF)
  const {uiVisible, loadUserConsent, saveUserConsent} = useConsent()
  useEffect(() => {
    if (showPurposesLayer) {
      uiVisible({visible: true})
      setShowLayer(LAYER_PURPOSES)
    }
  }, [showPurposesLayer, uiVisible])

  useEffect(() => {
    async function checkConsentStatus() {
      const userConsent = await loadUserConsent()
      const {valid} = userConsent
      if (!valid) {
        uiVisible({visible: true})
        setShowLayer(LAYER_BANNER)
      }
    }
    checkConsentStatus().catch(() => {
      setShowLayer(LAYER_OFF)
    })
  }, [])

  const handleOpenSecondLayer = () => {
    setShowLayer(LAYER_PURPOSES)
  }
  const handleVendorsClick = () => {
    setShowLayer(LAYER_VENDORS)
  }
  const handleSecondLayerGoBack = () => {
    if (showPurposesLayer) {
      onCloseModal && onCloseModal()
      setShowLayer(LAYER_OFF)
    } else {
      setShowLayer(LAYER_BANNER)
    }
  }
  const handleThirdLayerGoBack = () => {
    setShowLayer(LAYER_PURPOSES)
  }
  const handleOpenCookiePolicyLayer = () => {
    setShowLayer(LAYER_VENDORS)
  }
  const handleSaveUserConsent = async () => {
    await saveUserConsent()
    uiVisible({visible: false})
    onCloseModal && onCloseModal()
    setShowLayer(LAYER_OFF)
  }

  return (
    <>
      {showLayer === LAYER_BANNER && (
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
      {showLayer === LAYER_PURPOSES && (
        <Suspense fallback={<div />}>
          <SecondLayer
            logo={logo}
            onSaveUserConsent={handleSaveUserConsent}
            onGoBack={handleSecondLayerGoBack}
            onVendorsClick={handleVendorsClick}
          />
        </Suspense>
      )}
      {showLayer === LAYER_VENDORS && (
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
  showPurposesLayer: PropTypes.bool
}
