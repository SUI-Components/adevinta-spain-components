import {useMount} from '@s-ui/react-hooks'

import useI18n from '../../hooks/useI18n.js'
import useGetCurrentToken from '../useGetCurrentToken.js'

const useDisplayExpiredTokenError = setNotification => {
  const i18n = useI18n()
  const {getCurrentToken} = useGetCurrentToken()
  const {isExpired} = getCurrentToken()

  useMount(() => {
    if (isExpired) {
      setNotification({
        text: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.ERRORS.EXPIRED_TOKEN'),
        isError: true
      })
    }
  })
}

export default useDisplayExpiredTokenError
