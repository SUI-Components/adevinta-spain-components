import MapGoogleImage from 'components/map/google/src/image/index.js'
import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Text} from '@s-ui/documentation-library'

const MapImageArticle = ({apiKey, height, width}) => {
  return (
    <Article>
      <H2>Static image map</H2>
      <Text>Render a static map image</Text>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell></Cell>
        <Cell style={{height}}>
          <MapGoogleImage
            apiKey={apiKey}
            center={{lat: 40.714728, lng: -73.998672}}
            size="900x900"
            zoom="14"
            height={height}
            width={width}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

MapImageArticle.displayName = 'MapImageArticle'
MapImageArticle.propTypes = {
  apiKey: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default MapImageArticle
