import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SuiModal from '@s-ui/react-molecule-modal'

import IconClose from './components/IconClose'
import ButtonsTriade from './components/ButtonsTriade'
import PurposeGroup from './components/PurposeGroup'
export default function TcfSecondLayer({
  isOpen,
  loadUserConsent,
  saveUserConsent,
  getVendorList
}) {
  const [state, setState] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [saveButtonActive, setSaveButtonActive] = useState(false)
  const [vendorListState, setVendorListState] = useState(null)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const loadConsent = async () => {
      const {purpose, vendor, specialFeatures} = await loadUserConsent()
      setState({purposes: purpose, vendors: vendor, specialFeatures})
    }
    const getVendorListAsync = async () => {
      const {purposes, vendors, specialFeatures} = await getVendorList()
      setVendorListState({purposes, vendors, specialFeatures})
    }
    loadConsent()
    getVendorListAsync()
  }, [getVendorList, loadUserConsent])

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const formatConsentObject = ({
    purpose = {},
    vendor = {},
    specialFeatures = {}
  }) => {
    const format = ({reference, object}) => {
      Object.keys(reference).forEach(key => {
        if (!object[key]) {
          object[key] = false
        }
      })
      return object
    }
    purpose.consents = purpose.consents || {}
    purpose.legitimateInterests = purpose.legitimateInterests || {}
    vendor.consents = vendor.consents || {}
    vendor.legitimateInterests = vendor.legitimateInterests || {}
    vendorListState.purposes = vendorListState.purposes || {}
    vendorListState.vendors = vendorListState.vendors || {}
    vendorListState.specialFeatures = vendorListState.specialFeatures || {}

    purpose.consents = format({
      reference: vendorListState.purposes,
      object: purpose.consents
    })
    purpose.legitimateInterests = format({
      reference: vendorListState.purposes,
      object: purpose.legitimateInterests
    })
    vendor.consents = format({
      reference: vendorListState.vendors,
      object: vendor.consents
    })
    vendor.legitimateInterests = format({
      reference: vendorListState.vendors,
      object: vendor.legitimateInterests
    })
    specialFeatures = format({
      reference: vendorListState.specialFeatures,
      object: specialFeatures
    })
    return {purpose, vendor, specialFeatures}
  }

  const handleSaveExitClick = () => {
    saveUserConsent(
      formatConsentObject({
        purpose: state.purposes,
        vendor: state.vendors,
        specialFeatures: state.specialFeatures
      })
    )
    setModalOpen(false)
  }
  const changeAll = accept => {
    setState(prevState => {
      const {purposes, vendors, specialFeatures} = prevState
      const {consents: CP, legitimateInterests: LIP} = purposes
      const {consents: CV, legitimateInterests: LIV} = vendors
      for (const key in vendorListState.purposes) {
        CP[key] = accept
        LIP[key] = accept
      }
      for (const key in vendorListState.vendors) {
        CV[key] = accept
        LIV[key] = accept
      }
      for (const key in vendorListState.specialFeatures) {
        specialFeatures[key] = accept
      }
      return {
        vendors: {consents: CV, legitimateInterests: LIV},
        purposes: {consents: CP, legitimateInterests: LIP},
        specialFeatures
      }
    })
  }

  const handleAcceptAll = () => {
    changeAll(true)
    setSaveButtonActive(true)
  }
  const handleRejectAll = () => {
    changeAll(false)
    setSaveButtonActive(true)
  }

  const handlePurposesConsentsChange = ({index, value}) => {
    setState(prevState => {
      const {purposes} = prevState
      const {consents} = purposes
      consents[index] = !value
      return {...prevState, purposes: {...prevState.purposes, consents}}
    })
    setSaveButtonActive(true)
  }

  const handlePurposesLIChange = ({index, value}) => {
    setState(prevState => {
      const {purposes} = prevState
      const {legitimateInterests} = purposes
      legitimateInterests[index] = !value
      return {
        ...prevState,
        purposes: {...prevState.purposes, legitimateInterests}
      }
    })
    setSaveButtonActive(true)
  }

  const handleVendorsConsentsChange = ({index, value}) => {
    setState(prevState => {
      const {vendors} = prevState
      const {consents} = vendors
      consents[index] = !value
      return {...prevState, vendors: {...prevState.vendors, consents}}
    })
    setSaveButtonActive(true)
  }

  const handleVendorsLIChange = ({index, value}) => {
    setState(prevState => {
      const {vendors} = prevState
      const {legitimateInterests} = vendors
      legitimateInterests[index] = !value
      return {
        ...prevState,
        vendors: {...prevState.vendors, legitimateInterests}
      }
    })
    setSaveButtonActive(true)
  }
  const handleSpecialFeaturesChange = ({index, value}) => {
    setState(prevState => {
      const {specialFeatures} = prevState
      specialFeatures[index] = !value
      return {
        ...prevState,
        specialFeatures
      }
    })
    setSaveButtonActive(true)
  }
  return (
    <div className="sui-TcfSecondLayer">
      <SuiModal
        isOpen={modalOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        header={<strong>TcfSecondLayer</strong>}
        iconClose={<IconClose />}
        onClose={handleCloseModal}
      >
        <ButtonsTriade
          isSaveButtonActive={saveButtonActive}
          onSaveExitClick={handleSaveExitClick}
          onAcceptAll={handleAcceptAll}
          onRejectAll={handleRejectAll}
        />
        {state?.purposes && vendorListState?.purposes && (
          <PurposeGroup
            name="Purposes"
            descriptionField="description"
            descriptions={vendorListState.purposes}
            state={state.purposes}
            onConsentsChange={handlePurposesConsentsChange}
            onLegitimateInterestsChange={handlePurposesLIChange}
            hasLegitimateInterest
          />
        )}
        {state?.vendors && vendorListState?.vendors && (
          <PurposeGroup
            name="Vendors"
            descriptionField="name"
            descriptions={vendorListState.vendors}
            state={state.vendors}
            onConsentsChange={handleVendorsConsentsChange}
            onLegitimateInterestsChange={handleVendorsLIChange}
            hasLegitimateInterest
          />
        )}
        {state?.specialFeatures && vendorListState?.specialFeatures && (
          <PurposeGroup
            name="SpecialFeatures"
            descriptionField="name"
            descriptions={vendorListState.specialFeatures}
            state={{consents: state.specialFeatures}}
            onConsentsChange={handleSpecialFeaturesChange}
          />
        )}
      </SuiModal>
    </div>
  )
}

TcfSecondLayer.displayName = 'TcfSecondLayer'
TcfSecondLayer.propTypes = {
  isOpen: PropTypes.bool,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func,
  getVendorList: PropTypes.func
}
