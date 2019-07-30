import PropTypes from 'prop-types'
import React from 'react'

export default function BadgeCounter({
  size = 'medium',
  type = 'bullet',
  thickness = 'medium'
}) {
  return (
    <div className="sui-BadgeCounter">
      <span
        className={`sui-BadgeCounter--${size} sui-BadgeCounter-${type} sui-BadgeCounter-${type}--${thickness}`}
      />
    </div>
  )
}

BadgeCounter.displayName = 'BadgeCounter'

BadgeCounter.propTypes = {
  /**
   * The string content is the badge-counter size
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * The string content is the bage-counter thickness
   */
  thickness: PropTypes.oneOf(['thin', 'medium', 'thick']),
  /**
   * The string content is the bage-counter type
   */
  type: PropTypes.oneOf(['bullet'])
}
