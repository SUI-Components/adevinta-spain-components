import {useBoolean} from 'components/react/hooks/src'

import {Button, Cell, Grid, Label, Strong} from '@s-ui/documentation-library'

export default function UseBooleanDemo() {
  const [value, {toggle, on, off}] = useBoolean()

  return (
    <Grid cols={4} gutter={[8, 8]} style={{maxWidth: 500}}>
      <Cell>
        <Button onClick={toggle} fullWidth>
          Toggle!
        </Button>
      </Cell>
      <Cell>
        <Button onClick={on} fullWidth>
          Turn true!
        </Button>
      </Cell>
      <Cell>
        <Button onClick={off} fullWidth>
          Turn false!
        </Button>
      </Cell>
      <Cell>
        <Label>result:</Label>
        <Strong>{value.toString()}</Strong>
      </Cell>
    </Grid>
  )
}

UseBooleanDemo.demoName = 'useBoolean'
