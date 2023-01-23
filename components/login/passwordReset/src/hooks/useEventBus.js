import {useContext} from 'react'

import {EVENTS} from '../config.js'
import {PasswordResetContext} from '../context.js'

const useEventBus = () => {
  const {
    props: {onEvent}
  } = useContext(PasswordResetContext)

  const emit = (event, payload) => {
    if (Object.values(EVENTS).includes(event) === false)
      throw new Error(`"${event}" is not a valid event name`)

    if (onEvent === undefined) {
      console.warn(
        `"${event}" cannot be emitted because "onEvent" function has not been provided`
      )
      return
    }

    onEvent(event, payload)
  }

  return {emit}
}

export default useEventBus
