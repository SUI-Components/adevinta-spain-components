import {useEffect, useState} from 'react'

const ORIENTATION = {
  portrait: 'portrait',
  landscape: 'landscape'
}
const UPRIGHT = '0'
const RIGHT = '-90'
const LEFT = '90'
const SIDES = {
  [RIGHT]: 'right',
  [UPRIGHT]: 'upright',
  [LEFT]: 'left'
}

const isClient = typeof window !== 'undefined'

function useOrientation() {
  const [orientation, setOrientation] = useState(() => isClient && window.orientation)
  const hasOrientation = Boolean(orientation)
  const isPortrait = String(orientation) === UPRIGHT
  const side = SIDES[String(orientation)]

  useEffect(() => {
    const handler = () => setOrientation(window.orientation)

    window.addEventListener('orientationchange', handler)

    return () => window.removeEventListener('orientationchange', handler)
  }, [])

  // For Desktop and SSR "orientation" is undefined. We use portrait by default
  return !hasOrientation || isPortrait
    ? {orientation: ORIENTATION.portrait, side}
    : {orientation: ORIENTATION.landscape, side}
}

useOrientation.displayName = 'HookUseOrientation'

export {ORIENTATION as orientations}
export default useOrientation
