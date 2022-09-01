import MapGoogle from 'components/map/google/src/index.js'
import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  H3,
  Text
} from '@s-ui/documentation-library'

const MapCustomUIArticle = ({apiKey}) => {
  const mapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false
  }

  return (
    <Article>
      <H2>Custom UI</H2>
      <Text>
        It is possible to customize the controls that the user sees. You can
        hide the controls that the map has by default, and control it through
        functions that the library exposes.
      </Text>
      <Anchor href="developers.google.com/maps/documentation/javascript/reference/map#MapOptions">
        documentation
      </Anchor>
      <H3>Map only with zoom control</H3>
      <Text>
        In this case the <Code>fullscreenControl</Code>,{' '}
        <Code>mapTypeControl</Code> and <Code>streetViewControl</Code> controls
        were removed.
      </Text>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{width: 600, height: 600}}>
          <MapGoogle
            apiKey={apiKey}
            center={{lat: 42, lng: 2}}
            isInteractive
            options={mapOptions}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

MapCustomUIArticle.displayName = 'MapCustomUIArticle'
MapCustomUIArticle.propTypes = {
  apiKey: PropTypes.string
}

export default MapCustomUIArticle
