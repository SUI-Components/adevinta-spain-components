import {Localization} from './Localization'

export class EsEsLocalization extends Localization {
  fromStringToLocaleFloat() {
    const removeAllDots = aString => aString.replace(/\./g, '')
    const replaceFirstCommaWithDot = aString => aString.replace(',', '.')
    const removeAllCommas = aString => aString.replace(/,/g, '')
    return parseFloat(
      removeAllCommas(replaceFirstCommaWithDot(removeAllDots(this._value)))
    )
  }
}
