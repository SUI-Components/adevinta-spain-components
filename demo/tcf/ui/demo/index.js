import TcfUi from '../../../../components/tcf/ui/src'
import React, {useState} from 'react'

const TcfUiDemo = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <div style={{height: '3500px'}}>
      <button
        onClick={() => {
          setIsMobile(false)
          setIsTablet(false)
        }}
      >
        Desktop
      </button>
      <button
        onClick={() => {
          setIsMobile(true)
          setIsTablet(false)
        }}
      >
        Mobile
      </button>
      <button
        onClick={() => {
          setIsMobile(false)
          setIsTablet(true)
        }}
      >
        Tablet
      </button>
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        Show vendors layer
      </button>
      <TcfUi
        lang="es"
        logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
        isMobile={isMobile}
        isTablet={isTablet}
        showVendors={show}
      />
    </div>
  )
}

export default TcfUiDemo
