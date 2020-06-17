import React from 'react'
import TCFServices from '@s-ui/react-tcf-services'

import TCFContainer from './TCFContainer/TCFContainer'
export default function TcfUi() {
  return (
    <TCFServices>
      {service => (
        <TCFContainer
          getVendorList={() => service.getVendorList()}
          loadUserConsent={() => service.loadUserConsent()}
          saveUserConsent={({purpose, vendor, specialFeatures}) =>
            service.saveUserConsent({purpose, vendor, specialFeatures})
          }
        />
      )}
    </TCFServices>
  )
}

TcfUi.displayName = 'TcfUi'
