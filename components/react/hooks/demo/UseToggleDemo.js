import {useToggle} from 'components/react/hooks/src'

import {Button, Strong} from '@s-ui/documentation-library'

export default function UseToggleDemo() {
  const [value, toggle] = useToggle()

  return (
    <>
      <Button onClick={toggle} style={{marginRight: '1em'}}>
        Toggle!
      </Button>
      <Strong>{value.toString()}</Strong>
    </>
  )
}

UseToggleDemo.demoName = 'useToggle'
