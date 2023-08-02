import {useCallback, useState} from 'react'

/**
 * React hook for combine the state of a value prop and its default value
 **/
export const useControlledState = (controlledValue, defaultValue) => {
  const isControlled = controlledValue !== undefined
  const [initialValue] = useState(isControlled ? controlledValue : defaultValue)
  const [innerValue, setInnerValue] = useState(initialValue)
  const updater = useCallback(
    (value, forceFlag) => {
      if (controlledValue === undefined || forceFlag) {
        setInnerValue(value)
      }
    },
    [setInnerValue, controlledValue]
  )

  return [
    isControlled ? controlledValue : innerValue,
    updater,
    isControlled,
    initialValue
  ]
}

export default useControlledState
