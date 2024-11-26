import {useCallback} from 'react'

import PropTypes from 'prop-types'

import {GoogleMap as DynamicMap, useLoadScript} from '@react-google-maps/api'

import AtomSkeleton from '@s-ui/react-atom-skeleton'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

import MapGoogleCircle from './circle/index.js'
import MapGoogleDrawer from './drawer/index.js'
import StaticMap from './image/index.js'
import MapGoogleInfoWindow from './infoWindow/index.js'
import MapGoogleMarker from './marker/index.js'
import MapGooglePolygon from './polygon/index.js'
import MapGooglePolyline from './polyline/index.js'
import MapGoogleRectangle from './rectangle/index.js'
import {
  BASE_CLASS,
  CONTAINER_CLASSNAME,
  DEFAULT_CENTER,
  DEFAULT_LANGUAGE,
  DEFAULT_ZOOM,
  getDefaultMapSize,
  handle
} from './config.js'

function MapGoogle({
  apiKey,
  center = DEFAULT_CENTER,
  children,
  errorNode,
  height,
  isInteractive: isInteractiveProp,
  language = DEFAULT_LANGUAGE,
  loaderNode,
  mapIds,
  onError,
  onLoad,
  onUnmount,
  signedUrl,
  staticImageNode,
  width,
  zoom = DEFAULT_ZOOM,
  ...others
}) {
  const [isInteractive, setIsInteractive] = useControlledState(isInteractiveProp)

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: apiKey,
    language,
    mapIds
  })

  const handleOnLoad = useCallback(
    mapInstance => {
      handle(onLoad)(mapInstance)
    },
    [onLoad]
  )

  const handleClick = useCallback(() => {
    setIsInteractive(true)
  }, [setIsInteractive])

  if (loadError) {
    return errorNode ? <div className={BASE_CLASS}>{errorNode}</div> : null
  }

  const MapElement = isInteractive ? DynamicMap : StaticMap

  const mapSize = getDefaultMapSize({height, width})

  return (
    <div className={BASE_CLASS} onClick={handleClick}>
      {isLoaded ? (
        <div style={mapSize}>
          <MapElement
            apiKey={apiKey}
            center={center}
            height={height}
            isInteractive={isInteractive}
            mapContainerClassName={CONTAINER_CLASSNAME}
            onError={onError}
            onLoad={handleOnLoad}
            onUnmount={onUnmount}
            width={width}
            zoom={zoom}
            signedUrl={signedUrl}
            {...others}
          >
            {isInteractive ? children : staticImageNode}
          </MapElement>
        </div>
      ) : (
        loaderNode || <AtomSkeleton {...mapSize} />
      )}
    </div>
  )
}

MapGoogle.displayName = 'MapGoogle'
MapGoogle.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
  children: PropTypes.node,
  errorNode: PropTypes.node,
  height: PropTypes.number,
  isInteractive: PropTypes.bool,
  language: PropTypes.string,
  loaderNode: PropTypes.node,
  mapIds: PropTypes.array,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onUnmount: PropTypes.func,
  signedUrl: PropTypes.string,
  staticImageNode: PropTypes.node,
  width: PropTypes.number,
  zoom: PropTypes.number
}

export default MapGoogle

export {
  MapGoogleCircle,
  MapGoogleDrawer,
  MapGoogleMarker,
  MapGoogleRectangle,
  StaticMap as MapGoogleImage,
  MapGooglePolygon,
  MapGooglePolyline,
  MapGoogleInfoWindow
}
