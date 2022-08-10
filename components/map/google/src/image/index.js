import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'
import Injector from '@s-ui/react-primitive-injector'

import {
  BASE_URL,
  DEFAULT_CENTER,
  DEFAULT_CHILDREN_ALT,
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH
} from './config.js'

function MapGoogleImage({
  alt = DEFAULT_CHILDREN_ALT,
  apiKey,
  center: {lat, lng} = DEFAULT_CENTER,
  children = <img />,
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  ...others
}) {
  const params = toQueryString({
    ...others,
    key: apiKey,
    center: `${lat},${lng}`
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
  center: PropTypes.shape({lat: PropTypes.number, lng: PropTypes.number}),
  children: PropTypes.node,
  height: PropTypes.number,
  width: PropTypes.number
}

export default MapGoogleImage
