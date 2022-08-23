import MapGoogle from 'components/map/google/src/index.js'
import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Text} from '@s-ui/documentation-library'

const MapDynamicArticle = ({apiKey, isInteractive}) => {
  return (
    <Article>
      <H2>Dynamic map</H2>
      <Text>Render a dynamic map</Text>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell></Cell>
        <Cell style={{height: '600px', width: '600px'}}>
          <MapGoogle apiKey={apiKey} isInteractive={isInteractive} />
        </Cell>
      </Grid>
    </Article>
  )
}

MapDynamicArticle.displayName = 'MapDynamicArticle'
MapDynamicArticle.propTypes = {
  apiKey: PropTypes.string,
  isInteractive: PropTypes.bool
}

export default MapDynamicArticle
