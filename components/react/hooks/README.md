# ReactHooks

> Useful hooks to be used in your React projects

## Installation

```sh
$ npm install @schibstedspain/sui-react-hooks --save
```

## Avaiable hooks

### useMount

Hook that will be executed when the component mounts. Similar behaviour to old `componentDidMount` but `useMount` could return a function that will executed when the component unmounts. Useful for clearing events or timers.

```js
import { useMount } from '@schibstedspain/sui-react-hooks'

export default () => {
  useMount(() => {
    window.analytics.track('component did mount!')
  })

  useMount(() => {
    const onScroll = () => console.log('scrolling')
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  const [currentUser, setCurrentUser] = useState(null)

  useMount(async () => {
    const user = await getUser()
    setCurrentUser(user)
  })

  return currentUser && <h1>Hello {currentUser.name} !!</h1>
}
```

### useOnScreen

Hook to detect if an element is on the screen. Useful for lazy loading components, images or fetching of data.

You could configure if it should only be fired `once` by using the parameter with the same name (default: `true`).

```js
import { useOnScreen } from '@schibstedspain/sui-react-hooks'

export default () => {
  const [isIntersecting, outerRef] = useOnScreen({ once: true })
  const [isIntersectingBlock, outerRefBlock] = useOnScreen({ once: false })

  return (
    <div ref={outerRef}>
      {isIntersecting && <img src='huge-image.png' />}
      <div>
    </div>
  )
}
```

### useNearScreen

Similar to `useOnScreen` but it let you configure when the distance is enough to return true. By default if the element is 200px near the screen it will change the inner state of the hook. You could define the `offset` in pixels to fire the event sooner or later.

```js
import { useNearScreen } from '@schibstedspain/sui-react-hooks'

export default () => {
  const [isNear, outerRef] = useNearScreen({ offset: '300px' })

  return (
    <div ref={outerRef}>
      {isNear && <p>This is 300px near to the viewport!</p>}
      <div>
    </div>
  )
}
```

### useLegacyState

Hook that provides a similar state management approach to the old `this.setState` from a class.

Useful to cover quick functional migrations in components with complex states that would cause unnecessary renders if simply divided into lots of useState hooks.

If you apply this when migrating to a functional component, please take in mind that you may later rethink the strategy of its state.

```js
import {useLegacyState} from '@schibstedspain/sui-react-hooks'

export default () => {
  const initialState = {
    availableFood: 20,
    catsFood: 0,
    dogsFood: 0
  }
  const [state, setState] = useLegacyState(initialState)
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
```

> **Find full description and more examples in the [demo page](#).**