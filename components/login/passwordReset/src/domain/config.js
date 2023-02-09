export const DEFAULT_RESET_PASSWORD_ENDPOINT =
  'http://localhost/v1/ecg/password-reset'
export const DEFAULT_CHANGE_PASSWORD_ENDPOINT =
  'http://localhost/v1/ecg/password-change'
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
      RESET_PASSWORD_ENDPOINT: DEFAULT_RESET_PASSWORD_ENDPOINT,
      CHANGE_PASSWORD_ENDPOINT: DEFAULT_CHANGE_PASSWORD_ENDPOINT
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
