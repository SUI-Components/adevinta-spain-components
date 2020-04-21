import React from 'react'
// import PropTypes from 'prop-types'
import TCFServices from '@s-ui/sui-tcf-services'

import TCFContainer from './TCFContainer/TCFContainer'
export default function TcfUi() {
  return (
    <TCFServices>
      {service => (
        <TCFContainer
          getConsentStatus={() => service.getConsentStatus()}
          loadUserConsent={() => service.loadUserConsent()}
          saveUserConsent={({purposeConsents, vendorConsents}) =>
            service.saveUserConsent({purposeConsents, vendorConsents})
          }
        />
      )}
    </TCFServices>
  )
}

TcfUi.displayName = 'TcfUi'

TcfUi.propTypes = {}
