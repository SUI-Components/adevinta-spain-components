import React from 'react'
import PropTypes from 'prop-types'
import SuiSwitch from '@s-ui/react-atom-switch'

export default function PurposeGroup({
  name,
  descriptions,
  descriptionField,
  state,
  onConsentsChange,
  onLegitimateInterestsChange,
  hasLegitimateInterest
}) {
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
                  onConsentsChange({
                    index: key,
                    value: state.consents[key]
                  })
                }
              />
              {hasLegitimateInterest && (
                <SuiSwitch
                  label="Legitimate interest"
                  type="single"
                  name={`${name}-legitimateInterests-${key}`}
                  value={state.legitimateInterests[key]}
                  onToggle={() =>
                    onLegitimateInterestsChange({
                      index: key,
                      value: state.legitimateInterests[key]
                    })
                  }
                />
              )}
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
  onLegitimateInterestsChange: PropTypes.func,
  hasLegitimateInterest: PropTypes.bool
}
