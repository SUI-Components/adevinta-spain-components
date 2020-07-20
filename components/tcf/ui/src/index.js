import React from 'react'
import PropTypes from 'prop-types'
import TCFContainer from './TCFContainer/TCFContainer'
import ConsentProvider from '@s-ui/react-tcf-services'

export default function TcfUi({
  lang,
  logo,
  isMobile,
  showVendors,
  onCloseModal,
  showInModalForMobile = false
}) {
  return (
    <ConsentProvider language={lang} isMobile={isMobile}>
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
  isMobile: PropTypes.bool,
  showVendors: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string,
  onCloseModal: PropTypes.func,
  showInModalForMobile: PropTypes.bool
}
