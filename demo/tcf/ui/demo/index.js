import TcfUi from '../../../../components/tcf/ui/src'
import React, {useState, useEffect, useContext, useRef} from 'react'
import Context from '@s-ui/react-context'

function removeCookie() {
  const hostname = window.location.hostname || ''
  const host = hostname
    .split('.')
    .reverse()
    .filter((_, index) => index <= 1)
    .reverse()
    .join('.')
  const cookieParts = [
    `euconsent-v2=`,
    `path=/`,
    `domain=${host}`,
    `expires= Thu, 01 Jan 1970 00:00:00 GMT`
  ]
  window.document.cookie = cookieParts.join(';')
}

const TcfUiDemo = () => {
  const {config = {}} = useContext(Context)
  const [isMobile, setIsMobile] = useState(false)
  const [showVendors, setShowVendors] = useState(false)
  const [forceModal, setForceModal] = useState(false)
  const [show, setShow] = useState(true)
  const [acceptedWithUserScroll, setAcceptedWithUserScroll] = useState(true)
  const [eventStatus, setEventStatus] = useState('empty')
  const reporter = useRef((event, payload) =>
    console.log('BorosTcf ', {event, payload})
  )

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
      {show && (
        <button
          onClick={() => {
            setShowVendors(true)
          }}
        >
          Show Second layer
        </button>
      )}
      {!show && (
        <>
          <button
            onClick={() => {
              setAcceptedWithUserScroll(prev => !prev)
            }}
          >
            Accepted with user scroll
          </button>
          <button
            onClick={() => {
              setForceModal(prev => !prev)
            }}
          >
            Force modal not dismissable
          </button>
        </>
      )}
      <div>
        <p>Device: {isMobile ? 'mobile' : 'desktop'}</p>
        <p>
          acceptedWithUserScroll: {acceptedWithUserScroll ? 'true' : 'false'}
        </p>
        <p>forceModal: {forceModal ? 'true' : 'false'}</p>
        <b>Event Status:</b> {eventStatus}
      </div>
      <br />
      <p>Unload the component to view some options</p>
      <button
        onClick={() => {
          setShow(prev => {
            if (prev) {
              removeCookie()
            }
            return !prev
          })
        }}
      >
        {show ? 'remove cookies and unload component' : 'load component'}
      </button>
      {show && (
        <TcfUi
          lang={config.language}
          logo="https://frtassets.fotocasa.es/img/fotocasa_logo.svg"
          isMobile={isMobile}
          reporter={reporter.current}
          showVendors={showVendors}
          onCloseModal={() => setShowVendors(false)}
          isTestAcceptedWithUserScroll={acceptedWithUserScroll}
          isTestForceModal={forceModal}
        />
      )}
    </div>
  )
}

export default TcfUiDemo
