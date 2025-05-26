/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomButton, {atomButtonSizes} from '@s-ui/react-atom-button'
import DropdownBasic from '@s-ui/react-dropdown-basic'
import DropdownUser from '@s-ui/react-dropdown-user'
import useIsomorphicLayoutEffect from '@s-ui/react-hooks/lib/useIsomorphicLayoutEffect/index.js'
import Menu from '@s-ui/react-icons/lib/Menu'

const noop = () => {}

const DEFAULT_NAV_WRAP_STYLE = {
  top: 'inherit',
  left: 'inherit',
  height: 'inherit',
  width: 'inherit'
}
const HTML_HAS_SCROLL_DISABLED = 'html-has-scroll-disabled'
const BODY_HAS_SCROLL_DISABLED = 'body-has-scroll-disabled'

const TITLE_CLASS_NAME = 'sui-TopbarUser-title'
const FLOW_BUTTON_CLASS_NAME = 'sui-TopbarUser-navButton'

const renderBrand = ({showBrandIcon, linkFactory: Link, brand}) => {
  const {icon: BrandIcon, image: BrandImage, name, url, asH1} = brand

  const brandLink = showBrandIcon ? (
    <Link href={url} className="sui-TopbarUser-brandIcon" title={name}>
      <BrandIcon />
    </Link>
  ) : (
    <Link href={url} className="sui-TopbarUser-brand" title={name}>
      {BrandImage ? <BrandImage /> : name}
    </Link>
  )

  return asH1 ? <h1 className="sui-TopbarUser-heading">{brandLink}</h1> : brandLink
}

/**
 * Render main navigation function.
 */
const renderNavMain =
  ({isToggleHidden, linkFactory}) =>
  ({icon, label: text, menu, arrowButtonIcon, onClick = noop}, index) => {
    const handleToggleMenu = () => onClick()

    return (
      <DropdownBasic
        key={index}
        button={{icon, text, arrowButtonIcon}}
        menu={menu}
        expandOnMouseOver={isToggleHidden}
        linkFactory={linkFactory}
        onToggleMenu={handleToggleMenu}
      />
    )
  }

/**
 * Topbar containing a dropdown with user data (login, logout, secured links...).
 */
