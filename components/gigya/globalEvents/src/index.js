import {useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  initListener,
  addOnLoginSubscriber,
  removeOnLoginSubscriber,
  addOnLogoutSubscriber,
  removeOnLogoutSubscriber
} from './helper'

export default function GigyaGlobalEvents({onLogin, onLogout}) {
  const registerEvents = ({onLogin, onLogout}) => {
    onLogin && addOnLoginSubscriber(onLogin)
    onLogout && addOnLogoutSubscriber(onLogout)
  }

  const unregisterEvents = ({onLogin, onLogout}) => {
    onLogin && removeOnLoginSubscriber(onLogin)
    onLogout && removeOnLogoutSubscriber(onLogout)
  }

  useEffect(function() {
    initListener()
    registerEvents({onLogin, onLogout})
    return () => unregisterEvents({onLogin, onLogout})
  })

  return null
}

GigyaGlobalEvents.displayName = 'GigyaGlobalEvents'

GigyaGlobalEvents.propTypes = {
  /**
   * A listener to be executed onLogin gigya event
   */
  onLogin: PropTypes.func,
  /**
   * A listener to be executed onLogout gigya event
   */
  onLogout: PropTypes.func
}
