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
  const handleGoBack = () => {
    console.log('go back button pressed')
  }
  const handleVendorsClick = () => {
    console.log("vendor's button pressed")
  }
  const [isMobile, setIsMobile] = useState(false)
  const [isVendorLayer, setIsVendorLayer] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsMobile(!isMobile)}
        style={{height: '25px', width: '100%', backgroundColor: '#2b91c1'}}
      >
        {isMobile ? 'Click to change to Desktop' : 'Click to change to Mobile'}
      </button>
      <button
        onClick={() => setIsVendorLayer(!isVendorLayer)}
        style={{height: '25px', width: '100%', backgroundColor: '#2b91c1'}}
      >
        {isVendorLayer
          ? 'Click to change to Purposes Layer'
          : 'Click to change to vendor Layer'}
      </button>
      {isMobile && isVendorLayer && (
        <TcfSecondLayer
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          onGoBack={handleGoBack}
          isMobile
          isVendorLayer={isVendorLayer}
        />
      )}
      {isMobile && !isVendorLayer && (
        <TcfSecondLayer
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          onGoBack={handleGoBack}
          isMobile
          isVendorLayer={isVendorLayer}
        />
      )}
      {!isMobile && isVendorLayer && (
        <TcfSecondLayer
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          onGoBack={handleGoBack}
          isVendorLayer={isVendorLayer}
        />
      )}
      {!isMobile && !isVendorLayer && (
        <TcfSecondLayer
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          onGoBack={handleGoBack}
          isVendorLayer={isVendorLayer}
          onVendorsClick={handleVendorsClick}
        />
      )}
    </>
  )
}

export default TcfSecondLayerDemo
