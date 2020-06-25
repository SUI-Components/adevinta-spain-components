import React, {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import SuiButton from '@s-ui/react-atom-button'
import SuiModal from '@s-ui/react-molecule-modal'
import SuiNotification from '@s-ui/react-molecule-notification'
import IconClose from './iconClose'
import {I18N} from './settings'

const CLASS = 'sui-TcfFirstLayer'

export default function TcfFirstLayer({
  lang = 'es',
  logo,
  isMobile,
  isTablet,
  getVendorList,
  saveUserConsent,
  openSecondLayer,
  openCookiepolicyLayer
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
  let count = 0
  const checkScroll = () => {
    count++
    // use counter to avoid initial window.pageYOffset pointing erroneously to 0
    if (count === 3) {
      initialYOffset = window.pageYOffset
    }
    if (
      (count >= 3 && initialYOffset - window.pageYOffset >= 250) ||
      initialYOffset - window.pageYOffset <= -250
    ) {
      handleSaveExitClick()
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', checkScroll)
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

    const userConsent = {
      purpose: {
        consents: {},
        legitimateInterests: {}
      },
      vendor: {
        consents: {},
        legitimateInterests: {}
      },
      specialFeatures: {}
    }

    const {purpose, vendor, specialFeatures} = userConsent
    for (const key in VLPurposes) {
      purpose.consents[key] = true
      purpose.legitimateInterests[key] = true
    }
    for (const key in VLVendors) {
      vendor.consents[key] = true
      vendor.legitimateInterests[key] = true
    }
    for (const key in VLSpecialFeatures) {
      specialFeatures[key] = true
    }

    saveUserConsent(userConsent)
    handleCloseModal()
  }

  const handleCloseModal = () => {
    document.removeEventListener('scroll', checkScroll)
    setShow(false)
  }

  const Buttons = () => (
    <>
      <SuiButton onClick={handleSettingsClick} design="outline">
        {i18n.CONFIGURE_BUTTON}
      </SuiButton>
      <SuiButton onClick={handleSaveExitClick}>
        {i18n.CONTINUE_NAVIGATION_BUTTON}
      </SuiButton>
    </>
  )

  return (
    <div className={CLASS}>
      {isMobile && (
        <SuiModal
          isOpen={show}
          closeOnOutsideClick
          closeOnEscKeyDown
          header={<img className={`${CLASS}-logo`} src={logo} alt="logo" />}
          iconClose={<IconClose class={`${CLASS}-icon-close`} />}
          onClose={handleCloseModal}
          fitContent
        >
          <div className={`${CLASS}-body`}>
            <span
              className={`${CLASS}-body-info`}
              ref={textRef}
              dangerouslySetInnerHTML={{__html: i18n.BODY}}
            />
            <div className={`${CLASS}-buttons`}>
              <Buttons />
            </div>
          </div>
        </SuiModal>
      )}
      {!isMobile && (
        <div className={`${CLASS}-notification`}>
          <SuiNotification
            position="bottom"
            autoClose="manual"
            show={show}
            showCloseButton={false}
            variation="positive"
            type="system"
          >
            <div
              className={
                isTablet
                  ? `${CLASS}-body ${CLASS}-body ${CLASS}-body--footer ${CLASS}-body--tablet`
                  : `${CLASS}-body ${CLASS}-body--footer`
              }
            >
              <span
                className={`${CLASS}-body-info`}
                ref={textRef}
                dangerouslySetInnerHTML={{__html: i18n.BODY}}
              />
              <div
                className={
                  isTablet
                    ? `${CLASS}-buttons ${CLASS}-buttons--footer ${CLASS}-buttons--tablet`
                    : `${CLASS}-buttons ${CLASS}-buttons--footer`
                }
              >
                <Buttons />
              </div>
            </div>
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
  saveUserConsent: PropTypes.func,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string
}
