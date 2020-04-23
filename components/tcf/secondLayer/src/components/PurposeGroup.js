import React from 'react'
import PropTypes from 'prop-types'
import SuiSwitch from '@s-ui/react-atom-switch'

export default function PurposeGroup({
  name,
  descriptions,
  descriptionField,
  state,
  onConsentsChange,
  onLegitimateInterestsChange
}) {
  const handleConsentToggle = ({index, value}) => {
    onConsentsChange({index, value})
  }

  const handleLegitimateInterestsToggle = ({index, value}) => {
    onLegitimateInterestsChange({index, value})
  }

  return (
    <>
      <h2>{name}</h2>
      {state &&
        descriptions &&
        Object.keys(descriptions).map((key, index) => {
          return (
            <div key={`${key}-${index}`}>
              <h3>{descriptions[key][descriptionField]}</h3>
              <SuiSwitch
                label="Consent"
                type="single"
                name={`${name}-consents-${key}`}
                value={state.consents[key]}
                onToggle={() =>
                  handleConsentToggle({
                    index: key,
                    value: state.consents[key]
                  })
                }
              />
              <SuiSwitch
                label="Legitimate interest"
                type="single"
                name={`${name}-legitimateInterests-${key}`}
                value={state.legitimateInterests[key]}
                onToggle={() =>
                  handleLegitimateInterestsToggle({
                    index: key,
                    value: state.legitimateInterests[key]
                  })
                }
              />
            </div>
          )
        })}
    </>
  )
}

PurposeGroup.propTypes = {
  name: PropTypes.string,
  descriptions: PropTypes.object,
  descriptionField: PropTypes.string,
  consents: PropTypes.object,
  state: PropTypes.object,
  legitimateInterests: PropTypes.object,
  onConsentsChange: PropTypes.func,
  onLegitimateInterestsChange: PropTypes.func
}
