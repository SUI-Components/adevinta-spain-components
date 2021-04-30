import {Input, Grid, Cell, Label} from '@s-ui/documentation-library'

import {useSetState} from '../../../../components/react/hooks/src'

const updater = (key, updater) => event => {
  updater({[key]: event.target.value})
}

export default function UseSetStateDemo() {
  const [{input1, input2, input3, input4}, setState] = useSetState({
    input1: 'input1',
    input2: 'input2',
    input3: 'input3',
    input4: 'input4'
  })

  return (
    <Grid cols={4} gutter={[8, 8]}>
      <Cell>
        <Input
          onChange={updater('input1', setState)}
          value={input1}
          fullWidth
        />
      </Cell>
      <Cell>
        <Input
          onChange={updater('input2', setState)}
          value={input2}
          fullWidth
        />
      </Cell>
      <Cell>
        <Input
          onChange={updater('input3', setState)}
          value={input3}
          fullWidth
        />
      </Cell>
      <Cell>
        <Input
          onChange={updater('input4', setState)}
          value={input4}
          fullWidth
        />
      </Cell>
      <Cell span={4}>
        <Label>state value:</Label>{' '}
        {JSON.stringify({input1, input2, input3, input4}, null, 2)}
      </Cell>
    </Grid>
  )
}

UseSetStateDemo.demoName = 'useSetState'
