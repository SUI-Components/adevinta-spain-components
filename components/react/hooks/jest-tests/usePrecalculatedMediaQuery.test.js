/* eslint-env jest */
import {renderHook} from '@testing-library/react-hooks'

import {usePreCalculatedMediaQuery} from '../src/index.js'
import useMediaQuery from '../src/useMediaQuery/index.js'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

jest.mock('../src/useMediaQuery/index.js', () => jest.fn())

describe('usePreCalculatedMediaQuery hook', () => {
  describe('without window.matchMedia', () => {
    let originalMatchmedia

    beforeEach(() => {
      originalMatchmedia = window.matchMedia
      window.matchMedia = undefined
    })
    afterEach(() => {
      window.matchMedia = originalMatchmedia
    })

    it('should match by default to true in the defaultMatches of the useMediaQuery hook', () => {
      expect(typeof window.matchMedia).toEqual('undefined')
      renderHook(() => usePreCalculatedMediaQuery('(min-width:100px)'))

      expect(useMediaQuery).toHaveBeenCalledWith('(min-width:100px)', {
        defaultMatches: true
      })
    })
  })

  describe('with window.matchMedia', () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call the useMediaQuery hook with defaultMatche to false', () => {
      jest.spyOn(window, 'matchMedia').mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))

      renderHook(() => usePreCalculatedMediaQuery('(min-width:100px)'))

      expect(window.matchMedia).toHaveBeenCalledWith('(min-width:100px)')
      expect(useMediaQuery).toHaveBeenCalledWith('(min-width:100px)', {
        defaultMatches: false
      })
    })
  })
})
