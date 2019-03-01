/* eslint-env jest */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import FormPta from '../index'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
describe('<FormPta />', () => {
  describe('submit listeners', function () {
    let component, wrapper
    const onSubmitSpy = jest.fn()
    const onErrorSpy = jest.fn()

    beforeEach(() => {
      // Given
      component = (
        <FormPta
          onSubmit={onSubmitSpy}
          onError={onErrorSpy}
          formUrl={'anyUrl'}
        />
      )
      wrapper = shallow(component)
    })

    afterEach(() => {
      onSubmitSpy.mockRestore()
      onErrorSpy.mockRestore()
      wrapper.unmount()
    })

    it('should call onSubmit callback when SUBMIT message is listened from PTA', function (done) {
      const EVENT_TYPE = 'SUBMIT_FORM_SUCCEEDED'
      const listener = function (e) {
        // Then
        expect(onSubmitSpy.mock.calls.length).toEqual(1)
        done()
      }
      window.addEventListener('message', listener, { once: true })

      // When
      window.postMessage({ type: EVENT_TYPE }, '*')
    })

    it('should call onError callback when SUBMIT message is listened from PTA', function (done) {
      const EVENT_TYPE = 'SUBMIT_FORM_FAILED'
      const listener = function (e) {
        // Then
        expect(onErrorSpy.mock.calls.length).toEqual(1)
        done()
      }
      window.addEventListener('message', listener, { once: true })

      // When
      window.postMessage({ type: EVENT_TYPE }, '*')
    })

    it('should NOT call onSubmit callback when NO SUBMIT message is listened from PTA', function (done) {
      const NO_SUBMIT_TYPE = 'NOSUBMIT'

      const listener = function (e) {
        // Then
        expect(onSubmitSpy.mock.calls.length).toEqual(0)
        expect(onErrorSpy.mock.calls.length).toEqual(0)
        done()
      }
      window.addEventListener('message', listener, { once: true })

      // When
      window.postMessage({ type: NO_SUBMIT_TYPE }, '*')
    })
  })

  describe('generic listeners', function () {
    let component, wrapper
    const listener1Spy = jest.fn()
    const listener2Spy = jest.fn()
    const listener3Spy = jest.fn()
    const EVENT_TYPE_1 = 'EVENT_TYPE_1'
    const EVENT_TYPE_2 = 'EVENT_TYPE_2'
    const EVENT_TYPE_3 = 'EVENT_TYPE_3'
    const NOT_MATCHING_EVENT_TYPE = 'NOT_MATCHING_EVENT_TYPE'

    const eventListeners = [
      {
        eventNames: [EVENT_TYPE_1, EVENT_TYPE_2],
        listener: listener1Spy
      },
      {
        eventNames: [EVENT_TYPE_1],
        listener: listener2Spy
      },
      {
        eventNames: [EVENT_TYPE_3],
        listener: listener3Spy
      }
    ]

    beforeEach(() => {
      // Given
      component = <FormPta eventListeners={eventListeners} formUrl={'anyUrl'} />
      wrapper = shallow(component)
    })

    afterEach(() => {
      listener1Spy.mockRestore()
      listener2Spy.mockRestore()
      listener3Spy.mockRestore()
      wrapper.unmount()
    })

    it('shoul call eventListeners when event emmited type matches many listener', done => {
      const listener = function (e) {
        // Then
        expect(listener1Spy.mock.calls.length).toEqual(1)
        expect(listener2Spy.mock.calls.length).toEqual(1)
        expect(listener3Spy.mock.calls.length).toEqual(0)
        done()
      }
      window.addEventListener('message', listener, { once: true })

      // When
      window.postMessage({ type: EVENT_TYPE_1 }, '*')
    })

    it('shoul call eventListeners when event emmited type matches one listener', done => {
      const listener = function (e) {
        // Then
        expect(listener1Spy.mock.calls.length).toEqual(1)
        expect(listener2Spy.mock.calls.length).toEqual(0)
        expect(listener3Spy.mock.calls.length).toEqual(0)
        done()
      }
      window.addEventListener('message', listener, { once: true })

      // When
      window.postMessage({ type: EVENT_TYPE_2 }, '*')
    })

    it('shoul not call eventListeners when event emmited type does not match any listener', done => {
      const listener = function (e) {
        // Then
        expect(listener1Spy.mock.calls.length).toEqual(0)
        expect(listener2Spy.mock.calls.length).toEqual(0)
        expect(listener3Spy.mock.calls.length).toEqual(0)
        done()
      }
      window.addEventListener('message', listener, { once: true })

      // When
      window.postMessage({ type: NOT_MATCHING_EVENT_TYPE }, '*')
    })
  })
})
