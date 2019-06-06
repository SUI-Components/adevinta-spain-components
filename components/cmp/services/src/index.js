import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import getUseCases from './useCases'

export default function CmpServices({children}) {
  const [useCases, setUseCases] = useState(false)

  useEffect(function() {
    getUseCases().then(useCases => setUseCases(useCases))
  }, [])

  return useCases && children(useCases)
}

CmpServices.displayName = 'CmpServices'
CmpServices.propTypes = {
  /**
   * Render prop. It will receive as parameter an object with all the services you can use. The function has to return the element you want to render
   */
  children: PropTypes.func.isRequired
}
