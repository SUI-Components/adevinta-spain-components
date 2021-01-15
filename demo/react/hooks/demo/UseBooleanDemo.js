import {Strong, Button, Grid} from '@s-ui/documentation-library'

import {useBoolean} from '../../../../components/react/hooks/src'

export default function UseBooleanDemo() {
  const [value, {toggle, on, off}] = useBoolean()

  return (
    <Grid cols={4} gutter=",12" style={{maxWidth: 500}}>
      <Button onClick={toggle}>Toggle!</Button>
      <Button onClick={on}>Turn true!</Button>
      <Button onClick={off}>Turn false!</Button>
      <Strong>{value.toString()}</Strong>
    </Grid>
  )
}
