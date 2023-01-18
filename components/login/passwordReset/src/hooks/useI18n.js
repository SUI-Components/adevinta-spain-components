import {useContext} from 'react'

import {PasswordResetContext} from '../context.js'

const useI18n = () => {
  const {customI18n, i18n} = useContext(PasswordResetContext)

  const translateKey = (key, ...args) => {
    if (customI18n !== undefined) {
      const translatedText = customI18n.t(key, ...args)

      if (translatedText !== key) {
        return translatedText
      }
    }
    return i18n.t(key, ...args)
  }

  return {
    t: translateKey
  }
}

export default useI18n
