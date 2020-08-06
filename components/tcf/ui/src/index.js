import React from 'react'
import PropTypes from 'prop-types'
import TCFContainer from './TCFContainer/TCFContainer'
import ConsentProvider from '@s-ui/react-tcf-services'

/*
TECH-DEBT
1. it should be passed from the outside
2. if nothing is passed, it should use ALL vendor list data (done in services TcfRepository)
 */
const CONSENT_SCOPE = {
  purposes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  specialPurposes: [1, 2],
  features: [3],
  specialFeatures: [1]
}

export default function TcfUi({
  lang,
  scope = CONSENT_SCOPE,
  logo,
  isMobile,
  showVendors,
  onCloseModal,
  showInModalForMobile = false
}) {
  if (typeof window === 'undefined') {
    return null
  }
  return (
    <ConsentProvider language={lang} isMobile={isMobile} scope={scope}>
      <TCFContainer
        logo={logo}
        showVendors={showVendors}
        onCloseModal={onCloseModal}
        showInModalForMobile={showInModalForMobile}
      />
    </ConsentProvider>
  )
}

TcfUi.displayName = 'TcfUi'
TcfUi.propTypes = {
  lang: PropTypes.string,
  scope: PropTypes.object,
  isMobile: PropTypes.bool,
  showVendors: PropTypes.bool,
  logo: PropTypes.string,
  onCloseModal: PropTypes.func,
  showInModalForMobile: PropTypes.bool
}
