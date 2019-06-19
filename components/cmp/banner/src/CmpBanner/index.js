import React, {useState, useRef, Suspense} from 'react'
import PropTypes from 'prop-types'
import {useMount} from '@schibstedspain/sui-react-hooks'

const CONSENT_STATUS_NOT_ACCEPTED = 'NOT_ACCEPTED'
const NO_OP = () => {}

const CmpBanner = React.lazy(() => import('./component'))
const CmpModal = React.lazy(() => import('@schibstedspain/react-cmp-modal'))

export default function CmpBannerContainer({
  companyName,
  lang,
  logo,
  privacyUrl,
  getConsentStatus,
  getPurposesAndVendors,
  sendConsents,
  onAccept = NO_OP,
  onConfigure = NO_OP
}) {
  const [showModal, setShowModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const containerDOMEl = useRef()

  const _handleAccept = async () => {
    const {
      purposeConsents,
      vendorConsents
    } = await getPurposesAndVendors.execute()
    await sendConsents.execute({purposeConsents, vendorConsents})

    setShowModal(false)
    setShowNotification(false)

    _removeBodyEvent()
    onAccept()
  }

  const _handleReadMore = async () => {
    setShowModal(true)
    setShowNotification(true)
    onConfigure()
  }

  /**
   * This handler is used everytime the user clicks on something in the web
   * in order to assume he's accepting our CMP if he's not trying to configure it and
   * he's just navigating the website
   */
  const _handleClickOnDocument = ({target}) => {
    const isClickableElement =
      target.closest('a') || target.closest('button') || target.closest('input')
    const isNotContainedInBanner = !containerDOMEl.current.contains(target)
    // if not contained and clickable element, then accept the banner
    isNotContainedInBanner && isClickableElement && _handleAccept()
  }

  const _handleExitModal = () => {
    setShowModal(false)
  }

  const _removeBodyEvent = () => {
    document.removeEventListener('click', _handleClickOnDocument)
  }

  useMount(function() {
    async function initiConsentStatus() {
      const consentStatus = await getConsentStatus.execute()
      const isConsentNotAccepted = consentStatus === CONSENT_STATUS_NOT_ACCEPTED
      setShowNotification(isConsentNotAccepted)

      if (isConsentNotAccepted) {
        // We're assuming, the user accepts our CMP if he keep navigating in our page
        document.addEventListener('click', _handleClickOnDocument)
      }
    }
    initiConsentStatus()

    return _removeBodyEvent
  })

  return (
    <div ref={containerDOMEl}>
      {showNotification && (
        <Suspense fallback={<div />}>
          <CmpBanner
            onAccept={_handleAccept}
            onConfigure={_handleReadMore}
            companyName={companyName}
            lang={lang}
          />
        </Suspense>
      )}
      {showModal && (
        <Suspense fallback={<div />}>
          <CmpModal
            cmpReady
            lang={lang}
            logo={logo}
            onExit={_handleExitModal}
            privacyUrl={privacyUrl}
          />
        </Suspense>
      )}
    </div>
  )
}

CmpBannerContainer.propTypes = {
  companyName: PropTypes.string.isRequired,
  getConsentStatus: PropTypes.object.isRequired,
  getPurposesAndVendors: PropTypes.object.isRequired,
  lang: PropTypes.string,
  logo: PropTypes.string,
  onAccept: PropTypes.func,
  onConfigure: PropTypes.func,
  privacyUrl: PropTypes.string,
  sendConsents: PropTypes.object.isRequired
}
