import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import SuiModal from '@s-ui/react-molecule-modal'
import SuiButton from '@s-ui/react-atom-button'

import IconClose from './components/iconClose'
import TcfSecondLayerDecisionGroup from './components/tcf-secondLayer-decision-group'
import TcfSecondLayerVendorExpandedContent from './components/tcf-secondLayer-vendor-expandedContent'

import {I18N, ADEVINTA_COLLECTED_CONSENTS} from './settings'
import TcfSecondLayerPurposeExpandedContent from './components/tcf-secondLayer-purpose-expandedContent'

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
      }
      setState({
        vendors: userConsent.vendor,
        purposes: userConsent.purpose,
        specialFeatures: userConsent.specialFeatureOptins
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
  const formatConsentObject = ({vendor = {}}) => {
    vendor.consents = format({
      reference: vendorListState.vendors || {},
      object: vendor.consents || {}
    })
    return {vendor}
  }

  const handleSaveExitClick = () => {
    saveUserConsent(
      formatConsentObject({
        vendor: state.vendors
      })
    )
    setModalOpen(false)
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
    setState({
      ...state,
      specialFeatures: ADEVINTA_COLLECTED_CONSENTS.specialFeatures
    })
  }
  const handleRejectAllSpecialFeatures = () => {
    setState({
      ...state,
      specialFeatures: []
    })
  }

  const handleConsentsChange = ({group, index, value}) => {
    setState(prevState => {
      const {consents} = prevState[group]
      consents[index] = !value
      return {
        ...prevState,
        [group]: {...prevState[group], consents}
      }
    })
  }

  const handleSpecialFeaturesChange = ({index}) => {
    setState(prevState => {
      let {specialFeatures} = prevState
      if (specialFeatures.includes(index)) {
        specialFeatures = specialFeatures.filter(value => index !== value)
      } else {
        specialFeatures.push(index)
      }
      return {
        ...prevState,
        specialFeatures
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

  const purposeExpandedContent = props => (
    <TcfSecondLayerPurposeExpandedContent
      {...props}
      baseClass={groupBaseClass}
    />
  )

  return (
    <div className={CLASS}>
      <SuiModal
        isOpen={modalOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        header={isMobile ? <Logo /> : false}
        iconClose={isMobile ? <IconClose /> : false}
        onClose={handleCloseModal}
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
              hasLegitimateInterest={false}
              i18n={i18n}
              onAcceptAll={() => handleAcceptAll({group: 'purposes'})}
              onRejectAll={() => handleRejectAll({group: 'purposes'})}
              vendorList={vendorListState}
              expandedContent={purposeExpandedContent}
            />
          )}
          {!!vendorListState?.specialFeatures && !!state?.specialFeatures && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.SPECIAL_FEATURES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.specialFeatures}
              state={state.specialFeatures}
              filteredIds={ADEVINTA_COLLECTED_CONSENTS.specialFeatures}
              onConsentChange={handleSpecialFeaturesChange}
              hasConsent
              hasLegitimateInterest={false}
              i18n={i18n}
              onAcceptAll={handleAcceptAllSpecialFeatures}
              onRejectAll={handleRejectAllSpecialFeatures}
              vendorList={vendorListState}
              expandedContent={purposeExpandedContent}
            />
          )}
          {!!vendorListState?.specialPurposes && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.SPECIAL_PURPOSES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.specialPurposes}
              hasConsent={false}
              hasLegitimateInterest={false}
              i18n={i18n}
              vendorList={vendorListState}
              expandedContent={purposeExpandedContent}
            />
          )}
          {!!vendorListState?.features && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.FEATURES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.features}
              hasConsent={false}
              hasLegitimateInterest={false}
              i18n={i18n}
              vendorList={vendorListState}
              expandedContent={purposeExpandedContent}
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
              hasLegitimateInterest={false}
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
