import {useState} from 'react'

import {H1} from '@s-ui/documentation-library'

import MapArticle from './articles/MapArticle.js'
import MapImageArticle from './articles/MapImageArticle.js'
import {Box, Input} from '@s-ui/documentation-library'

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

      <MapArticle apiKey={apiKey} />
      <MapImageArticle apiKey={apiKey} />
    </div>
  )
}
