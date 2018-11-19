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
      GIGYA_API_KEYConfig
    } = this.props

    return (
      <ScriptLoader
        src={`${gigyaUrl}${GIGYA_API_KEYConfig}`}
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
  GIGYA_API_KEYConfig: PropTypes.string.isRequired
}

GigyaLoader.defaultProps = {
  detectionDelay: 15000
}

GigyaLoader.contextTypes = {
  i18n: PropTypes.object,
  domain: PropTypes.object
}

export default GigyaLoader
