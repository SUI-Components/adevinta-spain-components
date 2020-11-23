/* eslint-env jest */
import {act} from 'react-dom/test-utils'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import OptimizelyX from '../src/useExperimentCore/optimizely-x'
import {useExperiment as useExperimentRaw, useExperimentCore} from '../src'

import AbTestOptimizelyXExperiment, {
  getExperimentContext
} from '../../optimizelyXExperiment/src'

// configure tests
Enzyme.configure({adapter: new Adapter()})
jest.useFakeTimers()

// configure dependencies
const useExperiment = params =>
  useExperimentRaw(
    typeof params === 'string'
      ? {getExperimentContext, name: params}
      : {getExperimentContext, ...params}
  )
const OptimizelyXExperiment = props => (
  <AbTestOptimizelyXExperiment {...props} deps={{useExperimentCore}} />
)

describe('Experiment', () => {
  let activationHandler

  beforeEach(() => {
    const noop = () => {}
    activationHandler = {single: noop}
    jest
      .spyOn(OptimizelyX, 'addActivationListener')
      .mockImplementation((experimentId, handler) => {
        activationHandler.single = handler
        activationHandler[experimentId] = handler
      })
  })

  afterEach(() => {
    OptimizelyX.addActivationListener.mockRestore()
  })

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
          if (!Array.isArray(variationId)) {
            activationHandler.single(variationId)
            return
          }
          variationId.forEach(({experimentId, variationId}) => {
            activationHandler[experimentId](variationId)
          })
        })
      }
      mounted.update()
      expect(mounted.html()).toEqual(expectedFromVariation)
    }
  }

  describe('from useExperiment acting as a CORE RUNNER and OptimizelyXExperiment as a CONTEXT PROVIDER', () => {
    it("should output experimentData from children's useExperiment acting as a CONTEXT CONSUMER", () => {
      const Child = () => {
        const experimentData = useExperiment()
        const {isActive, isDefault, isVariation} = experimentData
        return `${isActive}:${isDefault}:${isVariation}`
      }
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
          return (
            <OptimizelyXExperiment feed={experimentData}>
              <Child />
            </OptimizelyXExperiment>
          )
        },
        'false:true:false',
        700001,
        'true:false:true'
      )
    })
  })

  describe('from useExperiment as CORE RUNNER + CONTEXT PROVIDER with experiment name', () => {
    it("should output experimentData from children's useExperiment as CONTEXT CONSUMER with experiment name", () => {
      const Child = () => {
        const experimentData = useExperiment('myexperiment')
        const {isActive, isDefault, isVariation} = experimentData
        return `${isActive}:${isDefault}:${isVariation}`
      }
      assertActivation(
        () => {
          const experimentData = useExperiment({
            name: 'myexperiment',
            experimentId: 40000,
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          return (
            <OptimizelyXExperiment feed={experimentData}>
              <Child />
            </OptimizelyXExperiment>
          )
        },
        'false:true:false',
        700001,
        'true:false:true'
      )
    })
  })

  describe('from multiple useExperiments as CORE RUNNER + CONTEXT PROVIDER with different experiment names', () => {
    it("should output different experimentData from each children's useExperiment as CONTEXT CONSUMER with experiment names", () => {
      const Child = () => {
        const catsExperimentData = useExperiment('cats')
        const dogsExperimentData = useExperiment('dogs')
        const {
          isActive: catsIsActive,
          isDefault: catsIsDefault,
          isVariationB: catsIsVariationB,
          isVariationC: catsIsVariationC
        } = catsExperimentData
        const {
          isActive: dogsIsActive,
          isDefault: dogsIsDefault,
          isVariationB: dogsIsVariationB,
          isVariationC: dogsIsVariationC
        } = dogsExperimentData
        const catsOutput = `${catsIsActive}:${catsIsDefault}:${catsIsVariationB}:${catsIsVariationC}`
        const dogsOutput = `${dogsIsActive}:${dogsIsDefault}:${dogsIsVariationB}:${dogsIsVariationC}`
        return `${catsOutput}/${dogsOutput}`
      }
      assertActivation(
        () => {
          const catsExperimentData = useExperiment({
            name: 'cats',
            experimentId: 40000,
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          const dogsExperimentData = useExperiment({
            name: 'dogs',
            experimentId: 50000,
            variations: [
              {id: 900000, isDefault: true},
              {id: 900001},
              {id: 900002}
            ]
          })
          return (
            <OptimizelyXExperiment feed={catsExperimentData}>
              <OptimizelyXExperiment feed={dogsExperimentData}>
                <Child />
              </OptimizelyXExperiment>
            </OptimizelyXExperiment>
          )
        },
        'false:true:false:false/false:true:false:false',
        [
          {experimentId: 40000, variationId: 700001}, // cats: B
          {experimentId: 50000, variationId: 900002} // dogs: C
        ],
        'true:false:true:false/true:false:false:true'
      )
    })
  })

  describe('from multiple useExperiments as CORE RUNNER + CONTEXT PROVIDER with mix of namend/non-named', () => {
    it("should output different experimentData from each children's useExperiment as CONTEXT CONSUMER with only one named experiment", () => {
      const Child = () => {
        const nonNamedExperimentData = useExperiment()
        const dogsExperimentData = useExperiment('dogs')
        const {
          isActive: nnIsActive,
          isDefault: nnIsDefault,
          isVariationB: nnIsVariationB,
          isVariationC: nnIsVariationC
        } = nonNamedExperimentData
        const {
          isActive: dogsIsActive,
          isDefault: dogsIsDefault,
          isVariationB: dogsIsVariationB,
          isVariationC: dogsIsVariationC
        } = dogsExperimentData
        const nnOutput = `${nnIsActive}:${nnIsDefault}:${nnIsVariationB}:${nnIsVariationC}`
        const dogsOutput = `${dogsIsActive}:${dogsIsDefault}:${dogsIsVariationB}:${dogsIsVariationC}`
        return `${nnOutput}/${dogsOutput}`
      }
      assertActivation(
        () => {
          const catsExperimentData = useExperiment({
            experimentId: 40000,
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          const dogsExperimentData = useExperiment({
            name: 'dogs',
            experimentId: 50000,
            variations: [
              {id: 900000, isDefault: true},
              {id: 900001},
              {id: 900002}
            ]
          })
          return (
            <OptimizelyXExperiment feed={catsExperimentData}>
              <OptimizelyXExperiment feed={dogsExperimentData}>
                <Child />
              </OptimizelyXExperiment>
            </OptimizelyXExperiment>
          )
        },
        'false:true:false:false/false:true:false:false',
        [
          {experimentId: 40000, variationId: 700001}, // non-named: B
          {experimentId: 50000, variationId: 900002} // dogs: C
        ],
        'true:false:true:false/true:false:false:true'
      )
    })
  })

  describe('from useExperiment acting as a CORE RUNNER', () => {
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

    it('should output isActive to false, then set isActive to true', () => {
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
          const {isActive} = experimentData
          return isActive.toString()
        },
        'false',
        700001,
        'true'
      )
    })

    it('should output isDefault to true, then set isDefault to false', () => {
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
          const {isDefault} = experimentData
          return isDefault.toString()
        },
        'true',
        700001,
        'false'
      )
    })

    it('should output isVariation to false, then set isVariation to true', () => {
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
          const {isVariation} = experimentData
          return isVariation.toString()
        },
        'false',
        700001,
        'true'
      )
    })

    it('should contain parent experimentId and choosen variationId, then keep experimentId and set variationId to the choosen one', () => {
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
          const {experimentId, variationId} = experimentData
          return `${experimentId}/${variationId}`
        },
        '40000/700000',
        700001,
        '40000/700001'
      )
    })

    it('should match default variation in variationName, then match the choosen variation in variationName', () => {
      assertActivation(
        () => {
          const experimentData = useExperiment({
            experimentId: 40000,
            variations: [
              {id: 700000},
              {id: 700001},
              {id: 700002, isDefault: true}
            ]
          })
          const {variationName} = experimentData
          return variationName
        },
        'C',
        700001,
        'B'
      )
    })

    it('should match default variation in variation flags, then match the choosen variation in variation flags', () => {
      assertActivation(
        () => {
          const experimentData = useExperiment({
            experimentId: 40000,
            variations: [
              {id: 700000},
              {id: 700001},
              {id: 700002, isDefault: true}
            ]
          })
          const {isVariationA, isVariationB, isVariationC} = experimentData
          return `${isVariationA}:${isVariationB}:${isVariationC}`
        },
        'false:false:true',
        700000,
        'true:false:false'
      )
    })

    it('should always keep forceVariation when provided as an id', () => {
      assertActivation(
        () => {
          const experimentData = useExperiment({
            experimentId: 40000,
            forceVariation: 700001, // B
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          const {variationName} = experimentData
          return variationName
        },
        'B',
        700002,
        'B'
      )
    })

    it('should always keep forceVariation when provided as a name', () => {
      assertActivation(
        () => {
          const experimentData = useExperiment({
            experimentId: 40000,
            forceVariation: 'B',
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          const {variationName} = experimentData
          return variationName
        },
        'B',
        700002,
        'B'
      )
    })

    it('should display default variation first, then display forceActivation after a few milliseconds when provided as an id', () => {
      assertActivation(
        () => {
          const experimentData = useExperiment({
            experimentId: 40000,
            forceActivation: 700001, // B
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          const {variationName} = experimentData
          return variationName
        },
        'A',
        'runAllTimers',
        'B'
      )
    })

    it('should display default variation first, then display forceActivation after a few milliseconds when provided as a name', () => {
      assertActivation(
        () => {
          const experimentData = useExperiment({
            experimentId: 40000,
            forceActivation: 'B',
            variations: [
              {id: 700000, isDefault: true},
              {id: 700001},
              {id: 700002}
            ]
          })
          const {variationName} = experimentData
          return variationName
        },
        'A',
        'runAllTimers',
        'B'
      )
    })

    it('should run a custom function for onActivation event and pass the new experiment data to it', () => {
      let dataFromOnActivation

      const Component = () => {
        const experimentData = useExperiment({
          experimentId: 40000,
          onActivation: experimentData => {
            dataFromOnActivation = experimentData
          },
          variations: [
            {id: 700000, isDefault: true},
            {id: 700001},
            {id: 700002}
          ]
        })
        const {variationName} = experimentData
        return variationName
      }

      let mounted
      act(() => {
        mounted = mount(<Component />)
      })

      act(() => {
        activationHandler.single(700002)
      })
      mounted.update()
      expect(dataFromOnActivation.isVariationC).toBe(true)
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
