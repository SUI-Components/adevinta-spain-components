import 'jest-localstorage-mock'

import {act, renderHook} from '@testing-library/react-hooks'

import {useLocalStorage} from '../src'

describe('useLocalStorage hook', () => {
  afterEach(() => {
    localStorage.clear()
    // eslint-disable-next-line no-undef
    jest.clearAllMocks()
  })

  it('should return an array. The first element is anything is defined as initial value, the second element is a setter function', () => {
    const {result} = renderHook(() => useLocalStorage('test_key', 'test-value'))
    const [value, setValue] = result.current

    expect(value).toBe('test-value')
    expect(typeof setValue).toBe('function')
  })

  it('should initialize the value with undefined if the initial value is not passed', () => {
    const {result} = renderHook(() => useLocalStorage('test_key'))
    const [value] = result.current

    expect(value).toBe(undefined)
  })

  it('should store in the localStorage any value passed to the setter function', () => {
    const {result} = renderHook(() => useLocalStorage('test_key', 'test-value'))
    const [, setValue] = result.current

    const getValueFromLocalStorage = () => JSON.parse(window.localStorage.getItem('test_key'))

    act(() => {
      setValue('new-value')
    })
    expect(result.current[0]).toBe('new-value')
    expect(getValueFromLocalStorage()).toBe('new-value')

    act(() => {
      setValue(42)
    })
    expect(result.current[0]).toBe(42)
    expect(getValueFromLocalStorage()).toBe(42)

    act(() => {
      setValue(true)
    })
    expect(result.current[0]).toBe(true)
    expect(getValueFromLocalStorage()).toBe(true)

    act(() => {
      setValue(null)
    })
    expect(result.current[0]).toBe(null)
    expect(getValueFromLocalStorage()).toBe(null)
  })
})
