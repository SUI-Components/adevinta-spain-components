import {useNearScreen} from 'components/react/hooks/src'

import {Box, Paragraph} from '@s-ui/documentation-library'

export default function UseNearScreenDemo() {
  const [isNear, outerRefNear] = useNearScreen()

  return (
    <>
      <Paragraph>
        Scroll until the message is near. Once the message is near enough the color of the box will be green. Until
        then, the box will be red.
      </Paragraph>
      <Box
        style={{
          background: isNear ? '#deffd5' : '#ffd5d5',
          height: 1000
        }}
      >
        <div ref={outerRefNear} style={{fontSize: 48}}>
          {isNear ? '❗ near the viewport' : '🙈 not near'}
        </div>
      </Box>
    </>
  )
}

UseNearScreenDemo.demoName = 'useNearScreen'
