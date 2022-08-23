import {useState} from 'react'

import {Box, H1, Input} from '@s-ui/documentation-library'

import MapArticle from './articles/MapArticle.js'
import MapDynamicArticle from './articles/MapDynamicArticle.js'
import MapImageArticle from './articles/MapImageArticle.js'

const className = 'DemoMapGoogle'

export default () => {
  const [apiKey, setApiKey] = useState('')

  return (
    <div className={className}>
      <H1>MapGoogle</H1>

      <Box>
        <label htmlFor="key" className={`${className}-label`}>
          API Key
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
      <MapDynamicArticle
        apiKey={apiKey}
        key={`${apiKey}-MapDynamicArticle`}
        isInteractive
      />
      <MapImageArticle apiKey={apiKey} height={600} width={600} />
    </div>
  )
}
