import React from 'react'
import PropTypes from 'prop-types'

import ExperimentContext from './experiment-context'
import ExperimentProviderOnly from './experiment-provider-only'
import ExperimentProviderAndCore from './experiment-provider-and-core'

function AbTestOptimizelyXExperiment(props) {
  // provides data to the context from an already running experiment
  if (props.experimentData) return <ExperimentProviderOnly {...props} />

  // provides data to the context while internally running an experiment
  return <ExperimentProviderAndCore {...props} />
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  children: PropTypes.any.isRequired,
  experimentData: PropTypes.object
}

export default AbTestOptimizelyXExperiment
export {ExperimentContext}
