import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useConsent} from '@s-ui/react-tcf-services'
import SuiModal from '@s-ui/react-molecule-modal'
import Button from '@s-ui/react-atom-button'

import IconClose from './components/iconClose'
import TcfSecondLayerDecisionGroup from './components/tcf-secondLayer-decision-group'
import TcfSecondLayerVendorExpandedContent from './components/tcf-secondLayer-vendor-expandedContent'

import {I18N} from './settings'
import TcfSecondLayerLegalExpandedContent from './components/tcf-secondLayer-legal-expandedContent'
import TcfSecondLayerVendorList from './components/tcf-secondLayer-vendorList'

const CLASS = 'sui-TcfSecondLayer'
const groupBaseClass = `${CLASS}-group`

const GROUP_PURPOSES = 'purposes'
const GROUP_SPECIAL_FEATURES = 'specialFeatures'
const GROUP_VENDORS = 'vendors'
const SUBGROUP_CONSENTS = 'consents'
const SUBGROUP_LEGITIMATE_INTERESTS = 'legitimateInterests'

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
    loadConsentDraft,
    loadUserConsent,
    updatePurpose,
    updateSpecialFeature,
    updateVendor
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

  const changeAllGroup = ({group, decisionKey, value}) => {
    if (group === GROUP_PURPOSES) {
      updatePurpose({consent: value})
    } else if (group === GROUP_SPECIAL_FEATURES) {
      updateSpecialFeature({consent: value})
    } else if (group === GROUP_VENDORS) {
      const consent =
        decisionKey === SUBGROUP_CONSENTS && typeof value === 'boolean'
          ? value
          : null
      const legitimateInterest =
        decisionKey === SUBGROUP_LEGITIMATE_INTERESTS &&
        typeof value === 'boolean'
          ? value
          : null
      updateVendor({
        consent,
        legitimateInterest
      })
    }
    const {
      vendor: vendors,
      purpose: purposes,
      specialFeatures
    } = loadConsentDraft()
    setState({
      vendors,
      purposes,
      specialFeatures
    })
  }

  const handleRejectAll = props => {
    changeAllGroup({...props, value: false})
  }

  const handleAcceptAll = props => {
    changeAllGroup({...props, value: true})
  }

  const handleAcceptAllSpecialFeatures = async () => {
    changeAllGroup({group: GROUP_SPECIAL_FEATURES, value: true})
  }

  const handleRejectAllSpecialFeatures = () => {
    changeAllGroup({group: GROUP_SPECIAL_FEATURES, value: false})
  }

  const handleConsentsChange = ({group, decisionKey, index, value}) => {
    const newValue = !value
    switch (group) {
      case GROUP_PURPOSES:
        updatePurpose({
          id: index,
          consent: newValue
        })
        break
      case GROUP_VENDORS:
        updateVendor({
          id: index,
          consent: decisionKey === SUBGROUP_CONSENTS ? newValue : null,
          legitimateInterest:
            decisionKey === SUBGROUP_LEGITIMATE_INTERESTS ? newValue : null
        })
        break
      case GROUP_SPECIAL_FEATURES:
        updateSpecialFeature({
          id: index,
          consent: newValue
        })
        break
    }
    const {
      vendor: vendors,
      purpose: purposes,
      specialFeatures
    } = loadConsentDraft()
    setState({
      vendors,
      purposes,
      specialFeatures
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
                handleConsentsChange({group: GROUP_PURPOSES, ...props})
              }
              hasConsent
              i18n={i18n}
              onAcceptAll={() => handleAcceptAll({group: GROUP_PURPOSES})}
              onRejectAll={() => handleRejectAll({group: GROUP_PURPOSES})}
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
                  handleConsentsChange({
                    group: GROUP_SPECIAL_FEATURES,
                    ...props
                  })
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
            <TcfSecondLayerVendorList
              i18n={i18n}
              baseClass={CLASS}
              groupBaseClass={groupBaseClass}
              vendorListState={vendorListState}
              state={state}
              handleConsentsChange={handleConsentsChange}
              handleAcceptAll={handleAcceptAll}
              handleRejectAll={handleRejectAll}
              vendorExpandedContent={vendorExpandedContent}
            />
          )}
        </div>
        <footer className={`${CLASS}-footer`}>
          {!isVendorLayer && (
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
