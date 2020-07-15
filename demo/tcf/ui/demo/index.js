import TcfUi from '../../../../components/tcf/ui/src'
import React, {useState} from 'react'

const TcfUiDemo = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [show, setShow] = useState(false)
  const [showInModalForMobile, setShowInModalForMobile] = useState(false)
  return (
    <div style={{height: '3500px'}}>
      <button
        onClick={() => {
          setIsMobile(false)
        }}
      >
        Desktop
      </button>
      <button
        onClick={() => {
          setIsMobile(true)
        }}
      >
        Mobile
      </button>
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        Show Second layer
      </button>
      <button onClick={() => setShowInModalForMobile(prev => !prev)}>
        {showInModalForMobile
          ? 'Show first layer Notification variation'
          : 'Show first layer Modal variation'}
      </button>
      <TcfUi
        lang="es"
        logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
        isMobile={isMobile}
        showVendors={show}
        onCloseModal={() => setShow(false)}
        showInModalForMobile={showInModalForMobile}
      />
    </div>
  )
}

export default TcfUiDemo
