import ChevronCircleDownSolid from '@adv-ui/mt-svg-icons/lib/ChevronCircleDownSolid'
import Upwnload from '@adv-ui/mt-svg-icons/lib/Upwnload'
export default class Config {
  /**
   * @constructor
   * @param {Object} deps
   * @param {String} deps.appName
   */
  constructor() {
    this._config = {
      AVAILABLE_STATUS: {
        CANCELLED: 'CANCELLED',
        COMPLETED: <ChevronCircleDownSolid size="medium" />,
        ERROR: 'ERROR 🤬',
        IN_PROGRESS: <Upwnload size="medium" />,
        QUEUED: 'QUEUED'
      },
      AVAILABLE_PRIORITIES: {
        LOW: 0,
        MEDIUM: 25,
        HIGH: 50,
        HIGHEST: 100
      },
      DEFAULT_CULTURE: 'es-ES',
      DEFAULT_CURRENCY: 'EUR'
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
