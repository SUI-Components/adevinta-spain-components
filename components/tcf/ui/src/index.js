import React from 'react'
import PropTypes from 'prop-types'

import TCFServices from '@s-ui/react-tcf-services'

import TCFContainer from './TCFContainer/TCFContainer'
export default function TcfUi({lang, logo, isMobile, isTablet}) {
  return (
    <TCFServices>
      {service => (
        <TCFContainer
          lang={lang}
          logo={logo}
          isMobile={isMobile}
          isTablet={isTablet}
          getVendorList={() => service.getVendorList()}
          loadUserConsent={() => service.loadUserConsent()}
          saveUserConsent={({purpose, vendor, specialFeatures}) =>
            service.saveUserConsent({purpose, vendor, specialFeatures})
          }
          uiVisible={({visible}) => service.uiVisible({visible})}
        />
      )}
    </TCFServices>
  )
}

TcfUi.displayName = 'TcfUi'
TcfUi.propTypes = {
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string
}
