import {useRef, useState} from 'react'

const useDevMode = () => {
  const clickingRef = useRef({
    clicks: 0,
    lastClickTime: 0
  })

  const [state, setState] = useState({
    isDevModeEnabled: false
  })

  const registerClick = () => {
    // If dev mode is already enabled, just skip
    if (state.isDevModeEnabled) return

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
      setState({isDevModeEnabled: true})
      /* eslint-disable no-console */
      console.log('💻 TaskManager has entered in Developer mode 💻')
      console.log('All work will be visible and displayed from now on')
      console.log('🧘🏽‍♀️ We wish you a peaceful debugging session 🧘🏽‍♀️')
    }
  }
  return {isDevModeEnabled: state.isDevModeEnabled, registerClick}
}

export default useDevMode
