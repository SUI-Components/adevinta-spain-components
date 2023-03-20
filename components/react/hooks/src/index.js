export default function ReactHooks() {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      "[@s-ui/react-hooks] can't be used as a standalone package.\nYou must import a specific hook."
    )
  }
  return null
}

export {default as useBoolean} from './useBoolean/index.js'
export {default as useControlledState} from './useControlledState/index.js'
export {default as useCopyToClipboard} from './useCopyToClipboard/index.js'
export {default as useDebounce} from './useDebounce/index.js'
export {default as useEventListener} from './useEventListener/index.js'
export {default as useInterval} from './useInterval/index.js'
export {default as useLegacyState} from './useLegacyState/index.js'
export {default as useLocalStorage} from './useLocalStorage/index.js'
export {default as useMediaQuery} from './useMediaQuery/index.js'
export {default as useMergeRefs} from './useMergeRefs/index.js'
export {default as useMount} from './useMount/index.js'
export {default as useMountedState} from './useMountedState/index.js'
export {default as useOnClickOutside} from './useOnClickOutside/index.js'
export {default as useOnScreen, useNearScreen} from './useOnScreen/index.js'
export {
  default as useOrientation,
  orientations
} from './useOrientation/index.js'
export {default as usePrevious} from './usePrevious/index.js'
export {default as useScroll} from './useScroll/index.js'
export {default as useSteps} from './useSteps/index.js'
export {default as useSwipe} from './useSwipe/index.js'
export {default as useToggle} from './useToggle/index.js'
export {default as useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect/index.js'
export {default as useCallbackRef} from './useCallbackRef/index.js'
export {default as usePreCalculatedMediaQuery} from './usePreCalculatedMediaQuery/index.js'
