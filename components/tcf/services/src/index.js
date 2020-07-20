import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {ServiceInitializer} from './infrastructure/bootstrap/ServiceInitializer'
import ConsentContext from './context'
import useConsent from './context/useConsent'

function ConsentProvider({language, isMobile, children}) {
  const service = useRef(ServiceInitializer.init({language}))
  const loadUserConsent = () => service.current.loadUserConsent()
  const getVendorList = () => service.current.getVendorList()
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
  isMobile: PropTypes.bool
}
