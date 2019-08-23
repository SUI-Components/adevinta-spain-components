import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {CmpModal} from './component'

import {SCROLLABLE_ELEMENT, STEPS} from '../settings'

export class CmpModalContainer extends Component {
  state = {
    consentKey: 0,
    fetchingPurposes: false,
    features: [],
    purposeConsents: {},
    purposes: [],
    step: this.props.showPartners ? STEPS.ADVERTISEMENT : STEPS.GENERAL,
    vendorConsents: {},
    vendors: []
  }

  componentDidMount() {
    this.setState({fetchingPurposes: true})
    const {getPurposesAndVendors, retrieveConsentsFromCmp} = this.props
    getPurposesAndVendors
      .execute({
        retrieveConsentsFromCmp
      })
      .then(purposesAndVendors => {
        this.setState({...purposesAndVendors, fetchingPurposes: false})
      })
      .catch(() => {
        this.setState({fetchingPurposes: false})
      })
  }

  _getKeyOfConsentToUpdate({isVendor}) {
    const consentToUpdate = isVendor ? 'vendor' : 'purpose'
    return `${consentToUpdate}Consents`
  }

  _handleToggleConsent = ({enabled, id, isVendor}) => {
    const key = this._getKeyOfConsentToUpdate({isVendor})

    this.setState(state => ({
      [key]: {
        ...state[key],
        [id]: enabled
      }
    }))
  }

  _handleToggleAll = ({enabled, isVendor}) => {
    const key = this._getKeyOfConsentToUpdate({isVendor})

    this.setState(state => {
      const consents = Object.keys(state[key]).reduce((acc, consentId) => {
        acc[consentId] = enabled
        return acc
      }, {})
      return {[key]: consents, consentKey: state.consentKey + 1}
    })
  }

  _handleAccept = async () => {
    const {sendConsents, onExit} = this.props
    const {purposeConsents, vendorConsents} = this.state
    await sendConsents.execute({purposeConsents, vendorConsents})
    onExit()
  }

  _handleBack = e => {
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
    this.setState({step: STEPS.GENERAL}, this._scrollTopContent)
  }

  _handleOpenAdsStep = e => {
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
    this.setState({step: STEPS.ADVERTISEMENT}, this._scrollTopContent)
  }

  _scrollTopContent() {
    const el = document.querySelector(SCROLLABLE_ELEMENT)
    el && (el.scrollTop = 0)
  }

  render() {
    const {lang, logo, privacyUrl} = this.props
    const {
      consentKey,
      features,
      fetchingPurposes,
      purposes,
      purposeConsents,
      step,
      vendors,
      vendorConsents
    } = this.state

    return (
      <CmpModal
        consentKey={consentKey}
        features={features}
        fetchingPurposes={fetchingPurposes}
        lang={lang}
        logo={logo}
        onAccept={this._handleAccept}
        onBack={this._handleBack}
        onOpenAdsStep={this._handleOpenAdsStep}
        onToggleAll={this._handleToggleAll}
        onToggleConsent={this._handleToggleConsent}
        privacyUrl={privacyUrl}
        purposeConsents={purposeConsents}
        purposes={purposes}
        step={step}
        vendorConsents={vendorConsents}
        vendors={vendors}
      />
    )
  }
}

CmpModalContainer.propTypes = {
  getPurposesAndVendors: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  logo: PropTypes.string,
  onExit: PropTypes.func.isRequired,
  privacyUrl: PropTypes.string,
  retrieveConsentsFromCmp: PropTypes.bool,
  sendConsents: PropTypes.object.isRequired,
  showPartners: PropTypes.bool
}
