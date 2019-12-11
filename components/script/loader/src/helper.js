const scriptPromises = []

/**
 * Loads the given script. If the script was already loaded it will immediately resolve.
 * @param  {object} params
 * @param  {string} params.src
 * @param  {function} params.verifier
 * @param  {boolean} params.isAsync
 * @param  {number} params.detectionDelay
 * @param  {string} params.stylesheet
 * @return {Promise}
 */
const loadScript = ({src, verifier, isAsync, detectionDelay, stylesheet}) => {
  scriptPromises[src] =
    scriptPromises[src] ||
    new Promise((resolve, reject) => {
      const isLoaded = verifier()

      if (isLoaded) {
        resolve(isLoaded)
        return
      }

      injectScript({src, isAsync})
      stylesheet && injectStyles(stylesheet)
      waitUntil(verifier, resolve, reject, detectionDelay)
    })

  return scriptPromises[src]
}

/**
 * Injects the script into the dom.
 * @param  {object} params
 * @param  {string} params.src
 * @param  {boolean} params.isAsync
 * @return {void}
 */
const injectScript = ({src, isAsync}) => {
  const script = document.createElement('script')

  script.src = src
  script.async = isAsync

  document.body.appendChild(script)
}

/**
 * Injects the styles file into the head.
 * @param  {string} stylesheet
 * @return {void}
 */
const injectStyles = stylesheet => {
  const link = document.createElement('link')

  link.rel = 'stylesheet'
  link.href = stylesheet

  document.head.appendChild(link)
}

/**
 * Waits until truthyFn returns a truthy value, then calls callback.
 * @param  {function} truthyFn
 * @param  {function} callback
 * @param  {number} delay
 * @param  {number} interval
 * @return {void}
 */
const waitUntil = (
  truthyFn,
  callback,
  timeoutCallback,
  delay,
  interval = 100
) => {
  const intervalId = setInterval(() => {
    const value = truthyFn()

    if (value) {
      clearInterval(intervalId)
      callback(value)
    }
    if (delay <= 0) {
      clearInterval(intervalId)
      timeoutCallback(value)
    }

    delay -= interval
  }, interval)
}

export {loadScript}
