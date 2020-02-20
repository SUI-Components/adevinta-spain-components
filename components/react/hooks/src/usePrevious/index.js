import {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

export default function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

usePrevious.displayName = 'HookUseOnScreen'
usePrevious.propTypes = {
  value: PropTypes.any
}
