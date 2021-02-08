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
  specialFeatures: [1],
  interestConsentVendors: [565],
  options: {
    onRejectionResurfaceAfterDays: 1
  }
}

export default function TcfUi({
  isMobile,
  lang,
  logo,
  logoAlt,
  logoHeight,
  logoWidth,
  onCloseModal,
  reporter,
  scope = CONSENT_SCOPE,
  showVendors,
  showPartnersList
}) {
  if (typeof window === 'undefined') {
    return null
  }
  return (
    <ConsentProvider
      language={lang}
      isMobile={isMobile}
      reporter={reporter}
      scope={scope}
    >
      <TCFContainer
        logo={logo}
        logoAlt={logoAlt}
        logoHeight={logoHeight}
        logoWidth={logoWidth}
        onCloseModal={onCloseModal}
        showPurposesLayer={showVendors}
        showPartnersList={showPartnersList}
      />
    </ConsentProvider>
  )
}

TcfUi.defaultProps = {
  showPartnersList: true
}
TcfUi.displayName = 'TcfUi'
TcfUi.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  logoHeight: PropTypes.number,
  logoWidth: PropTypes.number,
  onCloseModal: PropTypes.func,
  reporter: PropTypes.func,
  scope: PropTypes.object,
  showVendors: PropTypes.bool,
  showPartnersList: PropTypes.bool
}
