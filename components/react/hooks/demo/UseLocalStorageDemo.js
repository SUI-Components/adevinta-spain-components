import {useLocalStorage} from 'components/react/hooks/src'

import {Box, Button, Cell, Grid, Paragraph} from '@s-ui/documentation-library'

export default function UseLocalStorageDemo() {
  const [value1, setValue1] = useLocalStorage('my_favorite_food', '🍖')
  const [value2, setValue2] = useLocalStorage('my_favorite_food', '🧅')

  return (
    <Box>
      <Paragraph>Refresh the page to retrieve your stored value.</Paragraph>
      <Grid cols={2} gutter={2}>
        <Cell span={1}>
          <Box>
            <Paragraph>Stored value: {value1}</Paragraph>
          </Box>
          <Box>
            <Button onClick={() => setValue1('🍕')}>Store a 🍕</Button>
            <Button onClick={() => setValue1('🍔')}>Store a 🍔</Button>
          </Box>
        </Cell>
        <Cell span={1}>
          <Box>
            <Paragraph>Stored value: {value2}</Paragraph>
          </Box>
          <Box>
            <Button onClick={() => setValue2('🥐')}>Store a 🥐</Button>
            <Button onClick={() => setValue2('🥘')}>Store a 🥘</Button>
          </Box>
        </Cell>
      </Grid>
    </Box>
  )
}

UseLocalStorageDemo.demoName = 'useLocalStorage'
