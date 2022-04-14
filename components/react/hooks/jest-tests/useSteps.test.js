import {act, cleanup, renderHook} from '@testing-library/react-hooks'

import {useSteps} from '../src'

describe('useSteps hook', () => {
  afterEach(cleanup)

  it('should move forward to the passed step when next(step) is invoked', () => {
    const {result} = renderHook(() => useSteps(0))
    const {next} = result.current

    expect(result.current.step).toBe(0)
    expect(typeof next).toBe('function')

    act(() => {
      next(2)
    })
    expect(result.current.step).toBe(2)
  })

  it('should move back to the previous step when prev() is invoked', () => {
    const {result} = renderHook(() => useSteps(0))
    const {next} = result.current

    expect(result.current.step).toBe(0)

    act(() => {
      next(2)
    })
    expect(result.current.step).toBe(2)

    act(() => {
      next(13)
    })
    expect(result.current.step).toBe(13)

    act(() => {
      result.current.prev()
    })
    expect(result.current.step).toBe(2)

    act(() => {
      result.current.prev()
    })
    expect(result.current.step).toBe(0)
  })

  it('should reset the history to the initialValue when reset() is invoked', () => {
    const {result} = renderHook(() => useSteps(0))
    const {next} = result.current

    expect(result.current.step).toBe(0)

    act(() => {
      next(2)
    })
    expect(result.current.step).toBe(2)

    act(() => {
      next(13)
    })
    expect(result.current.step).toBe(13)

    act(() => {
      next(16)
    })
    expect(result.current.step).toBe(16)

    act(() => {
      result.current.reset()
    })
    expect(result.current.step).toBe(0)
  })

  it('should return the lastAction type when navigating with an handler', () => {
    const {result} = renderHook(() => useSteps(0))
    const {next} = result.current

    expect(result.current.step).toBe(0)

    act(() => {
      next(2)
    })
    expect(result.current.lastAction).toBe('next')

    act(() => {
      next(13)
    })
    expect(result.current.lastAction).toBe('next')

    act(() => {
      result.current.prev()
    })
    expect(result.current.lastAction).toBe('prev')

    act(() => {
      result.current.prev()
    })
    expect(result.current.lastAction).toBe('prev')

    act(() => {
      next(2)
    })
    expect(result.current.lastAction).toBe('next')

    act(() => {
      result.current.reset()
    })
    expect(result.current.lastAction).toBe('reset')
  })
})
