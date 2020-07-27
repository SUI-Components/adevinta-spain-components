import {Localization} from './Localization'

export class EsEsLocalization extends Localization {
  fromStringToLocaleFloat() {
    return parseFloat(
      this.removeAllCommas(
        this.replaceFirstCommaWithDot(this.removeAllDots(this._value))
      )
    )
  }
}
