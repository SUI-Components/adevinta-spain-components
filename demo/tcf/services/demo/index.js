import React, {useState, useRef} from 'react'
import ConsentProvider from '../../../../components/tcf/services/src'

const TcfServicesDemo = () => {
  const [received, setReceived] = useState([])
  const reporter = useRef((event, payload) => {
    console.log('TCF notification', {event, payload})
    const eventText =
      event !== 'USE_CASE_CALLED' ? event : `${event}::${payload.useCase}`
    setReceived(prev => prev.concat(eventText))
  })
  return (
    <>
      <h1>TCF Services Demo</h1>
      <h2>TCF Event Reporter</h2>
      <p>
        Event reporter will receive any TCF event with its payload (for this
        demo payloads are written in the browser's console)
      </p>
      <ConsentProvider
        isMobile={false}
        language="es"
        reporter={reporter.current}
      />
      <div>
        {received.map((event, index) => (
          <div key={index + '-' + event}>
            Received: <b>{event}</b>
          </div>
        ))}
      </div>
    </>
  )
}

export default TcfServicesDemo
