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

  return (
    <TcfSecondLayer
      isOpen
      loadUserConsent={loadUserConsent}
      saveUserConsent={saveUserConsent}
      getVendorList={getVendorList}
    />
  )
}

export default TcfSecondLayerDemo
