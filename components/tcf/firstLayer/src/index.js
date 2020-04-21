import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SuiSwitch from '@s-ui/react-atom-switch'
import SuiButton from '@s-ui/react-atom-button'
import SuiModal from '@s-ui/react-molecule-modal'

const IconClose = () => (
  <svg viewBox="0 0 24 24">
    <path
      id="a"
      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"
    />
  </svg>
)

const InfoCard = ({description, purposes, onPurposesChange}) => {
  const [purposesState, setPurposesState] = useState(purposes)

  useEffect(() => {
    setPurposesState(purposes)
  }, [purposes])

  const handleToggle = ({index, value}) => {
    const updatedPurposes = purposesState
    updatedPurposes[index - 1].initialValue = !value
    setPurposesState([...updatedPurposes])
    onPurposesChange(purposesState)
  }

  return (
    <>
      <h3>{description}</h3>
      {purposesState.map(purpose => (
        <>
          <p>{purpose.text}</p>
          <SuiSwitch
            key={`purpose-${purpose.index}`}
            label=""
            name={`purpose-${purpose.index}`}
            value={purpose.initialValue}
            onToggle={() =>
              handleToggle({
                index: purpose.index,
                value: purpose.initialValue
              })
            }
          />
        </>
      ))}
    </>
  )
}

InfoCard.displayName = 'InfoCard'
InfoCard.propTypes = {
  purposes: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
  onPurposesChange: PropTypes.func
}
export default function TcfFirstLayer({
  loadUserConsent,
  saveUserConsent,
  openSecondLayer
}) {
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)
  const [purposesState, setPurposesState] = useState([])
  const [modalOpen, setModalOpen] = useState(true)

  useEffect(() => {
    const loadConsent = async () => {
      const {purposeConsents} = await loadUserConsent()
      setPurposesState(purposeConsents)
    }
    loadConsent()
  }, [])

  const handleSettingsClick = () => {
    openSecondLayer()
    return null
  }
  const handleSaveExitClick = () => {
    saveUserConsent({purposeConsents: purposesState})
    setModalOpen(false)
    return null
  }
  const handleAcceptAll = () => {
    const updatedPurposes = purposesState.map(purpose => {
      purpose.initialValue = true
      return purpose
    })
    setPurposesState(updatedPurposes)
    setSaveButtonDisabled(false)
    return null
  }
  const handlePurposesChange = purposes => {
    setSaveButtonDisabled(false)
    setPurposesState([...purposes])
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  return (
    <div className="sui-TcfFirstLayer">
      <SuiModal
        isOpen={modalOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        header={<strong>TcfFirstLayer</strong>}
        iconClose={<IconClose />}
        onClose={handleCloseModal}
      >
        <InfoCard
          description="We care about your privacy"
          purposes={purposesState}
          onPurposesChange={handlePurposesChange}
        />
        <br />
        <br />
        <SuiButton onClick={handleSettingsClick}>Manage Settings</SuiButton>
        <SuiButton onClick={handleSaveExitClick} disabled={saveButtonDisabled}>
          Save and Exit
        </SuiButton>
        <SuiButton onClick={handleAcceptAll}>Accept All</SuiButton>
      </SuiModal>
    </div>
  )
}

TcfFirstLayer.displayName = 'TcfFirstLayer'
TcfFirstLayer.propTypes = {
  openSecondLayer: PropTypes.func,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func
}
