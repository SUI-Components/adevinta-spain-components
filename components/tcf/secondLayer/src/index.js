import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import SuiModal from '@s-ui/react-molecule-modal'
import SuiButton from '@s-ui/react-atom-button'

import IconClose from './components/IconClose'
import PurposeGroup from './components/PurposeGroup'
import {I18N} from './settings'

const CLASS = 'sui-TcfSecondLayer'
export default function TcfSecondLayer({
  isOpen,
  isMobile,
  lang = 'es',
  logo,
  loadUserConsent,
  saveUserConsent,
  getVendorList,
  uiVisible,
  onGoBack
}) {
  const [state, setState] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [vendorListState, setVendorListState] = useState(null)
  const [isNew, setIsNew] = useState(null)

  const i18n = I18N[lang]

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const getVendorListAsync = async () => {
      const {
        purposes,
        specialPurposes,
        features,
        specialFeatures,
        vendors
      } = await getVendorList({
        language: lang
      })
      setVendorListState({
        purposes,
        specialPurposes,
        features,
        specialFeatures,
        vendors
      })
    }
    const loadConsent = async () => {
      const {vendor, isNew} = await loadUserConsent()
      setState({vendors: vendor})
      setIsNew(isNew)
    }
    getVendorListAsync()
    loadConsent()
  }, [getVendorList, loadUserConsent, lang])

  const handleCloseModal = () => {
    uiVisible({visible: false})
    setModalOpen(false)
  }

  const formatConsentObject = ({vendor = {}}) => {
    const format = ({reference, object}) => {
      Object.keys(reference).forEach(key => {
        if (!object[key]) {
          object[key] = false
        }
      })
      return object
    }
    vendor.consents = format({
      reference: vendorListState.vendors || {},
      object: vendor.consents || {}
    })
    return {vendor}
  }

  const handleSaveExitClick = () => {
    saveUserConsent(
      formatConsentObject({
        vendor: state.vendors
      })
    )
    uiVisible({visible: false})
    setModalOpen(false)
  }

  const changeAllGroup = ({group, value}) => {
    setState(prevState => {
      for (const key in vendorListState[group]) {
        prevState[group].consents[key] = value
      }
      return {...prevState, [group]: prevState[group]}
    })
  }
  const handleRejectAll = ({group}) => {
    changeAllGroup({group, value: false})
  }
  const handleAcceptAll = ({group}) => {
    changeAllGroup({group, value: true})
  }

  const handleVendorsConsentsChange = ({index, value}) => {
    setState(prevState => {
      const {vendors} = prevState
      const {consents} = vendors
      consents[index] = !value
      return {...prevState, vendors: {...prevState.vendors, consents}}
    })
  }
  const Logo = () => (
    <img
      className={
        isMobile ? `${CLASS}-logo` : `${CLASS}-logo ${CLASS}-logo--desktop`
      }
      src={logo}
      alt="logo"
    />
  )
  return (
    <div className={CLASS}>
      <SuiModal
        isOpen={modalOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        header={isMobile ? <Logo /> : false}
        iconClose={isMobile ? <IconClose /> : false}
        onClose={handleCloseModal}
        fitContent
      >
        {!isMobile && <Logo />}
        <div
          className={
            isMobile
              ? `${CLASS}-container`
              : `${CLASS}-container ${CLASS}-container--desktop`
          }
        >
          <h2
            className={
              isMobile
                ? `${CLASS}-title`
                : `${CLASS}-title ${CLASS}-title--desktop`
            }
          >
            {i18n.VENDOR_PAGE.TITLE}
          </h2>
          <p
            className={
              isMobile
                ? `${CLASS}-text`
                : `${CLASS}-text ${CLASS}-text--desktop`
            }
          >
            {i18n.VENDOR_PAGE.TEXT}
          </p>
          {state?.vendors && vendorListState?.vendors && (
            <PurposeGroup
              name={i18n.VENDOR_PAGE.GROUPS.TITLE}
              baseClass={`${CLASS}-group`}
              descriptions={vendorListState.vendors}
              state={state.vendors}
              onConsentsChange={handleVendorsConsentsChange}
              i18n={i18n}
              isNew={isNew}
              onAcceptAll={() => handleAcceptAll({group: 'vendors'})}
              onRejectAll={() => handleRejectAll({group: 'vendors'})}
              vendorList={vendorListState}
            />
          )}
        </div>
        <footer className={`${CLASS}-buttons`}>
          <SuiButton design="outline" onClick={onGoBack}>
            {i18n.GO_BACK_BUTTON}
          </SuiButton>
          <SuiButton onClick={handleSaveExitClick}>
            {i18n.ACCEPT_BUTTON}
          </SuiButton>
        </footer>
      </SuiModal>
    </div>
  )
}

TcfSecondLayer.displayName = 'TcfSecondLayer'
TcfSecondLayer.propTypes = {
  isOpen: PropTypes.bool,
  isMobile: PropTypes.bool,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func,
  getVendorList: PropTypes.func,
  uiVisible: PropTypes.func,
  logo: PropTypes.string,
  lang: PropTypes.string,
  onGoBack: PropTypes.func
}
