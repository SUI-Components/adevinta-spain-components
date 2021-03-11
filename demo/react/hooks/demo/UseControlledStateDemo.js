import {useState} from 'react'
import {Paragraph, Button, Grid, Cell, Bold} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'

import {useControlledState} from '../../../../components/react/hooks/src'

const noop = () => null

const CounterComponent = ({
  value,
  initialValue = 0,
  onAdd = noop,
  onSubstract = noop,
  onChange = noop,
  onReset = noop,
  onUnset = noop
}) => {
  const [internalValue, setInternalValue, , initialState] = useControlledState(
    value,
    initialValue
  )
  const onClickHandler = (operation, handler) => () => {
    const newInternalValue = operation(
      internalValue === undefined ? initialState : internalValue
    )
    setInternalValue(newInternalValue)
    handler(newInternalValue)
    onChange(newInternalValue)
  }
  return (
    <Grid cols={4} gutter={[8, 8]}>
      <Cell span={1}>
        <Button onClick={onClickHandler(value => value - 1, onAdd)} fullWidth>
          -
        </Button>
      </Cell>
      <Cell style={{textAlign: 'center'}} span={2}>
        <Bold>{internalValue}</Bold>
      </Cell>
      <Cell span={1}>
        <Button
          onClick={onClickHandler(value => value + 1, onSubstract)}
          fullWidth
        >
          +
        </Button>
      </Cell>
      <Cell span={2}>
        <Button onClick={onClickHandler(() => initialState, onReset)} fullWidth>
          &#x21bb;
        </Button>
      </Cell>
      <Cell span={2}>
        <Button onClick={onClickHandler(() => undefined, onUnset)} fullWidth>
          ✘
        </Button>
      </Cell>
    </Grid>
  )
}
CounterComponent.propTypes = {
  value: PropTypes.number,
  initialValue: PropTypes.number,
  onAdd: PropTypes.func,
  onSubstract: PropTypes.func,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  onUnset: PropTypes.func
}

export default function UseControlledStateDemo() {
  const initialState = 4
  const [state, setState] = useState()
  const setStatus = value => setState(value)
  const logStatus = value => console.log('UseControlledStateDemo', value)
  return (
    <>
      <CounterComponent
        value={state}
        initialValue={initialState}
        onAdd={setStatus}
        onSubstract={setStatus}
        onReset={setStatus}
        onUnset={setStatus}
        onChange={logStatus}
      />
      <Paragraph>Controlled value: {state}</Paragraph>
      <Paragraph>Initial value: {initialState}</Paragraph>
    </>
  )
}

UseControlledStateDemo.demoName = 'useControlledState'
