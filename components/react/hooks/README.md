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
import useMount from '@s-ui/react-hooks/lib/useMount/index.js'

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
import useOnScreen from '@s-ui/react-hooks/lib/useOnScreen/index.js'

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

This Hook listens for orientation changes and returns current orientation information
Returns: `{orientation, side}`

```js
import useOrientation, {orientations} from '@s-ui/react-hooks/lib/useOrientation/index.js'

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
import {useNearScreen} from '@s-ui/react-hooks/lib/useOnScreen/index.js'

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
import {useLegacyState} from '@s-ui/react-hooks/lib/useLegacyState/index.js'

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
import useMediaQuery from '@s-ui/react-hooks/lib/useMediaQuery'

export default function Demo() {
  const isMatching = useMediaQuery('(min-width:600px)')

  return <span>{`(min-width:600px) matches: ${isMatching}`}</span>
}
```

**On the server, by default, the mediaQuery doesn't match** but you could pass an option to change this.

```js
import useMediaQuery from '@s-ui/react-hooks/lib/useMediaQuery'

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
import useScroll from '@s-ui/react-hooks/lib/useScroll/index.js'

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
import useDebounce from '@s-ui/react-hooks/lib/useDebounce/index.js'

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
import useOnClickOutside from '@s-ui/react-hooks/lib/useOnClickOutside/index.js'

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

### useEventListener

> The `useEventListener` hook is useful to avoid a lot of boilerplate when setting one or more event listeners in a component.

#### Usage

**Params**

It accept 4 arguments, the first 2 mandatory, the others are optionals.

- **event type`<String|Array<String>>`**: It could be a single string representing an event or more passed with an array
  [required]

- **handler`<Function>`**: The function handler to invoke when the event occurs
  [required]

- **target`<HtmlElement>`**: The target of our event listeners
  [default: Client: window | Server: null]

- **options`<Object>`**: Optional options to pass to the event listener
  [default: {}]

```js
import useEventListener from '@s-ui/react-hooks/lib/useEventListener/index.js'

function Component() {
  const divRef = useRef()

  useEventListener('scroll', () => console.log('Scrolled the whole document'))
  useEventListener(
    ['click', 'touchstart'],
    () => console.log('Div clicked or touched!'),
    divRef.current
  )

  return <div ref={divRef} />
}
```

### useInterval

> The `useInterval` hook is useful to create intervals conditionaly.

#### Usage

**Params**

It accept 2 arguments.

- **callback<Function>>**: The function to invoke
  [required]

- **delay<Function>**: The delay time in miliseconds
  [default: 0]

```js
function Component() {
  const [count, setCount] = React.useState(0)
  const [delay, setDelay] = React.useState(1000)
  const [isRunning, toggleIsRunning] = useBoolean(true)

  useInterval(
    () => {
      setCount(count + 1)
    },
    isRunning ? delay : null
  )

  return (
    <div>
      <div>
        delay:{' '}
        <input
          value={delay}
          onChange={event => setDelay(Number(event.target.value))}
        />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={toggleIsRunning}>
          {isRunning ? 'stop' : 'start'}
        </button>
      </div>
    </div>
  )
}
```

### useBoolean

> The `useBoolean` hook is particularly useful when is necessary to trigger conditional renders in consequence of events. A typical use case is to handle a modal show/hide logic. It is an extension of the `useToggle` hook.

#### Usage

**Params**

It accepts a single boolean argument which is used as initial value.

- **initialValue**
  [*default*: `false`]

**Return value**: `Array<Boolean, Object>`

- **value**
- **handlers**
  - _toggle_: Toggle the current value
  - _on_: Set to `true` the value
  - _off_: Set to `false` the value

```js
import useBoolean from '@s-ui/react-hooks/lib/useBoolean/index.js'

function Component() {
  const [value, {toggle, on, off}] = useBoolean()

  return (
    <div>
      <span>{value.toString()}</span>
      <button onClick={toggle}>Toggle!</button>
      <button onClick={on}>Turn true!</button>
      <button onClick={off}>Turn false!</button>
    </div>
  )
}
```

### useToggle

> The `useToggle` hook abstracts the often-used logic to toggle a boolean state. It is especially useful when handling checkboxes and on/off conditional renders, but it could be used in composition with additional logic to create more powerful hooks (useBoolean, ...)

#### Usage

```js
import useToogle from '@s-ui/react-hooks/lib/useToggle/index.js'

