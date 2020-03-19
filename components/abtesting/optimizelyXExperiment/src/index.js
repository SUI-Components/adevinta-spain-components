import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import ExperimentContext from './experiment-context'
import ExperimentProviderOnly from './experiment-provider-only'
import ExperimentProviderAndCore from './experiment-provider-and-core'

function AbTestOptimizelyXExperiment(props) {
  // ACT AS AN EXPERIMENT CONTEXT PROVIDER ONLY
  // - feeds from an external experiment and provides data from it to the context
  const {feed} = props
  if (feed) return <ExperimentProviderOnly {...props} experimentData={feed} />

  // ACT AS AN EXPERIMENT CORE RUNNER AND CONTEXT PROVIDER
  // - internally runs the experiment and provides data from it to the context
  return <ExperimentProviderAndCore {...props} />
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  children: PropTypes.any.isRequired,
  feed: PropTypes.object
}

const EmptyVariation = props => <Fragment {...props} />

EmptyVariation.propTypes = {
  defaultVariation: PropTypes.bool,
  variationId: PropTypes.number.isRequired
}

export default AbTestOptimizelyXExperiment
export {EmptyVariation, ExperimentContext}
