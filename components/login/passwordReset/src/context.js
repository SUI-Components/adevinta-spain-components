import {createContext} from 'react'

import PropTypes from 'prop-types'

import Domain from './domain/index.js'
import useI18nInitializer from './hooks/useI18nInitializer.js'

export const PasswordResetContext = createContext()

const PasswordResetProvider = ({children, customI18n}) => {
  const domain = new Domain()
  const config = domain.get('config')
  const i18n = useI18nInitializer(
    config.get('DEFAULT_CULTURE'),
    config.get('DEFAULT_CURRENCY')
  )

  const value = {
    customI18n,
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
  customI18n: PropTypes.object
}

export {PasswordResetProvider}
