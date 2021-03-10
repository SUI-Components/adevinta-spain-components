/* eslint-disable react/prop-types */
import {useReducer} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {reducerActions, reducerInitialState, reducer} from './reducer'

const DropdownUser = ({
  expandOnMouseOver = false,
  linkFactory: Link = ({href, className, children, title}) => (
    <a href={href} className={className} title={title}>
      {children}
    </a>
  ),
  menu,
  hasNotifications = menu.some(({notifications}) => Boolean(notifications)),
  user
}) => {
  const [state, dispatch] = useReducer(reducer, reducerInitialState)

  const toggleMenu = () => dispatch({type: reducerActions.TOGGLE_MENU})

  const handleMouseOver = () =>
    expandOnMouseOver && dispatch({type: reducerActions.MOUSE_HOVER})

  const handleMouseOut = () =>
    expandOnMouseOver && dispatch({type: reducerActions.MOUSE_OUT})

  const handleClick = () => !expandOnMouseOver && toggleMenu()

  const handleTouchStart = () =>
    expandOnMouseOver && collapseByTouch && toggleMenu()

  const renderLink = (
    {text, url, icon: Icon, notifications, highlight},
    index
  ) => {
    const linkClassName = cx('sui-DropdownUserMenu-listLink', {
      'sui-DropdownUserMenu-listLinkHighlight': highlight
    })

    return (
      <li key={`${text}-${index}`} className="sui-DropdownUserMenu-listItem">
        <Link href={url} className={linkClassName} title={text}>
          <div className="sui-DropdownUserMenu-listIcon">
            <Icon />
          </div>
          <span className="sui-DropdownUserMenu-listText">{text}</span>
          {hasNotifications && (
            <span className="sui-DropdownUserMenu-listNotification">
              {notifications}
            </span>
          )}
        </Link>
      </li>
    )
  }

  const {expanded, collapseByTouch} = state
  const {name, avatar} = user
  const wrapperClassName = cx('sui-DropdownUser', {
    'is-expanded': expanded,
    'has-notifications': hasNotifications
  })

  return (
    <div
      className={wrapperClassName}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className="sui-DropdownUser-button"
        onClick={handleClick}
        onTouchStart={handleTouchStart}
      >
        <div className="sui-DropdownUser-buttonAvatarWrap">
          <img
            className="sui-DropdownUser-buttonAvatar"
            src={avatar}
            alt={`${name}-avatar`}
          />
        </div>
        <span className="sui-DropdownUser-buttonText">{name}</span>
      </div>
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
   * Hasnotifications to show a badge notification.
   */
  hasNotifications: PropTypes.bool
}

export default DropdownUser
