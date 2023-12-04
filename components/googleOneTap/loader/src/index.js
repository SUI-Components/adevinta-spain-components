/* eslint-disable camelcase */
import PropTypes from 'prop-types'

import ScriptLoader from '@s-ui/react-script-loader'

const getGoogleOneTap = () => window && window.google?.accounts
const googleOneTapUrl = 'https://accounts.google.com/gsi/client'

export default function GoogleOneTapLoader({render, timeoutRender, onTimeout = () => null, detectionDelay = 15000}) {
  return (
    <ScriptLoader
      src={googleOneTapUrl}
      isAsync
      verifier={getGoogleOneTap}
      render={render}
      timeoutRender={timeoutRender}
      onTimeout={onTimeout}
      detectionDelay={detectionDelay}
    />
  )
}

GoogleOneTapLoader.displayName = 'GoogleOneTapLoader'

GoogleOneTapLoader.propTypes = {
  render: PropTypes.func.isRequired,
  timeoutRender: PropTypes.func,
  onTimeout: PropTypes.func,
  detectionDelay: PropTypes.number
}
