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
    return isVisible ? (
      children
    ) : (
      <div ref={innerRef} style={{height: `${height}px`}} />
    )
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
  forceRender,
  height,
  userAgent
}) {
  const isBot = checkUserAgentIsBot({userAgent})
  const isOnBrowser = typeof window !== 'undefined'

  // Force render in server and client
  if (forceRender) return children

  // if isBot or disabled, we return in server and client the content
  if (isBot) return children

  // now, we're sure the user isNotBot
  // so check if we're on the browser side and if is not disabled the component
  if (isOnBrowser && !disabled) {
    return <LazyContent height={height}>{children}</LazyContent>
  } else {
    // so, we're on the server side or the component is disabled
    return <div />
  }
}

PerfDynamicRendering.displayName = 'PerfDynamicRendering'

PerfDynamicRendering.propTypes = {
  /**
   * Wrapped content that will be rendered, or not, depending your userAgent and if is interescting. As explained in the README.md
   */
  children: PropTypes.any,

  /**
   * Flag that determines if you want disable the Intersection Observer lazy load strategy. And use a controller lazy strategy ONLY in client side.
   */
  disabled: PropTypes.bool,

  /**
   * avoid any check and render always.
   * */
  forceRender: PropTypes.bool,

  /**
   * Number that determines the height of the component that we're waiting in pixels.
   */
  height: PropTypes.number,

  /**
   * String with the userAgent that will be used to check if is bot or normal user.
   */
  userAgent: PropTypes.string
}
