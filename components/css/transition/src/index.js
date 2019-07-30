import React from 'react'
import PropTypes from 'prop-types'
import {
  TransitionGroup as AnimationTransitionGroup,
  CSSTransition as Transition
} from 'react-transition-group'
import {CONFIG, TYPES} from './animations-config'

const CssTransition = ({children, type, duration, ...attrs}) => {
  const {className, timeout = duration} = CONFIG[type]

  const classNames = {
    appear: `${className}-appear`,
    appearActive: `${className}-appearActive`,
    appearDone: `${className}-appearDone`,
    enter: `${className}-enter`,
    enterActive: `${className}-enterActive`,
    enterDone: `${className}-enterDone`,
    exit: `${className}-exit`,
    exitActive: `${className}-exitActive`,
    exitDone: `${className}-exitDone`
  }

  return (
    <Transition classNames={classNames} timeout={timeout} {...attrs}>
      {children}
    </Transition>
  )
}

CssTransition.displayName = 'CssTransition'

CssTransition.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  duration: PropTypes.number
}

export {TYPES, AnimationTransitionGroup}
export default CssTransition
