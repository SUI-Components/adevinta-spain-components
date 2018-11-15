import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Notification from '@s-ui/react-molecule-notification'

import {CLASS, I18N} from '../settings'

export class CmpBanner extends Component {
  textRef = React.createRef()
  openCookiesDOM = null

  componentDidMount() {
    this.openCookiesDOM =
      this.textRef && this.textRef.current.querySelector(`.${CLASS}-link`)

    this.openCookiesDOM &&
      this.openCookiesDOM.addEventListener('click', this._handleOpenCookies)
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillUnmount() {
    this.openCookiesDOM &&
      this.openCookiesDOM.removeEventListener('click', this._handleOpenCookies)
  }

  _generateButtons({lang}) {
    const i18n = I18N[lang]
    return [
      {
        children: i18n.ACCEPT_BUTTON,
        negative: true,
        onClick: this.props.onAccept,
        size: 'small',
        type: 'primary'
      }
    ]
  }

  _handleOpenCookies = e => {
    e.preventDefault()
    this.props.onConfigure()
  }

  render() {
    const {lang} = this.props
    return (
      <div className={CLASS}>
        <Notification
          autoClose="manual"
          buttons={this._generateButtons({lang})}
          position="bottom"
          show
          showCloseButton={false}
          variation="positive"
        >
          <span
            className={`${CLASS}-text`}
            ref={this.textRef}
            dangerouslySetInnerHTML={{__html: I18N[lang].BANNER_BODY}}
          />
        </Notification>
      </div>
    )
  }
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
