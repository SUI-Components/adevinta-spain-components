import {useCallback} from 'react'
import copy from 'clipboard-copy'

import useMountedState from '../useMountedState'
import useSetState from '../useSetState'

export default function useCopyToClipboard() {
  const isMounted = useMountedState()
  const [state, setState] = useSetState({
    value: undefined,
    error: undefined
  })
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
          setState({value, error})
          return null
        }
        // empty strings are also considered invalid
        else if (value === '') {
          const error = new Error(`Cannot copy empty string to clipboard.`)
          if (process.env.NODE_ENV === 'development') console.error(error) // eslint-disable-line no-console
          setState({value, error})
          return null
        }
        normalizedValue = value.toString()
        try {
          await copy(normalizedValue)
          setState({
            value: normalizedValue,
            error: undefined
          })
        } catch (error) {
          if (process.env.NODE_ENV === 'development') console.error(error) // eslint-disable-line no-console
          setState({value, error})
          return null
        }
      } catch (error) {
        setState({
          value: normalizedValue,
          error
        })
      }
    },
    [isMounted, setState]
  )
  return [state, copyToClipboard]
}
