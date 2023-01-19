import {createContext} from 'react'

import PropTypes from 'prop-types'

import Domain from './domain/index.js'
import useI18nInitializer from './hooks/useI18nInitializer.js'
import {STAGE_PASSWORD_CHANGE, STAGE_PASSWORD_RESET_START} from './config.js'

export const PasswordResetContext = createContext()

const PasswordResetProvider = ({
  children,
  customI18n,
  defaultStage = STAGE_PASSWORD_RESET_START
}) => {
  const domain = new Domain()
  const config = domain.get('config')
  const i18n = useI18nInitializer(
    config.get('DEFAULT_CULTURE'),
    config.get('DEFAULT_CURRENCY')
  )

  const value = {
    customI18n,
    domain,
    defaultStage,
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
  customI18n: PropTypes.object,
  defaultStage: PropTypes.oneOf([
    STAGE_PASSWORD_RESET_START,
    STAGE_PASSWORD_CHANGE
  ])
}

export {PasswordResetProvider}
