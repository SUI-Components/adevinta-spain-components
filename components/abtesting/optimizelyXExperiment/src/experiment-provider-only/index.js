import React from 'react'
import PropTypes from 'prop-types'

import {getExperimentContext} from '../context'

function ExperimentProviderOnly({children, experimentData}) {
  const ExperimentContext = getExperimentContext(experimentData.name)
  return (
    <ExperimentContext.Provider value={experimentData}>
      {children}
    </ExperimentContext.Provider>
  )
}

ExperimentProviderOnly.propTypes = {
  children: PropTypes.any.isRequired,
  experimentData: PropTypes.object
}

export default ExperimentProviderOnly
