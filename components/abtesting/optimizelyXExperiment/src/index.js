/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import useExperimentCore from '../../hooks/src/useExperimentCore'

import experimentPropsMapper from './experiment-props-mapper'
import ExperimentContext from './experiment-context'

function AbTestOptimizelyXExperiment(props) {
  const {experimentData} = useExperimentCore(experimentPropsMapper(props))
  return (
    <ExperimentContext.Provider value={experimentData}>
      <AbTestToggle variation={experimentData.variationId}>
        {props.children}
      </AbTestToggle>
    </ExperimentContext.Provider>
  )
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  /**
   * Set of variations identified by `variationId` prop.
   * `defaultVariation` defines the fallback variation to show in case none is defined.
   */
  children: PropTypes.any.isRequired
}

export default AbTestOptimizelyXExperiment
export {ExperimentContext}
