import React from 'react'
import TCFServices from '@s-ui/sui-tcf-services'

import TCFContainer from './TCFContainer/TCFContainer'
export default function TcfUi() {
  return (
    <TCFServices>
      {service => (
        <TCFContainer
          getConsentStatus={() => service.getConsentStatus()}
          getVendorList={() => service.getVendorList()}
          loadUserConsent={() => service.loadUserConsent()}
          saveUserConsent={({purpose, vendor}) =>
            service.saveUserConsent({purpose, vendor})
          }
        />
      )}
    </TCFServices>
  )
}

TcfUi.displayName = 'TcfUi'
