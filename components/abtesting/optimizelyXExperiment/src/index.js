/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import ExperimentContext from './experiment-context'
import useExperimentCore from '../../hooks/src/useExperimentCore'

function AbTestOptimizelyXExperiment(props) {
  const {children, ...propsWithoutChildren} = props
  const {experimentData} = useExperimentCore({
    ...propsWithoutChildren,
    variations: children.map(child => ({
      id: child.props.variationId,
      name: child.props.variationName,
      isDefault: child.props.defaultVariation
    }))
  })

  return (
    /**
     * FYI: About why using just `value={state}` instead of a new object.
     * @see https://en.reactjs.org/docs/context.html#caveats
     */
    <ExperimentContext.Provider value={experimentData}>
      <AbTestToggle variation={experimentData.variationId}>
        {children}
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
