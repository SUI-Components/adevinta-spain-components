import React from 'react'
import PropTypes from 'prop-types'
import {LazyContent} from './lazyContent'

const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google'
]

function checkUserAgentIsBot(userAgent, botsUserAgents) {
  const lowerCaseUserAgent = userAgent.toLowerCase()
  // check if the userAgent is a bot
  return botsUserAgents.some(ua => lowerCaseUserAgent.includes(ua))
}

export default function PerfDynamicRendering({
  children,
  disabled,
  forceRender,
  height,
  userAgent,
  placeholder,
  rootMargin,
  botsUserAgents
}) {
  const isBot = checkUserAgentIsBot(userAgent, botsUserAgents)
  const isOnBrowser = typeof window !== 'undefined'

  // Force render in server and client
  if (forceRender) return children

  // if isBot or disabled, we return in server and client the content
  if (isBot) return children

  // now, we're sure the user isNotBot
  // so check if we're on the browser side and if is not disabled the component
  if (isOnBrowser && !disabled) {
    return (
      <LazyContent
        rootMargin={rootMargin}
        placeholder={placeholder}
        height={height}
      >
        {children}
      </LazyContent>
    )
  } else if (placeholder) {
    // so, we're on the server side or the component is disabled
    return placeholder
  } else {
    return <div style={{height: `${height}px`, marginBottom: '1px'}} />
  }
}
PerfDynamicRendering.displayName = 'PerfDynamicRendering'

PerfDynamicRendering.defaultProps = {
  height: 0,
  botsUserAgents: BOTS_USER_AGENTS
}

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
  userAgent: PropTypes.string.isRequired,

  /**
   * A component or html element that is used as a placeholder
   */
  placeholder: PropTypes.element,

  /**
   * String in the format of the css margin property. the values serves to grow or shrink
   * each side of the root element's bounding box before computing intersections.
   */
  rootMargin: PropTypes.string,

  /**
   * An Array of strings that is used to set the lists of userAgents for which the element is always rendered
   */
  botsUserAgents: PropTypes.arrayOf(PropTypes.string)
}
