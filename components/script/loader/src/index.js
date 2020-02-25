import {useEffect, useState} from 'react'
import {useMount} from '@s-ui/react-hooks'
import PropTypes from 'prop-types'
import {loadScript} from './helper.js'

const ScriptLoader = ({
  src,
  verifier,
  isAsync = true,
  detectionDelay = 5000,
  onTimeout = () => {},
  stylesheet,
  render,
  timeoutRender = () => null
}) => {
  const [readyToRender, setReadyToRender] = useState(false)
  const [timeout, seTimeout] = useState(false)

  const initLoad = () => {
    loadScript({src, verifier, isAsync, detectionDelay, stylesheet})
      .then(() => setReadyToRender(true))
      .catch(() => seTimeout(true))
  }

  useEffect(() => onTimeout(), [onTimeout, timeout])
  useMount(initLoad)

  if (readyToRender && render) return render()
  if (timeout && timeoutRender) return timeoutRender()
  return null
}

ScriptLoader.displayName = 'ScriptLoader'

ScriptLoader.propTypes = {
  /**
   * The script to be injected
   */
  src: PropTypes.string.isRequired,
  /**
   * A function that will return a truthy value when the resource is loaded, false otherwise
   */
  verifier: PropTypes.func.isRequired,
  /**
   * A function that will return what should be rendered when the script is loaded
   */
  render: PropTypes.func.isRequired,
  /**
   * A function that will return what should be rendered when the script is not
   * loaded within the expected time.
   */
  timeoutRender: PropTypes.func,
  /**
   * A function that will be executed when the script is not loaded within the
   * expected time.
   */
  onTimeout: PropTypes.func,
  /**
   * If the script should be marked as async or not
   */
  isAsync: PropTypes.bool,
  /**
   * Detection delay time (in miliseconds)
   */
  detectionDelay: PropTypes.number,

  /**
   * Stylesheet to be injected
   */
  stylesheet: PropTypes.string
}

export default ScriptLoader
