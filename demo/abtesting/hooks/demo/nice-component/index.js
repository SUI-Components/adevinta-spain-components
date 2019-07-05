import React from 'react'

import {useExperiment} from '../../../../../components/abtesting/hooks/src'

const NiceComponent = () => {
  const experimentData = useExperiment()
  const jsonExperimentData = JSON.stringify(experimentData, null, 2)

  return (
    <div>
      <h2>In NiceComponent</h2>
      <h3>Data from useExperiment() hook</h3>
      <pre>{jsonExperimentData}</pre>
    </div>
  )
}

export default NiceComponent
