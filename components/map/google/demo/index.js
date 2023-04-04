import {useState} from 'react'

import {
  Anchor,
  Box,
  Code,
  H1,
  H3,
  Input,
  ListItem,
  Text,
  UnorderedList
} from '@s-ui/documentation-library'

import MapAddOnsArticle from './articles/MapAddOnsArticle.js'
import MapArticle from './articles/MapArticle.js'
import MapCustomUIArticle from './articles/MapCustomUIArticle.js'
import MapDrawerArticle from './articles/MapDrawerArticle.js'
import MapImageArticle from './articles/MapImageArticle.js'

const className = 'DemoMapGoogle'

export default () => {
  const [apiKey, setApiKey] = useState('')

  return (
    <div className={className}>
      <H1>MapGoogle</H1>
      <Text>
        The map is a wrapper of <Code>react-google-map/api</Code> but also loads
        Google Maps script out of the box. Use <Code>loaderNode</Code> and{' '}
        <Code>errorNode</Code> to optionally display loading and error states.
        All the props defined in the wrapped component are also available.
      </Text>

      <H3>External documentation</H3>
      <UnorderedList>
        <ListItem>
          <Anchor href="https://developers.google.com/maps/documentation/javascript/reference/map">
            Google Maps API
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="https://react-google-maps-api-docs.netlify.app/#googlemap">
            ReactGoogleMap/Api
          </Anchor>{' '}
        </ListItem>
      </UnorderedList>

      <Box>
        <label htmlFor="key" className={`${className}-label`}>
          Enter your API key to see the examples
        </label>
        <Input
          id="key"
          value={apiKey}
          onChange={event => setApiKey(event.target.value)}
        />
      </Box>

      <MapArticle
        apiKey={apiKey}
        key={`${apiKey}-MapArticle`}
        height={600}
        width={600}
      />

      <MapImageArticle apiKey={apiKey} height={600} width={600} />

      <MapAddOnsArticle apiKey={apiKey} key={`${apiKey}-MapAddOnsArticle`} />

      <MapCustomUIArticle
        apiKey={apiKey}
        key={`${apiKey}-MapCustomUIArticle`}
        height={600}
        width={600}
      />

      <MapDrawerArticle
        apiKey={apiKey}
        height={600}
        width={600}
        key={`${apiKey}-MapDrawerArticle`}
      />
    </div>
  )
}
