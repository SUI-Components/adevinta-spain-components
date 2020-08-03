import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useConsent} from '@s-ui/react-tcf-services'
import SuiModal from '@s-ui/react-molecule-modal'
import Button from '@s-ui/react-atom-button'

import IconClose from './components/iconClose'
import TcfSecondLayerDecisionGroup from './components/tcf-secondLayer-decision-group'
import TcfSecondLayerVendorExpandedContent from './components/tcf-secondLayer-vendor-expandedContent'

import {I18N} from './settings'
import TcfSecondLayerLegalExpandedContent from './components/tcf-secondLayer-legal-expandedContent'

const CLASS = 'sui-TcfSecondLayer'
const groupBaseClass = `${CLASS}-group`

export default function TcfSecondLayer({
  logo,
  onSaveUserConsent,
  onGoBack,
  onVendorsClick,
  isVendorLayer
}) {
  const [state, setState] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)
  const [vendorListState, setVendorListState] = useState(null)
  const {
    language,
    isMobile,
    getVendorList,
    getScope,
    loadUserConsent,
    updateUserConsent
  } = useConsent()

  const i18n = I18N[language]

  useEffect(() => {
    const getVendorListAndConsent = async () => {
      const {
        purposes,
        specialPurposes,
        features,
        specialFeatures,
        vendors
      } = await getVendorList()
      setVendorListState({
        purposes,
        specialPurposes,
        features,
        specialFeatures,
        vendors
      })
      const userConsent = await loadUserConsent()
      setState({
        vendors: userConsent.vendor,
        purposes: userConsent.purpose,
        specialFeatures: userConsent.specialFeatures
      })
    }
    getVendorListAndConsent().catch(() => {
      setModalOpen(false)
    })
  }, [getVendorList, loadUserConsent])

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleSaveExitClick = () => {
    onSaveUserConsent()
    handleCloseModal()
  }

  const saveConsentState = ({purposes, vendors, specialFeatures}) =>
    updateUserConsent({purpose: purposes, vendor: vendors, specialFeatures})

  const changeAllGroup = ({group, value}) => {
    setState(prevState => {
      for (const key in vendorListState[group]) {
        prevState[group].consents[key] = value
        prevState[group].legitimateInterests[key] = value
      }
      const {vendors} = prevState
      Object.keys(vendorListState.vendors).forEach(key => {
        vendors.consents[key] = value
        vendors.legitimateInterests[key] = value
      })
      const nextState = {...prevState, vendors, [group]: prevState[group]}
      saveConsentState(nextState)
      return nextState
    })
  }
  const handleRejectAll = ({group}) => {
    changeAllGroup({group, value: false})
  }
  const handleAcceptAll = ({group}) => {
    changeAllGroup({group, value: true})
  }

  const handleAcceptAllSpecialFeatures = async () => {
    const specialFeatures = {}
    const scope = await getScope()
    scope.specialFeatures.forEach(value => (specialFeatures[value] = true))
    const nextState = {
      ...state,
      specialFeatures
    }
    saveConsentState(nextState)
    setState(nextState)
  }
  const handleRejectAllSpecialFeatures = () => {
    const nextState = {
      ...state,
      specialFeatures: {}
    }
    saveConsentState(nextState)
    setState(nextState)
  }

  const handleConsentsChange = ({group, index, value}) => {
    setState(prevState => {
      const newValue = !value
      const {consents, legitimateInterests} = prevState[group]
      if (consents && legitimateInterests) {
        consents[index] = newValue
        legitimateInterests[index] = newValue
        const {vendors} = prevState
        Object.entries(vendorListState.vendors).forEach(
          ([key, vendorFromVendorList]) => {
            if (vendorFromVendorList.purposes.includes(index)) {
              vendors.consents[key] = newValue
            }
            if (vendorFromVendorList.legIntPurposes.includes(key)) {
              vendors.legitimateInterests[key] = newValue
            }
          }
        )
        const nextState = {
          ...prevState,
          vendors,
          [group]: {...prevState[group], consents, legitimateInterests}
        }
        saveConsentState(nextState)
        return nextState
      } else {
        const nextState = {
          ...prevState,
          [group]: {...prevState[group], [index]: newValue}
        }
        saveConsentState(nextState)
        return nextState
      }
    })
  }

  const vendorExpandedContent = props => (
    <TcfSecondLayerVendorExpandedContent
      {...props}
      i18n={i18n}
      baseClass={groupBaseClass}
      vendorList={vendorListState}
    />
  )

  const legalExpandedContent = props => (
    <TcfSecondLayerLegalExpandedContent
      {...props}
      baseClass={`${groupBaseClass}-expanded`}
    />
  )

  return (
    <div className={CLASS}>
      <SuiModal
        isOpen={modalOpen}
        closeOnOutsideClick
        closeOnEscKeyDown
        header={<img className={`${CLASS}-logo`} src={logo} alt="logo" />}
        iconClose={isMobile ? <IconClose /> : false}
        onClose={handleSaveExitClick}
        fitContent
        portalContainerId="sui-TcfSecondLayerModal"
      >
        <div className={`${CLASS}-main`}>
          <h4 className={`${CLASS}-title`}>
            {isVendorLayer ? i18n.VENDOR_PAGE.TITLE : i18n.SECOND_LAYER.TITLE}
          </h4>
          <p>
            {isVendorLayer ? i18n.VENDOR_PAGE.TEXT : i18n.SECOND_LAYER.TEXT}
          </p>
          {!!vendorListState?.purposes && !!state?.purposes && !isVendorLayer && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.PURPOSES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.purposes}
              state={state.purposes}
              filteredIds={async () => {
                const scope = await getScope()
                return scope.purposes
              }}
              onConsentChange={props =>
                handleConsentsChange({group: 'purposes', ...props})
              }
              hasConsent
              i18n={i18n}
              onAcceptAll={() => handleAcceptAll({group: 'purposes'})}
              onRejectAll={() => handleRejectAll({group: 'purposes'})}
              vendorList={vendorListState}
              expandedContent={legalExpandedContent}
              isVendorLayer={isVendorLayer}
            />
          )}
          {!!vendorListState?.specialFeatures &&
            !!state?.specialFeatures &&
            !isVendorLayer && (
              <TcfSecondLayerDecisionGroup
                name={i18n.SECOND_LAYER.SPECIAL_FEATURES_TITLE}
                baseClass={groupBaseClass}
                descriptions={vendorListState.specialFeatures}
                state={state.specialFeatures}
                filteredIds={async () => {
                  const scope = await getScope()
                  return scope.specialFeatures
                }}
                onConsentChange={props =>
                  handleConsentsChange({group: 'specialFeatures', ...props})
                }
                hasConsent
                i18n={i18n}
                onAcceptAll={handleAcceptAllSpecialFeatures}
                onRejectAll={handleRejectAllSpecialFeatures}
                vendorList={vendorListState}
                expandedContent={legalExpandedContent}
                isVendorLayer={isVendorLayer}
              />
            )}
          {!!vendorListState?.specialPurposes && !isVendorLayer && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.SPECIAL_PURPOSES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.specialPurposes}
              hasConsent={false}
              i18n={i18n}
              vendorList={vendorListState}
              expandedContent={legalExpandedContent}
              isVendorLayer={isVendorLayer}
            />
          )}
          {!!vendorListState?.features && !isVendorLayer && (
            <TcfSecondLayerDecisionGroup
              name={i18n.SECOND_LAYER.FEATURES_TITLE}
              baseClass={groupBaseClass}
              descriptions={vendorListState.features}
              hasConsent={false}
              i18n={i18n}
              vendorList={vendorListState}
              expandedContent={legalExpandedContent}
              isVendorLayer={isVendorLayer}
            />
          )}
          {!!state?.vendors && !!vendorListState?.vendors && isVendorLayer && (
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
              isVendorLayer={isVendorLayer}
            />
          )}
        </div>
        <footer className={`${CLASS}-footer`}>
          {!isMobile && !isVendorLayer && (
            <div className={`${CLASS}-footer--link`}>
              <Button
                size="small"
                design="link"
                onClick={() => {
                  onVendorsClick && onVendorsClick()
                }}
              >
                {i18n.SECOND_LAYER.PARTNERS_LINK}
              </Button>
            </div>
          )}
          <div className={`${CLASS}-footer--buttons`}>
            <Button design="outline" size="small" onClick={onGoBack}>
              {i18n.GO_BACK_BUTTON}
            </Button>
            <Button size="small" onClick={handleSaveExitClick}>
              {i18n.ACCEPT_BUTTON}
            </Button>
          </div>
        </footer>
      </SuiModal>
    </div>
  )
}

TcfSecondLayer.displayName = 'TcfSecondLayer'
TcfSecondLayer.propTypes = {
  isVendorLayer: PropTypes.bool,
  onSaveUserConsent: PropTypes.func,
  logo: PropTypes.string,
  onGoBack: PropTypes.func,
  onVendorsClick: PropTypes.func
}
