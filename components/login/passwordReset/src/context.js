import {createContext} from 'react'

import PropTypes from 'prop-types'

import Domain from './domain/index.js'
import useI18nInitializer from './hooks/useI18nInitializer.js'
import {
  NO_OP,
  STAGE_PASSWORD_CHANGE,
  STAGE_PASSWORD_RESET_START
} from './config.js'

export const PasswordResetContext = createContext()

const PasswordResetProvider = ({
  children,
  defaultStage = STAGE_PASSWORD_RESET_START,
  endpoints = {},
  i18n: customI18n,
  onEvent = NO_OP
}) => {
  const domain = new Domain()
  const config = domain.get('config')
  config.set('RESET_PASSWORD_ENDPOINT', endpoints.resetPassword)
  config.set('CHANGE_PASSWORD_ENDPOINT', endpoints.changePassword)

  const i18n = useI18nInitializer(
    config.get('DEFAULT_CULTURE'),
    config.get('DEFAULT_CURRENCY')
  )

  const value = {
    props: {
      defaultStage,
      endpoints,
      i18n: customI18n,
      onEvent
    },
    domain,
    i18n
  }
  return (
    <PasswordResetContext.Provider value={value}>
      {children}
    </PasswordResetContext.Provider>
  )
}

PasswordResetProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultStage: PropTypes.oneOf([
    STAGE_PASSWORD_RESET_START,
    STAGE_PASSWORD_CHANGE
  ]),
  endpoints: PropTypes.shape({
    resetPassword: PropTypes.string.isRequired,
    changePassword: PropTypes.string.isRequired
  }),
  i18n: PropTypes.object,
  onEvent: PropTypes.func
}

export {PasswordResetProvider}
