import {useRef} from 'react'

import {useSwipe} from 'components/react/hooks/src'

import {Paragraph} from '@s-ui/documentation-library'

export default function UseSwipeDemo() {
  const swipeRef = useRef()
  const swipeDirection = useSwipe(swipeRef)

  return (
    <>
      <Paragraph>
        Swipe left or right inside the box to see the effect of your action
      </Paragraph>
      <div
        ref={swipeRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          background: '#260120',
          fontSize: '2em',
          height: '200px',
          userSelect: 'none'
        }}
      >
        {swipeDirection}
      </div>
    </>
  )
}

UseSwipeDemo.demoName = 'useSwipe'
