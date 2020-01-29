/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import ScriptLoader from '@schibstedspain/sui-script-loader'

const getGigya = () => window && window.gigya
const gigyaUrl = 'https://cdns.gigya.com/js/gigya.js?apiKey='

export default function GigyaLoader({
  render,
  timeoutRender,
  onTimeout,
  detectionDelay = 15000,
  gigyaApiKey
}) {
  return (
    <ScriptLoader
      src={`${gigyaUrl}${gigyaApiKey}`}
      isAsync
      verifier={getGigya}
      render={render}
      timeoutRender={timeoutRender}
      onTimeout={onTimeout}
      detectionDelay={detectionDelay}
    />
  )
}

GigyaLoader.displayName = 'GigyaLoader'

GigyaLoader.propTypes = {
  render: PropTypes.func.isRequired,
  timeoutRender: PropTypes.func.isRequired,
  onTimeout: PropTypes.func,
  detectionDelay: PropTypes.number,
  gigyaApiKey: PropTypes.string.isRequired
}
