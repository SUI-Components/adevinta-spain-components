export class Localization {
  constructor(value) {
    this._value = value
  }

  removeAllDots(aString) {
    return aString.replace(/\./g, '')
  }

  replaceFirstCommaWithDot(aString) {
    return aString.replace(',', '.')
  }

  removeAllCommas(aString) {
    return aString.replace(/,/g, '')
  }

  fromStringToLocaleFloat() {
    throw new Error(
      '[Localization#fromStringToLocaleFloat] must be implemented'
    )
  }
}
