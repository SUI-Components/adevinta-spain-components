import sinon from 'sinon'

import {waitFor} from '@testing-library/react'
import {act, renderHook} from '@testing-library/react-hooks'

import {useMutation} from '../src/index.js'

describe('useMutation hook', () => {
  it('should call mutate when invoked', async () => {
    const mutate = sinon.spy()

    const {result} = renderHook(() => useMutation(mutate))

    act(() => {
      const [mutation] = result.current
      mutation()
    })

    await waitFor(() => expect(mutate.called).toBe(true))
  })

  it('should have idle status initially', async () => {
    const mutate = sinon.spy()

    const {result} = renderHook(() => useMutation(mutate))

    const [, {status}] = result.current

    expect(status).toBe('idle')
  })
})
