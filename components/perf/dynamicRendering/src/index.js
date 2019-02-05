import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import {hocIntersectionObserverWithOptions} from './withIntersectionObserver'
const hocIntersectionObserver = hocIntersectionObserverWithOptions({
  rootMargin: '100px 0 0'
})

const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google'
]

const LazyContent = hocIntersectionObserver(
  ({children, height, innerRef, isVisible}) => {
    return isVisible ? children : <div ref={innerRef} style={{height}} />
  }
)

export default class PerfDynamicRendering extends Component {
  _checkUserAgentIsBot({userAgent}) {
    const lowerCaseUserAgent = userAgent.toLowerCase()
    // check if the userAgent is a bot
    return BOTS_USER_AGENTS.some(ua => lowerCaseUserAgent.includes(ua))
  }

  render() {
    const {children, disabled, height, userAgent} = this.props
    const isBot = this._checkUserAgentIsBot({userAgent})
    const isBrowser = typeof window !== 'undefined'

    // if isBot, we return in server and client the content
    if (isBot) return <Fragment>{children}</Fragment>

    if (isBrowser && !disabled) {
      return <LazyContent height={height}>{children}</LazyContent>
    } else {
      // isServer and isNotBot
      return null
    }
  }
}

PerfDynamicRendering.displayName = 'PerfDynamicRendering'

PerfDynamicRendering.propTypes = {
  /**
   * Wrapped content that will be rendered, or not, depending your userAgent and if is interescting. As explained in the README.md
   */
  children: PropTypes.any,
  /**
   * Flag that determines if you don't want to render anything in the client. ⚠️ This prop doesn't apply if the userAgent is a bot.
   */
  disabled: PropTypes.bool,
  /**
   * Number that determines the height of the component that we're waiting.
   */
  height: PropTypes.number,
  /**
   * String with the userAgent that will be used to check if is bot or normal user.
   */
  userAgent: PropTypes.string
}
