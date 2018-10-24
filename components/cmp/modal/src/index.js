import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModalContainer} from './CmpModal'
import CmpServices from '@schibstedspain/react-cmp-services'

class CmpModal extends Component {
  state = {open: !this.props.elementToOpenOnClick}

  _DOMElementToOpenOnClick = undefined

  _openModal = () => {
    this.setState({open: true})
  }

  _handleClickElementEvent = (createEvent = true) => {
    const event = createEvent ? 'addEventListener' : 'removeEventListener'
    this._DOMElementToOpenOnClick &&
      this._DOMElementToOpenOnClick[event]('click', this._openModal)
  }

  componentDidMount() {
    const {elementToOpenOnClick} = this.props
    if (elementToOpenOnClick) {
      this._DOMElementToOpenOnClick = document.querySelector(
        elementToOpenOnClick
      )
      this._handleClickElementEvent()
    }
  }

  componentWillUnmount() {
    this._handleClickElementEvent(false)
  }

  render() {
    if (this.state.open === false) return null

    return (
      <CmpServices>
        {({getPurposesAndVendors, sendConsents}) => (
          <CmpModalContainer
            {...this.props}
            getPurposesAndVendors={getPurposesAndVendors}
            sendConsents={sendConsents}
          />
        )}
      </CmpServices>
    )
  }
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
  retrieveConsentsFromCmp: PropTypes.bool
}

CmpModal.displayName = 'CmpModal'

export default CmpModal
