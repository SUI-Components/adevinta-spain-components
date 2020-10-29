import React, {useState, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import {useConsent} from '@s-ui/react-tcf-services'
import SuiButton from '@s-ui/react-atom-button'
import SuiModal from '@s-ui/react-molecule-modal'
import {I18N} from './settings'

const CLASS = 'sui-TcfFirstLayer'

export default function TcfFirstLayer({
  logo,
  onOpenCookiePolicyLayer,
  onOpenSecondLayer,
  onSaveUserConsent
}) {
  const {
    isMobile,
    language,
    updatePurpose,
    updateSpecialFeature,
    updateVendor
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

  const handleSettingsClick = () => {
    onOpenSecondLayer()
  }

  const handleSaveExitClick = async () => {
    updatePurpose({consent: true})
    updateSpecialFeature({consent: true})
    updateVendor({consent: true, legitimateInterest: true})
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
      <SuiModal
        isOpen={show}
        closeOnOutsideClick={false}
        closeOnEscKeyDown={false}
        header={<img className={`${CLASS}-logo`} src={logo} alt="logo" />}
        onClose={handleSaveExitClick}
        fitContent
        portalContainerId="sui-TcfFirstLayerModal"
      >
        <Content />
      </SuiModal>
      )}
    </div>
  )
}

TcfFirstLayer.displayName = 'TcfFirstLayer'
TcfFirstLayer.propTypes = {
  logo: PropTypes.string,
  onOpenCookiePolicyLayer: PropTypes.func,
  onOpenSecondLayer: PropTypes.func,
  onSaveUserConsent: PropTypes.func,
  showInModalForMobile: PropTypes.bool
}
