const DETECTION_DELAY = 5000
let __HANDENDLERS__ = []

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
  debugger //eslint-disable-line
  __HANDENDLERS__ = [...__HANDENDLERS__, activationHandler]
  document.addEventListener(
    'at-request-succeeded' /* sdk.event.REQUEST_SUCCEEDED */,
    function(evt) {
      const response = evt.detail
      console.log('Response => ', response)
      const id = response.responseTokens['0']['experience.id']
      __HANDENDLERS__.forEach(handler => {
        console.log('Call handler with => ', id)
        handler(id)
      })
    }
  )
  const sdk = await getSDK()
  console.log(
    'SDK =>',
    sdk,
    'scampId =>',
    window.scampId,
    'sExpId =>',
    window.sExpId
  )
  __HANDENDLERS__.forEach(handler => {
    console.log('Call handler with => ', window.sExpId)
    handler(window.sExpId)
  })
}

export const removeActivationListener = () => {}
