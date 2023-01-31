import {useContext} from 'react'

import {PasswordResetContext} from '../context.js'

const useDomain = () => {
  const {domain} = useContext(PasswordResetContext)

  return domain
}

export default useDomain
