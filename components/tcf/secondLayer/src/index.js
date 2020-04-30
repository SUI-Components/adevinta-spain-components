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
  const [purposesVLState, setPurposesVLState] = useState(null)
  const [vendorsVLState, setVendorsVLState] = useState(null)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const loadConsent = async () => {
      const {purpose, vendor} = await loadUserConsent()
      setState({purposes: purpose, vendors: vendor})
    }
    const getVL = async () => {
      const {purposes, vendors} = await getVendorList()
      setPurposesVLState(purposes)
      setVendorsVLState(vendors)
    }
    loadConsent()
    getVL()
  }, [getVendorList, loadUserConsent])

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const handleSaveExitClick = () => {
    saveUserConsent({purpose: state.purposes, vendor: state.vendors})
    setModalOpen(false)
  }
  const changeAll = accept => {
    setState(prevState => {
      const {purposes, vendors} = prevState
      const {consents: CP, legitimateInterests: LIP} = purposes
      const {consents: CV, legitimateInterests: LIV} = vendors
      for (const key in CP) {
        CP[key] = accept
        LIP[key] = accept
      }
      for (const key in CV) {
        CV[key] = accept
        LIV[key] = accept
      }
      return {
        vendors: {consents: CV, legitimateInterests: LIV},
        purposes: {consents: CP, legitimateInterests: LIP}
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
        {state && state.purposes && (
          <PurposeGroup
            name="Purposes"
            descriptionField="description"
            descriptions={purposesVLState}
            state={state.purposes}
            onConsentsChange={handlePurposesConsentsChange}
            onLegitimateInterestsChange={handlePurposesLIChange}
          />
        )}
        {state && state.vendors && (
          <PurposeGroup
            name="Vendors"
            descriptionField="name"
            descriptions={vendorsVLState}
            state={state.vendors}
            onConsentsChange={handleVendorsConsentsChange}
            onLegitimateInterestsChange={handleVendorsLIChange}
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
