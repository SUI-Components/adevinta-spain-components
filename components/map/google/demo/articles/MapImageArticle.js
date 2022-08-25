import MapGoogleImage from 'components/map/google/src/image/index.js'
import PropTypes from 'prop-types'

import {
  Anchor,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Text
} from '@s-ui/documentation-library'

const MapImageArticle = ({apiKey, height, width}) => {
  return (
    <Article>
      <H2>Static image map</H2>
      <Text>
        Render a static map image. Similar to <Code>MapGoogle</Code> it requires
        the
        <Code>apiKey</Code> prop. The rest of the props are the parameters
        defined in the Maps Static API{' '}
        <Anchor href="https://developers.google.com/maps/documentation/maps-static/start">
          documentation
        </Anchor>{' '}
        (e.g. <Code>center</Code> and <Code>zoom</Code>).
      </Text>

      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{height}}>
          <MapGoogleImage
            apiKey={apiKey}
            center={{lat: 40.714728, lng: -73.998672}}
            size="600x600"
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
