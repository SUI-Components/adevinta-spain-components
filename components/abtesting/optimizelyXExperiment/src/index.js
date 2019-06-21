/* eslint handle-callback-err: "off" */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import ExperimentContext from './experiment-context'
import OptimizelyX from './optimizely-x'

class AbTestOptimizelyXExperiment extends Component {
  constructor(initialProps) {
    super(initialProps)
    const {forceVariation} = initialProps

    this.defaultVariation = this._getDefaultVariation()
    this.initialVariation = forceVariation || this.defaultVariation

    // no need to pass the special children prop to the context
    const {children, ...initialPropsWithoutChildren} = initialProps

    this.state = {
      ...initialPropsWithoutChildren,
      isActive: false,
      isDefault: this.initialVariation === this.defaultVariation,
      isVariation: this.initialVariation !== this.defaultVariation,
      isWrapped: true,
      variationName: this._getVariationName(this.initialVariation),
      variationId: this.initialVariation
    }
  }

  _getDefaultVariation() {
    const defaultChild = this.props.children.find(
      child => child.props.defaultVariation
    )
    return defaultChild ? defaultChild.props.variationId : null
  }

  _getVariationName(variationId) {
    const child = this.props.children.find(
      child => child.props.variationId === variationId
    )

    // variationName can be overriden via prop
    if (child.props.variationName) return child.props.variationName

    // otherwise, use an alphabet letter based on child position
    const childIndex = this.props.children.indexOf(child)
    return String.fromCharCode(65 + childIndex) // A, B, C, D, ...
  }

  componentDidMount() {
    this._activationHandler = variationId =>
      this.setState({
        isActive: true,
        isDefault: variationId === this.defaultVariation,
        isVariation: variationId !== this.defaultVariation,
        variationName: this._getVariationName(variationId),
        variationId: variationId
      })
    OptimizelyX.addActivationListener(
      this.props.experimentId,
      this._activationHandler
    )
  }

  componentWillUnmount() {
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
