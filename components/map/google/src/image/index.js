import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'
import Injector from '@s-ui/react-primitive-injector'

import {BASE_URL, DEFAULT_CENTER, DEFAULT_CHILDREN_ALT} from './config.js'

function MapGoogleImage({
  alt = DEFAULT_CHILDREN_ALT,
  apiKey,
  center: {lat, lng} = DEFAULT_CENTER,
  children = <img />,
  height,
  size,
  width,
  signedUrl,
  ...others
}) {
  if (!height || !width) {
    throw new Error('Height and Width are mandatory in static map')
  }

  const params = toQueryString({
    ...others,
    key: apiKey,
    center: `${lat},${lng}`,
    size: size ?? `${width}x${height}`
  })
  const src = signedUrl || `${BASE_URL}?${params}`

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
  center: PropTypes.shape({lat: PropTypes.number, lng: PropTypes.number}),
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  size: PropTypes.string,
  width: PropTypes.number.isRequired,
  signedUrl: PropTypes.string
}

export default MapGoogleImage
