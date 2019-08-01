import React from 'react'
import PropTypes from 'prop-types'

import ExperimentContext from '../experiment-context'

function ExperimentProviderOnly({children, experimentData}) {
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
