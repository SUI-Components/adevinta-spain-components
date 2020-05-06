import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Notification from '@s-ui/react-molecule-notification'
import Button from '@s-ui/react-atom-button'

import {CLASS, I18N} from './settings'

const COOKIE_TTL = 31557600000
const NO_OP = () => {}
const EmptyIcon = () => null

function CookieBanner({
  cookieKey = 'user-has-accepted-cookies',
  lang,
  link,
  onAccept = NO_OP
}) {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(
    getHasAcceptedCookie
  )

  const i18n = I18N[lang]

  function getHasAcceptedCookie() {
    return decodeURIComponent(
      (`; ${document.cookie}`.split(`; ${cookieKey}=`)[1] || '').split(';')[0]
    )
  }

  function setCookie() {
    // save the cookie with a true value
    const value = `${cookieKey}=true`
    // set the expiration date for a better browser support (IE11 has problems with max-age)
    const expires = `expires=${new Date(
      +new Date() + COOKIE_TTL
    ).toUTCString()}`
    // Set the cookie with the value and the expiration date
    document.cookie = `${value};${expires}`
  }

  function handleClick() {
    setCookie()
    setHasAcceptedCookies(true)
    onAccept()
  }

  if (hasAcceptedCookies) return null

  return (
    <div className={CLASS}>
      <Notification
        autoClose="manual"
        icon={<EmptyIcon />}
        position="bottom"
        show
        showCloseButton={false}
        variation="positive"
        type="system"
      >
        <section className={`${CLASS}-content`}>
          <div>
            <h3 className={`${CLASS}-title`}>{i18n.TITLE}</h3>
            <span className={`${CLASS}-text`}>
              Utilizamos cookies propias y de terceros, y tecnología similar,
              para recordar tus preferencias, elaborar estadísticas, crear
              perfiles publicitarios, mostrarte publicidad y contenido
              personalizado, por ejemplo analizando tu navegación. Si continúas
              navegando o haces clic en el botón "Seguir navegando", aceptas su
              uso. Puedes revocar el consentimiento en{' '}
              <a className="sui-CmpUi-link" href={link}>
                nuestra política de cookies
              </a>
              .
            </span>
          </div>
          <div className={`${CLASS}-actions`}>
            <Button className={`${CLASS}-button`} onClick={handleClick}>
              Seguir navegando
            </Button>
          </div>
        </section>
      </Notification>
    </div>
  )
}

CookieBanner.displayName = 'CookieBanner'

CookieBanner.propTypes = {
  cookieKey: PropTypes.string,
  lang: PropTypes.string.isRequired,
  link: PropTypes.string,
  onAccept: PropTypes.func
}

export default CookieBanner
