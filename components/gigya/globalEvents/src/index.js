import {useEffect} from 'react'

import PropTypes from 'prop-types'

import {
  addOnLoginSubscriber,
  addOnLogoutSubscriber,
  initListener,
  removeOnLoginSubscriber,
  removeOnLogoutSubscriber
} from './helper.js'

export default function GigyaGlobalEvents({onLogin, onLogout}) {
  const registerEvents = ({onLogin, onLogout}) => {
    onLogin && addOnLoginSubscriber(onLogin)
    onLogout && addOnLogoutSubscriber(onLogout)
  }

  const unregisterEvents = ({onLogin, onLogout}) => {
    onLogin && removeOnLoginSubscriber(onLogin)
    onLogout && removeOnLogoutSubscriber(onLogout)
  }

  useEffect(function () {
    initListener()
    registerEvents({onLogin, onLogout})
    return () => unregisterEvents({onLogin, onLogout})
  })

  return <></>
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
