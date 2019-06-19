import PropTypes from 'prop-types'
import React from 'react'

export default function AtomStatusSpot({size = 'medium', status = 'default'}) {
  return (
    <div className="sui-AtomStatusSpot">
      <span
        className={`sui-AtomStatusSpot-status sui-AtomStatusSpot-status-${
          this.props.status
        } sui-AtomStatusSpot-size-${this.props.size}`}
      />
    </div>
  )
}

AtomStatusSpot.displayName = 'AtomStatusSpot'

AtomStatusSpot.propTypes = {
  /**
   * The string content is the status spot
   */
  status: PropTypes.oneOf(['high', 'medium', 'low']),
  /**
   * The string content is the spot size
   */
  size: PropTypes.oneOf(['large', 'medium', 'small'])
}
