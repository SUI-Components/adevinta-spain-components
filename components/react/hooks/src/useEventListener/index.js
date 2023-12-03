/*
 * Extended from Gabe Ragland implementation https://usehooks.com/useEventListener/
 * to accept multiple events with the same handler and listener options
 */
import {useEffect, useRef} from 'react'

export default function useEventListener(events, handler, elementRef, options = {}) {
  // Use window if no element is passed, otherwise default to null in SSR
  const element = elementRef || (typeof window !== 'undefined' ? window : null)
  // Create a list of events if a single string is passed
  const eventList = Array.isArray(events) ? events : [events]
  const eventListSerialized = eventList.join()
  // Create a ref that stores handler
  const savedHandler = useRef()

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const listener = event => savedHandler.current(event)

    // Add event listener
    eventList.forEach(eventName => element.addEventListener(eventName, listener, options))

    // Remove event listener on cleanup
    return () => {
      eventList.forEach(eventName => element.removeEventListener(eventName, listener, options))
    }
  }, [eventListSerialized, element]) // eslint-disable-line react-hooks/exhaustive-deps
}
