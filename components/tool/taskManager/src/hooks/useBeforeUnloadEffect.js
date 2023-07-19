import {useCallback, useEffect} from 'react'

import useContext from './useContext.js'

const displayCloseAlert = e => {
  e.preventDefault()
  e.returnValue = ''
}

const useBeforeUnloadEffect = ({isVisible}) => {
  const {domain, getState} = useContext()
  const state = getState()
  const config = domain.get('config')

  const _displayCloseAlert = useCallback(
    e => {
      const hasInProgressTasks =
        state.tasks.filter(
          task => task.status === config.get('AVAILABLE_STATUS').IN_PROGRESS
        ).length > 0

      if (hasInProgressTasks) {
        displayCloseAlert(e)
      }
    },
    [config, state]
  )

  useEffect(() => {
    if (isVisible === false) return

    window.addEventListener('beforeunload', _displayCloseAlert)
    return () => {
      window.removeEventListener('beforeunload', _displayCloseAlert)
    }
  }, [_displayCloseAlert, isVisible])
}

export default useBeforeUnloadEffect
