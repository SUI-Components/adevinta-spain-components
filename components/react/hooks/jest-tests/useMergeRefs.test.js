import React, {useEffect, useRef} from 'react'

import {render} from '@testing-library/react'

import {useMergeRefs} from '../src'

describe('useMergeRefs hook', () => {
  it('should merge all the passed refs into a single one', () => {
    const refs = {}

    function TestComponent() {
      const firstRef = useRef()
      const secondRef = useRef()
      const thirdRef = useRef()

      const ref = useMergeRefs(firstRef, secondRef, thirdRef)

      useEffect(() => {
        refs.first = firstRef.current
        refs.second = secondRef.current
        refs.third = thirdRef.current
      }, [])

      return <div ref={ref} />
    }

    render(<TestComponent />)

    expect(refs.first).toBe(refs.second)
    expect(refs.first).toBe(refs.third)
    expect(refs.second).toBe(refs.third)
  })

  it('should merge both functional and object references', () => {
    const refs = {}

    const TestComponent = React.forwardRef(function TestComponent(
      props,
      forwardedRef
    ) {
      const firstRef = useRef()
      const secondRef = useRef()

      const ref = useMergeRefs(firstRef, secondRef, forwardedRef)

      useEffect(() => {
        refs.first = firstRef.current
        refs.second = secondRef.current
      }, [])

      return <div ref={ref} {...props} />
    })

    const refToBeForwarded = React.createRef()
    render(<TestComponent ref={node => (refToBeForwarded.current = node)} />)

    expect(refs.first).toBe(refs.second)
    expect(refs.first).toBe(refToBeForwarded.current)
    expect(refs.second).toBe(refToBeForwarded.current)
  })
})
