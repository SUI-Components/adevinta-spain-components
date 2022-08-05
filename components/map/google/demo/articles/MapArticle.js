import MapGoogle from 'components/map/google/src/index.js'

import {Article, Cell, Grid, H2, Text} from '@s-ui/documentation-library'

const MapArticle = ({apiKey}) => {
  return (
    <Article>
      <H2>Dynamic map</H2>
      <Text>Render a dynamic map</Text>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell></Cell>
        <Cell style={{height: 600}}>
          <MapGoogle apiKey={apiKey} />
        </Cell>
      </Grid>
    </Article>
  )
}

MapArticle.displayName = 'MapArticle'

export default MapArticle
