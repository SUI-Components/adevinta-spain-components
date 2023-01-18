import {createContext} from 'react'

import PropTypes from 'prop-types'

import Domain from './domain/index.js'

export const PasswordResetContext = createContext()

const PasswordResetProvider = ({children}) => {
  const value = {
    domain: new Domain(),
    i18n: null
  }
  return (
    <PasswordResetContext.Provider value={value}>
      {children}
    </PasswordResetContext.Provider>
  )
}

PasswordResetProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {PasswordResetProvider}
