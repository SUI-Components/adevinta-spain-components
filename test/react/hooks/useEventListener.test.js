/* eslint-env jest */
import {cleanup, renderHook} from '@testing-library/react-hooks'

import {useEventListener} from '../../../components/react/hooks/src'

describe('useEventListener hook', () => {
  afterEach(cleanup)

  it('should call addEventListener on mount', () => {
    const handler = jest.fn()
    const addEventListener = jest.fn()
    const removeEventListener = jest.fn()

    const target = {
      addEventListener,
      removeEventListener
    }

    renderHook(() => useEventListener('click', handler, target))

    expect(target.addEventListener).toHaveBeenCalledTimes(1)
    expect(target.removeEventListener).not.toHaveBeenCalled()
  })

  it('should call removeEventListener on unmount', () => {
    const addEventListener = jest.fn()
    const removeEventListener = jest.fn()

    const target = {
      addEventListener,
      removeEventListener
    }

    const {unmount} = renderHook(() =>
      useEventListener('click', () => {}, target)
    )

    expect(target.addEventListener).toHaveBeenCalledTimes(1)
    expect(target.removeEventListener).not.toHaveBeenCalled()
    unmount()
    expect(target.removeEventListener).toHaveBeenCalledTimes(1)
  })

  it('should call addEventListener/removeEventListener on events change', () => {
    const addEventListener = jest.fn()
    const removeEventListener = jest.fn()

    const target = {
      addEventListener,
      removeEventListener
    }

    const {rerender, unmount} = renderHook(
      ({event, handler, element}) => useEventListener(event, handler, element),
      {initialProps: {event: 'click', handler: () => {}, element: target}}
    )

    expect(target.addEventListener).toHaveBeenCalledTimes(1)
    expect(target.removeEventListener).not.toHaveBeenCalled()

    rerender({event: ['click'], handler: () => {}, element: target})

    expect(target.addEventListener).toHaveBeenCalledTimes(1)
    expect(target.removeEventListener).not.toHaveBeenCalled()

    rerender({
      event: ['click', 'keydown', 'scroll'],
      handler: () => {},
      element: target
    })
    expect(target.removeEventListener).toHaveBeenCalledTimes(1)
    expect(target.addEventListener).toHaveBeenCalledTimes(4)

    unmount()
    expect(target.addEventListener).toHaveBeenCalledTimes(4)
    expect(target.removeEventListener).toHaveBeenCalledTimes(4)
  })
})
