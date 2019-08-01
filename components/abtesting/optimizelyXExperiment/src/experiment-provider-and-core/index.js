import React from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import useExperimentCore from '../../../hooks/src/useExperimentCore'
import ExperimentProviderOnly from '../experiment-provider-only'

import experimentPropsMapper from './experiment-props-mapper'

function ExperimentProviderAndCore(props) {
  const experimentParams = experimentPropsMapper(props)
  const {experimentData: experimentDataFromCore} = useExperimentCore(
    experimentParams
  )
  return (
    <ExperimentProviderOnly experimentData={experimentDataFromCore}>
      <AbTestToggle variation={experimentDataFromCore.variationId}>
        {props.children}
      </AbTestToggle>
    </ExperimentProviderOnly>
  )
}

ExperimentProviderAndCore.propTypes = {
  children: PropTypes.any.isRequired
}

export default ExperimentProviderAndCore
