/* eslint-env jest */
import React from 'react'
import {act} from 'react-dom/test-utils'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AbTestOptimizelyXExperiment from '../src/index'
import OptimizelyX from '../../hooks/src/useExperimentCore/optimizely-x'

Enzyme.configure({adapter: new Adapter()})

describe('<AbTestOptimizelyXExperiment />', () => {
  let activationHandler, mounted
  beforeAll(() => {
    jest
      .spyOn(OptimizelyX, 'addActivationListener')
      .mockImplementation((experimentId, handler) => {
        activationHandler = handler
      })

    const Component = () => (
      <AbTestOptimizelyXExperiment experimentId={40000}>
        <button variationId={400000} defaultVariation>
          Original
        </button>
        <button variationId={400001}>Variation #1</button>
        <button variationId={400002}>Variation #2</button>
        <button variationId={400003}>Variation #3</button>
      </AbTestOptimizelyXExperiment>
    )
    act(() => {
      mounted = mount(<Component />)
    })
  })

  afterAll(() => {
    OptimizelyX.addActivationListener.mockRestore()
  })

  it('should render nothing when OptimizelyX is not available', () => {
    expect(mounted.html()).toEqual('<button>Original</button>')
  })

  describe('When OptimizelyX API is present', () => {
    it('should render AbTestToggle with corresponding variations', () => {
      expect(mounted.html()).toEqual('<button>Original</button>')

      act(() => {
        activationHandler(400002)
      })
      mounted.update()
      expect(mounted.html()).toEqual('<button>Variation #2</button>')
    })
  })
})
