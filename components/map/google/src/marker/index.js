import {Marker} from '@react-google-maps/api'

function MapGoogleMarker(props) {
  return <Marker {...props} />
}

MapGoogleMarker.displayName = 'MapGoogleMarker'

export default MapGoogleMarker
