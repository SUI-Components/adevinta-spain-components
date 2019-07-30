/* eslint-env jest */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import OptimizelyX from '../src/optimizely-x'
import AbTestOptimizelyXExperiment, {ExperimentContext} from '../src/index'
import {useExperiment} from '../../hooks/src/index'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})
jest.useFakeTimers()

const HOOK_PARAMS = {ExperimentContext}

describe('useExperiment', () => {
  describe('when the component IS NOT wrapped by an experiment component', () => {
    it('should output isWrapped to false', () => {
      const Child = () => {
        const {isWrapped} = useExperiment(HOOK_PARAMS)
        return isWrapped.toString()
      }
      const component = (
        <div>
          <Child />
        </div>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('<div>false</div>')
    })
    it('should output isDefault to true', () => {
      const Child = () => {
        const {isDefault} = useExperiment(HOOK_PARAMS)
        return isDefault.toString()
      }
      const component = (
        <div>
          <Child />
        </div>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('<div>true</div>')
    })
  })
  describe('when the component IS wrapped by an experiment component', () => {
    let activationHandler

    beforeEach(() => {
      jest
        .spyOn(OptimizelyX, 'addActivationListener')
        .mockImplementation((experimentId, handler) => {
          activationHandler = handler
        })
    })

    afterEach(() => {
      OptimizelyX.addActivationListener.mockRestore()
    })

    it('should output isWrapped to true, then keep isWrapped to true', () => {
      const Child = () => {
        const {isWrapped} = useExperiment(HOOK_PARAMS)
        return isWrapped.toString()
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000}>
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('true')
      activationHandler(700001)
      mounted.update()
      expect(mounted.html()).toEqual('true')
    })

    it('should output isActive to false, then set isActive to true', () => {
      const Child = () => {
        const {isActive} = useExperiment(HOOK_PARAMS)
        return isActive.toString()
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000}>
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('false')
      activationHandler(700001)
      mounted.update()
      expect(mounted.html()).toEqual('true')
    })

    it('should output isDefault to true, then set isDefault to false', () => {
      const Child = () => {
        const {isDefault} = useExperiment(HOOK_PARAMS)
        return isDefault.toString()
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000}>
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('true')
      activationHandler(700001)
      mounted.update()
      expect(mounted.html()).toEqual('false')
    })

    it('should output isVariation to false, then set isVariation to true', () => {
      const Child = () => {
        const {isVariation} = useExperiment(HOOK_PARAMS)
        return isVariation.toString()
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000}>
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('false')
      activationHandler(700001)
      mounted.update()
      expect(mounted.html()).toEqual('true')
    })

    it('should contain parent experimentId and choosen variationId, then keep experimentId and set variationId to the choosen one', () => {
      const Child = () => {
        const {experimentId, variationId} = useExperiment(HOOK_PARAMS)
        return `${experimentId}/${variationId}`
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000}>
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('40000/700000')
      activationHandler(700001)
      mounted.update()
      expect(mounted.html()).toEqual('40000/700001')
    })

    it('should match default variation in variationName, then match the choosen variation in variationName', () => {
      const Child = () => {
        const {variationName} = useExperiment(HOOK_PARAMS)
        return variationName
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000}>
          <Child variationId={700000} />
          <Child variationId={700001} />
          <Child defaultVariation variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('C')
      activationHandler(700001)
      expect(mounted.html()).toEqual('B')
    })

    it('should match default variation in variation flags, then match the choosen variation in variation flags', () => {
      const Child = () => {
        const {isVariationA, isVariationB, isVariationC} = useExperiment(
          HOOK_PARAMS
        )
        return `${isVariationA}:${isVariationB}:${isVariationC}`
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000}>
          <Child variationId={700000} />
          <Child variationId={700001} />
          <Child defaultVariation variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('false:false:true')
      activationHandler(700000)
      expect(mounted.html()).toEqual('true:false:false')
    })

    it('should always keep forceVariation when provided as an id', () => {
      const Child = () => {
        const {variationName} = useExperiment(HOOK_PARAMS)
        return variationName
      }
      const component = (
        <AbTestOptimizelyXExperiment
          experimentId={40000}
          forceVariation={700001} // B
        >
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('B')
      activationHandler(700002)
      expect(mounted.html()).toEqual('B')
    })

    it('should always keep forceVariation when provided as a name', () => {
      const Child = () => {
        const {variationName} = useExperiment(HOOK_PARAMS)
        return variationName
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000} forceVariation="B">
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('B')
      activationHandler(700002)
      expect(mounted.html()).toEqual('B')
    })

    it('should display default variation first, then display forceActivation after a few milliseconds when provided as an id', () => {
      const Child = () => {
        const {variationName} = useExperiment(HOOK_PARAMS)
        return variationName
      }
      const component = (
        <AbTestOptimizelyXExperiment
          experimentId={40000}
          forceActivation={700001} // B
        >
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('A')
      jest.runAllTimers()
      expect(mounted.html()).toEqual('B')
    })

    it('should display default variation first, then display forceActivation after a few milliseconds when provided as a name', () => {
      const Child = () => {
        const {variationName} = useExperiment(HOOK_PARAMS)
        return variationName
      }
      const component = (
        <AbTestOptimizelyXExperiment experimentId={40000} forceActivation="B">
          <Child defaultVariation variationId={700000} />
          <Child variationId={700001} />
          <Child variationId={700002} />
        </AbTestOptimizelyXExperiment>
      )
      const mounted = shallow(component)
      expect(mounted.html()).toEqual('A')
      jest.runAllTimers()
      expect(mounted.html()).toEqual('B')
    })
  })
})
