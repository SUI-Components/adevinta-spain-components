import {useState} from 'react'

import MapGoogle from 'components/map/google/src/index.js'
import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Input} from '@s-ui/documentation-library'

import {Loader} from '../config.js'

const DefaultArticle = ({className}) => {
  const [value, setValue] = useState('')
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Input
            value={value}
            onChange={event => setValue(event.target.value)}
            fullWidth
          />
        </Cell>
        <Cell style={{height: 600}}>
          <MapGoogle apiKey={value} loaderNode={<Loader />} />
        </Cell>
      </Grid>
    </Article>
  )
}

DefaultArticle.displayName = ' DefaultArticle'

DefaultArticle.propTypes = {
  className: PropTypes.string
}

export default DefaultArticle
