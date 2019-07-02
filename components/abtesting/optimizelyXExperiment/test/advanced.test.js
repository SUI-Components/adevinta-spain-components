/* eslint-env jest */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
// import OptimizelyX from '../src/optimizely-x'
import AbTestOptimizelyXExperiment from '../src/index'
import {useExperiment} from '../../hooks/src/index'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('useExperiment', () => {
  describe('when the current component IS NOT wrapped by an experiment component', () => {
    it('should output isWrapped to false', () => {
      const Child = () => {
        const {isWrapped} = useExperiment()
        return isWrapped.toString()
      }
      expect(
        shallow(
          <div>
            <Child />
          </div>
        ).html()
      ).toEqual('<div>false</div>')
    })
    it('should output isDefault to true', () => {
      const Child = () => {
        const {isDefault} = useExperiment()
        return isDefault.toString()
      }
      expect(
        shallow(
          <div>
            <Child />
          </div>
        ).html()
      ).toEqual('<div>true</div>')
    })
  })
  describe('when the current component IS wrapped by an experiment component', () => {
    describe('and optimizely is still not responding', () => {
      it('should output isWrapped to true', () => {
        const Child = () => {
          const {isWrapped} = useExperiment()
          return isWrapped.toString()
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment experimentId={40000}>
                <Child defaultVariation variationId={700000} />
                <Child variationId={700001} />
                <Child variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>true</div>')
      })
      it('should output isActive to false', () => {
        const Child = () => {
          const {isActive} = useExperiment()
          return isActive.toString()
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment experimentId={40000}>
                <Child defaultVariation variationId={700000} />
                <Child variationId={700001} />
                <Child variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>false</div>')
      })
      it('should output isDefault to true', () => {
        const Child = () => {
          const {isDefault} = useExperiment()
          return isDefault.toString()
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment experimentId={40000}>
                <Child defaultVariation variationId={700000} />
                <Child variationId={700001} />
                <Child variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>true</div>')
      })
      it('should output isVariation to false', () => {
        const Child = () => {
          const {isVariation} = useExperiment()
          return isVariation.toString()
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment experimentId={40000}>
                <Child defaultVariation variationId={700000} />
                <Child variationId={700001} />
                <Child variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>false</div>')
      })
      it('should contain parent experimentId and choosen variationId', () => {
        const Child = () => {
          const {experimentId, variationId} = useExperiment()
          return `${experimentId}/${variationId}`
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment experimentId={40000}>
                <Child defaultVariation variationId={700000} />
                <Child variationId={700001} />
                <Child variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>40000/700000</div>')
      })
      it('should match default variation in variationName', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment experimentId={40000}>
                <Child variationId={700000} />
                <Child variationId={700001} />
                <Child defaultVariation variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>C</div>')
      })
      it('should match default variation in variation flags', () => {
        const Child = () => {
          const {isVariationA, isVariationB, isVariationC} = useExperiment()
          return `${isVariationA}:${isVariationB}:${isVariationC}`
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment experimentId={40000}>
                <Child variationId={700000} />
                <Child variationId={700001} />
                <Child defaultVariation variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>false:false:true</div>')
      })
      it('should ignore default variation if forceVariation is provided as an id', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment
                experimentId={40000}
                forceVariation={700001} // B
              >
                <Child defaultVariation variationId={700000} />
                <Child variationId={700001} />
                <Child variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>B</div>')
      })
      it('should ignore default variation if forceVariation is provided as a name', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        expect(
          shallow(
            <div>
              <AbTestOptimizelyXExperiment
                experimentId={40000}
                forceVariation="B"
              >
                <Child defaultVariation variationId={700000} />
                <Child variationId={700001} />
                <Child variationId={700002} />
              </AbTestOptimizelyXExperiment>
            </div>
          ).html()
        ).toEqual('<div>B</div>')
      })
    })
  })
})
