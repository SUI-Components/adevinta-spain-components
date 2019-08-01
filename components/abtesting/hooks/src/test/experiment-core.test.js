/* eslint-env jest */
import React from 'react'
import {act} from 'react-dom/test-utils'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import OptimizelyX from '../useExperimentCore/optimizely-x'
import {useExperiment as useExperimentRaw, useExperimentCore} from '..'

import AbTestOptimizelyXExperiment, {
  ExperimentContext
} from '../../../optimizelyXExperiment/src'

// configure tests
Enzyme.configure({adapter: new Adapter()})
jest.useFakeTimers()

// configure dependencies
const useExperiment = params => useExperimentRaw({ExperimentContext, ...params})
const OptimizelyXExperiment = props => (
  <AbTestOptimizelyXExperiment {...props} deps={{useExperimentCore}} />
)

describe('Experiment', () => {
  let activationHandler

  const assertActivation = (
    Component,
    expectedFromDefault,
    variationId,
    expectedFromVariation
  ) => {
    let mounted
    act(() => {
      mounted = mount(<Component />)
    })
    expect(mounted.html()).toEqual(expectedFromDefault)

    if (variationId) {
      if (variationId === 'runAllTimers') {
        act(() => {
          jest.runAllTimers()
        })
      } else {
        act(() => {
          activationHandler(variationId)
        })
      }
      mounted.update()
      expect(mounted.html()).toEqual(expectedFromVariation)
    }
  }

  describe('from useExperiment acting as an CORE RUNNER', () => {
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
      assertActivation(
        () => {
          const experimentData = useExperiment({
            experimentId: 40000,
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          const {isWrapped} = experimentData
          return isWrapped.toString()
        },
        'true',
        700001,
        'true'
      )
    })
  })

  describe('from useExperiment acting as a CONTEXT CONSUMER and OptimizelyXExperiment as a CORE RUNNER', () => {
    describe('when the component IS NOT wrapped by an experiment component', () => {
      it('should output isWrapped to false', () => {
        const Child = () => {
          const {isWrapped} = useExperiment()
          return isWrapped.toString()
        }
        assertActivation(
          () => (
            <div>
              <Child />
            </div>
          ),
          '<div>false</div>'
        )
      })

      it('should output isDefault to true', () => {
        const Child = () => {
          const {isDefault} = useExperiment()
          return isDefault.toString()
        }
        assertActivation(
          () => (
            <div>
              <Child />
            </div>
          ),
          '<div>true</div>'
        )
      })
    })

    describe('when the component IS wrapped by an experiment component', () => {
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
          const {isWrapped} = useExperiment()
          return isWrapped.toString()
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000}>
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'true',
          700001,
          'true'
        )
      })

      it('should output isActive to false, then set isActive to true', () => {
        const Child = () => {
          const {isActive} = useExperiment()
          return isActive.toString()
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000}>
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'false',
          700001,
          'true'
        )
      })

      it('should output isDefault to true, then set isDefault to false', () => {
        const Child = () => {
          const {isDefault} = useExperiment()
          return isDefault.toString()
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000}>
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'true',
          700001,
          'false'
        )
      })

      it('should output isVariation to false, then set isVariation to true', () => {
        const Child = () => {
          const {isVariation} = useExperiment()
          return isVariation.toString()
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000}>
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'false',
          700001,
          'true'
        )
      })

      it('should contain parent experimentId and choosen variationId, then keep experimentId and set variationId to the choosen one', () => {
        const Child = () => {
          const {experimentId, variationId} = useExperiment()
          return `${experimentId}/${variationId}`
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000}>
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          '40000/700000',
          700001,
          '40000/700001'
        )
      })

      it('should match default variation in variationName, then match the choosen variation in variationName', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000}>
              <Child variationId={700000} />
              <Child variationId={700001} />
              <Child defaultVariation variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'C',
          700001,
          'B'
        )
      })

      it('should match default variation in variation flags, then match the choosen variation in variation flags', () => {
        const Child = () => {
          const {isVariationA, isVariationB, isVariationC} = useExperiment()
          return `${isVariationA}:${isVariationB}:${isVariationC}`
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000}>
              <Child variationId={700000} />
              <Child variationId={700001} />
              <Child defaultVariation variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'false:false:true',
          700000,
          'true:false:false'
        )
      })

      it('should always keep forceVariation when provided as an id', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment
              experimentId={40000}
              forceVariation={700001} // B
            >
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'B',
          700002,
          'B'
        )
      })

      it('should always keep forceVariation when provided as a name', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000} forceVariation="B">
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'B',
          700002,
          'B'
        )
      })

      it('should display default variation first, then display forceActivation after a few milliseconds when provided as an id', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment
              experimentId={40000}
              forceActivation={700001} // B
            >
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'A',
          'runAllTimers',
          'B'
        )
      })

      it('should display default variation first, then display forceActivation after a few milliseconds when provided as a name', () => {
        const Child = () => {
          const {variationName} = useExperiment()
          return variationName
        }
        assertActivation(
          () => (
            <OptimizelyXExperiment experimentId={40000} forceActivation="B">
              <Child defaultVariation variationId={700000} />
              <Child variationId={700001} />
              <Child variationId={700002} />
            </OptimizelyXExperiment>
          ),
          'A',
          'runAllTimers',
          'B'
        )
      })
    })
  })
})
