/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'
import cx from 'classnames'
import Menu from '@s-ui/react-icons/lib/Menu'
import DropdownBasic from '@s-ui/react-dropdown-basic'
import DropdownUser from '@s-ui/react-dropdown-user'
import AtomButton from '@s-ui/react-atom-button'

const DEFAULT_NAV_WRAP_STYLE = {
  top: 'inherit',
  left: 'inherit',
  height: 'inherit',
  width: 'inherit'
}
const HTML_HAS_SCROLL_DISABLED = 'html-has-scroll-disabled'
const BODY_HAS_SCROLL_DISABLED = 'body-has-scroll-disabled'

/**
 * Topbar containing a dropdown with user data (login, logout, secured links...).
 */
export default function TopbarUser({
  shouldDisplayNavUser = true,
  toggleIcon = Menu,
  brand,
  navMain,
  navUser,
  navCTA,
  linkFactory = ({href, className, children, target, title}) => (
    <a href={href} className={className} target={target} title={title}>
      {children}
    </a>
  ),
  onToggle = () => {},
  elementsToKeepScrollOnToggleMenu = []
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
    const {
      top,
      left,
      height,
      width
    } = _topbarUserNode.current.getBoundingClientRect()
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

  useLayoutEffect(() => {
    /**
     * Set the display state for toggle button.
     */
    const _setToggleDisplayState = () => {
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
        document.querySelector(
          selector
        ).style.transform = transformStyleToKeepScroll
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
      elementsToKeepScrollOnToggleMenu.length &&
        window.scrollTo(0, _verticalScrollPosition)
    }

    if (menuExpanded && !isToggleHidden) {
      _lockBodyScroll()
    } else {
      _unlockBodyScroll()
    }
  }, [menuExpanded, isToggleHidden, elementsToKeepScrollOnToggleMenu])

  /**
   * Render main navigation function.
   */
  const _renderNavMain = isToggleHidden => (
    {icon, label: text, menu, arrowButtonIcon},
    index
  ) => {
    return (
      <DropdownBasic
        key={index}
        button={{icon, text, arrowButtonIcon}}
        menu={menu}
        expandOnMouseOver={isToggleHidden}
        linkFactory={linkFactory}
      />
    )
  }

  const Link = linkFactory
  const ToggleIcon = toggleIcon
  const {name: brandName, url: brandUrl} = brand
  const {avatar, name, menu} = navUser
  const navWrapClassName = cx('sui-TopbarUser-navWrap', {
    'is-expanded': menuExpanded
  })
  const hasNotifications = navUser.menu.some(({notifications}) =>
    Boolean(notifications)
  )
  const toggleMenuClassName = cx('sui-TopbarUser-toggle', {
    'has-notifications': hasNotifications
  })
  const {
    url: navCtaUrl,
    text: navCtaText,
    onClick: onCTAClick = () => {}
  } = navCTA

  return (
    <div ref={_topbarUserNode} className="sui-TopbarUser">
      <div className="sui-TopbarUser-wrap">
        <button
          ref={_topbarUserToggleNode}
          className={toggleMenuClassName}
          onClick={_toggleMenu}
        >
          <ToggleIcon svgClass="sui-TopbarUser-toggleIcon" />
        </button>
        <Link
          href={brandUrl}
          className="sui-TopbarUser-brand"
          title={brandName}
        >
          {brandName}
        </Link>
        <div
          className={navWrapClassName}
          style={isToggleHidden ? DEFAULT_NAV_WRAP_STYLE : navWrapStyle}
          onClick={_handleNavWrapClick}
        >
          <div className="sui-TopbarUser-nav">
            <div className="sui-TopbarUser-navMain">
              {navMain.map(_renderNavMain(isToggleHidden))}
            </div>
            {shouldDisplayNavUser && (
              <div className="sui-TopbarUser-navUser">
                <DropdownUser
                  user={{avatar, name}}
                  menu={menu}
                  expandOnMouseOver
                  hasNotifications={hasNotifications && !menuExpanded}
                  linkFactory={linkFactory}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sui-TopbarUser-ctaButton">
        <AtomButton
          link
          href={navCtaUrl}
          title={navCtaText}
          leftIcon={<navCTA.icon svgClass="sui-TopbarUser-ctaButtonIcon" />}
          size="small"
          type="primary"
          onClick={onCTAClick}
        >
          {navCtaText}
        </AtomButton>
      </div>
    </div>
  )
}

TopbarUser.displayName = 'TopbarUser'

TopbarUser.propTypes = {
  /**
   * Optional toggle icon.
   */
  toggleIcon: PropTypes.func,
  /**
   * Brand object.
   */
  brand: PropTypes.shape({
    /**
     * Brand url.
     */
    url: PropTypes.string.isRequired,
    /**
     * Brand name.
     */
    name: PropTypes.string.isRequired
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
    )
  }).isRequired,
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
    onClick: PropTypes.func
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
  onToggle: PropTypes.func
}
