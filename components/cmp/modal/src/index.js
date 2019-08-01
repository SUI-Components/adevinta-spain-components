import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {CmpModalContainer} from './CmpModal'
import CmpServices from '@schibstedspain/react-cmp-services'

export default function CmpModal(props) {
  const {elementToOpenOnClick} = props
  const [open, setOpen] = useState(!elementToOpenOnClick)

  const openModal = () => setOpen(true)
  const createHandleClickElementEvent = (element, createEvent = true) => {
    const event = createEvent ? 'addEventListener' : 'removeEventListener'
    element && element[event]('click', openModal)
  }

  useEffect(function() {
    let domElementToOpenOnClick
    if (elementToOpenOnClick) {
      domElementToOpenOnClick = document.querySelector(elementToOpenOnClick)
      createHandleClickElementEvent(domElementToOpenOnClick)
    }

    return () => createHandleClickElementEvent(domElementToOpenOnClick, false)
  })

  if (!open) return null

  return (
    <CmpServices>
      {({getPurposesAndVendors, sendConsents}) => (
        <CmpModalContainer
          {...props}
          getPurposesAndVendors={getPurposesAndVendors}
          sendConsents={sendConsents}
        />
      )}
    </CmpServices>
  )
}

CmpModal.defaultProps = {
  lang: 'es',
  onExit: () => {},
  retrieveConsentsFromCmp: false
}

CmpModal.propTypes = {
  /**
   * CSS Selector to the element to be clicked to open the modal. Used along with openOnClickElement
   */
  elementToOpenOnClick: PropTypes.string,
  /**
   * ISO 639-1 code language in order to get the text translated to it
   */
  lang: PropTypes.string,
  /**
   * URL of the static image that will be the logo for the Modal
   */
  logo: PropTypes.string,
  /**
   * Function to be executed when the user wants to exit the modal because he accepted the consents
   */
  onExit: PropTypes.func,
  /**
   * URL where the user will go in order to know more about the privacy conditions of the website
   */
  privacyUrl: PropTypes.string.isRequired,
  /**
   * Flag to determine if we have to retrieve the consents from the CMP cookie
   * or if it's the first time the user is selecting the consents
   */
  retrieveConsentsFromCmp: PropTypes.bool,
  /**
   * Flag to determine if the step to show the list of partners to start
   */
  startOnPartnersList: PropTypes.bool
}

CmpModal.displayName = 'CmpModal'
