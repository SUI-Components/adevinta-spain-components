import React from 'react'
import PropTypes from 'prop-types'
import SuiSwitch from '@s-ui/react-atom-switch'

export default function InfoCard({title, descriptions, state, onStateChange}) {
  const handleToggle = ({index, value}) => {
    onStateChange({index, value})
  }

  return (
    <>
      <h3>{title}</h3>
      {Object.keys(descriptions).map((key, index) => {
        return (
          <div key={`${key}-${index}`}>
            <p>{descriptions[key].name}</p>
            <SuiSwitch
              label=""
              type="single"
              name={`${title}-consents-${key}`}
              value={state.consents[key]}
              onToggle={() =>
                handleToggle({
                  index: key,
                  value: state.consents[key]
                })
              }
            />
          </div>
        )
      })}
    </>
  )
}

InfoCard.displayName = 'InfoCard'
InfoCard.propTypes = {
  title: PropTypes.string,
  state: PropTypes.arrayOf(PropTypes.object),
  descriptions: PropTypes.string,
  onStateChange: PropTypes.func
}
