import {act, cleanup, renderHook} from '@testing-library/react-hooks'

import {useControlledState} from '../src'

describe('useControlledState hook', () => {
  const setupHook = props =>
    renderHook(() => useControlledState(props.value, props.defaultValue))

  afterEach(cleanup)

  it('given no value and default value should return defaultValue and do not update its value until a controlled value is set', () => {
    // Given
    const props = {value: undefined, defaultValue: 123}

    // When
    const hook = setupHook(props)
    let [response, setResponse, isControlledValue, initialValue] =
      hook.result.current

    // Then
    expect(typeof response).toBe('number')
    expect(typeof setResponse).toBe('function')
    expect(typeof isControlledValue).toBe('boolean')
    expect(typeof initialValue).toBe('number')
    expect(response).toBe(123)
    expect(isControlledValue).toBe(false)
    expect(initialValue).toBe(123)

    // And
    // Given
    props.defaultValue = 456

    // When
    hook.rerender(props)
    ;[response, setResponse, isControlledValue, initialValue] =
      hook.result.current

    // Then
    expect(typeof response).toBe('number')
    expect(typeof setResponse).toBe('function')
    expect(typeof isControlledValue).toBe('boolean')
    expect(typeof initialValue).toBe('number')
    expect(response).toBe(123)
    expect(isControlledValue).toBe(false)
    expect(initialValue).toBe(123)

    // And
    // Given
    props.value = 789

    // When
    hook.rerender(props)
    ;[response, setResponse, isControlledValue, initialValue] =
      hook.result.current

    // Then
    expect(typeof response).toBe('number')
    expect(typeof setResponse).toBe('function')
    expect(typeof isControlledValue).toBe('boolean')
    expect(typeof initialValue).toBe('number')
    expect(response).toBe(789)
    expect(isControlledValue).toBe(true)
    expect(initialValue).toBe(123)
  })

  it('value must be more relevant than defaultValue', () => {
    // Given
    const props = {value: 123, defaultValue: 456}

    // When
    const hook = setupHook(props)
    const [response, setResponse, isControlledValue, initialValue] =
      hook.result.current

    // Then
    expect(typeof response).toBe('number')
    expect(typeof setResponse).toBe('function')
    expect(typeof isControlledValue).toBe('boolean')
    expect(typeof initialValue).toBe('number')
    expect(response).toBe(123)
    expect(isControlledValue).toBe(true)
    expect(initialValue).toBe(123)
  })

  it('value must be updated using its setter when using uncontrolled mode and blocked when using controlled mode', () => {
    // Given
    const props = {value: undefined, defaultValue: 123}

    // When
    const hook = setupHook(props)
    let [response, setResponse, isControlledValue, initialValue] =
      hook.result.current

    // Then
    expect(typeof response).toBe('number')
    expect(typeof setResponse).toBe('function')
    expect(typeof isControlledValue).toBe('boolean')
    expect(typeof initialValue).toBe('number')
    expect(response).toBe(123)
    expect(isControlledValue).toBe(false)
    expect(initialValue).toBe(123)

    // And
    // When
    act(() => {
      setResponse(456)
    })
    ;[response] = hook.result.current

    // Then
    expect(isControlledValue).toBe(false)
    expect(response).toBe(456)

    // And
    // Then
    props.value = 789

    // When
    hook.rerender(props)
    ;[, setResponse] = hook.result.current
    act(() => {
      setResponse(123)
    })
    ;[response, , isControlledValue] = hook.result.current

    // Then
    expect(isControlledValue).toBe(true)
    expect(response).toBe(789)
  })
})
