import React from 'react'
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

function checkUserAgentIsBot({userAgent}) {
  const lowerCaseUserAgent = userAgent.toLowerCase()
  // check if the userAgent is a bot
  return BOTS_USER_AGENTS.some(ua => lowerCaseUserAgent.includes(ua))
}

export default function PerfDynamicRendering({
  children,
  disabled,
  height,
  userAgent
}) {
  const isBot = checkUserAgentIsBot({userAgent})
  const isOnBrowser = typeof window !== 'undefined'

  // if isBot, we return in server and client the content
  if (isBot) return children

  // now, we're sure the user isNotBot
  // so check if we're on the browser side and if is not disabled the component
  if (isOnBrowser && !disabled) {
    return <LazyContent height={height}>{children}</LazyContent>
  } else {
    // so, we're on the server side or the component is disabled
    return null
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
