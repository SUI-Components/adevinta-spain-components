import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {useMount} from '@schibstedspain/sui-react-hooks'

import Notification from '@s-ui/react-molecule-notification'
import Button from '@schibstedspain/sui-atom-button'

import {CLASS, I18N} from '../settings'

const EmptyIcon = () => null

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

  const _handleOpenCookies = e => {
    e.preventDefault()
    onConfigure({showPartners: false})
  }

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
          <h3 className={`${CLASS}-title`}>{I18N[lang].TITLE}</h3>
          <span
            className={`${CLASS}-text`}
            ref={textRef}
            dangerouslySetInnerHTML={{__html: I18N[lang].BANNER_BODY}}
          />
          <button className={`${CLASS}-partnersLink`} onClick={onConfigure}>
            {I18N[lang].PARTNERS_LINK}
          </button>
          <Button className={`${CLASS}-acceptButton`} onClick={onAccept}>
            {I18N[lang].ACCEPT_BUTTON}
          </Button>
        </section>
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
