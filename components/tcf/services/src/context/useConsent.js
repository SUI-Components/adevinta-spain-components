import {useContext} from 'react'

import ConsentContext from './index'

function useConsent() {
  const context = useContext(ConsentContext)
  if (context === undefined) {
    throw new Error(`useConsent must be used within a consent context provider`)
  }
  return context
}

export default useConsent
