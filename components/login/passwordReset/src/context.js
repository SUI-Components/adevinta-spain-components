import {createContext} from 'react'

import PropTypes from 'prop-types'

export const PasswordResetContext = createContext()

const PasswordResetProvider = ({children}) => {
  const value = {
    domain: null,
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
