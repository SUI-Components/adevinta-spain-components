import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

import MapGoogleCircle from './circle/index.js'
import MapGoogleDynamic from './dynamic/index.js'
import MapGoogleImage from './image/index.js'
import MapGoogleMarker from './marker/index.js'
import MapGooglePolygon from './polygon/index.js'
import MapGooglePolyline from './polyline/index.js'
import MapGoogleRectangle from './rectangle/index.js'
import {BASE_CLASS, CONTAINER_CLASSNAME, handle} from './config.js'

const MapGoogle = forwardRef(
  (
    {
      // eslint-disable-next-line react/prop-types
      className,
      isInteractive: isInteractiveProp,
      staticImageNode,
      children,
      onClick,
      ...others
    },
    forwardedRef
  ) => {
    const [isInteractive, setIsInteractive] =
      useControlledState(isInteractiveProp)

    const handleClick = event => {
      handle(onClick)(event)

      setIsInteractive(true)
    }

    const Map = isInteractive ? MapGoogleDynamic : MapGoogleImage

    return (
      <div ref={forwardedRef} className={BASE_CLASS} onClick={handleClick}>
        <Map mapContainerClassName={CONTAINER_CLASSNAME} {...others}>
          {isInteractive ? children : staticImageNode}
        </Map>
      </div>
    )
  }
)

MapGoogle.displayName = 'MapGoogle'
MapGoogle.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
  staticImageNode: PropTypes.node,
  zoom: PropTypes.number,
  children: PropTypes.node,
  errorNode: PropTypes.node,
  height: PropTypes.number,
  width: PropTypes.number,
  isInteractive: PropTypes.bool,
  language: PropTypes.string,
  loaderNode: PropTypes.node,
  onClick: PropTypes.func,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onUnmount: PropTypes.func
}

export default MapGoogle

export {
  MapGoogleCircle,
  MapGoogleMarker,
  MapGoogleRectangle,
  MapGoogleImage,
  MapGooglePolygon,
  MapGooglePolyline
}
