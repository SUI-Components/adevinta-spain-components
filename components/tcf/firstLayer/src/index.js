import React, {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import SuiButton from '@s-ui/react-atom-button'
import SuiModal from '@s-ui/react-molecule-modal'
import SuiNotification from '@s-ui/react-molecule-notification'
import IconClose from './iconClose'
import {I18N, ADEVINTA_COLLECTED_CONSENTS} from './settings'

const CLASS = 'sui-TcfFirstLayer'

const SCROLL_TO_ACCEPT = 250

export default function TcfFirstLayer({
  lang = 'es',
  logo,
  isMobile,
  isTablet,
  getVendorList,
  loadUserConsent,
  saveUserConsent,
  openSecondLayer,
  openCookiepolicyLayer,
  isVariantB = false
}) {
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
        cookiesPolicyLink.current = node.querySelector(
          `.${CLASS}-body-info-link`
        )
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
  }, [])

  const handleSettingsClick = () => {
    openSecondLayer()
  }

  const handleSaveExitClick = async () => {
    const {
      purposes: VLPurposes,
      vendors: VLVendors,
      specialFeatures: VLSpecialFeatures
    } = await getVendorList({language: lang})
    const {purpose, vendor, specialFeatures} = await loadUserConsent()

    ADEVINTA_COLLECTED_CONSENTS.purposes.forEach(index => {
      if (VLPurposes[index]) {
        purpose.consents[index] = true
      }
    })
    ADEVINTA_COLLECTED_CONSENTS.specialFeatures.forEach(index => {
      if (VLSpecialFeatures[index]) {
        specialFeatures[index] = true
      }
    })
    for (const key in VLVendors) {
      vendor.consents[key] = true
    }
    handleCloseModal()
    saveUserConsent({purpose, vendor, specialFeatures})
  }

  const handleCloseModal = () => {
    document.removeEventListener('scroll', checkScroll)
    setShow(false)
  }

  const Content = ({modalType}) => {
    const baseBodyClass = `${CLASS}-body`
    const bodyClasses = isTablet
      ? `${baseBodyClass} ${baseBodyClass}--footer ${baseBodyClass}--tablet`
      : `${baseBodyClass} ${baseBodyClass}--footer`
    const baseButtonsClass = `${CLASS}-buttons`
    const buttonsClasses = isTablet
      ? `${baseButtonsClass} ${baseButtonsClass}--footer ${baseButtonsClass}--tablet`
      : `${baseButtonsClass} ${baseButtonsClass}--footer`

    return (
      <div className={modalType ? `${baseBodyClass}` : bodyClasses}>
        <span
          className={`${baseBodyClass}-info`}
          ref={textRef}
          dangerouslySetInnerHTML={{__html: i18n.BODY}}
        />
        <div className={modalType ? `${baseButtonsClass}` : buttonsClasses}>
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
  Content.propTypes = {
    modalType: PropTypes.bool
  }

  return (
    <div className={CLASS}>
      {isMobile && !isVariantB && (
        <SuiModal
          isOpen={show}
          closeOnOutsideClick
          closeOnEscKeyDown
          header={<img className={`${CLASS}-logo`} src={logo} alt="logo" />}
          iconClose={<IconClose class={`${CLASS}-icon-close`} />}
          onClose={handleCloseModal}
          fitContent
        >
          <Content modalType />
        </SuiModal>
      )}
      {(!isMobile || isVariantB) && (
        <div
          className={`${CLASS}-notification ${
            isVariantB && isMobile ? CLASS + '--variantB' : ''
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
  getVendorList: PropTypes.func,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string,
  isVariantB: PropTypes.bool
}
