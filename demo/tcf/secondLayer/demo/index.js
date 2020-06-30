import React, {useState} from 'react'

import '../../../../components/tcf/secondLayer/src/index.scss'

import TcfSecondLayer from '../../../../components/tcf/secondLayer/src'
import {mockedUserConsent, mockedVendorList} from '../../utils/borosMock'

const TcfSecondLayerDemo = () => {
  const loadUserConsent = () => Promise.resolve(mockedUserConsent)
  const getVendorList = () => Promise.resolve(mockedVendorList)
  const saveUserConsent = ({purpose, vendor}) => {
    console.log('saveUserConsent called with')
    console.log('purposes', purpose)
    console.log('vendors', vendor)
  }
  const uiVisible = ({visible}) => {
    console.log('uiVisible called with visible to', visible)
  }
  const handleGoBack = () => {
    console.log('go back button pressed')
  }
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsMobile(!isMobile)}
        style={{height: '25px', width: '100%', backgroundColor: '#2b91c1'}}
      >
        {isMobile ? 'Click to change to Desktop' : 'Click to change to Mobile'}
      </button>
      {isMobile && (
        <TcfSecondLayer
          isOpen
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          uiVisible={uiVisible}
          onGoBack={handleGoBack}
          isMobile
        />
      )}
      {!isMobile && (
        <TcfSecondLayer
          isOpen
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          uiVisible={uiVisible}
          onGoBack={handleGoBack}
        />
      )}
    </>
  )
}

export default TcfSecondLayerDemo
