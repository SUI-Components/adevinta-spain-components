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

const MapArticle = ({apiKey, height, width}) => {
  return (
    <Article>
      <H2>Map</H2>
      <Text>
        Render a map. Toggle between a static map image and a dynamic map using{' '}
        <Code>isInteractive</Code> prop. The dynamic map is a wrapper of{' '}
        <Anchor href="https://react-google-maps-api-docs.netlify.app/#googlemap">
          GoogleMap
        </Anchor>{' '}
        but also loads Google Maps script out of the box. Use{' '}
        <Code>loaderNode</Code> and <Code>errorNode</Code> to optionally display
        loading and error states. All the props defined in the wrapped component
        are also available.
      </Text>

      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <H3>Uncontrolled</H3>

          <Text>Static by default but changes to dynamic when is clicked</Text>

          <MapGoogle apiKey={apiKey} height={height} width={width} />
        </Cell>

        <Cell>
          <H3>Controlled</H3>

          <Text>
            Use <Code>isInteractive</Code> prop to toggle between static and
            dynamic. In this will be always interactive
          </Text>

          <div style={{height, width}}>
            <MapGoogle apiKey={apiKey} isInteractive />
          </div>
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
