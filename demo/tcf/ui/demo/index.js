import TcfUi from '../../../../components/tcf/ui/src'
import React, {useState, useEffect, useContext} from 'react'
import Context from '@s-ui/react-context'

const TcfUiDemo = () => {
  const {config = {}} = useContext(Context)
  const [isMobile, setIsMobile] = useState(false)
  const [show, setShow] = useState(false)
  const [showInModalForMobile, setShowInModalForMobile] = useState(false)
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
      <div>
        <b>Event Status:</b> {eventStatus}
      </div>
      <TcfUi
        lang={config.language}
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
