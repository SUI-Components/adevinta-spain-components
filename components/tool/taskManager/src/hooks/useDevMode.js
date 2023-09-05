import {useRef} from 'react'

import useContext from './useContext.js'

const useDevMode = () => {
  const {enableDevMode, getState} = useContext()
  const {isDevModeEnabled} = getState()

  const clickingRef = useRef({
    clicks: 0,
    lastClickTime: 0
  })

  const registerClick = () => {
    // If dev mode is already enabled, just skip
    if (isDevModeEnabled) return

    // First, if the lastClickTime was more than 500 msecs ago, we reset the clicks
    if (clickingRef.current.lastClickTime + 250 < Date.now()) {
      clickingRef.current = {clicks: 0, lastClickTime: Date.now()}
      return
    }

    // Second, if the lastClickTime was less than 500 msecs ago, we increment the clicks
    clickingRef.current = {
      clicks: clickingRef.current.clicks + 1,
      lastClickTime: Date.now()
    }

    // Third, if we just reached 20 clicks, display an alert
    if (clickingRef.current.clicks >= 20) {
      enableDevMode()
      /* eslint-disable no-console */
      console.log('💻 TaskManager has entered in Developer mode 💻')
      console.log('All work will be visible and displayed from now on')
      console.log('🧘🏽‍♀️ We wish you a peaceful debugging session 🧘🏽‍♀️')
    }
  }
  return {isDevModeEnabled, registerClick}
}

export default useDevMode
