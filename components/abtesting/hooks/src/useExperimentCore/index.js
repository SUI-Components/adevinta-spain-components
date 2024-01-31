/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'

import OptimizelyX from './optimizely-x'
import {storage} from './storage'

const noop = () => {}

export default params => {
  const {
    experimentId,
    forceActivation,
    forceActivationDelay = 1000,
    forceVariation,
    onActivation = noop,
    variations: rawVariations
  } = params

  // parse variations config
  const variations = rawVariations.map(raw => {
    if (typeof raw === 'object') return raw
    return {id: raw} // make an object from a naked id
  })

  // get default variation
  const defaultVariation = variations.find(variation => variation.isDefault)
  const defaultVariationId = defaultVariation ? defaultVariation.id : null

  const getNameFromVariation = variation => {
    // variationName exists in object
    if (variation.name) return variation.name

    // otherwise, use an alphabet letter based on variation position
    const variationIndex = variations.indexOf(variation)
    return String.fromCharCode(65 + variationIndex) // A, B, C, D, ...
  }

  const checkVariationId = variationId => {
    const checkedVariation =
      variationId &&
      variations.find(
        variation =>
          // name or id are both valid ways to force a variation
          variationId === getNameFromVariation(variation) || variationId === variation.id
      )
    return checkedVariation ? checkedVariation.id : null
  }

  const getNameFromVariationId = variationId => {
    return getNameFromVariation(variations.find(variation => variationId === variation.id))
  }

  const getFlagsFromVariationId = variationId => {
    return variations.reduce((obj, variation) => {
      const variationName = getNameFromVariation(variation)

      // capitalize variation name in order to get a well-formed camel case key
      // i. e. for a name 'foo' → isVariationFoo
      const capitalizedVariationName = variationName.charAt(0).toUpperCase() + variationName.slice(1)

      return {
        ...obj,
        [`isVariation${capitalizedVariationName}`]: variationId === variation.id
      }
    }, {})
  }

  const buildExperimentState = ({variationId, active = false}) => {
    const variationName = getNameFromVariationId(variationId)

    return {
      ...params,
      isActive: active,
      isDefault: variationId === defaultVariationId,
      isVariation: variationId !== defaultVariationId,
      isWrapped: true,
      variationId,
      variationName,
      ...getFlagsFromVariationId(variationId)
    }
  }

  const initialVariationId = checkVariationId(params.forceVariation) || defaultVariationId

  // set state which will be used to provide context
  const initialState = buildExperimentState({variationId: initialVariationId})
  const [state, setState] = useState(initialState)

  const parseVariationId = rawVariationId => {
    const numberVariationId = Number(rawVariationId)
    return !isNaN(numberVariationId) ? numberVariationId : rawVariationId
  }

  const activationHandler = rawVariationId => {
    const variationId = parseVariationId(rawVariationId)
    const newExperimentState = buildExperimentState({
      ...state,
      variationId,
      active: true
    })
    onActivation(newExperimentState)
    return setState(newExperimentState)
  }

  const logWatchOutMessage = message => {
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV !== 'test') console.warn(message)
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const getMessageForParam = param =>
        `[ExperimentCore] Watch out!! Optimizely response will be ignored because the ${param} param.`

      /*
       * [Fake activation]
       * Activate variation via `forceActivation` API flag
       */
      if (forceActivation) {
        setTimeout(() => activationHandler(checkVariationId(forceActivation)), forceActivationDelay)
        logWatchOutMessage(getMessageForParam('forceActivation'))
        return
      }

      /*
       * [Fake activation]
       * Activate variation via `forceVariation` API flag
       */
      if (forceVariation) {
        logWatchOutMessage(getMessageForParam('forceVariation'))
        return
      }
    }

    /*
     * [Fake activation]
     * - Activate variation via `forceExperiment` browser query flag.
     * - Also sets the flag into session storage to extend the effect during
     *   the tab session.
     */
    if (typeof URLSearchParams !== 'undefined') {
      const sessionStorageKey = `_suiAbtestingForceExperiment_${state.experimentId}`
      const urlParams = new URLSearchParams(window.location.search)
      const forceExperimentFromQueryParam = urlParams.get('forceExperiment')
      const forceExperimentFromSessionStorage = storage({
        key: sessionStorageKey
      })

      const splitNames = forceExperiment => forceExperiment.split('|')
      const getForceExperimentToBeApplied = () => {
        if (forceExperimentFromQueryParam && forceExperimentFromSessionStorage) {
          // When both query param and session storage entry are present,
          // query param has preference BUT only if it's the same name,
          // so it can override session storage entry.
          const [nameFromQP] = splitNames(forceExperimentFromQueryParam)
          const [nameFromSS] = splitNames(forceExperimentFromSessionStorage)
          return nameFromQP === nameFromSS ? forceExperimentFromQueryParam : forceExperimentFromSessionStorage
        }
        // Otherwise, whether any of them are present preference rule is simple
        return forceExperimentFromQueryParam || forceExperimentFromSessionStorage
      }

      const forceExperiment = getForceExperimentToBeApplied()
      if (forceExperiment) {
        const [experimentName, variationName] = splitNames(forceExperiment)
        if (!experimentName || !variationName || state.name !== experimentName) {
          return
        }

        // fake activation is ready to trigger
        setTimeout(() => activationHandler(checkVariationId(variationName)), forceActivationDelay)

        storage({
          method: 'setItem',
          key: sessionStorageKey,
          value: forceExperiment
        })
        return
      }
    }

    /*
     * [Natural activation]
     * Activate the right variation via Optimizely criteria
     */
    OptimizelyX.addActivationListener(experimentId, activationHandler)

    return () => {
      OptimizelyX.removeActivationListener(experimentId, activationHandler)
    }
  }, [])

  return {
    experimentData: state
  }
}
