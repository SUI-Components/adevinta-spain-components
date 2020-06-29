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
  lang = 'es',
  logo,
  loadUserConsent,
  saveUserConsent,
  getVendorList,
  onGoBack
}) {
  const [state, setState] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [vendorListState, setVendorListState] = useState(null)

  const i18n = I18N[lang]

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const getVendorListAsync = async () => {
      const {purposes, vendors, specialFeatures} = await getVendorList({
        language: lang
      })
      setVendorListState({purposes, vendors, specialFeatures})
    }
    const loadConsent = async () => {
      const {purpose, vendor, specialFeatures} = await loadUserConsent()
      setState({purposes: purpose, vendors: vendor, specialFeatures})
    }
    getVendorListAsync()
    loadConsent()
  }, [getVendorList, loadUserConsent, lang])

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const formatConsentObject = ({purpose = {}, vendor = {}}) => {
    const format = ({reference, object}) => {
      Object.keys(reference).forEach(key => {
        if (!object[key]) {
          object[key] = false
        }
      })
      return object
    }

    purpose.consents = format({
      reference: vendorListState.purposes || {},
      object: purpose.consents || {}
    })
    vendor.consents = format({
      reference: vendorListState.vendors || {},
      object: vendor.consents || {}
    })
    return {purpose, vendor}
  }

  const handleSaveExitClick = () => {
    saveUserConsent(
      formatConsentObject({
        purpose: state.purposes,
        vendor: state.vendors
      })
    )
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

  const handlePurposesConsentsChange = ({index, value}) => {
    setState(prevState => {
      const {purposes} = prevState
      const {consents} = purposes
      consents[index] = !value
      return {...prevState, purposes: {...prevState.purposes, consents}}
    })
  }

  const handleVendorsConsentsChange = ({index, value}) => {
    setState(prevState => {
      const {vendors} = prevState
      const {consents} = vendors
      consents[index] = !value
      return {...prevState, vendors: {...prevState.vendors, consents}}
    })
  }

  return (
    <div className={CLASS}>
      <SuiModal
        isOpen={modalOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        header={<img className={`${CLASS}-logo`} src={logo} alt="logo" />}
        iconClose={<IconClose />}
        onClose={handleCloseModal}
        fitContent
      >
        <div className={`${CLASS}-container`}>
          <h2 className={`${CLASS}-title`}>{i18n.VENDOR_PAGE.TITLE}</h2>
          <p className={`${CLASS}-text`}>{i18n.VENDOR_PAGE.TEXT}</p>
          {state?.purposes && vendorListState?.purposes && (
            <PurposeGroup
              name={i18n.VENDOR_PAGE.GROUPS.FIRST.TITLE}
              baseClass={`${CLASS}-group`}
              descriptions={vendorListState.purposes}
              state={state.purposes}
              onConsentsChange={handlePurposesConsentsChange}
              i18n={i18n}
              onAcceptAll={() => handleAcceptAll({group: 'purposes'})}
              onRejectAll={() => handleRejectAll({group: 'purposes'})}
            />
          )}
          {state?.vendors && vendorListState?.vendors && (
            <PurposeGroup
              name={i18n.VENDOR_PAGE.GROUPS.SECOND.TITLE}
              baseClass={`${CLASS}-group`}
              descriptions={vendorListState.vendors}
              state={state.vendors}
              onConsentsChange={handleVendorsConsentsChange}
              i18n={i18n}
              onAcceptAll={() => handleAcceptAll({group: 'vendors'})}
              onRejectAll={() => handleRejectAll({group: 'vendors'})}
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
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func,
  getVendorList: PropTypes.func,
  logo: PropTypes.string,
  lang: PropTypes.string,
  onGoBack: PropTypes.func
}
