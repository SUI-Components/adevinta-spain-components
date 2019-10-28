import PropTypes from 'prop-types'
import React, {useState} from 'react'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

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
  label
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)
  const handleClick = () => {
    const nextIsCollapsed = !isCollapsed
    setIsCollapsed(nextIsCollapsed)
    onClick(nextIsCollapsed)
  }

  const cssClassNames = cx('sui-CollapsibleBasic', {
    'is-collapsed': isCollapsed,
    'is-expanded': !isCollapsed
  })
  const contentCssClassNames = cx(
    'sui-CollapsibleBasic-collapsibleContent',
    ANIMATION_SPEED_CLASSNAMES[animationSpeed]
  )

  return (
    <div className={cssClassNames}>
      <div
        className="sui-CollapsibleBasic-trigger"
        onClick={isClickable ? handleClick : undefined}
      >
        <div className="sui-CollapsibleBasic-trigger-label">{label}</div>
        {!hideTriggerIcon && (
          <div className="sui-CollapsibleBasic-trigger-iconBox">
            <ArrowIcon
              svgClass="sui-CollapsibleBasic-trigger-iconBox-icon"
              className="sui-CollapsibleBasic-trigger-iconBox-icon"
            />
          </div>
        )}
      </div>
      <div className={contentCssClassNames}>{children}</div>
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
