/* eslint handle-callback-err: "off" */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import ExperimentContext from './experiment-context'
import OptimizelyX from './optimizely-x'

class AbTestOptimizelyXExperiment extends Component {
  constructor(props) {
    super(props)
    this.defaultVariation = this._getDefaultVariation()

    const initialVariationId =
      this._checkVariationInChildren(props.forceVariation) ||
      this.defaultVariation

    // set state which will be used to provide context
    this.state = this._buildContextState({variationId: initialVariationId})
  }

  _buildContextState = ({variationId, active = false}) => {
    const {children, ...propsWithoutChildren} = this.props // remove children prop
    const variationName = this._getVariationNameFromVariationId(variationId)

    return {
      ...propsWithoutChildren,
      isActive: active,
      isDefault: variationId === this.defaultVariation,
      isVariation: variationId !== this.defaultVariation,
      isWrapped: true,
      variationId,
      variationName,
      ...this._getVariationFlags(variationId)
    }
  }

  _getDefaultVariation = () => {
    const defaultChild = this.props.children.find(
      child => child.props.defaultVariation
    )
    return defaultChild ? defaultChild.props.variationId : null
  }

  _checkVariationInChildren = variation => {
    const {children} = this.props
    const variationChild =
      variation &&
      children.find(child => {
        const variationNameForChild = this._getVariationNameFromChild(child)
        return (
          // name or id are both valid ways to force a variation
          variation === variationNameForChild ||
          variation === child.props.variationId
        )
      })
    return variationChild ? variationChild.props.variationId : null
  }

  _getVariationNameFromVariationId = variationId => {
    return this._getVariationNameFromChild(
      this.props.children.find(child => child.props.variationId === variationId)
    )
  }

  _getVariationNameFromChild = child => {
    // variationName can be overriden via prop
    if (child.props.variationName) return child.props.variationName

    // otherwise, use an alphabet letter based on child position
    const childIndex = this.props.children.indexOf(child)
    return String.fromCharCode(65 + childIndex) // A, B, C, D, ...
  }

  _getVariationFlags = selectedVariationId => {
    return this.props.children.reduce((obj, child) => {
      const variationName = this._getVariationNameFromChild(child)

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

  _activationHandler = rawVariationId => {
    const variationId = this._parseVariationId(rawVariationId)
    return this.setState(this._buildContextState({variationId, active: true}))
  }

  _parseVariationId = rawVariationId => {
    const numberVariationId = Number(rawVariationId)
    return !isNaN(numberVariationId) ? numberVariationId : rawVariationId
  }

  _logWatchOutMessage(message) {
    // eslint-disable-next-line no-console
    if (process.env.NODE_ENV !== 'test') console.warn(message)
  }

  componentDidMount() {
    const {experimentId, forceActivation, forceVariation} = this.props

    if (process.env.NODE_ENV !== 'production') {
      const getMessageForProp = prop =>
        `[OptimizelyXExperiment] Watch out!! Optimizely response will be ignored because the ${prop} prop.`

      if (forceActivation) {
        setTimeout(
          () =>
            this._activationHandler(
              this._checkVariationInChildren(forceActivation)
            ),
          this.props.forceActivationDelay
        )
        this._logWatchOutMessage(getMessageForProp('forceActivation'))
        return
      }

      if (forceVariation) {
        this._logWatchOutMessage(getMessageForProp('forceVariation'))
        return
      }
    }

    OptimizelyX.addActivationListener(experimentId, this._activationHandler)
  }

  componentWillUnmount() {
    if (
      process.env.NODE_ENV !== 'production' &&
      (this.props.forceActivation || this.props.forceVariation)
    ) {
      return
    }
    OptimizelyX.removeActivationListener(
      this.props.experimentId,
      this._activationHandler
    )
  }

  render() {
    return (
      /**
       * FYI: About why using just `value={this.state}` instead of a new object.
       * @see https://en.reactjs.org/docs/context.html#caveats
       */
      <ExperimentContext.Provider value={this.state}>
        <AbTestToggle variation={this.state.variationId}>
          {this.props.children}
        </AbTestToggle>
      </ExperimentContext.Provider>
    )
  }
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
   * This prop will force the `_activationHandler` method to be ran for
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

AbTestOptimizelyXExperiment.defaultProps = {
  forceActivationDelay: 1000
}

export default AbTestOptimizelyXExperiment
export {ExperimentContext}
