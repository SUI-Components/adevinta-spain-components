/* eslint eqeqeq: "off" */

import {createElement} from 'react'
import PropTypes from 'prop-types'

export default function AbTestToggle({children, variation}) {
  const filterFunc = variation
    ? child => child.props.variationId == variation
    : child => child.props.defaultVariation

  let child = children.filter(filterFunc)[0] || null

  if (child) {
    const newProps = {...child.props}
    delete newProps.variationId
    delete newProps.defaultVariation
    child = createElement(child.type, newProps)
  }

  return child
}

AbTestToggle.displayName = 'AbTestToggle'

AbTestToggle.propTypes = {
  /**
   * Id of the contained variation to show. Has to match with `variationId` of a child.
   */
  variation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set of variations identified by `variationId` prop.
   * `defaultVariation` defines the fallback variation to show in case none is defined.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}
