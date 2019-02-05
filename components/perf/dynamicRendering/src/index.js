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
  ({children, innerRef, isVisible}) => {
    return isVisible ? children : <span ref={innerRef} />
  }
)

export default class PerfDynamicRendering extends Component {
  _checkUserAgentIsBot({userAgent}) {
    const lowerCaseUserAgent = userAgent.toLowerCase()
    // check if the userAgent is a bot
    return BOTS_USER_AGENTS.some(ua => lowerCaseUserAgent.includes(ua))
  }

  render() {
    const {children, disabled, userAgent} = this.props
    const isBot = this._checkUserAgentIsBot({userAgent})
    const isBrowser = typeof window !== 'undefined'

    // if isBot, we return in server and client the content
    if (isBot) return <Fragment>{children}</Fragment>

    if (isBrowser && !disabled) {
      return <LazyContent>{children}</LazyContent>
    } else {
      // isServer and isNotBot
      return null
    }
  }
}

PerfDynamicRendering.displayName = 'PerfDynamicRendering'

PerfDynamicRendering.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  userAgent: PropTypes.string
}
