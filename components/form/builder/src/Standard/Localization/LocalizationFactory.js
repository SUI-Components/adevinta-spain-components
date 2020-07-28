import {EsEsLocalization} from './EsEsLocalization'

export const LocalizationFactory = ({value, locale}) => {
  switch (locale) {
    case 'es-ES':
      return new EsEsLocalization(value)
  }
}
