import cx from 'classnames'
import PropTypes from 'prop-types'

export default function SpinnerBasic({size = 'medium'}) {
  const className = cx('sui-SpinnerBasic', `sui-SpinnerBasic--${size}`)

  return (
    <span className={className}>
      <span className="sui-SpinnerBasic-circle sui-SpinnerBasic-circleBackground" />
      <span className="sui-SpinnerBasic-circle sui-SpinnerBasic-circleArc" />
    </span>
  )
}

SpinnerBasic.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

SpinnerBasic.displayName = 'SpinnerBasic'
