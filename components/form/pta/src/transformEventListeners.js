/**
 * transformEventsListenersIntoCallbackMap: transform event listeners list
 * into a callback map, where id is EVENT_TYPE, and value are event type callbacks list
 * 
eventListeners = [
  {
    eventNames: [EVENT_TYPE_1, EVENT_TYPE_2],
    listener: listener1Fn
  },
  {
    eventNames: [EVENT_TYPE_1],
    listener: listener2Fn
  },
  {
    eventNames: [EVENT_TYPE_3],
    listener: listener3Fn
  }
]
 
callbackMap: {
  EVENT_TYPE_1: [listener1Fn, listener2Fn],
  EVENT_TYPE_2: [listener1Fn]
  EVENT_TYPE_3: [listener3Fn]
}
 */
export const transformEventsListenersIntoCallbackMap = eventListeners => {
  const eventListenerToCallbackMap = (acc, {eventNames, listener: callback}) =>
    eventNames.reduce(addCallbackToMap(callback), acc)

  const addCallbackToMap = callback => (acc, name) => ({
    ...acc,
    [name]: [callback, ...(acc[name] || [])]
  })

  const transformListeners = listeners =>
    listeners.reduce(eventListenerToCallbackMap, {})

  return transformListeners(eventListeners)
}
