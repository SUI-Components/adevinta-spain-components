const DETECTION_DELAY = 5000
let __HANDLERS__ = {}

const waitUntil = (truthyFn, callback, delay = 100, interval = 100) => {
  const intervalId = setInterval(() => {
    const value = truthyFn()
    if (value || delay <= 0) {
      clearInterval(intervalId)
      callback(value)
    }
    delay -= interval
  }, interval)
}

const getTarget = () => window && window.adobe && window.adobe.target

const getSDK = () =>
  new Promise(resolve => {
    waitUntil(
      getTarget,
      sdk => {
        resolve(sdk)
      },
      DETECTION_DELAY
    )
  })

export const addActivationListener = async (
  experimentId,
  activationHandler
) => {
  __HANDLERS__ = {
    ...__HANDLERS__,
    [experimentId]: [...__HANDLERS__[experimentId], activationHandler]
  }

  await getSDK()
  __HANDLERS__[window.sCampId] &&
    __HANDLERS__[window.sCampId].forEach(handler => {
      console.log(
        `Target experiement(${window.sCampId}): call handler for variant =>${
          window.sExpId
        }`
      )
      handler(window.sExpId)
    })
}

export const removeActivationListener = (experimentId, handler) => {
  const experiment = __HANDLERS__[experimentId]

  if (!experiment) {
    return null
  }

  __HANDLERS__[experimentId] = experiment.filter(fn => fn !== handler)
}