function Component() {
  const [value, toggle] = useToggle()

  return (
    <div>
      <span>{value.toString()}</span>
      <button onClick={toggle}>Toggle!</button>
    </div>
  )
}
```

### useIsomorphicLayoutEffect

> An alternative to `useLayoutEffect` that does not show warning when server-side rendering

#### Usage

```js
function Component({value}) {
  useIsomorphicLayoutEffect(() => {
    window.console.log(value)
  }, [value])

  return null
}
```

### useCallbackRef

> Persist a function between renders but keeps it up-to-date if it changes (commonly known as [The Latest Ref Pattern](https://epicreact.dev/the-latest-ref-pattern-in-react/)).

#### Usage

```js
function Component({onChange: onChangeProp}) {
  const onChange = useCallbackRef(onChangeProp)

  useEffect(() => {
    window.library.init({
      id: '#id',
      onChange
    })
  }, [onChange])

  return <div id="id" />
}
```

### useSteps

> The `useSteps` hook allow to create a steps handler for navigating between steps.

#### Usage

**Params**

It accepts a single argument which is used as initial value. If not passed, the history will be empty in the beginning

- **initialValue**: required

**Return value**: `Object`

- _step_: `any` The current step
- _history_: `Array<any>` The steps history list
- _lastAction_: `next|prev|reset` The last triggered action type
- _next_: `(nextStep) => void` Set the next step passed as argument
- _prev_: `() => void` Bring back to the previous step. If there are less than the
- _reset_: `() => void` Set to `false` the value
- _isActive_: `(step) => boolean` Check if the passed step is marked as the current

```js
import useSteps from '@s-ui/react-hooks/lib/useSteps/index.js'

function Component() {
  const {next, prev, step, history, lastAction, reset} = useSteps(0)

  return (
    <>
      {prev && <Button onClick={prev}>Prev</Button>}
      <Strong>Step: {steps[step]}</Strong>
      <Button onClick={() => next(step + 1)}>Next</Button>
      <Strong>History: {history.toString()}</Strong>
      <Strong>Last action: {lastAction}</Strong>
      <Button onClick={reset}>Reset</Button>
    </>
  )
}
```

### useMergeRefs

> The `useMergeRefs` hook has the purpose of merging and sync the passed references into a single one. It could be useful when implementing a component that receives a forwarded ref and that use internal refs, making it easier to pass a single ref to the DOM target.

#### Usage

**Params**

It accepts a list of ref arguments.

**Return value**: `Ref<(value) => void>`

```js
import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs/index.js'

const Component = React.forwardRef((props, forwardedRef) => {
  const firstRef = useRef()
  const secondRef = useRef()

  const ref = useMergeRefs(firstRef, secondRef, forwardedRef)

  return <div ref={ref} />
})
```

> **Find full description and more examples in the [demo page](#).**

### useControlledState

> The `useControlledState` hook has the purpose of combine the state of a value prop and its default value.

```js
import useControlledState from '@s-ui/react-hooks/lib/useControlledState/index.js'

const Component = ({value, initialValue, onClick, onReset}) => {
  const [
    innerValue, // state
    setInnerValue, // state setter
    isControlledValue, // {boolean} using controlled behavior or not
    initialInnerValue // first inner value state
  ] = useControlledState(value, initialValue)
  const onHandler = (handler, value) => () => {
    setInnerValue(value)
    typeof handler === 'function' && handler(value)
  }
  return (
    <FooBar
      value={innerValue}
      onClick={onHandler(onClick, innerValue)}
      onReset={onHandler(onReset, initialInnerValue)}
    />
  )
}
```

### useMountedState

> The `useMountedState` hook provides the ability to check component's mount state.
> Returns a function that will return true if component mounted and false otherwise.

```js
import useMountedState from '@s-ui/react-hooks/lib/useMountedState/index.js'

const Demo = () => {
  const isMounted = useMountedState()

  React.useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        // ...
      } else {
        // ...
      }
    }, 1000)
  })
}
```

### useCopyToClipboard

> Copy text to a user's clipboard.

```js
import useCopyToClipboard from '@s-ui/react-hooks/lib/useCopyToClipboard/index.js'

const Demo = () => {
  const [text, setText] = React.useState('')
  const [{value, error}, copyToClipboard] = useCopyToClipboard()

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="button" onClick={() => copyToClipboard(text)}>
        copy text
      </button>
      {error ? (
        <p>Unable to copy value: {error.message}</p>
      ) : (
        value && <p>Copied {value}</p>
      )}
    </div>
  )
}
```
