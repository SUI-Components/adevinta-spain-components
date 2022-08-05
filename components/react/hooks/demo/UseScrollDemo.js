import {useScroll} from 'components/react/hooks/src'

import {Box, H3, Paragraph} from '@s-ui/documentation-library'

export default function UseScrollDemo() {
  const {position, direction} = useScroll()
  return (
    <Box
      outline
      style={{
        backgroundColor: '#000000',
        borderRadius: 4,
        color: '#ffffff',
        minWidth: 170,
        opacity: 0.6,
        padding: 8,
        position: 'fixed',
        right: '1em',
        top: '1em'
      }}
    >
      <H3>useScroll</H3>
      <Paragraph>{`Scroll position: ${position}`}</Paragraph>
      <Paragraph>{`Scroll direction: ${direction}`}</Paragraph>
    </Box>
  )
}

UseScrollDemo.demoName = 'useScroll'
