import {useEffect, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Chevronbottom from '@s-ui/react-icons/lib/Chevronbottom'

const ANIMATION_SPEED_CLASSNAMES = {
  normal: 'sui-CollapsibleBasic-transitionNormal',
  fast: 'sui-CollapsibleBasic-transitionFast'
}

const CollapsibleBasic = ({
  animationSpeed,
  children,
  collapsed,
  handleClick: onClick,
  hideTriggerIcon,
  icon: ArrowIcon,
  isClickable,
  id,
  label
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)
  const [isAnimationFinished, setIsAnimationFinished] = useState(collapsed)

  useEffect(() => {
    setIsCollapsed(collapsed)
  }, [collapsed])

  const handleClick = () => {
    setIsAnimationFinished(false)

    const nextIsCollapsed = !isCollapsed
    setTimeout(() => {
      setIsCollapsed(nextIsCollapsed)
    })
    onClick(nextIsCollapsed)
  }

  const cssClassNames = cx('sui-CollapsibleBasic', {
    'is-collapsed': isCollapsed,
    'is-expanded': !isCollapsed
  })
  const contentCssClassNames = cx('sui-CollapsibleBasic-collapsibleContent', {
    [ANIMATION_SPEED_CLASSNAMES[animationSpeed]]: true,
    'is-hidden': isAnimationFinished && isCollapsed
  })

  const contentId = id ? `collapsible-basic-${id}` : `collapsible-basic-default`
  const onAnimationEnd = () => {
    setIsAnimationFinished(true)
  }

  return (
    <div className={cssClassNames}>
      <button
        aria-expanded={!isCollapsed}
        aria-controls={contentId}
        className="sui-CollapsibleBasic-trigger"
        onClick={isClickable ? handleClick : undefined}
        type="button"
      >
        <span className="sui-CollapsibleBasic-trigger-label">{label}</span>
        {!hideTriggerIcon && (
          <span className="sui-CollapsibleBasic-trigger-iconBox">
            <ArrowIcon
              svgClass="sui-CollapsibleBasic-trigger-iconBox-icon"
              className="sui-CollapsibleBasic-trigger-iconBox-icon"
            />
          </span>
        )}
      </button>
      <div className={contentCssClassNames} id={contentId} role="region" onTransitionEnd={onAnimationEnd}>
        {children}
      </div>
    </div>
  )
}

CollapsibleBasic.displayName = 'CollapsibleBasic'

CollapsibleBasic.propTypes = {
  /**
   * label to be displayed.
   */
  label: PropTypes.node.isRequired,
  /**
   * children to be displayed when expanding component.
   */
  children: PropTypes.node.isRequired,
  /**
   * icon to be displayed.
   */
  icon: PropTypes.func,
  /**
   * first state.
   */
  collapsed: PropTypes.bool,
  /**
   * Click handler. Receives a boolean telling if the component is (or is being) collapsed.
   */
  handleClick: PropTypes.func,
  /**
   * Flag to hide the icon that triggers expand/collapse event.
   */
  hideTriggerIcon: PropTypes.bool,
  /**
   * Allow click in the label to open or close it
   */
  isClickable: PropTypes.bool,
  /**
   * Id of the component, used to generate the content id
   */
  id: PropTypes.string.isRequired,
  /**
   * Customise the speed of the transition animation: normal 0.3s, fast: 0.15s
   */
  animationSpeed: PropTypes.oneOf(Object.keys(ANIMATION_SPEED_CLASSNAMES))
}

CollapsibleBasic.defaultProps = {
  icon: Chevronbottom,
  collapsed: true,
  hideTriggerIcon: false,
  animationSpeed: 'normal',
  isClickable: true,
  handleClick: () => {}
}

export default CollapsibleBasic
