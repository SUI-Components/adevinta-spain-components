/* eslint handle-callback-err: "off" */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AbTestToggle from '@s-ui/abtesting-toggle'

import ExperimentContext from './experiment-context'
import OptimizelyX from './optimizely-x'

class AbTestOptimizelyXExperiment extends Component {
  constructor(props) {
    super(props)
    const {forceVariation} = props

    this.defaultVariation = this._getDefaultVariation()
    this.initialVariationId = forceVariation || this.defaultVariation
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
      variationName: this.initialVariationName,
      variationId: this.initialVariationId,
      ...this._getVariationFlags(this.initialVariationId)
    }
  }

  _getDefaultVariation() {
    const defaultChild = this.props.children.find(
      child => child.props.defaultVariation
    )
    return defaultChild ? defaultChild.props.variationId : null
  }

  _getVariationNameFromVariationId(variationId) {
    return this._getVariationNameFromChild(
      this.props.children.find(child => child.props.variationId === variationId)
    )
  }

  _getVariationNameFromChild(child) {
    // variationName can be overriden via prop
    if (child.props.variationName) return child.props.variationName

    // otherwise, use an alphabet letter based on child position
    const childIndex = this.props.children.indexOf(child)
    return String.fromCharCode(65 + childIndex) // A, B, C, D, ...
  }

  _getVariationFlags(selectedVariationId) {
    return this.props.children.reduce((obj, child) => {
      return {
        ...obj,
        [`isVariation${this._getVariationNameFromChild(child)}`]:
          child.props.variationId === selectedVariationId
      }
    }, {})
  }

  componentDidMount() {
    this._activationHandler = variationId => {
      const variationName = this._getVariationNameFromVariationId(variationId)
      this.setState({
        isActive: true,
        isDefault: variationId === this.defaultVariation,
        isVariation: variationId !== this.defaultVariation,
        variationName,
        variationId,
        ...this._getVariationFlags(variationId)
      })
    }
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
