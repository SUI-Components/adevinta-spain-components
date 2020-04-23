import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SuiButton from '@s-ui/react-atom-button'

export default function ButtonsTriade({
  isSaveButtonActive,
  onSaveExitClick,
  onAcceptAll,
  onRejectAll
}) {
  const [saveButtonActive, setSaveButtonActive] = useState(false)
  const checkSaveButton = () => isSaveButtonActive !== saveButtonActive

  useEffect(() => {
    checkSaveButton() && setSaveButtonActive(true)
  }, [isSaveButtonActive])

  const handleRejectAll = () => {
    setSaveButtonActive(true)
    onRejectAll()
  }
  const handleSaveExitClick = () => {
    onSaveExitClick()
  }
  const handleAcceptAll = () => {
    setSaveButtonActive(true)
    onAcceptAll()
  }

  return (
    <>
      <SuiButton size="small" onClick={handleAcceptAll}>
        Accept All
      </SuiButton>
      <SuiButton size="small" onClick={handleRejectAll}>
        Reject All
      </SuiButton>
      <SuiButton
        size="small"
        onClick={handleSaveExitClick}
        disabled={!saveButtonActive}
      >
        Save and Exit
      </SuiButton>
    </>
  )
}

ButtonsTriade.propTypes = {
  isSaveButtonActive: PropTypes.bool,
  onSaveExitClick: PropTypes.func,
  onAcceptAll: PropTypes.func,
  onRejectAll: PropTypes.func
}
