import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {ServiceInitializer} from './infrastructure/bootstrap/ServiceInitializer'

export default function TcfServices({children}) {
  const [service, setService] = useState(false)

  useEffect(function() {
    Promise.resolve()
      .then(() => ServiceInitializer.init())
      .then(service => setService(service))
  }, [])

  return service && children(service)
}

TcfServices.displayName = 'TcfServices'
TcfServices.propTypes = {
  children: PropTypes.func.isRequired
}
