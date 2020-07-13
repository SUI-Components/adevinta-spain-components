import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import SuiModal from '@s-ui/react-molecule-modal'
import SuiButton from '@s-ui/react-atom-button'

import IconClose from './components/iconClose'
import TcfSecondLayerDecisionGroup from './components/tcf-secondLayer-decision-group'
import TcfSecondLayerVendorExpandedContent from './components/tcf-secondLayer-vendor-expandedContent'

import {I18N, ADEVINTA_COLLECTED_CONSENTS} from './settings'
import TcfSecondLayerLegalExpandedContent from './components/tcf-secondLayer-legal-expandedContent'

const CLASS = 'sui-TcfSecondLayer'
const groupBaseClass = `${CLASS}-group`

export default function TcfSecondLayer({
  isMobile,
  lang = 'es',
  logo,
  loadUserConsent,
  saveUserConsent,
  getVendorList,
  onGoBack
}) {
  const [state, setState] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)
  const [vendorListState, setVendorListState] = useState(null)

  const i18n = I18N[lang]

  useEffect(() => {
    const getVendorListAndConsent = async () => {
      const {
        purposes,
        specialPurposes,
        features,
        specialFeatures,
        vendors
      } = await getVendorList({
        language: lang
      })
      setVendorListState({
        purposes,
        specialPurposes,
        features,
        specialFeatures,
        vendors
      })
      const userConsent = await loadUserConsent()
      if (userConsent.isNew) {
        userConsent.vendor.consents = format({
          reference: vendors,
          object: {},
          value: true
        })
        userConsent.vendor.legitimateInterests = {
          ...userConsent.vendor.consents
        }
        userConsent.purpose.consents = {}
        userConsent.purpose.legitimateInterests = {}
        ADEVINTA_COLLECTED_CONSENTS.purposes.forEach(key => {
          userConsent.purpose.consents[key] = true
          userConsent.purpose.legitimateInterests[key] = true
        })
        userConsent.specialFeatures = {}
        ADEVINTA_COLLECTED_CONSENTS.specialFeatures.forEach(
          key => (userConsent.specialFeatures[key] = true)
        )
      }
      setState({
        vendors: userConsent.vendor,
        purposes: userConsent.purpose,
        specialFeatures: userConsent.specialFeatures
      })
    }
    getVendorListAndConsent()
  }, [getVendorList, loadUserConsent, lang])

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const format = ({reference, object, value = false}) => {
    Object.keys(reference).forEach(key => {
      if (!object[key]) {
        object[key] = value
      }
    })
    return object
  }
  const formatConsentObject = ({
    vendor = {},
    purpose = {},
    specialFeatures = {}
  }) => {
    vendor.consents = format({
      reference: vendorListState.vendors || {},
      object: vendor.consents || {}
    })
    vendor.legitimateInterests = format({
      reference: vendorListState.vendors || {},
      object: vendor.legitimateInterests || {}
    })
    purpose.consents = format({
      reference: vendorListState.purposes || {},
      object: purpose.consents || {}
    })
    purpose.legitimateInterests = format({
      reference: vendorListState.purposes || {},
      object: purpose.legitimateInterests || {}
    })
    const consentSpecialFeatures = format({
      reference: vendorListState.specialFeatures || {},
      object: specialFeatures
    })
    return {vendor, purpose, specialFeatures: consentSpecialFeatures}
  }

  const handleSaveExitClick = () => {
    saveUserConsent(
      formatConsentObject({
        vendor: state.vendors,
        purpose: state.purposes,
        specialFeatures: state.specialFeatures
      })
    )
    handleCloseModal()
  }

  const changeAllGroup = ({group, value}) => {
    setState(prevState => {
      for (const key in vendorListState[group]) {
        prevState[group].consents[key] = value
        prevState[group].legitimateInterests[key] = value
      }
      return {...prevState, [group]: prevState[group]}
    })
  }
  const handleRejectAll = ({group}) => {
    changeAllGroup({group, value: false})
  }
  const handleAcceptAll = ({group}) => {
    changeAllGroup({group, value: true})
  }

  const handleAcceptAllSpecialFeatures = () => {
    const specialFeatures = {}
    ADEVINTA_COLLECTED_CONSENTS.specialFeatures.forEach(
      value => (specialFeatures[value] = true)
    )
    setState({
      ...state,
      specialFeatures
    })
  }
  const handleRejectAllSpecialFeatures = () => {
    setState({
      ...state,
      specialFeatures: {}
    })
  }

  const handleConsentsChange = ({group, index, value}) => {
    setState(prevState => {
      const {consents, legitimateInterests} = prevState[group]
      if (consents && legitimateInterests) {
        consents[index] = !value
        legitimateInterests[index] = !value
        const nextState = {
          ...prevState,
          [group]: {...prevState[group], consents, legitimateInterests}
        }
        return nextState
      } else {
        const nextState = {
          ...prevState,
          [group]: {...prevState[group], [index]: !value}
        }
        return nextState
      }
    })
  }

  const Logo = () => (
    <img
      className={
        isMobile ? `${CLASS}-logo` : `${CLASS}-logo ${CLASS}-logo--desktop`
      }
      src={logo}
      alt="logo"
    />
  )

  const vendorExpandedContent = props => (
    <TcfSecondLayerVendorExpandedContent
      {...props}
      i18n={i18n}
      baseClass={groupBaseClass}
      vendorList={vendorListState}
    />
  )

  const legalExpandedContent = props => (
    <TcfSecondLayerLegalExpandedContent {...props} baseClass={groupBaseClass} />
  )
  return (
    <div className={CLASS}>
      <SuiModal
        isOpen={modalOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        header={isMobile ? <Logo /> : false}
        iconClose={isMobile ? <IconClose /> : false}
        onClose={handleSaveExitClick}
        fitContent
      >
        {!isMobile && <Logo />}
        <div
          className={
            isMobile
              ? `${CLASS}-container`
              : `${CLASS}-container ${CLASS}-container--desktop`
          }
        >
          <h2
            className={
              isMobile
                ? `${CLASS}-title`
                : `${CLASS}-title ${CLASS}-title--desktop`
            }
          >
            {i18n.VENDOR_PAGE.TITLE}
          </h2>
          <p
            className={
              isMobile
                ? `${CLASS}-text`
                : `${CLASS}-text ${CLASS}-text--desktop`
            }
          >
            {i18n.VENDOR_PAGE.TEXT}
          </p>
          {!!vendorListState?.purposes && !!state?.purposes && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.PURPOSES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.purposes}
              state={state.purposes}
              filteredIds={ADEVINTA_COLLECTED_CONSENTS.purposes}
              onConsentChange={props =>
                handleConsentsChange({group: 'purposes', ...props})
              }
              hasConsent
              i18n={i18n}
              onAcceptAll={() => handleAcceptAll({group: 'purposes'})}
              onRejectAll={() => handleRejectAll({group: 'purposes'})}
              vendorList={vendorListState}
              expandedContent={legalExpandedContent}
            />
          )}
          {!!vendorListState?.specialFeatures && !!state?.specialFeatures && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.SPECIAL_FEATURES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.specialFeatures}
              state={state.specialFeatures}
              filteredIds={ADEVINTA_COLLECTED_CONSENTS.specialFeatures}
              onConsentChange={props =>
                handleConsentsChange({group: 'specialFeatures', ...props})
              }
              hasConsent
              i18n={i18n}
              onAcceptAll={handleAcceptAllSpecialFeatures}
              onRejectAll={handleRejectAllSpecialFeatures}
              vendorList={vendorListState}
              expandedContent={legalExpandedContent}
            />
          )}
          {!!vendorListState?.specialPurposes && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.SPECIAL_PURPOSES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.specialPurposes}
              hasConsent={false}
              i18n={i18n}
              vendorList={vendorListState}
              expandedContent={legalExpandedContent}
            />
          )}
          {!!vendorListState?.features && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.FEATURES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.features}
              hasConsent={false}
              i18n={i18n}
              vendorList={vendorListState}
              expandedContent={legalExpandedContent}
            />
          )}
          {!!state?.vendors && !!vendorListState?.vendors && (
            <TcfSecondLayerDecisionGroup
              name={i18n.VENDOR_PAGE.GROUPS.TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.vendors}
              state={state.vendors}
              onConsentChange={props =>
                handleConsentsChange({group: 'vendors', ...props})
              }
              hasConsent
              i18n={i18n}
              onAcceptAll={() => handleAcceptAll({group: 'vendors'})}
              onRejectAll={() => handleRejectAll({group: 'vendors'})}
              vendorList={vendorListState}
              expandedContent={vendorExpandedContent}
            />
          )}
        </div>
        <footer className={`${CLASS}-buttons`}>
          <SuiButton design="outline" onClick={onGoBack}>
            {i18n.GO_BACK_BUTTON}
          </SuiButton>
          <SuiButton onClick={handleSaveExitClick}>
            {i18n.ACCEPT_BUTTON}
          </SuiButton>
        </footer>
      </SuiModal>
    </div>
  )
}

TcfSecondLayer.displayName = 'TcfSecondLayer'
TcfSecondLayer.propTypes = {
  isMobile: PropTypes.bool,
  loadUserConsent: PropTypes.func,
  saveUserConsent: PropTypes.func,
  getVendorList: PropTypes.func,
  logo: PropTypes.string,
  lang: PropTypes.string,
  onGoBack: PropTypes.func
}
