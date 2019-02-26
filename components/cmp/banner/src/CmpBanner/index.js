import React, {Component, Suspense} from 'react'
import PropTypes from 'prop-types'

const CONSENT_STATUS_NOT_ACCEPTED = 'NOT_ACCEPTED'
const NO_OP = () => {}

const CmpBanner = React.lazy(() => import('./component'))
const CmpModal = React.lazy(() => import('@schibstedspain/react-cmp-modal'))

export class CmpBannerContainer extends Component {
  state = {
    showModal: false,
    showNotification: false
  }

  containerDOMEl = React.createRef()

  _handleAccept = async () => {
    const {getPurposesAndVendors, sendConsents} = this.props
    const {
      purposeConsents,
      vendorConsents
    } = await getPurposesAndVendors.execute()
    await sendConsents.execute({purposeConsents, vendorConsents})
    this.setState({showModal: false, showNotification: false})
    this._removeBodyEvent()
    this.props.onAccept()
  }

  _handleReadMore = async () => {
    this.setState({showModal: true, showNotification: false})
    this.props.onConfigure()
  }

  /**
   * This handler is used everytime the user clicks on something in the web
   * in order to assume he's accepting our CMP if he's not trying to configure it and
   * he's just navigating the website
   */
  _handleClickOnDocument = ({target}) => {
    const isClickableElement =
      target.closest('a') || target.closest('button') || target.closest('input')
    const isNotContainedInBanner = !this.containerDOMEl.current.contains(target)
    // if not contained and clickable element, then accept the banner
    isNotContainedInBanner && isClickableElement && this._handleAccept()
  }

  _handleExitModal = () => {
    this.setState({showModal: false})
  }

  _removeBodyEvent() {
    document.removeEventListener('click', this._handleClickOnDocument, true)
  }

  async componentDidMount() {
    const {getConsentStatus} = this.props
    const consentStatus = await getConsentStatus.execute()
    this.setState({
      showNotification: consentStatus === CONSENT_STATUS_NOT_ACCEPTED
    })

    if (consentStatus === CONSENT_STATUS_NOT_ACCEPTED) {
      // We're assuming, the user accepts our CMP if he keep navigating in our page
      document.addEventListener('click', this._handleClickOnDocument, true)
    }
  }

  componentWillUnmount() {
    this._removeBodyEvent()
  }

  render() {
    const {companyName, lang, logo, privacyUrl} = this.props
    return (
      <div ref={this.containerDOMEl}>
        {this.state.showNotification && (
          <Suspense fallback={<div />}>
            <CmpBanner
              onAccept={this._handleAccept}
              onConfigure={this._handleReadMore}
              companyName={companyName}
              lang={lang}
            />
          </Suspense>
        )}
        {this.state.showModal && (
          <Suspense fallback={<div />}>
            <CmpModal
              cmpReady
              lang={lang}
              logo={logo}
              onExit={this._handleExitModal}
              privacyUrl={privacyUrl}
            />
          </Suspense>
        )}
      </div>
    )
  }
}

CmpBannerContainer.defaultProps = {
  onAccept: NO_OP,
  onConfigure: NO_OP
}

CmpBannerContainer.propTypes = {
  companyName: PropTypes.string.isRequired,
  getConsentStatus: PropTypes.object.isRequired,
  getPurposesAndVendors: PropTypes.object.isRequired,
  lang: PropTypes.string,
  logo: PropTypes.string,
  onAccept: PropTypes.func,
  onConfigure: PropTypes.func,
  privacyUrl: PropTypes.string,
  sendConsents: PropTypes.object.isRequired
}
