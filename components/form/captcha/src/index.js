import {useState} from 'react'

import PropTypes from 'prop-types'

import {useMount} from '@s-ui/react-hooks'
import ScriptLoader from '@s-ui/react-script-loader'

const CAPTCHA_SRC = 'https://www.google.com/recaptcha/api.js?render=explicit'
const CAPTCHA_ID = 'sui-FormCaptchaContainer'
const CAPTCHA_SIZES = {
  COMPACT: 'compact',
  NORMAL: 'normal'
}
const CAPTCHA_DEFAULT_SIZE = CAPTCHA_SIZES.NORMAL

const CAPTCHA_VERIFIER = () =>
  typeof window !== 'undefined' &&
  typeof window.grecaptcha !== 'undefined' &&
  typeof window.grecaptcha.render !== 'undefined'

const FormCaptcha = ({
  containerId,
  siteKey,
  locale,
  onSubmit = () => {},
  size = CAPTCHA_DEFAULT_SIZE
}) => {
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaId, setCaptchaId] = useState(null)

  // If we receive a unique identifier, we concatenate it with the default.
  const captchaContainerId = [CAPTCHA_ID, containerId].filter(Boolean).join(' ')

  const reset = () => {
    if (captchaId !== null) {
      window.grecaptcha.reset(captchaId)
    }
    onSubmit('')
  }

  const load = () => {
    if (captchaId !== null) return null

    try {
      const widgetId = window.grecaptcha.render(captchaContainerId, {
        sitekey: siteKey,
        hl: locale,
        callback: onSubmit,
        'expired-callback': reset,
        size
      })

      setCaptchaId(widgetId)
    } catch (e) {}

    return null
  }

  useMount(() => {
    setShowCaptcha(true)
    return () => {
      reset()
    }
  })

  return (
    <>
      {showCaptcha && (
        <div id={captchaContainerId}>
          <ScriptLoader
            isAsync
            render={load}
            src={CAPTCHA_SRC}
            verifier={CAPTCHA_VERIFIER}
          />
        </div>
      )}
    </>
  )
}

FormCaptcha.displayName = 'FormCaptcha'

FormCaptcha.propTypes = {
  /**
   * Necessary to define a unique identifier in case of multiple instances of the component.
   */
  containerId: PropTypes.string,
  siteKey: PropTypes.string.isRequired,
  locale: PropTypes.string,
  onSubmit: PropTypes.func,
  size: PropTypes.oneOf(Object.values(CAPTCHA_SIZES))
}

export {CAPTCHA_SIZES}

export default FormCaptcha
