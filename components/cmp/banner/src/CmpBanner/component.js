import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {useMount} from '@s-ui/react-hooks'

import Notification from '@s-ui/react-molecule-notification'

import {CLASS, I18N} from '../settings'

export default function CmpBanner({lang, onAccept, onConfigure}) {
  const textRef = useRef()

  useMount(function() {
    const {current: textDOM} = textRef
    const openCookiesDOM = textDOM.querySelector(`.${CLASS}-link`)
    openCookiesDOM.addEventListener('click', _handleOpenCookies)

    return () =>
      openCookiesDOM &&
      openCookiesDOM.removeEventListener('click', _handleOpenCookies)
  })

  const _generateButtons = ({lang}) => {
    const i18n = I18N[lang]
    return [
      {
        children: i18n.ACCEPT_BUTTON,
        negative: true,
        onClick: onAccept,
        size: 'small',
        type: 'primary'
      }
    ]
  }

  const _handleOpenCookies = e => {
    e.preventDefault()
    onConfigure()
  }

  return (
    <div className={CLASS}>
      <Notification
        autoClose="manual"
        buttons={_generateButtons({lang})}
        position="bottom"
        show
        showCloseButton={false}
        variation="positive"
        type="system"
      >
        <span
          className={`${CLASS}-text`}
          ref={textRef}
          dangerouslySetInnerHTML={{__html: I18N[lang].BANNER_BODY}}
        />
      </Notification>
    </div>
  )
}

CmpBanner.propTypes = {
  /**
   * Method to execute when cookies are accepted
   */
  onAccept: PropTypes.func.isRequired,
  /**
   * Method to execute when user want to configure cookies
   */
  onConfigure: PropTypes.func.isRequired,
  /**
   * ISO 639-1 code language in order to get the text translated to it
   */
  lang: PropTypes.string
}
