import '../../../../components/tcf/firstLayer/src/index.scss'
import '../../../../components/tcf/secondLayer/src/index.scss'
import TcfUi from '../../../../components/tcf/ui/src'
import React, {useState} from 'react'

const TcfUiDemo = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // 3500px height added to be able to test the closing with scroll feature
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
      <TcfUi
        lang="es"
        logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
        isMobile={isMobile}
        isTablet={isTablet}
      />
    </div>
  )
}

export default TcfUiDemo
