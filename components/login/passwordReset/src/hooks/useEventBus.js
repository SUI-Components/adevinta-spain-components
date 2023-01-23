import {useContext} from 'react'

import {EVENTS} from '../config.js'
import {PasswordResetContext} from '../context.js'

const useEventBus = () => {
  const {
    props: {onEvent}
  } = useContext(PasswordResetContext)

  const emit = (event, payload) => {
    if (Object.values(EVENTS).includes(event) === false)
      throw new Error(`"${event}" is not an accepted event name`)

    onEvent(event, payload)
  }

  return {emit}
}

export default useEventBus
