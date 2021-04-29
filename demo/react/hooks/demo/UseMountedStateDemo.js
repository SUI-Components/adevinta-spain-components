import {useState} from 'react'
import {Paragraph, Button} from '@s-ui/documentation-library'

import {useMountedState} from '../../../../components/react/hooks/src'

export default function UseMountedStateDemo() {
  const isMounted = useMountedState()
  const [mountedState, setMountedState] = useState(isMounted())

  return (
    <>
      <Paragraph>isMounted: {`${mountedState}`}</Paragraph>
      <Button onClick={() => setMountedState(isMounted())}>check!</Button>
    </>
  )
}

UseMountedStateDemo.demoName = 'useMountedState'
