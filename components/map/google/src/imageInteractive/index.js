import PropTypes from 'prop-types'

import MapGoogleImage from '../image/index.js'

function MapGoogleImageInteractive({isInteractive, ...others}) {
  /*
   * If this component is used inside the Map/Google component
   * and receives the isInteractive prop as true,
   * then it should not render the static map
   */
  if (isInteractive) return

  return <MapGoogleImage {...others} />
}

MapGoogleImageInteractive.displayName = 'MapGoogleImageInteractive'
MapGoogleImageInteractive.propTypes = {
  isInteractive: PropTypes.bool.isRequired
}

export default MapGoogleImageInteractive
