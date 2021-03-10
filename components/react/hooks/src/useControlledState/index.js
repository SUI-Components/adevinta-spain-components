import {useState, useEffect, useRef} from 'react'

/**
 * React hook for combine the state of a value prop and its default value
 **/
const useControlledState = (controlledValue, defaultValue) => {
  const isFirst = useRef(true)
  const initialValue =
    controlledValue === undefined ? defaultValue : controlledValue
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
    } else {
      setValue(controlledValue)
    }
  }, [controlledValue, setValue, isFirst])
  return [value, setValue]
}

export default useControlledState
