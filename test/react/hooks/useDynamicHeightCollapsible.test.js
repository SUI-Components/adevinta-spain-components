import {act, cleanup, renderHook} from '@testing-library/react-hooks'
import {useDynamicHeightCollapsible} from '../../../components/react/hooks/src'

describe('useDynamicHeightCollapsible hook', () => {
  afterEach(cleanup)

  it('should return an array. [Boolean, Number, {toggler, heightRecalculator}]', () => {
    const {result} = renderHook(() => useDynamicHeightCollapsible(() => 5))
    const [isCollaped, height, handlers] = result.current

    expect(typeof isCollaped).toBe('boolean')
    expect(height).toBe(null)
    expect(typeof handlers.toggle).toBe('function')
    expect(typeof handlers.heightRecalculator).toBe('function')
  })

  it('should initialize the isCollapsed with true by default', () => {
    const {result} = renderHook(() => useDynamicHeightCollapsible(() => 5))
    const [isCollapsed] = result.current

    expect(isCollapsed).toBe(true)
  })

  it('should toggle the isCollapsed prop', () => {
    const {result} = renderHook(() => useDynamicHeightCollapsible(() => 5))
    const [, , {toggle}] = result.current

    expect(result.current[0]).toBe(true)

    act(() => {
      toggle()
    })
    expect(result.current[0]).toBe(false)

    act(() => {
      toggle()
    })
    expect(result.current[0]).toBe(true)
  })

  it('should not allow force the isCollapsed to a value when value is passed to toggle function', () => {
    const {result} = renderHook(() => useDynamicHeightCollapsible(() => 5))
    const [, , {toggle}] = result.current

    expect(result.current[0]).toBe(true)

    act(() => {
      toggle(true)
    })
    expect(result.current[0]).toBe(false)

    act(() => {
      toggle(false)
    })
    expect(result.current[0]).toBe(true)
  })

  it('should recalculate the heigh', () => {
    const {result} = renderHook(() => useDynamicHeightCollapsible(() => 5))
    const [, , {heightRecalculator}] = result.current

    expect(result.current[1]).toBe(null)

    act(() => {
      heightRecalculator()
    })
    expect(result.current[1]).toBe(5)
  })
})