export default function TopbarUser({
  brand,
  customContent,
  elementsToKeepScrollOnToggleMenu = [],
  linkFactory = ({href, className, children, target, title}) => (
    <a href={href} className={className} target={target} title={title}>
      {children}
    </a>
  ),
  navButton,
  navCTA,
  navCTALogin,
  navMain,
  navUser,
  onToggle = () => {},
  shouldDisplayNavUser = true,
  shouldDisplayToggle = true,
  showBrandIcon = false,
  title,
  toggleAriaProps = {},
  toggleIcon = Menu
}) {
  const _topbarUserNode = useRef(null)
  const _topbarUserToggleNode = useRef(null)
  const _windowWidth = useRef()
  const [menuExpanded, setMenuExpanded] = useState(false)
  const [isToggleHidden, setToggleHidden] = useState(false)
  const [navWrapStyle, setNavWrapStyle] = useState(DEFAULT_NAV_WRAP_STYLE)

  /**
   * Set navigation wrap inline styles.
   */
  const _setNavWrapStyles = () => {
    const {top, left, height, width} = _topbarUserNode.current.getBoundingClientRect()
    const navWrapTop = top + height
    setNavWrapStyle({
      top: navWrapTop,
      left,
      height: window.innerHeight - navWrapTop,
      width
    })
  }

  /**
   * Toggle menu state: expanded/collapsed.
   */
  const _toggleMenu = () => {
    const nextState = !menuExpanded

    setMenuExpanded(nextState)
    onToggle({
      isOpen: nextState
    })
  }

  /**
   * Handle click on navigation wrap.
   */
  const _handleNavWrapClick = ({target, currentTarget}) => {
    if (menuExpanded && target === currentTarget) {
      _toggleMenu()
    }
  }

  useIsomorphicLayoutEffect(() => {
    // Early return if not on client
    if (window === undefined) return
    /**
     * Set the display state for toggle button.
     */
    const _setToggleDisplayState = () => {
      if (!shouldDisplayToggle) return
      // Only go on if user has been resized the browser window horizontally.
      if (window.innerWidth === _windowWidth.current) return
      // Then save the new global value again.
      _windowWidth.current = window.innerWidth
      const {display} = window.getComputedStyle(_topbarUserToggleNode.current)
      const isToggleCurrentlyHidden = display === 'none'

      if (!isToggleCurrentlyHidden) {
        _setNavWrapStyles()
      }
      if (isToggleCurrentlyHidden !== isToggleHidden) {
        setToggleHidden(isToggleCurrentlyHidden)
      }
    }

    _setToggleDisplayState()
    window.addEventListener('resize', _setToggleDisplayState)

    return () => {
      window.removeEventListener('resize', _setToggleDisplayState)
    }
  }, [isToggleHidden])

  useEffect(() => {
    let _verticalScrollPosition
    /**
     * Lock body element scroll.
     */
    const _lockBodyScroll = () => {
      _verticalScrollPosition = window.scrollY
      const transformStyleToKeepScroll = `translate3d(0, -${_verticalScrollPosition}px, 0)`
      window.document.documentElement.classList.add(HTML_HAS_SCROLL_DISABLED)
      window.document.body.classList.add(BODY_HAS_SCROLL_DISABLED)
      elementsToKeepScrollOnToggleMenu.forEach(selector => {
        document.querySelector(selector).style.transform = transformStyleToKeepScroll
      })
    }

    /**
     * Unlock body element scroll.
     */
    const _unlockBodyScroll = () => {
      elementsToKeepScrollOnToggleMenu.forEach(selector => {
        const element = document.querySelector(selector)
        if (element) element.style.transform = ''
      })
      window.document.documentElement.classList.remove(HTML_HAS_SCROLL_DISABLED)
      window.document.body.classList.remove(BODY_HAS_SCROLL_DISABLED)
      elementsToKeepScrollOnToggleMenu.length && window.scrollTo(0, _verticalScrollPosition)
    }

    // Given toggle button is hidden in desktop.
    // Then we must not lock/unlock body there
    if (isToggleHidden) return

    if (menuExpanded) {
      _lockBodyScroll()
    } else {
      _unlockBodyScroll()
    }
  }, [menuExpanded, isToggleHidden, elementsToKeepScrollOnToggleMenu])

  const ToggleIcon = toggleIcon

  const {avatar, name, menu, hasUserBadgeLabel} = navUser
  const navWrapClassName = cx('sui-TopbarUser-navWrap', {
    'is-expanded': menuExpanded
  })
  const hasNotifications = navUser.menu.some(({notifications}) => Boolean(notifications))
  const toggleMenuClassName = cx('sui-TopbarUser-toggle', {
    'has-notifications': hasNotifications
  })

  const handleCTAclick = navCTA && navCTA.onClick
  const handleCTALoginClick = navCTALogin && navCTALogin.onClick
  const mainMenuId = 'main-menu'

  return (
    <div ref={_topbarUserNode} className="sui-TopbarUser">
      <div className="sui-TopbarUser-wrap">
        {navButton ? <div className={FLOW_BUTTON_CLASS_NAME}>{navButton}</div> : null}
        {shouldDisplayToggle ? (
          <button
            aria-expanded={menuExpanded}
            aria-haspopup="true"
            aria-controls={mainMenuId}
            ref={_topbarUserToggleNode}
            className={toggleMenuClassName}
            onClick={_toggleMenu}
            {...toggleAriaProps}
          >
            <ToggleIcon svgClass="sui-TopbarUser-toggleIcon" />
          </button>
        ) : (
          <></>
        )}
        {renderBrand({brand, linkFactory, showBrandIcon})}
        {title ? <div className={TITLE_CLASS_NAME}>{title}</div> : null}
        <div
          className={navWrapClassName}
          style={isToggleHidden ? DEFAULT_NAV_WRAP_STYLE : navWrapStyle}
          onClick={_handleNavWrapClick}
          id={mainMenuId}
        >
          <div className="sui-TopbarUser-nav">
            <div className="sui-TopbarUser-navMain">{navMain.map(renderNavMain({isToggleHidden, linkFactory}))}</div>
            {shouldDisplayNavUser && (
              <div className="sui-TopbarUser-navUser">
                <DropdownUser
                  user={{avatar, name}}
                  menu={menu}
                  expandOnMouseOver
                  hasNotifications={hasNotifications && !menuExpanded}
                  linkFactory={linkFactory}
                  hasBadgeLabel={hasUserBadgeLabel}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {customContent ? <div className="sui-TopbarUser-customContent">{customContent}</div> : <></>}
      <div className="sui-TopbarUser-cta">
        {navCTALogin && !customContent && (
          <div className="sui-TopbarUser-ctaAccess">
            <AtomButton
              aria-haspopup="dialog"
              design={'outline'}
              href={navCTALogin.url}
              shape={navCTALogin.shape}
              size={atomButtonSizes.SMALL}
              onClick={handleCTALoginClick}
            >
              {navCTALogin.text}
            </AtomButton>
          </div>
        )}
        {navCTA && !customContent && (
          <div className="sui-TopbarUser-ctaButton">
            <AtomButton
              link
              linkFactory={linkFactory}
              design={'solid'}
              href={navCTA.url}
              {...(navCTA.icon && {
                leftIcon: <navCTA.icon svgClass="sui-TopbarUser-ctaButtonIcon" />
              })}
              shape={navCTA.shape}
              size={atomButtonSizes.SMALL}
              onClick={handleCTAclick}
            >
              {navCTA.text}
            </AtomButton>
          </div>
        )}
      </div>
    </div>
  )
}

TopbarUser.displayName = 'TopbarUser'

TopbarUser.propTypes = {
  /**
   * Render custom node as flow button
   */
  navButton: PropTypes.node,
  /**
   * Optional toggle icon.
   */
  toggleIcon: PropTypes.func,
  /**
   * Brand object.
   */
  brand: PropTypes.shape({
    /**
     * Brand image.
     */
    image: PropTypes.node,
    /**
     * Brand name.
     */
    name: PropTypes.string.isRequired,
    /**
     * Brand url.
     */
    url: PropTypes.string.isRequired
  }).isRequired,
  /**
   * Main navigation containing an array of dropdown menus.
   */
  navMain: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Nav optional icon.
       */
      icon: PropTypes.func,
      /**
       * Nav label.
       */
      label: PropTypes.string,
      /**
       * Nav menu.
       */
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Nav menu section title.
           */
          title: PropTypes.string,
          /**
           * Nav menu section links.
           */
          links: PropTypes.arrayOf(
            PropTypes.shape({
              /**
               * Menu link text.
               */
              text: PropTypes.string.isRequired,
              /**
               * Menu link url.
               */
              url: PropTypes.string.isRequired,
              /**
               * Menu link target.
               */
              target: PropTypes.string
            })
          )
        })
      )
    })
  ),
  /**
   * Dropdown user visibility
   */
  shouldDisplayNavUser: PropTypes.bool,
  /**
   * Toggle icon visibility
   */
  shouldDisplayToggle: PropTypes.bool,
  /**
   * Dropdown user object.
   */
  navUser: PropTypes.shape({
    /**
     * User name.
     */
    name: PropTypes.string.isRequired,
    /**
     * User avatar.
     */
    avatar: PropTypes.string.isRequired,
    /**
     * User menu.
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
         * Menu highlighted links.
         */
        highlight: PropTypes.bool
      })
    ),
    /**
     * hasUserBadgeLabel to show a counter in the badge notification.
     */
    hasUserBadgeLabel: PropTypes.bool
  }).isRequired,
  /**
   * Render custom content instead of a CTA.
   * If a customContent is provided, it's rendered instead of a navCTA
   */
  customContent: PropTypes.node,
  /**
   * CTA data.
   */
  navCTA: PropTypes.shape({
    /**
     * Call to action url.
     */
    url: PropTypes.string.isRequired,
    /**
     * Call to action optional icon.
     */
    icon: PropTypes.func,
    /**
     * Call to action text.
     */
    text: PropTypes.string.isRequired,
    /**
     * Call to action click handler.
     */
    onClick: PropTypes.func,
    /**
     * Atom shape customizable.
     */
    shape: PropTypes.string
  }),
  /**
   * CTALogin data.
   */
  navCTALogin: PropTypes.shape({
    /**
     * Call to action url.
     */
    url: PropTypes.string,
    /**
     * Call to action optional icon.
     */
    icon: PropTypes.func,
    /**
     * Call to action text.
     */
    text: PropTypes.string.isRequired,
    /**
     * Call to action click handler.
     */
    onClick: PropTypes.func,
    /**
     * Atom shape customizable.
     */
    shape: PropTypes.string
  }),
  /**
   * Factory for the component that will hold any link.
   */
  linkFactory: PropTypes.func,
  /**
   * Array of elements to keep scroll while side menu is being toggled (since
   * we are fixing the `body` element position due to momentum scrolling on iOS).
   */
  elementsToKeepScrollOnToggleMenu: PropTypes.arrayOf(PropTypes.string),
  /**
   * Function that is being executed each time use toggle topbar with the state
   */
  onToggle: PropTypes.func,
  /**
   * Boolean to determines whether the Brand Icon should be shown, instead of Brand image
   */
  showBrandIcon: PropTypes.bool,
  /**
   * Render custom node as title
   */
  title: PropTypes.node,
  /**
   * Accessibility props for menu toggle button
   */
  toggleAriaProps: PropTypes.object
}
