import {useCallback, useState} from 'react'
import copy from 'clipboard-copy'

import useMountedState from '../useMountedState'

export default function useCopyToClipboard() {
  const isMounted = useMountedState()
  const [value, setValue] = useState()
  const [error, setError] = useState()
  const copyToClipboard = useCallback(
    async value => {
      if (!isMounted()) return null
      let normalizedValue
      try {
        // only strings and numbers casted to strings can be copied to clipboard
        if (typeof value !== 'string' && typeof value !== 'number') {
          const error = new Error(
            `Cannot copy typeof ${typeof value} to clipboard, must be a string`
          )
          if (process.env.NODE_ENV === 'development') console.error(error) // eslint-disable-line no-console
          setValue(value)
          setError(error)
          return null
        }
        // empty strings are also considered invalid
        else if (value === '') {
          const error = new Error(`Cannot copy empty string to clipboard.`)
          if (process.env.NODE_ENV === 'development') console.error(error) // eslint-disable-line no-console
          setValue(value)
          setError(error)
          return null
        }
        normalizedValue = value.toString()
        try {
          await copy(normalizedValue)
          setValue(value)
          setError(undefined)
        } catch (error) {
          if (process.env.NODE_ENV === 'development') console.error(error) // eslint-disable-line no-console
          setValue(value)
          setError(error)
          return null
        }
      } catch (error) {
        setValue(normalizedValue)
        setError(error)
      }
    },
    [isMounted, setValue, setError]
  )
  return [{value, error}, copyToClipboard]
}
