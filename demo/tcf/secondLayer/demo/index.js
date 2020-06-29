import '../../../../components/tcf/secondLayer/src/index.scss'
import TcfSecondLayer from '../../../../components/tcf/secondLayer/src'
import {mockedUserConsent, mockedVendorList} from '../../utils/borosMock'
import React from 'react'

const TcfSecondLayerDemo = () => {
  const loadUserConsent = () => Promise.resolve(mockedUserConsent)
  const getVendorList = () => Promise.resolve(mockedVendorList)
  const saveUserConsent = ({purpose, vendor}) => {
    console.log('saveUserConsent called with')
    console.log('purposes', purpose)
    console.log('vendors', vendor)
  }
  const handleGoBack = () => {
    console.log('go back button pressed')
  }

  return (
    <TcfSecondLayer
      isOpen
      logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
      loadUserConsent={loadUserConsent}
      saveUserConsent={saveUserConsent}
      getVendorList={getVendorList}
      onGoBack={handleGoBack}
    />
  )
}

export default TcfSecondLayerDemo
