/* eslint-env jest */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import FormPta from '../index'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('<FormPta />', function() {
  let component, wrapper
  const onSubmitSpy = jest.fn()
  const onErrorSpy = jest.fn()

  beforeEach(() => {
    // Given
    component = (
      <FormPta onSubmit={onSubmitSpy} onError={onErrorSpy} formUrl={'anyUrl'} />
    )
    wrapper = shallow(component)
  })

  afterEach(() => {
    onSubmitSpy.mockRestore()
    onErrorSpy.mockRestore()
    wrapper.unmount()
  })

  it('should call onSubmit callback when SUBMIT message is listened from PTA', function(done) {
    const EVENT_TYPE = 'SUBMIT_FORM_SUCCEEDED'
    const listener = function(e) {
      // Then
      expect(onSubmitSpy.mock.calls.length).toEqual(1)
      done()
    }
    window.addEventListener('message', listener, {once: true})

    // When
    window.postMessage({type: EVENT_TYPE}, '*')
  })

  it('should call onError callback when SUBMIT message is listened from PTA', function(done) {
    const EVENT_TYPE = 'SUBMIT_FORM_FAILED'
    const listener = function(e) {
      // Then
      expect(onErrorSpy.mock.calls.length).toEqual(1)
      done()
    }
    window.addEventListener('message', listener, {once: true})

    // When
    window.postMessage({type: EVENT_TYPE}, '*')
  })

  it('should NOT call onSubmit callback when NO SUBMIT message is listened from PTA', function(done) {
    const NO_SUBMIT_TYPE = 'NOSUBMIT'

    const listener = function(e) {
      // Then
      expect(onSubmitSpy.mock.calls.length).toEqual(0)
      expect(onErrorSpy.mock.calls.length).toEqual(0)
      done()
    }
    window.addEventListener('message', listener, {once: true})

    // When
    window.postMessage({type: NO_SUBMIT_TYPE}, '*')
  })
})
