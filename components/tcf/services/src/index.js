import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {ServiceInitializer} from './infrastructure/bootstrap/ServiceInitializer'
import ConsentContext from './context'
import useConsent from './context/useConsent'
import {eventReporterFactory} from './infrastructure/reporter/eventReporter'
import {TCF_CONTEXT_INITIALIZED} from './core/events'

function ConsentProvider({language, isMobile, reporter, scope, children}) {
  const eventReporter = useRef(eventReporterFactory(reporter))
  const service = useRef(
    ServiceInitializer.init({language, reporter: eventReporter.current, scope})
  )
  const loadUserConsent = () => service.current.loadUserConsent()
  const getVendorList = () => service.current.getVendorList()
  const getScope = async () => {
    if (scope) return scope
    const vendorList = await getVendorList()
    const defaultScope = {
      purposes: Object.keys(vendorList.purposes),
      specialFeatures: Object.keys(vendorList.specialFeatures)
    }
    return defaultScope
  }
  const saveUserConsent = () => service.current.saveUserConsent()
  const updateUserConsent = ({
    purpose,
    vendor,
    specialFeatures,
    allPurposes,
    allVendors,
    allSpecialFeatures
  }) =>
    service.current.updateUserConsent({
      purpose,
      vendor,
      specialFeatures,
      allPurposes,
      allVendors,
      allSpecialFeatures
    })
  const uiVisible = ({visible}) => service.current.uiVisible({visible})

  useEffect(() => {
    eventReporter.current(TCF_CONTEXT_INITIALIZED, {language, isMobile})
  })

  return (
    <ConsentContext.Provider
      value={{
        language,
        isMobile,
        reporter: eventReporter.current,
        loadUserConsent,
        getVendorList,
        getScope,
        saveUserConsent,
        updateUserConsent,
        uiVisible
      }}
    >
      {children}
    </ConsentContext.Provider>
  )
}

export default React.memo(ConsentProvider)
export {useConsent}

ConsentProvider.displayName = 'ConsentProvider'
ConsentProvider.propTypes = {
  children: PropTypes.any.isRequired,
  isMobile: PropTypes.bool,
  language: PropTypes.string,
  reporter: PropTypes.func,
  scope: PropTypes.object
}
