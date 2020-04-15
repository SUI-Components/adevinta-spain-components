import React, {useState} from 'react'
import PropTypes from 'prop-types'
import SuiSwitch from '@s-ui/react-atom-switch'
import SuiButton from '@s-ui/react-atom-button'

const InfoCard = ({description, purposes}) => {
  return (
    <>
      <p>{description}</p>
      {purposes.map(purpose => (
        <>
          <p>{purpose.text}</p>
          <SuiSwitch
            label=""
            name={`purpose-${purpose.index}`}
            initialValue={purpose.initialValue}
            onToggle={() => {}}
          />
        </>
      ))}
    </>
  )
}

InfoCard.displayName = 'InfoCard'
InfoCard.propTypes = {
  purposes: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string
}
export default function TcfFirstLayer({purposes}) {
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)
  const [purposesState, setPurposesState] = useState(purposes)

  const handleSettingsClick = () => {
    console.log('should open second layer')
    return null
  }
  const handleSaveExitClick = () => {
    console.log('should save and close the modal')
    return null
  }
  const handleAcceptAll = () => {
    const updatedPurposes = purposesState.map(purpose => {
      purpose.initialValue = true
      return purpose
    })
    setPurposesState(updatedPurposes)
    setSaveButtonDisabled(false)
    console.log('should accept all pruposes')
    return null
  }
  return (
    <div className="sui-TcfFirstLayer">
      <h1>TcfFirstLayer</h1>
      <InfoCard
        description="We care about your privacy"
        purposes={purposesState}
      />
      <br />
      <br />
      <SuiButton onClick={handleSettingsClick}>Manage Settings</SuiButton>
      <SuiButton onClick={handleSaveExitClick} disabled={saveButtonDisabled}>
        Save and Exit
      </SuiButton>
      <SuiButton onClick={handleAcceptAll}>Accept All</SuiButton>
    </div>
  )
}

TcfFirstLayer.displayName = 'TcfFirstLayer'
TcfFirstLayer.propTypes = {
  purposes: PropTypes.arrayOf(PropTypes.object)
}
