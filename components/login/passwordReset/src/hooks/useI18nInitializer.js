import I18n from '@s-ui/i18n'
import Polyglot from '@s-ui/i18n/lib/adapters/polyglot'

import literals from '../literals/index.js'

const useI18nInitializer = (DEFAULT_CULTURE, DEFAULT_CURRENCY) => {
  const i18n = new I18n({adapter: new Polyglot()})
  i18n.languages = literals
  i18n.culture = DEFAULT_CULTURE
  i18n.currency = DEFAULT_CURRENCY

  return i18n
}

export default useI18nInitializer
