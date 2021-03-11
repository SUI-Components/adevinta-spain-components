import {useState, useEffect, useRef, useCallback} from 'react'

/**
 * React hook for combine the state of a value prop and its default value
 **/
const useControlledState = (controlledValue, defaultValue) => {
  const isFirst = useRef(true)
  const [initialValue] = useState(
    controlledValue === undefined ? defaultValue : controlledValue
  )
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
    } else {
      setValue(controlledValue)
    }
  }, [controlledValue, setValue, isFirst])
  const updater = useCallback(
    (value, forceFlag) => {
      if (controlledValue === undefined || forceFlag) {
        setValue(value)
      }
    },
    [controlledValue, setValue]
  )
  return [value, updater, controlledValue !== undefined, initialValue]
}

export default useControlledState
