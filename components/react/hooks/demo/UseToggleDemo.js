import {Strong, Button} from '@s-ui/documentation-library'

import {useToggle} from 'components/react/hooks/src'

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
