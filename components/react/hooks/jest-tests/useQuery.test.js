import {renderHook} from '@testing-library/react-hooks'

import {useQuery} from '../src/index.js'

describe('useQuery hook', () => {
  it('should fetch data when is mounted', async () => {
    const data = {id: '1'}

    const {result, waitForNextUpdate} = renderHook(() =>
      useQuery(() => {
        return Promise.resolve([null, data])
      })
    )

    await waitForNextUpdate()

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.data).toBe(data)
  })

  it('should not fetch data when initial data is set', async () => {
    const initialData = {id: '1'}

    const {result} = renderHook(() =>
      useQuery(
        () => {
          return Promise.resolve([null, null])
        },
        {initialData}
      )
    )

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.data).toBe(initialData)
  })

  it('should refetch data', async () => {
    let counter = 1

    const {result, waitForNextUpdate} = renderHook(() =>
      useQuery(
        () => {
          return Promise.resolve([null, counter++])
        },
        {refetchInterval: 100}
      )
    )

    await waitForNextUpdate()

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.data).toBe(1)

    await waitForNextUpdate()

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.data).toBe(2)
  })
})
