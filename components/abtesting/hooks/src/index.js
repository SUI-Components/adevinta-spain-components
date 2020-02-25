export default function ReactHooks() {
  /* eslint-disable-next-line no-console */
  console.warn(
    "[@s-ui/react-abtesting-hooks] can't be used as a standalone package.\nYou must import a specific hook."
  )
  return null
}

export {default as useExperiment} from './useExperiment'
export {default as useExperimentCore} from './useExperimentCore'
