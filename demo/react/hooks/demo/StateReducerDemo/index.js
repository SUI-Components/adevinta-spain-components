import React from 'react'
import {useStateReducer} from '../../../../../components/react/hooks/src'

export default () => {
  const initialState = {
    availableFood: 20,
    catsFood: 0,
    dogsFood: 0
  }
  const [state, setState] = useStateReducer(initialState)
  const {availableFood, catsFood, dogsFood} = state

  const giveCatsFood = () => {
    if (availableFood >= 2)
      setState({
        availableFood: availableFood - 2,
        catsFood: catsFood + 2
      })
  }
  const giveDogsFood = () => {
    if (availableFood >= 2)
      setState({
        availableFood: availableFood - 2,
        dogsFood: dogsFood + 2
      })
  }
  const giveFoodToAll = () => {
    if (availableFood >= 2)
      setState({
        availableFood: availableFood - 2,
        catsFood: catsFood + 1,
        dogsFood: dogsFood + 1
      })
  }

  return (
    <div>
      <header>Available food: {availableFood || 'No more!'}</header>
      <button onClick={giveCatsFood}>Give cats food</button>
      <button onClick={giveDogsFood}>Give dogs food</button>
      <button onClick={giveFoodToAll}>Give food to all</button>
      <ul>
        <li>Cats had {catsFood} of food.</li>
        <li>Dogs had {dogsFood} of food.</li>
      </ul>
    </div>
  )
}
