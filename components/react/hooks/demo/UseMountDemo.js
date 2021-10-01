import {useState} from 'react'
import {Paragraph} from '@s-ui/documentation-library'

import {useMount} from 'components/react/hooks/src'

export default function UseMountDemo() {
  const [text, setText] = useState(
    'The callback passed to useMount is running once after this text has mount the first time, it started a timer to update this text in 5 seconds!'
  )
  useMount(function() {
    setTimeout(function() {
      setText('The timer called after the first render has finished!')
    }, 5000)
  })

  return <Paragraph>{text}</Paragraph>
}

UseMountDemo.demoName = 'useMount'
