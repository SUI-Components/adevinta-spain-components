export const parseEvents = eventListeners => {
  const traverseNames = listener => (acc, name) => ({
    ...acc,
    [name]: [
      listener,
      ...acc[name] || []
    ]
  })
  
  const prepare = (acc, {eventNames, listener}) =>
    eventNames.reduce(traverseNames(listener), acc)
  
  const transformListeners = listeners => listeners.reduce(prepare, {})
  
  return transformListeners(eventListeners)    
}