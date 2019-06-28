import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import ScriptLoader from '@schibstedspain/sui-script-loader'
import {useMount} from '@schibstedspain/sui-react-hooks'

const CAPTCHA_SRC = 'https://www.google.com/recaptcha/api.js?render=explicit'
const CAPTCHA_ID = 'sui-FormCaptchaContainer'

const CAPTCHA_VERIFIER = () =>
  typeof window !== 'undefined' &&
  typeof window.grecaptcha !== 'undefined' &&
  typeof window.grecaptcha.render !== 'undefined'

const FormCaptcha = ({siteKey, locale, onSubmit = () => {}}) => {
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaId, setCaptchaId] = useState(null)

  const reset = () => {
    if (captchaId !== null) {
      window.grecaptcha.reset(captchaId)
    }
    onSubmit('')
  }

  const load = () => {
    if (captchaId !== null) return null

    try {
      const widgetId = window.grecaptcha.render(CAPTCHA_ID, {
        sitekey: siteKey,
        hl: locale,
        callback: onSubmit,
        'expired-callback': reset
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
    <Fragment>
      {showCaptcha && (
        <div id={CAPTCHA_ID}>
          <ScriptLoader
            isAsync
            render={load}
            src={CAPTCHA_SRC}
            verifier={CAPTCHA_VERIFIER}
          />
        </div>
      )}
    </Fragment>
  )
}

FormCaptcha.displayName = 'FormCaptcha'

FormCaptcha.propTypes = {
  siteKey: PropTypes.string.isRequired,
  locale: PropTypes.string,
  onSubmit: PropTypes.func
}

export default FormCaptcha
