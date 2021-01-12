# ReactHooks

> Useful hooks to be used in your React projects

## Installation

```sh
$ npm install @s-ui/react-hooks --save
```

## Avaiable hooks

### useMount

Hook that will be executed when the component mounts. Similar behaviour to old `componentDidMount` but `useMount` could return a function that will executed when the component unmounts. Useful for clearing events or timers.

```js
import {useMount} from '@s-ui/react-hooks'

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
import { useOnScreen } from '@s-ui/react-hooks'

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

### useOrientation

This Hook listens for orientation changes and return current orientation information
Returns: `{orientation, side}`

```js
import {useOrientation, orientations} from '@s-ui/react-hooks'

export default () => {
  const {orientation, side} = useOrientation()

  return (
    <>
      {orientation === orientations.portrait && <p>portrait</p>}
      {orientation === orientations.landscape && <p>landscape - {side}</p>}
    </>
  )
}
```
### useNearScreen

Similar to `useOnScreen` but it let you configure when the distance is enough to return true. By default if the element is 200px near the screen it will change the inner state of the hook. You could define the `offset` in pixels to fire the event sooner or later.

```js
import { useNearScreen } from '@s-ui/react-hooks'

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
import {useLegacyState} from '@s-ui/react-hooks'

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

### useMediaQuery

This is a CSS media query hook for React. It listens for matches to a CSS media query. It allows the rendering of components based on whether the query matches or not.

Hook `useMediaQuery` always returns a boolean and it indicates if query matches or not.

```js
import {useMediaQuery} from '@s-ui/react-hooks'

export default function Demo() {
  const isMatching = useMediaQuery('(min-width:600px)')

  return <span>{`(min-width:600px) matches: ${isMatching}`}</span>
}
```

**On the server, by default, the mediaQuery doesn't match** but you could pass an option to change this.

```js
import {useMediaQuery} from '@s-ui/react-hooks'

export default function Demo() {
  const isMatching = useMediaQuery('(min-width:600px)', {defaultMatches: true})
  return <span>{`(min-width:600px) matches: ${isMatching}`}</span>
}
```

Keep in mind this functionality if you want to prioritize one design over other. For example, to be sure you render on the server the mobile layout and keep for the client.

### useScroll

Hook to get the scroll position and the direction of scroll, limited to the Y axis.

The hook `useScroll` always returns an object with **position** and **direction of scroll**

```js
import {useScroll} from '@s-ui/react-hooks'

export default function Demo() {
  const {position, direction} = useScroll()

  return (
    <>
      <p>{`Scroll position: ${position}`}</p>
      <p>{`Scroll direction: ${direction}`}</p>
    </>
  )
}
```

### useDebounce

Hook to debounce any fast changing value.

The hook `useDebounce` always returns a given value after some miliseconds.

```js
import {useDebounce} from '@s-ui/react-hooks'

export default function Demo() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      //do something with the debounced value
    }
  }, [debouncedSearchTerm])

  return (
    <input
      placeholder="Search anything"
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}
```

### useOnClickOutside

Hook to call to action when click outside a element.

The hook `useOnClickOutside` allows you to detect clicks outside of a specified element. In the example below we use it to close a modal when any element outside of the modal is clicked. By abstracting this logic out into a hook we can easily use it across all of our components that need this kind of functionality (dropdown menus, tooltips, etc).

This hook is copied from [useHooks](https://usehooks.com/useOnClickOutside/)

```js
import {useRef, useState} from 'react'
import {useOnClickOutside} from '@s-ui/react-hooks'

export default function Demo() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false)
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false))

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  )
}
```

> **Find full description and more examples in the [demo page](#).**
