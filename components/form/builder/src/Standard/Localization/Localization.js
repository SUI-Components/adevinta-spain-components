export class Localization {
  constructor(value) {
    this._value = value
  }

  fromStringToLocaleFloat() {
    throw new Error(
      '[Localization#fromStringToLocaleFloat] must be implemented'
    )
  }
}
