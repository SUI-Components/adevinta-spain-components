import {useState} from 'react'

import {useMountedState} from 'components/react/hooks/src'

import {Button, Paragraph} from '@s-ui/documentation-library'

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
