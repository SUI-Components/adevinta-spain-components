export default function ReactHooks() {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      "[@schibstedspain/sui-react-hooks] can't be used as a standalone package.\nYou must import a specific hook."
    )
  }
  return null
}

export {default as useMediaQuery} from './useMediaQuery'
export {default as useLegacyState} from './useLegacyState'
export {default as useMount} from './useMount'
export {default as useOnScreen, useNearScreen} from './useOnScreen'
export {default as usePrevious} from './usePrevious'
