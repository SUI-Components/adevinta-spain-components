import React, {useState} from 'react'

import {
  useMount,
  useOnScreen,
  useNearScreen
} from '../../../../components/react/hooks/src'
import StateReducerDemo from './StateReducerDemo'

export default () => {
  const [text, setText] = useState('On 3 secs, execute the onMount callback')

  useMount(function() {
    setTimeout(function() {
      setText('useMount callback executed!')
    }, 3000)
  })

  const [isIntersecting, outerRef] = useOnScreen({once: false})
  const [isNear, outerRefNear] = useNearScreen()

  return (
    <div>
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
        <h1>useStateReducer</h1>
        <StateReducerDemo />
      </div>
    </div>
  )
}
