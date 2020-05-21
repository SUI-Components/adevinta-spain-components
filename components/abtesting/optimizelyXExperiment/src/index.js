import React from 'react'
import PropTypes from 'prop-types'

import {getExperimentContext} from './context'
import ExperimentProviderOnly from './experiment-provider-only'
import ExperimentProviderAndCore from './experiment-provider-and-core'

function AbTestOptimizelyXExperiment(props) {
  const isProviderOnly = !!props.feed
  const experimentData = isProviderOnly ? props.feed : props

  // ACT AS AN EXPERIMENT CONTEXT PROVIDER ONLY
  // - feeds from an external experiment and provides data from it to the context
  if (isProviderOnly)
    return <ExperimentProviderOnly {...props} experimentData={experimentData} />

  // ACT AS AN EXPERIMENT CORE RUNNER AND CONTEXT PROVIDER
  // - internally runs the experiment and provides data from it to the context
  return <ExperimentProviderAndCore {...experimentData} />
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  children: PropTypes.any.isRequired,
  feed: PropTypes.object
}

const EmptyVariation = props => null

EmptyVariation.propTypes = {
  defaultVariation: PropTypes.bool,
  variationId: PropTypes.number.isRequired
}

export default AbTestOptimizelyXExperiment
export {EmptyVariation, getExperimentContext}
