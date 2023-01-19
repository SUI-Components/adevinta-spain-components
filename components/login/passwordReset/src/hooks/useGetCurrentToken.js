import {useContext} from 'react'

import {STAGE_PASSWORD_CHANGE, STAGE_PASSWORD_RESET_START} from '../config.js'
import {PasswordResetContext} from '../context.js'

const useGetCurrentToken = () => {
  const {defaultStage} = useContext(PasswordResetContext)

  // This could be a use case
  const getCurrentToken = () => {
    // When running in SSR mode
    if (!window) {
      return {
        stage: defaultStage,
        isExpired: false,
        token: ''
      }
    }

    // Get url params
    const searchParams = new URLSearchParams(window.location.search)
    const token = searchParams.get('token')
    const exp = searchParams.get('exp')

    if (token && exp) {
      return {
        token,
        isExpired: new Date() > new Date(exp),
        stage: STAGE_PASSWORD_CHANGE
      }
    }

    return {
      stage: STAGE_PASSWORD_RESET_START,
      isExpired: null,
      token: null
    }
  }

  return {
    getCurrentToken
  }
}

export default useGetCurrentToken
