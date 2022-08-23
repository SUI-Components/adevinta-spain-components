import MapGoogle from 'components/map/google/src/index.js'
import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Text} from '@s-ui/documentation-library'

const MapArticle = ({apiKey, height, width}) => {
  return (
    <Article>
      <H2>Static/Dynamic Map</H2>
      <Text>Render a static/dynamic map</Text>
      <Text>Click to switch from static to dynamic mode</Text>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell></Cell>
        <Cell style={{height, width}}>
          <MapGoogle apiKey={apiKey} height={height} width={width} />
        </Cell>
      </Grid>
    </Article>
  )
}

MapArticle.displayName = 'MapArticle'
MapArticle.propTypes = {
  apiKey: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default MapArticle
