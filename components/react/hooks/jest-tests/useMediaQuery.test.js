/* eslint-env jest */
import {renderHook} from '@testing-library/react-hooks'
import mediaQuery from 'css-mediaquery'

import {useMediaQuery} from '../src/index.js'

// @see: https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

describe('useMediaQuery hook', () => {
  describe('without window.matchMedia', () => {
    let originalMatchmedia
    beforeEach(() => {
      originalMatchmedia = window.matchMedia
      window.matchMedia = undefined
    })
    afterEach(() => {
      window.matchMedia = originalMatchmedia
    })

    it('should work without window.matchMedia available', () => {
      expect(typeof window.matchMedia).toEqual('undefined')
      const {result} = renderHook(() => useMediaQuery('(min-width:100px)'))

      expect(result.current).toBe(false)
    })
    it('should work without window.matchMedia available and defaultMatches true', () => {
      expect(typeof window.matchMedia).toEqual('undefined')
      const {result} = renderHook(() =>
        useMediaQuery('(min-width:100px)', {defaultMatches: true})
      )
      expect(result.current).toBe(true)
    })
  })

  describe('with window.matchMedia', () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should the match value to be false when not matches the query', () => {
      const screenWidth = 600
      jest.spyOn(window, 'matchMedia').mockImplementation(query => ({
        matches: mediaQuery.match(query, {width: screenWidth}),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))

      const {result} = renderHook(() => useMediaQuery('(min-width: 900px)'))
      expect(result.current).toBe(false)
    })
    it('should the match value to be true when matches the query', () => {
      const screenWidth = 1280
      jest.spyOn(window, 'matchMedia').mockImplementation(query => ({
        matches: mediaQuery.match(query, {width: screenWidth}),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))

      const {result} = renderHook(() => useMediaQuery('(min-width: 900px)'))
      expect(result.current).toBe(true)
    })
  })
})
