import React from 'react'

import OptimizelyXExperiment from '../../../../components/abtesting/optimizelyXExperiment/src'
import NiceComponent from './nice-component'

export default () => {
  return (
    <OptimizelyXExperiment experimentId={8470306415}>
      <NiceComponent variationId={8463707014} defaultVariation />
      <NiceComponent variationId={8480321136} />
    </OptimizelyXExperiment>
  )
}
