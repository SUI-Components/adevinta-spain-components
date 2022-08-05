import {useState} from 'react'

import {useCopyToClipboard} from 'components/react/hooks/src'

import {Button, Cell, Grid, Input, Label} from '@s-ui/documentation-library'

export default function UseCopyToClipboardDemo() {
  const [value, setValue] = useState('')
  const [{value: copyValue, error: copyError}, copyToClipboard] =
    useCopyToClipboard()

  return (
    <Grid cols={7} gutter={[8, 8]}>
      <Cell span={3}>
        <Input
          placeholder="text to copy"
          value={value}
          onChange={event => {
            setValue(event.target.value)
          }}
          fullWidth
          fullHeight
        />
      </Cell>
      <Cell>
        <Button onClick={() => copyToClipboard(value)} fullWidth>
          COPY!
        </Button>
      </Cell>
      <Cell span={3}>
        <Input placeholder="place to paste" fullWidth />
      </Cell>
      <Cell span={7}>
        <Label>Copy state:</Label>{' '}
        {JSON.stringify(
          {error: copyError ? 'true' : 'false', value: copyValue},
          null,
          2
        )}
      </Cell>
    </Grid>
  )
}

UseCopyToClipboardDemo.demoName = 'useCopyToClipboard'
