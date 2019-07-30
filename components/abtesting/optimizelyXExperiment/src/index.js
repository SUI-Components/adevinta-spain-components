/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import useExperimentCore from '../../hooks/src/useExperimentCore'

import experimentPropsMapper from './experiment-props-mapper'
import ExperimentContext from './experiment-context'

function AbTestOptimizelyXExperiment(props) {
  // provide data of an already running experiment to the context
  if (props.experimentData) {
    return (
      <ExperimentContext.Provider value={props.experimentData}>
        {props.children}
      </ExperimentContext.Provider>
    )
  }

  // run a new experiment
  return <ExperimentFromCore {...props} />
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  children: PropTypes.any.isRequired,
  experimentData: PropTypes.object
}

function ExperimentFromCore(props) {
  const experimentParams = experimentPropsMapper(props)
  const {experimentData: experimentDataFromCore} = useExperimentCore(
    experimentParams
  )
  return (
    <ExperimentContext.Provider value={experimentDataFromCore}>
      <AbTestToggle variation={experimentDataFromCore.variationId}>
        {props.children}
      </AbTestToggle>
    </ExperimentContext.Provider>
  )
}

ExperimentFromCore.propTypes = {
  children: PropTypes.any.isRequired
}

export default AbTestOptimizelyXExperiment
export {ExperimentContext}
