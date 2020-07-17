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
    <ConsentProvider language={lang}>
      <TCFContainer
        lang={lang}
        logo={logo}
        isMobile={isMobile}
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
