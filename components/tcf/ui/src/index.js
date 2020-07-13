import React from 'react'
import PropTypes from 'prop-types'

import TCFServices from '@s-ui/react-tcf-services'

import TCFContainer from './TCFContainer/TCFContainer'
export default function TcfUi({
  lang,
  logo,
  isMobile,
  isTablet,
  showVendors,
  onCloseModal,
  showInModalForMobile = false
}) {
  return (
    <TCFServices>
      {service => (
        <TCFContainer
          lang={lang}
          logo={logo}
          isMobile={isMobile}
          isTablet={isTablet}
          getVendorList={({language}) => service.getVendorList({language})}
          loadUserConsent={() => service.loadUserConsent()}
          saveUserConsent={({purpose, vendor, specialFeatures}) =>
            service.saveUserConsent({purpose, vendor, specialFeatures})
          }
          uiVisible={({visible}) => service.uiVisible({visible})}
          showVendors={showVendors}
          onCloseModal={onCloseModal}
          showInModalForMobile={showInModalForMobile}
        />
      )}
    </TCFServices>
  )
}

TcfUi.displayName = 'TcfUi'
TcfUi.propTypes = {
  isMobile: PropTypes.bool,
  showVendors: PropTypes.bool,
  isTablet: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string,
  onCloseModal: PropTypes.func,
  showInModalForMobile: PropTypes.bool
}
