import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'
import Injector from '@s-ui/react-primitive-injector'

import {
  BASE_URL,
  DEFAULT_CENTER,
  DEFAULT_CHILDREN_ALT,
  DEFAULT_ZOOM
} from './config.js'

function MapGoogleImage({
  alt = DEFAULT_CHILDREN_ALT,
  center: {lat, lng} = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
  apiKey,
  children = <img />,
  height,
  size,
  width,
  ...others
}) {
  if (height === undefined || width === undefined) {
    throw new Error('Height and Width are mandatory in static map')
  }

  const params = toQueryString({
    ...others,
    zoom,
    key: apiKey,
    center: `${lat},${lng}`,
    size: size ?? `${width}x${height}`
  })
  const src = `${BASE_URL}?${params}`

  return (
    <Injector src={src} alt={alt} width={width} height={height}>
      {children}
    </Injector>
  )
}

MapGoogleImage.displayName = 'MapGoogleImage'
MapGoogleImage.propTypes = {
  alt: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  center: PropTypes.shape({lat: PropTypes.number, lng: PropTypes.number}),
  size: PropTypes.string,
  zoom: PropTypes.number,
  children: PropTypes.node
}

export default MapGoogleImage
