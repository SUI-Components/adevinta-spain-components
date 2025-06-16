import {useReducer} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import MoleculeBadgeCounter, {moleculeBadgeCounterSizes} from '@s-ui/react-molecule-badge-counter'
import VisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import {reducer, reducerActions, reducerInitialState} from './reducer.js'

const DropdownUser = ({
  expandOnMouseOver = false,
  linkFactory: Link = ({href, className, children, title}) => (
    <a href={href} className={className} title={title}>
      {children}
    </a>
  ),
  menu,
  hasNotifications = menu.some(({notifications}) => Boolean(notifications)),
  user,
  hasBadgeLabel = true
}) => {
  const [state, dispatch] = useReducer(reducer, reducerInitialState)

  const toggleMenu = () => dispatch({type: reducerActions.TOGGLE_MENU})

  const handleMouseOver = () => expandOnMouseOver && dispatch({type: reducerActions.MOUSE_HOVER})

  const handleMouseOut = () => expandOnMouseOver && dispatch({type: reducerActions.MOUSE_OUT})

  const handleTouchStart = () => expandOnMouseOver && collapseByTouch && toggleMenu()

  const renderLink = (
    {accessibleBadgeLabel: linkAccessibleBadgeLabel, onClick, text, url, icon: Icon, notifications, highlight},
    index
  ) => {
    const linkClassName = cx('sui-DropdownUserMenu-listLink', {
      'sui-DropdownUserMenu-listLinkHighlight': highlight
    })

    const handleClick = e => onClick(e)

    const hasLinkNotifications = Boolean(notifications)

    const hasAccessibilityLabel =
      hasLinkNotifications && typeof linkAccessibleBadgeLabel === 'string' && linkAccessibleBadgeLabel.length > 0

    return (
      <li key={`${text}-${index}`} className="sui-DropdownUserMenu-listItem">
        <Link href={url} className={linkClassName} onClick={handleClick}>
          <div className="sui-DropdownUserMenu-listIcon">
            <Icon />
          </div>
          <span className="sui-DropdownUserMenu-listText">{text}</span>
          {hasLinkNotifications && (
            <>
              {hasAccessibilityLabel && <VisuallyHidden>{linkAccessibleBadgeLabel}</VisuallyHidden>}
              <span className="sui-DropdownUserMenu-listNotification">
                <MoleculeBadgeCounter label={!!hasBadgeLabel && notifications} size={moleculeBadgeCounterSizes.SMALL} />
              </span>
            </>
          )}
        </Link>
      </li>
    )
  }

  const {expanded, collapseByTouch} = state
  const {accessibleBadgeLabel, name, avatar} = user
  const wrapperClassName = cx('sui-DropdownUser', {
    'is-expanded': expanded,
    'has-notifications': hasNotifications
  })

  const showAccessibleBadgeLabel =
    hasNotifications && typeof accessibleBadgeLabel === 'string' && accessibleBadgeLabel.length > 0

  return (
    <div className={wrapperClassName} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <button
        className="sui-DropdownUser-button"
        onClick={toggleMenu}
        onTouchStart={handleTouchStart}
        tabIndex={0}
        role="button"
      >
        <div className="sui-DropdownUser-buttonAvatarWrap">
          <img className="sui-DropdownUser-buttonAvatar" src={avatar} alt="" />
        </div>
        <span className="sui-DropdownUser-buttonText">{name}</span>
        {showAccessibleBadgeLabel && <VisuallyHidden>{accessibleBadgeLabel}</VisuallyHidden>}
      </button>
      <div className="sui-DropdownUserMenu-wrap">
        <div className="sui-DropdownUserMenu">
          <ul className="sui-DropdownUserMenu-list">{menu.map(renderLink)}</ul>
        </div>
      </div>
    </div>
  )
}

DropdownUser.displayName = 'DropdownUser'

DropdownUser.propTypes = {
  /**
   * Dropdown user object.
   */
  user: PropTypes.shape({
    /**
     * Accessible text when user has notifications.
     */
    accessibleBadgeLabel: PropTypes.string,
    /**
     * User name.
     */
    name: PropTypes.string.isRequired,
    /**
     * User avatar.
     */
    avatar: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Dropdown user menu.
   */
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Accessible text when user has notifications.
       */
      accessibleBadgeLabel: PropTypes.string,
      /**
       * Menu links text.
       */
      text: PropTypes.string.isRequired,
      /**
       * Menu links url.
       */
      url: PropTypes.string.isRequired,
      /**
       * Menu links icon.
       */
      icon: PropTypes.func.isRequired,
      /**
       * Menu links notification.
       */
      notifications: PropTypes.number
    })
  ).isRequired,
  /**
   * Flag to expand on mouse over event.
   */
  expandOnMouseOver: PropTypes.bool,
  /**
   * Factory for the component that will hold the menu links.
   */
  linkFactory: PropTypes.func,
  /**
   * hasnotifications to show a badge notification.
   */
  hasNotifications: PropTypes.bool,
  /**
   * hasBadgeLabel to show a counter in the badge notification.
   */
  hasBadgeLabel: PropTypes.bool
}

export default DropdownUser
