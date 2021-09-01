import {H3, Button, ListItem, OrderedList} from '@s-ui/documentation-library'

import {useLegacyState} from 'components/react/hooks/src'

const initialState = {
  available: 20,
  cats: 0,
  dogs: 0
}

export default function UseLegacyStateDemo() {
  const [food, setFood] = useLegacyState(initialState)
  const {available, cats, dogs} = food

  const giveFood = e => {
    const {name} = e.target
    if (available >= 2)
      setFood({
        available: available - 2,
        [name]: food[name] + 2
      })
  }

  return (
    <>
      <H3>Available food: {available || 'No more!'}</H3>
      <Button name="cats" onClick={giveFood} style={{marginRight: 6}}>
        Give cats food
      </Button>
      <Button name="dogs" onClick={giveFood}>
        Give dogs food
      </Button>
      <OrderedList>
        <ListItem>Cats had {cats} of food.</ListItem>
        <ListItem>Dogs had {dogs} of food.</ListItem>
      </OrderedList>
    </>
  )
}

UseLegacyStateDemo.demoName = 'useLegacyState'
