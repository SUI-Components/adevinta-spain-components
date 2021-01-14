import {Paragraph} from '@s-ui/documentation-library'
import {Box} from '@s-ui/documentation-library/lib/components/Box/Box'

import {useOnScreen} from '../../../../components/react/hooks/src'

export default function UseOnScreenDemo() {
  const [isIntersecting, outerRef] = useOnScreen({once: false})

  return (
    <>
      <Paragraph>
        Scroll until you see the message. When the message is shown, the color
        of the block is green. When is not in the viewport, the color of the
        block is red.
      </Paragraph>
      <Box
        style={{
          background: isIntersecting ? '#deffd5' : '#ffd5d5',
          height: 1000
        }}
      >
        <div ref={outerRef} style={{fontSize: 48}}>
          {isIntersecting ? '❗ visible!' : '🙈 not visible'}
        </div>
      </Box>
    </>
  )
}
