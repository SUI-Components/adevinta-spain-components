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
  lang = 'es',
  logo,
  isMobile,
  saveUserConsent,
  openSecondLayer,
  openCookiepolicyLayer,
  showInModalForMobile = false
}) {
  const {loadUserConsent, updateUserConsent} = useConsent()
  const [show, setShow] = useState(true)
  const i18n = I18N[lang]

  const handleCookiePolicyLayerClick = useCallback(() => {
    cookiesPolicyLink.current &&
      cookiesPolicyLink.current.removeEventListener(
        'click',
        handleCookiePolicyLayerClick
      )
    openCookiepolicyLayer()
  })
  const cookiesPolicyLink = useRef()
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
    openSecondLayer()
  }

  const handleSaveExitClick = async () => {
    const {purpose, vendor, specialFeatures} = await loadUserConsent()
    updateUserConsent({
      purpose,
      vendor,
      specialFeatures,
      allPurposes: true,
      allVendors: true,
      allSpecialFeatures: true
    })
    handleCloseModal()
    saveUserConsent()
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
    <div className={CLASS}>
      {isMobile && showInModalForMobile ? (
        <SuiModal
          isOpen={show}
          closeOnOutsideClick
          closeOnEscKeyDown
          header={<img className={`${CLASS}-logo`} src={logo} alt="logo" />}
          iconClose={<IconClose class={`${CLASS}-icon-close`} />}
          onClose={handleSaveExitClick}
          fitContent
        >
          <Content />
        </SuiModal>
      ) : (
        <div
          className={`${CLASS}-notification ${
            isMobile ? `${CLASS}--isMobile` : ''
          }`}
        >
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
  openSecondLayer: PropTypes.func,
  openCookiepolicyLayer: PropTypes.func,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func,
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string,
  showInModalForMobile: PropTypes.bool
}
