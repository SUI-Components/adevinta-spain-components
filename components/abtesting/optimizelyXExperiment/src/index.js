import React from 'react'
import PropTypes from 'prop-types'

import ExperimentContext from './experiment-context'
import ExperimentProviderOnly from './experiment-provider-only'
import ExperimentProviderAndCore from './experiment-provider-and-core'

function AbTestOptimizelyXExperiment(props) {
  // ACT AS AN EXPERIMENT CONTEXT PROVIDER ONLY
  // - feeds from an external experiment and provides data from it to the context
  if (props.experimentData) return <ExperimentProviderOnly {...props} />

  // ACT AS AN EXPERIMENT CORE RUNNER AND CONTEXT PROVIDER
  // - internally runs the experiment and provides data from it to the context
  return <ExperimentProviderAndCore {...props} />
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  children: PropTypes.any.isRequired,
  experimentData: PropTypes.object
}

export default AbTestOptimizelyXExperiment
export {ExperimentContext}
