import {useCallback} from 'react'

import PropTypes from 'prop-types'

import {GoogleMap, useLoadScript} from '@react-google-maps/api'

import AtomSkeleton from '@s-ui/react-atom-skeleton'

import {
  CONTAINER_CLASSNAME,
  DEFAULT_CENTER,
  DEFAULT_LANGUAGE,
  DEFAULT_ZOOM,
  getDefaultMapSize,
  handle
} from '../config.js'

function MapGoogleDynamic({
  apiKey,
  center = DEFAULT_CENTER,
  language = DEFAULT_LANGUAGE,
  zoom = DEFAULT_ZOOM,
  height,
  width,
  isInteractive: isInteractiveProp,
  loaderNode,
  errorNode,
  staticImageNode,
  onError,
  onLoad,
  onUnmount,
  ...others
}) {
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
    return errorNode
  }

  const mapSize = getDefaultMapSize({height, width})

  return (
    <>
      {isLoaded ? (
        <div style={mapSize}>
          <GoogleMap
            apiKey={apiKey}
            center={center}
            height={height}
            mapContainerClassName={CONTAINER_CLASSNAME}
            onError={onError}
            onLoad={handleOnLoad}
            onUnmount={onUnmount}
            width={width}
            zoom={zoom}
            {...others}
          />
        </div>
      ) : (
        loaderNode || <AtomSkeleton {...mapSize} />
      )}
    </>
  )
}

MapGoogleDynamic.displayName = 'MapGoogleDynamic'
MapGoogleDynamic.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
  children: PropTypes.node,
  errorNode: PropTypes.node,
  height: PropTypes.number,
  width: PropTypes.number,
  isInteractive: PropTypes.bool,
  language: PropTypes.string,
  loaderNode: PropTypes.node,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onUnmount: PropTypes.func,
  staticImageNode: PropTypes.node,
  zoom: PropTypes.number
}

export default MapGoogleDynamic
