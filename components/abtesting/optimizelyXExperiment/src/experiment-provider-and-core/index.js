import React from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import {useExperimentCore as useExperimentCoreFromPackage} from '@s-ui/abtesting-hooks'
import ExperimentProviderOnly from '../experiment-provider-only'

import experimentPropsMapper from './experiment-props-mapper'

function ExperimentProviderAndCore(props) {
  const {deps, children} = props

  const useExperimentCore =
    (deps && deps.useExperimentCore) || useExperimentCoreFromPackage

  const experimentParams = experimentPropsMapper(props)
  const {experimentData: experimentDataFromCore} = useExperimentCore(
    experimentParams
  )
  return (
    <ExperimentProviderOnly experimentData={experimentDataFromCore}>
      <AbTestToggle variation={experimentDataFromCore.variationId}>
        {children}
      </AbTestToggle>
    </ExperimentProviderOnly>
  )
}

ExperimentProviderAndCore.propTypes = {
  children: PropTypes.any.isRequired,
  deps: PropTypes.object
}

export default ExperimentProviderAndCore
