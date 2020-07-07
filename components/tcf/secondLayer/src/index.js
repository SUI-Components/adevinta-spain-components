import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import SuiModal from '@s-ui/react-molecule-modal'
import SuiButton from '@s-ui/react-atom-button'

import IconClose from './components/iconClose'
import TcfSecondLayerDecisionGroup from './components/tcf-secondLayer-decision-group'
import {I18N} from './settings'

const CLASS = 'sui-TcfSecondLayer'
export default function TcfSecondLayer({
  isMobile,
  lang = 'es',
  logo,
  loadUserConsent,
  saveUserConsent,
  getVendorList,
  onGoBack
}) {
  const [state, setState] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)
  const [vendorListState, setVendorListState] = useState(null)

  const i18n = I18N[lang]

  useEffect(() => {
    const getVendorListAndConsent = async () => {
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
      const {vendor, isNew} = await loadUserConsent()
      const vendorsConsent = vendor
      if (isNew) {
        vendorsConsent.consents = format({
          reference: vendors,
          object: {},
          value: true
        })
      }
      setState({vendors: vendorsConsent})
    }
    getVendorListAndConsent()
  }, [getVendorList, loadUserConsent, lang])

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const format = ({reference, object, value = false}) => {
    Object.keys(reference).forEach(key => {
      if (!object[key]) {
        object[key] = value
      }
    })
    return object
  }
  const formatConsentObject = ({vendor = {}}) => {
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
    setModalOpen(false)
  }

  const changeAllGroup = ({group, value}) => {
    setState(prevState => {
      for (const key in vendorListState[group]) {
        prevState[group].consents[key] = value
        prevState[group].legitimateInterests[key] = value
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

  const handleVendorsLegitimateInterestChange = ({index, value}) => {
    setState(prevState => {
      const {vendors} = prevState
      const {legitimateInterests} = vendors
      legitimateInterests[index] = !value
      return {
        ...prevState,
        vendors: {...prevState.vendors, legitimateInterests}
      }
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
            <TcfSecondLayerDecisionGroup
              name={i18n.VENDOR_PAGE.GROUPS.TITLE}
              baseClass={`${CLASS}-group`}
              descriptions={vendorListState.vendors}
              state={state.vendors}
              onConsentChange={handleVendorsConsentsChange}
              onLegitimateInterestChange={handleVendorsLegitimateInterestChange}
              i18n={i18n}
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
  isMobile: PropTypes.bool,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func,
  getVendorList: PropTypes.func,
  logo: PropTypes.string,
  lang: PropTypes.string,
  onGoBack: PropTypes.func
}
