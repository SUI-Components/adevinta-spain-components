import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'
import Injector from '@s-ui/react-primitive-injector'

import {BASE_URL, DEFAULT_CENTER, defaultChildren} from './config.js'

export default function MapGoogleImage({
  apiKey,
  children = defaultChildren,
  center: {lat, lng} = DEFAULT_CENTER,
  ...others
}) {
  const params = toQueryString({
    ...others,
    key: apiKey,
    center: `${lat},${lng}`
  })
  const src = `${BASE_URL}?${params}`

  return <Injector src={src}>{children}</Injector>
}

MapGoogleImage.displayName = 'MapGoogleImage'
MapGoogleImage.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.shape({lat: PropTypes.number, lng: PropTypes.number}),
  children: PropTypes.node
}
