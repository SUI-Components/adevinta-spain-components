import React from 'react'
import PropTypes from 'prop-types'
import {UI_TYPES} from './settings'

import CmpServices from '@schibstedspain/react-cmp-services'

import CmpUiContainer from './CmpUi/index'

export default function CmpUi({lang = 'es', type = 'banner', ...restOfProps}) {
  return (
    <CmpServices>
      {({getConsentStatus, getPurposesAndVendors, sendConsents}) => (
        <CmpUiContainer
          {...restOfProps}
          lang={lang}
          type={type}
          getConsentStatus={getConsentStatus}
          getPurposesAndVendors={getPurposesAndVendors}
          sendConsents={sendConsents}
        />
      )}
    </CmpServices>
  )
}

CmpUi.displayName = 'CmpUi'

CmpUi.propTypes = {
  /**
   * Name of the company which the consents are for
   */
  companyName: PropTypes.string.isRequired,
  /**
   * ISO 639-1 code language in order to get the text translated to it
   */
  lang: PropTypes.string,
  /**
   * URL of the static image that will be the logo for the Modal
   */
  logo: PropTypes.string,
  /**
   * Method to execute when the user accepts the consents, useful for tracking
   */
  onAccept: PropTypes.func,
  /**
   * Method to execute when the user configure the consents, useful for tracking
   */
  onConfigure: PropTypes.func,
  /**
   * Type of UI you want to use. Available values: banner (default), modal
   */
  type: PropTypes.oneOf(Object.values(UI_TYPES)),
  /**
   * URL where the user will go in order to know more about the privacy conditions of the website
   */
  privacyUrl: PropTypes.string.isRequired
}
