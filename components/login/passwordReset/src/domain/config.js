export default class Config {
  /**
   * @constructor
   * @param {Object} deps
   * @param {String} deps.appName
   */
  constructor() {
    this._config = {
      DEFAULT_CULTURE: 'es-ES',
      DEFAULT_CURRENCY: 'EUR',
      RESET_PASSWORD_ENDPOINT: 'http://localhost/v1/ecg/password-reset',
      CHANGE_PASSWORD_ENDPOINT: 'http://localhost/v1/ecg/password-change'
    }
  }

  /**
   * @method
   * @param {String} key
   * @return {*}
   */
  get(key) {
    return this._config[key]
  }

  /**
   * @method
   * @param {String} key
   * @param {*} value
   * @return {*}
   */
  set(key, value) {
    if (value !== undefined) this._config[key] = value
    return this
  }
}
