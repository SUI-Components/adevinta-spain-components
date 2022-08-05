import {toQueryString} from '@s-ui/js/lib/string'
import PropTypes from 'prop-types'

export default function MapGoogleImage({apiKey, children, ...others}) {
  const baseURL = 'https://maps.googleapis.com/maps/api/staticmap'
  const params = toQueryString({
    ...others,
    key: apiKey
  })
  const src = `${baseURL}?${params}`

  return children({src})
}

MapGoogleImage.displayName = 'MapGoogleImage'
MapGoogleImage.propTypes = {
  apiKey: PropTypes.string.isRequired
}
