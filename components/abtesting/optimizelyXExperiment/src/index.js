/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import ExperimentContext from './experiment-context'
import OptimizelyX from './optimizely-x'

function AbTestOptimizelyXExperiment(props) {
  const {
    children,
    experimentId,
    forceActivation,
    forceActivationDelay = 1000,
    forceVariation
  } = props

  // get default variation
  const defaultChild = children.find(child => child.props.defaultVariation)
  const defaultVariation = defaultChild ? defaultChild.props.variationId : null

  const getVariationNameFromChild = child => {
    // variationName can be overriden via prop
    if (child.props.variationName) return child.props.variationName

    // otherwise, use an alphabet letter based on child position
    const childIndex = children.indexOf(child)
    return String.fromCharCode(65 + childIndex) // A, B, C, D, ...
  }

  const checkVariationInChildren = variation => {
    const variationChild =
      variation &&
      children.find(child => {
        const variationNameForChild = getVariationNameFromChild(child)
        return (
          // name or id are both valid ways to force a variation
          variation === variationNameForChild ||
          variation === child.props.variationId
        )
      })
    return variationChild ? variationChild.props.variationId : null
  }

  const getVariationNameFromVariationId = variationId => {
    return getVariationNameFromChild(
      children.find(child => child.props.variationId === variationId)
    )
  }

  const getVariationFlags = selectedVariationId => {
    return children.reduce((obj, child) => {
      const variationName = getVariationNameFromChild(child)

      // capitalize variation name in order to get a well-formed camel case key
      // i. e. for a name 'foo' → isVariationFoo
      const capitalizedVariationName =
        variationName.charAt(0).toUpperCase() + variationName.slice(1)

      return {
        ...obj,
        [`isVariation${capitalizedVariationName}`]:
          child.props.variationId === selectedVariationId
      }
    }, {})
  }

  const buildContextState = ({variationId, active = false}) => {
    const {children, ...propsWithoutChildren} = props // remove children prop
    const variationName = getVariationNameFromVariationId(variationId)

    return {
      ...propsWithoutChildren,
      isActive: active,
      isDefault: variationId === defaultVariation,
      isVariation: variationId !== defaultVariation,
      isWrapped: true,
      variationId,
      variationName,
      ...getVariationFlags(variationId)
    }
  }

  const initialVariationId =
    checkVariationInChildren(props.forceVariation) || defaultVariation

  // set state which will be used to provide context
  const initialState = buildContextState({variationId: initialVariationId})
  const [state, setState] = useState(initialState)

  const parseVariationId = rawVariationId => {
    const numberVariationId = Number(rawVariationId)
    return !isNaN(numberVariationId) ? numberVariationId : rawVariationId
  }

  const activationHandler = rawVariationId => {
    const variationId = parseVariationId(rawVariationId)
    return setState(buildContextState({...state, variationId, active: true}))
  }

  const logWatchOutMessage = message => {
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV !== 'test') console.warn(message)
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const getMessageForProp = prop =>
        `[OptimizelyXExperiment] Watch out!! Optimizely response will be ignored because the ${prop} prop.`

      if (forceActivation) {
        setTimeout(
          () => activationHandler(checkVariationInChildren(forceActivation)),
          forceActivationDelay
        )
        logWatchOutMessage(getMessageForProp('forceActivation'))
        return
      }

      if (forceVariation) {
        logWatchOutMessage(getMessageForProp('forceVariation'))
        return
      }
    }

    OptimizelyX.addActivationListener(experimentId, activationHandler)

    return () => {
      if (
        process.env.NODE_ENV !== 'production' &&
        (forceActivation || forceVariation)
      ) {
        return
      }
      OptimizelyX.removeActivationListener(experimentId, activationHandler)
    }
  }, [])

  return (
    /**
     * FYI: About why using just `value={state}` instead of a new object.
     * @see https://en.reactjs.org/docs/context.html#caveats
     */
    <ExperimentContext.Provider value={state}>
      <AbTestToggle variation={state.variationId}>{children}</AbTestToggle>
    </ExperimentContext.Provider>
  )
}

AbTestOptimizelyXExperiment.displayName = 'AbTestOptimizelyXExperiment'

AbTestOptimizelyXExperiment.propTypes = {
  /**
   * Set of variations identified by `variationId` prop.
   * `defaultVariation` defines the fallback variation to show in case none is defined.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * Id of the experiment to get variation from.
   */
  experimentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  /**
   * This prop will force the `activationHandler` method to be ran for
   * the passed variation after a few milliseconds, so it will result
   * in something like an "Optimizely's response simulation". Accepts
   * the same values as `forceVariation` prop: variation id or name.
   *
   * This makes possible to try and ensure that the "flash" which is caused
   * by the swapping of variations due to the activation will not break
   * anything.
   *
   * NOTE: Only for development purposes.
   */
  forceActivation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The number of milliseconds after which a "forced activation" will happen.
   * This already has a default value and it only works together with
   * `forceActivation` prop.
   */
  forceActivationDelay: PropTypes.oneOfType(PropTypes.number),
  /**
   * Id or name of the variation to display which overrides defaultVariation
   * prop from children. This way you can easily try how other variations look
   * in your local environment before an actual experiment is configured in
   * Optimizely's panel.
   *
   * See `forceActivation` prop to simulate the "flash" effect from an actual
   * Optimizely's response.
   *
   * NOTE: Only for development purposes.
   */
  forceVariation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AbTestOptimizelyXExperiment
export {ExperimentContext}
