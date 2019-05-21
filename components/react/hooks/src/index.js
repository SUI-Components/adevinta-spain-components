export default function ReactHooks() {
  console.warn(
    "[@schibstedspain/sui-react-hooks] can't be used as a standalone package.\nYou must import a specific hook."
  )
  return null
}

export {default as useMount} from './useMount'
export {default as useOnScreen, useNearScreen} from './useOnScreen'
