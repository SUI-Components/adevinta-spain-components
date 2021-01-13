import {useRef, useState} from 'react'
import {Box, H1, H2} from '@s-ui/documentation-library'

import {
  useMount,
  useOnScreen,
  useNearScreen,
  useMediaQuery,
  useScroll,
  useSwipe
} from '../../../../components/react/hooks/src'
import LegacyStateDemo from './LegacyStateDemo'
import UseEventListenerDemo from './UseEventListenerDemo'

// eslint-disable-next-line react/prop-types
function HookDemo({component: Component}) {
  return (
    <Box
      outline
      elementType="article"
      color="#167db7"
      style={{marginBottom: '1em'}}
    >
      <H2>{Component.name}</H2>
      <Component />
    </Box>
  )
}

export default () => {
  const [text, setText] = useState('On 3 secs, execute the onMount callback')
  const swipeRef = useRef()
  const [isIntersecting, outerRef] = useOnScreen({once: false})
  const [isNear, outerRefNear] = useNearScreen()
  const isMatching = useMediaQuery('(min-width:600px)')
  const {position, direction} = useScroll()
  const swipeDirection = useSwipe(swipeRef)

  useMount(function() {
    setTimeout(function() {
      setText('useMount callback executed!')
    }, 3000)
  })

  return (
    <Box>
      <H1>SUI React Hooks</H1>
      <HookDemo component={UseEventListenerDemo} />
      <h1>useSwipe</h1>
      <div
        ref={swipeRef}
        style={{
          alignItems: 'center',
          background: '#260120',
          color: '#ffffff',
          display: 'flex',
          fontSize: '2em',
          height: '200px',
          justifyContent: 'center',
          maxWidth: '600px',
          userSelect: 'none'
        }}
      >
        {swipeDirection}
      </div>
      <h1>useMount</h1>
      {text}
      <div>
        <h1>useOnScreen</h1>
        <p>
          Scroll until you see the message. When the message is shown, the color
          of the block is green. When is not in the viewport, the color of the
          block is red.
        </p>
        <div
          style={{
            background: isIntersecting ? '#deffd5' : '#ffd5d5'
          }}
        >
          <span
            style={{
              display: 'block',
              height: '1000px'
            }}
          />
          <div ref={outerRef} style={{fontSize: '48px'}}>
            {isIntersecting ? '❗ visible!' : '🙈 not visible'}
          </div>
        </div>
      </div>

      <div>
        <h1>useNearScreen</h1>
        <p>
          Scroll until the message is near. Once the message is near enough the
          color of the box will be green. Until then, the box will be red.
        </p>
        <div
          style={{
            background: isNear ? '#deffd5' : '#ffd5d5'
          }}
        >
          <span
            style={{
              display: 'block',
              height: '1000px'
            }}
          />
          <div ref={outerRefNear} style={{fontSize: '48px'}}>
            {isNear ? '❗ near the viewport' : '🙈 not near'}
          </div>
        </div>
      </div>

      <div>
        <h1>useLegacyState</h1>
        <LegacyStateDemo />
      </div>

      <div>
        <h1>useMediaQuery</h1>
        <span>{`(min-width:600px) matches: ${isMatching}`}</span>
      </div>

      <div
        style={{
          backgroundColor: 'black',
          borderRadius: '4px',
          color: 'white',
          minWidth: '170px',
          opacity: '0.6',
          padding: '8px',
          position: 'fixed',
          right: '1em',
          top: '1em'
        }}
      >
        <h3>useScroll</h3>
        <p>{`Scroll position: ${position}`}</p>
        <p>{`Scroll direction: ${direction}`}</p>
      </div>
    </Box>
  )
}
