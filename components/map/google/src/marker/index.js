import {Marker} from '@react-google-maps/api'

export default function MapGoogleMarker(props) {
  return <Marker {...props} />
}

MapGoogleMarker.displayName = 'MapGoogleMarker'
