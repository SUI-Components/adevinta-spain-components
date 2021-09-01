import {useRef, useState} from 'react'
import {Paragraph} from '@s-ui/documentation-library'

import {useMergeRefs} from 'components/react/hooks/src'

export default function UseMergeRefsDemo() {
  const firstRef = useRef()
  const secondRef = useRef()
  const thirdRef = useRef()

  const [firstState, setFirst] = useState()
  const [secondState, setSecond] = useState()
  const [thirdState, setThird] = useState()

  const handleClick = () => {
    setFirst(firstRef.current?.getBoundingClientRect().width)
    setSecond(secondRef.current?.getBoundingClientRect().left)
    setThird(thirdRef.current?.getBoundingClientRect().top)
  }

  const ref = useMergeRefs(firstRef, secondRef, thirdRef)

  return (
    <>
      <button ref={ref} onClick={handleClick}>
        Click to get data from different refs!
      </button>
      <Paragraph>Data from first ref: {firstState}</Paragraph>
      <Paragraph>Data from second ref: {secondState}</Paragraph>
      <Paragraph>Data from third ref: {thirdState}</Paragraph>
    </>
  )
}

UseMergeRefsDemo.demoName = 'useMergeRefs'
