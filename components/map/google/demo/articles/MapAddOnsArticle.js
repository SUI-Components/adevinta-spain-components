import MapGoogle, {MapGoogleMarker} from 'components/map/google/src/index.js'
import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Cell,
  Grid,
  H2,
  H3,
  ListItem,
  Text,
  UnorderedList
} from '@s-ui/documentation-library'
import {MapGoogleInfoWindow} from '../../src/index.js'

const MapAddOnsArticle = ({apiKey}) => {
  const handleDragEnd = center => {
    const {latLng} = center
    const latitude = latLng.lat()
    const longitude = latLng.lng()

    console.log({latitude, longitude})
  }

  return (
    <Article>
      <H2>Add-ons</H2>
      <Text>
        Render a set of add-ons on the dynamic map setting the following
        components as children of `MapGoogle`.
      </Text>
      <UnorderedList>
        <ListItem>
          <Anchor href="https://react-google-maps-api-docs.netlify.app/#marker">
            Marker
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="https://react-google-maps-api-docs.netlify.app/#circle">
            Circle
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="https://react-google-maps-api-docs.netlify.app/#polygon">
            Polygon
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="https://react-google-maps-api-docs.netlify.app/#polyline">
            Polyline
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="https://react-google-maps-api-docs.netlify.app/#rectangle">
            Rectangle
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="https://react-google-maps-api-docs.netlify.app/#infowindow">
            InfoWindow
          </Anchor>
        </ListItem>
      </UnorderedList>

      <H3>Marker</H3>
      <Text>A marker identifies a location on a map.</Text>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{width: 600, height: 600}}>
          <MapGoogle apiKey={apiKey} center={{lat: 42, lng: 2}} isInteractive>
            <MapGoogleMarker
              position={{lat: 42, lng: 2}}
              onDragEnd={handleDragEnd}
              draggable
            />
          </MapGoogle>
        </Cell>
      </Grid>
      <H3>InfoWindow</H3>
      <Text>
        An InfoWindow displays content (usually text or images) in a popup
        window above the map, at a given location.
      </Text>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{width: 600, height: 600}}>
          <MapGoogle
            apiKey={apiKey}
            center={{lat: 42, lng: 2}}
            isInteractive
            zoom={14}
          >
            <MapGoogleInfoWindow position={{lat: 42, lng: 2}}>
              <div>This is an InfoWindow</div>
            </MapGoogleInfoWindow>
          </MapGoogle>
        </Cell>
      </Grid>
    </Article>
  )
}

MapAddOnsArticle.displayName = 'MapAddOnsArticle'
MapAddOnsArticle.propTypes = {
  apiKey: PropTypes.string
}

export default MapAddOnsArticle
