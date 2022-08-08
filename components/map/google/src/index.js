import {useCallback} from 'react'
import PropTypes from 'prop-types'

import {GoogleMap as DinamicMap, useLoadScript} from '@react-google-maps/api'
import StaticMap from './image'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {
  BASE_CLASS,
  CONTAINER_CLASSNAME,
  DEFAULT_CENTER,
  DEFAULT_LANGUAGE,
  DEFAULT_ZOOM,
  handle
} from './config.js'

export default function MapGoogle({
  apiKey,
  center = DEFAULT_CENTER,
  language = DEFAULT_LANGUAGE,
  zoom = DEFAULT_ZOOM,
  errorNode,
  loaderNode,
  onLoad,
  onError,
  onUnmount,
  isInteractive: isInteractiveProp,
  ...others
}) {
  const [isInteractive, setIsInteractive] =
    useControlledState(isInteractiveProp)

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: apiKey,
    language
  })

  const handleOnLoad = useCallback(
    mapInstance => {
      handle(onLoad)(mapInstance)
    },
    [onLoad]
  )

  if (loadError) {
    return errorNode ? <div className={BASE_CLASS}>{errorNode}</div> : null
  }

  const handleClick = event => {
    setIsInteractive(true)
  }

  const MapElement = isInteractive ? DinamicMap : StaticMap

  return (
    <div className={BASE_CLASS} onClick={handleClick}>
      {isLoaded ? (
        <MapElement
          center={center}
          mapContainerClassName={CONTAINER_CLASSNAME}
          zoom={zoom}
          onLoad={handleOnLoad}
          onError={onError}
          onUnmount={onUnmount}
          apiKey={apiKey}
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
  errorNode: PropTypes.node,
  onLoad: PropTypes.func,
  onUnmount: PropTypes.func,
  onError: PropTypes.func,
  isInteractive: PropTypes.bool
}
