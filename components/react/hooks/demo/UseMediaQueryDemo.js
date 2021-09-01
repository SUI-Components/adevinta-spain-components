import {Paragraph} from '@s-ui/documentation-library'

import {useMediaQuery} from 'components/react/hooks/src'

export default function UseMediaQueryDemo() {
  const isMatching = useMediaQuery('(min-width:600px)')
  return <Paragraph>min-width:600px matches: {isMatching.toString()}</Paragraph>
}

UseMediaQueryDemo.demoName = 'useMediaQuery'
