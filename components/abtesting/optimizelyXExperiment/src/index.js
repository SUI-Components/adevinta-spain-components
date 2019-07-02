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
    this.initialVariationId =
      this._getForceVariationId() || this.defaultVariation
    this.initialVariationName = this._getVariationNameFromVariationId(
      this.initialVariationId
    )

    // no need to pass the special children prop to the context
    const {children, ...propsWithoutChildren} = props

    this.state = {
      ...propsWithoutChildren,
      isActive: false,
      isDefault: this.initialVariationId === this.defaultVariation,
      isVariation: this.initialVariationId !== this.defaultVariation,
      isWrapped: true,
      variationId: this.initialVariationId,
      variationName: this.initialVariationName,
      ...this._getVariationFlags(this.initialVariationId)
    }
  }

  _getDefaultVariation = () => {
    const defaultChild = this.props.children.find(
      child => child.props.defaultVariation
    )
    return defaultChild ? defaultChild.props.variationId : null
  }

  _getForceVariationId = () => {
    const {children, forceVariation} = this.props
    const forceVariationChild =
      forceVariation &&
      children.find(child => {
        const variationNameForChild = this._getVariationNameFromChild(child)
        return (
          // name or id are both valid ways to force a variation
          forceVariation === variationNameForChild ||
          forceVariation === child.props.variationId
        )
      })
    return forceVariationChild ? forceVariationChild.props.variationId : null
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

  _activationHandler = variationId => {
    return this.setState({
      isActive: true,
      isDefault: variationId === this.defaultVariation,
      isVariation: variationId !== this.defaultVariation,
      variationId,
      variationName: this._getVariationNameFromVariationId(variationId),
      ...this._getVariationFlags(variationId)
    })
  }

  componentDidMount() {
    if (this.props.forceVariation) {
      const msg = `[OptimizelyXExperiment] Watch out!! Optimizely response will be ignored because the forceVariation prop.`
      console.warn(msg) // eslint-disable-line no-console
      return
    }

    OptimizelyX.addActivationListener(
      this.props.experimentId,
      this._activationHandler
    )
  }

  componentWillUnmount() {
    if (this.props.forceVariation) return
    OptimizelyX.removeActivationListener(
      this.props.experimentId,
      this._activationHandler
    )
  }

  render() {
    return (
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
   * Id of the variation to display which overrides defaultVariation prop from children.
   * Only for development purposes.
   */
  forceVariation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AbTestOptimizelyXExperiment
export {ExperimentContext}
