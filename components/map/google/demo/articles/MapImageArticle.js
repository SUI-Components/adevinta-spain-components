import MapGoogleImage from 'components/map/google/src/image/index.js'

import PropTypes from 'prop-types'
import {Article, Cell, Grid, H2, Text} from '@s-ui/documentation-library'

const MapArticle = ({apiKey}) => {
  return (
    <Article>
      <H2>Static image map</H2>
      <Text>Render a static map image</Text>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell></Cell>
        <Cell style={{height: 600}}>
          <MapGoogleImage
            apiKey={apiKey}
            center="40.714728,-73.998672"
            size="600x600"
          >
            {({src}) => <img alt="Map" src={src} width="600" height="600" />}
          </MapGoogleImage>
        </Cell>
      </Grid>
    </Article>
  )
}

MapArticle.displayName = 'MapArticle'
MapArticle.propTypes = {
  apiKey: PropTypes.string
}

export default MapArticle
