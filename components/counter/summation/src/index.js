import React from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'

const onRenderCounter = (counter, index) => (
  <Counter key={index} number={counter.number} label={counter.label} />
)

const CounterSummation = ({counters, separatorIcon}) => {
  const [total, ...summation] = counters
  return (
    <div className="sui-CounterSummation">
      {onRenderCounter(total)}
      <span className="sui-CounterSummation-separator">{separatorIcon}</span>
      {summation.map(onRenderCounter)}
    </div>
  )
}

CounterSummation.displayName = 'CounterSummation'

CounterSummation.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  separatorIcon: PropTypes.node.isRequired
}

export default CounterSummation
