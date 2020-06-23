import '../../../../components/tcf/secondLayer/src/index.scss'
import TcfFirstLayer from '../../../../components/tcf/firstLayer/src'
import {mockedVendorList} from '../../utils/borosMock'
import React, {useState} from 'react'

const TcfFirstLayerDemo = () => {
  const loadUserConsent = () => Promise.resolve()
  const getVendorList = () => Promise.resolve(mockedVendorList)
  const saveUserConsent = ({purpose, vendor, specialFeatures}) => {
    console.log('saveUserConsent called with')
    console.log('userConsent', {purpose, vendor, specialFeatures})
  }
  const openSecondLayer = () => {
    console.log('it should open the secondLayer modal')
  }
  const openCookiepolicyLayer = () => {
    console.log('it should open the cookiePolicyLayer modal')
  }

  const [isMobile, setIsMobile] = useState(false)
  // 3500px height added to be able to test the closing with scroll feature
  return (
    <div style={{height: '3500px'}}>
      <button onClick={() => setIsMobile(!isMobile)}>
        Change between mobile & desktop
      </button>
      {isMobile && (
        <TcfFirstLayer
          isMobile
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          openSecondLayer={openSecondLayer}
          openCookiepolicyLayer={openCookiepolicyLayer}
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
        />
      )}
      {!isMobile && (
        <TcfFirstLayer
          loadUserConsent={loadUserConsent}
          saveUserConsent={saveUserConsent}
          getVendorList={getVendorList}
          openSecondLayer={openSecondLayer}
          openCookiepolicyLayer={openCookiepolicyLayer}
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
        />
      )}
    </div>
  )
}

export default TcfFirstLayerDemo
