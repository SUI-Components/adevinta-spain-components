export default class Config {
  /**
   * @constructor
   * @param {Object} deps
   * @param {String} deps.appName
   */
  constructor() {
    this._config = {}
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
    this._config[key] = value
    return this
  }
}
