import {useContext} from 'react'
import {getExperimentContext as getExperimentContextFromPackage} from '@s-ui/abtesting-optimizely-x'
import useExperimentCore from '../useExperimentCore'

// Fallback object in case the hook is used in some point of the hierarchy
// that is not wrapped by OptimizelyXExperiment component (which is the
// provider of the actual context). This way we mainly avoid trying to access
// properties from undefined when no experiment context is present.
const NON_WRAPPED_BY_CONTEXT_PROVIDER_FALLBACK_OBJECT = {
  isDefault: true,
  isWrapped: false
}

export default (params = {}) => {
  const isCoreRunner = params.experimentId

  // ACT AS AN EXPERIMENT CORE RUNNER
  // - if the required params are passed, run a new experiment here
  if (isCoreRunner) {
    const {experimentData} = useExperimentCore(params)
    return experimentData
  }

  // ACT AS AN EXPERIMENT CONTEXT CONSUMER
  // - return data from the context of an already running experiment
  const {getExperimentContext} = params
  const contextGetter = getExperimentContext || getExperimentContextFromPackage
  const experimentName = typeof params === 'string' ? params : params.name
  const ExperimentContext = contextGetter(experimentName)
  const experimentData =
    useContext(ExperimentContext) ||
    NON_WRAPPED_BY_CONTEXT_PROVIDER_FALLBACK_OBJECT
  return experimentData
}
