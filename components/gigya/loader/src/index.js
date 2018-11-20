/* eslint-disable camelcase */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ScriptLoader from '@schibstedspain/sui-script-loader'

const getGigya = () => window && window.gigya
const gigyaUrl = 'https://cdns.gigya.com/js/gigya.js?apiKey='

class GigyaLoader extends Component {
  render() {
    const {
      render,
      timeoutRender,
      onTimeout,
      detectionDelay,
      gigyaApiKey
    } = this.props

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
}

GigyaLoader.displayName = 'GigyaLoader'

GigyaLoader.propTypes = {
  render: PropTypes.func.isRequired,
  timeoutRender: PropTypes.func.isRequired,
  onTimeout: PropTypes.func,
  detectionDelay: PropTypes.number,
  gigyaApiKey: PropTypes.string.isRequired
}

GigyaLoader.defaultProps = {
  detectionDelay: 15000
}

export default GigyaLoader
