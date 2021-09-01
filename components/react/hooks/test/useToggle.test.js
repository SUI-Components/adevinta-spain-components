import {act, cleanup, renderHook} from '@testing-library/react-hooks'

import {useToggle} from '../src'

describe('useToggle hook', () => {
  afterEach(cleanup)

  it('should return an array with a boolean and a function', () => {
    const {result} = renderHook(() => useToggle())
    const [value, toggle] = result.current

    expect(typeof value).toBe('boolean')
    expect(typeof toggle).toBe('function')
  })

  it('should initialize the value with false by default', () => {
    const {result} = renderHook(() => useToggle())
    const [value, toggle] = result.current

    expect(value).toBe(false)
    expect(typeof toggle).toBe('function')
  })

  it('should toggle the value when no value is passed to the updater function', () => {
    const {result} = renderHook(() => useToggle())
    const [, toggle] = result.current

    expect(result.current[0]).toBe(false)

    act(() => {
      toggle()
    })
    expect(result.current[0]).toBe(true)

    act(() => {
      toggle()
    })
    expect(result.current[0]).toBe(false)
  })

  it('should set the value to the passed argument if it is a boolean', () => {
    const {result} = renderHook(() => useToggle())
    const [, toggle] = result.current

    expect(result.current[0]).toBe(false)

    act(() => {
      toggle(false)
    })
    expect(result.current[0]).toBe(false)

    act(() => {
      toggle(true)
    })
    expect(result.current[0]).toBe(true)

    act(() => {
      toggle(true)
    })
    expect(result.current[0]).toBe(true)
  })

  it('should ignore non-booleans arguments and toggle the state', () => {
    const {result} = renderHook(() => useToggle())
    const [, toggle] = result.current

    expect(result.current[0]).toBe(false)

    act(() => {
      toggle('false')
    })
    expect(result.current[0]).toBe(true)

    act(() => {
      toggle(213)
    })
    expect(result.current[0]).toBe(false)
  })
})
