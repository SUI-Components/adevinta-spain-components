import React, {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import {useConsent} from '@s-ui/react-tcf-services'
import SuiButton from '@s-ui/react-atom-button'
import SuiModal from '@s-ui/react-molecule-modal'
import SuiNotification from '@s-ui/react-molecule-notification'
import IconClose from './iconClose'
import {I18N} from './settings'

const CLASS = 'sui-TcfFirstLayer'

const SCROLL_TO_ACCEPT = 250

export default function TcfFirstLayer({
  logo,
  onSaveUserConsent,
  onOpenSecondLayer,
  onOpenCookiePolicyLayer,
  showInModalForMobile = false
}) {
  const {
    isMobile,
    language,
    loadUserConsent,
    updateUserConsent,
    getVendorList,
    getScope
  } = useConsent()
  const [show, setShow] = useState(true)
  const cookiesPolicyLink = useRef()
  const i18n = I18N[language]

  const handleCookiePolicyLayerClick = useCallback(() => {
    cookiesPolicyLink.current &&
      cookiesPolicyLink.current.removeEventListener(
        'click',
        handleCookiePolicyLayerClick
      )
    onOpenCookiePolicyLayer()
  })
  const ref = useRef(null)
  const textRef = useCallback(
    node => {
      if (ref.current) {
        ref.current = null
      }

      if (node) {
        cookiesPolicyLink.current = node.querySelector(`.${CLASS}-link`)
        if (cookiesPolicyLink) {
          cookiesPolicyLink.current.addEventListener(
            'click',
            handleCookiePolicyLayerClick
          )
        }
        ref.current = node
      }
    },
    [handleCookiePolicyLayerClick]
  )

  let initialYOffset
  const checkScroll = () => {
    if (
      initialYOffset - window.pageYOffset >= SCROLL_TO_ACCEPT ||
      initialYOffset - window.pageYOffset <= -SCROLL_TO_ACCEPT
    ) {
      handleSaveExitClick()
    }
  }
  useEffect(() => {
    initialYOffset = window.pageYOffset
    document.addEventListener('scroll', checkScroll, {passive: true})
    return () => document.removeEventListener('scroll', checkScroll)
  }, [])

  const handleSettingsClick = () => {
    onOpenSecondLayer()
  }

  const handleSaveExitClick = async () => {
    const [userConsent, vendorList, scope] = await Promise.all([
      loadUserConsent(),
      getVendorList(),
      getScope()
    ])
    scope.purposes = scope.purposes || Object.keys(vendorList.purposes)
    scope.purposes.forEach(key => {
      userConsent.purpose.consents[key] = true
      userConsent.purpose.legitimateInterests[key] = true
    })

    scope.specialFeatures =
      scope.specialFeatures || Object.keys(vendorList.specialFeatures)
    scope.specialFeatures.forEach(
      key => (userConsent.specialFeatures[key] = true)
    )

    Object.keys(vendorList.vendors).forEach(key => {
      userConsent.vendor.consents[key] = true
      userConsent.vendor.legitimateInterests[key] = true
    })
    updateUserConsent({
      purpose: userConsent.purpose,
      vendor: userConsent.vendor,
      specialFeatures: userConsent.specialFeatures,
      allPurposes: true,
      allVendors: true,
      allSpecialFeatures: true
    })
    handleCloseModal()
    onSaveUserConsent()
  }

  const handleCloseModal = () => {
    setShow(false)
  }

  const Content = () => {
    return (
      <div className={`${CLASS}-body`}>
        <div
          className={`${CLASS}-info`}
          ref={textRef}
          dangerouslySetInnerHTML={{__html: i18n.BODY}}
        />
        <div className={`${CLASS}-buttons`}>
          <SuiButton onClick={handleSettingsClick} design="outline">
            {i18n.CONFIGURE_BUTTON}
          </SuiButton>
          <SuiButton onClick={handleSaveExitClick}>
            {i18n.CONTINUE_NAVIGATION_BUTTON}
          </SuiButton>
        </div>
      </div>
    )
  }

  return (
    <div className={`${isMobile ? `${CLASS} ${CLASS}--isMobile` : `${CLASS}`}`}>
      {isMobile && showInModalForMobile ? (
        <SuiModal
          isOpen={show}
          closeOnOutsideClick
          closeOnEscKeyDown
          header={<img className={`${CLASS}-logo`} src={logo} alt="logo" />}
          iconClose={<IconClose />}
          onClose={handleSaveExitClick}
          fitContent
          portalContainerId="sui-TcfFirstLayerModal"
        >
          <Content />
        </SuiModal>
      ) : (
        <div className={`${CLASS}-notification`}>
          <SuiNotification
            position="bottom"
            autoClose="manual"
            show={show}
            showCloseButton={false}
            variation="positive"
            type="system"
          >
            <Content />
          </SuiNotification>
        </div>
      )}
    </div>
  )
}

TcfFirstLayer.displayName = 'TcfFirstLayer'
TcfFirstLayer.propTypes = {
  onOpenSecondLayer: PropTypes.func,
  onOpenCookiePolicyLayer: PropTypes.func,
  onSaveUserConsent: PropTypes.func,
  logo: PropTypes.string,
  showInModalForMobile: PropTypes.bool
}
