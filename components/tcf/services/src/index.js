import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {ServiceInitializer} from './infrastructure/bootstrap/ServiceInitializer'
import ConsentContext from './context'
import useConsent from './context/useConsent'

function ConsentProvider({language, isMobile, scope, children}) {
  const service = useRef(ServiceInitializer.init({language, scope}))
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
  const updateUserConsent = ({purpose, vendor, specialFeatures}) =>
    service.current.updateUserConsent({purpose, vendor, specialFeatures})
  const uiVisible = ({visible}) => service.current.uiVisible({visible})
  return (
    <ConsentContext.Provider
      value={{
        language,
        isMobile,
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

export default ConsentProvider
export {useConsent}

ConsentProvider.displayName = 'ConsentProvider'
ConsentProvider.propTypes = {
  children: PropTypes.any.isRequired,
  language: PropTypes.string,
  isMobile: PropTypes.bool,
  scope: PropTypes.object
}
