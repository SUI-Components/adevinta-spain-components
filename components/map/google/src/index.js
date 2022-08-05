import PropTypes from 'prop-types'

import {GoogleMap, useLoadScript} from '@react-google-maps/api'

const baseClass = 'sui-MapGoogle'

export default function MapGoogle({
  apiKey,
  center = {lat: 40.416775, lng: -3.70379},
  language = 'es',
  zoom = 7,
  errorNode,
  loaderNode,
  ...others
}) {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: apiKey,
    language
  })

  if (loadError) {
    return errorNode ? <div className={baseClass}>{errorNode}</div> : null
  }

  return (
    <div className={baseClass}>
      {isLoaded ? (
        <GoogleMap
          center={center}
          mapContainerClassName={`${baseClass}-Container`}
          zoom={zoom}
          {...others}
        />
      ) : (
        loaderNode
      )}
    </div>
  )
}

MapGoogle.displayName = 'MapGoogle'
MapGoogle.propTypes = {
  apiKey: PropTypes.string.isRequired,
  language: PropTypes.string,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
  zoom: PropTypes.number,
  loaderNode: PropTypes.node,
  errorNode: PropTypes.node
}
