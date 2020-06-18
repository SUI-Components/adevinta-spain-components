import '../../../../components/tcf/secondLayer/src/index.scss'
import TcfFirstLayer from '../../../../components/tcf/firstLayer/src'
import {mockedUserConsent, mockedVendorList} from '../../utils/borosMock'
import React from 'react'

const TcfFirstLayerDemo = () => {
  const loadUserConsent = () => Promise.resolve(mockedUserConsent)
  const getVendorList = () => Promise.resolve(mockedVendorList)
  const saveUserConsent = ({purpose}) => {
    console.log('saveUserConsent called with')
    console.log('purposes', purpose)
  }
  const openSecondLayer = () => {
    console.log('it should open the secondLayer modal')
  }

  return (
    <TcfFirstLayer
      loadUserConsent={loadUserConsent}
      saveUserConsent={saveUserConsent}
      getVendorList={getVendorList}
      openSecondLayer={openSecondLayer}
    />
  )
}

export default TcfFirstLayerDemo
