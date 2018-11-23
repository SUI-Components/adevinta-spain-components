import React from 'React'
import PropTypes from 'prop-types'

const Counter = ({number, label}) => {
  return (
    <div className="sui-CounterSummation-Counter">
      {number}
      {label}
    </div>
  )
}

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default Counter
