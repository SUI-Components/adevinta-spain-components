import TcfUi from '../../../../components/tcf/ui/src'
import React, {useState, useEffect} from 'react'

const TcfUiDemo = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [show, setShow] = useState(false)
  const [showInModalForMobile, setShowInModalForMobile] = useState(false)
  const [langToIt, setLangToIt] = useState(false)
  const [eventStatus, setEventStatus] = useState('empty')
  useEffect(() => {
    window.__tcfapi('addEventListener', 2, (tcData, success) => {
      if (
        success &&
        (tcData.eventStatus === 'tcloaded' ||
          tcData.eventStatus === 'useractioncomplete')
      ) {
        setEventStatus(tcData.eventStatus)
        window.__tcfapi('removeEventListener', 2, () => null, tcData.listenerId)
      }
    })
  })
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
      <button onClick={() => setLangToIt(prev => !prev)}>
        {langToIt ? 'Spanish' : 'Italian'}
      </button>
      <div>
        <b>Event Status:</b> {eventStatus}
      </div>
      {!langToIt && (
        <TcfUi
          lang="es"
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          isMobile={isMobile}
          showVendors={show}
          onCloseModal={() => setShow(false)}
          showInModalForMobile={showInModalForMobile}
        />
      )}
      {langToIt && (
        <TcfUi
          lang="it"
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          isMobile={isMobile}
          showVendors={show}
          onCloseModal={() => setShow(false)}
          showInModalForMobile={showInModalForMobile}
        />
      )}
    </div>
  )
}

export default TcfUiDemo
