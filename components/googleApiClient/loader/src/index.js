/* eslint-disable camelcase */
import PropTypes from 'prop-types'

import ScriptLoader from '@s-ui/react-script-loader'

const getGoogleApiClient = () => window && window.gapi
const googleApiClientUrl = 'https://apis.google.com/js/client.js'

export default function GoogleApiClientLoader({
  render,
  timeoutRender,
  onTimeout = () => null,
  detectionDelay = 15000
}) {
  return (
    <ScriptLoader
      src={googleApiClientUrl}
      isAsync
      verifier={getGoogleApiClient}
      render={render}
      timeoutRender={timeoutRender}
      onTimeout={onTimeout}
      detectionDelay={detectionDelay}
    />
  )
}

GoogleApiClientLoader.displayName = 'GoogleApiClientLoader'

GoogleApiClientLoader.propTypes = {
  render: PropTypes.func.isRequired,
  timeoutRender: PropTypes.func,
  onTimeout: PropTypes.func,
  detectionDelay: PropTypes.number
}
