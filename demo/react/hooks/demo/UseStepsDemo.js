import {Strong, Button, Grid, Cell} from '@s-ui/documentation-library'

import {useSteps} from '../../../../components/react/hooks/src'

const steps = ['First', 'Second', 'Third', 'Last']

export default function UseStepsDemo() {
  const {next, prev, step, history, lastAction, reset} = useSteps(0)

  return (
    <>
      <Grid cols={3} gutter=",12" style={{maxWidth: 300, marginBottom: 24}}>
        <Cell align="center">
          {prev && <Button onClick={prev}>Prev</Button>}
        </Cell>
        <Cell align="center">
          <Strong>Step: {steps[step]}</Strong>
        </Cell>
        <Cell align="center">
          {step < 3 && <Button onClick={() => next(step + 1)}>Next</Button>}
        </Cell>
      </Grid>
      <Grid gutter="12">
        <Strong>History: {history.toString()}</Strong>
        <Strong>Last action: {lastAction}</Strong>
        <Button onClick={reset} style={{maxWidth: 300}}>
          Reset
        </Button>
      </Grid>
    </>
  )
}
