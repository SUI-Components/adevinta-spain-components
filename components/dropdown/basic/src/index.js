/* eslint-disable react/prop-types */
import {useCallback, useEffect, useRef, useState} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Chevronbottom from '@s-ui/react-icons/lib/Chevronbottom'

const BASE_CLASS = 'sui-DropdownBasic'
const MENU_CLASS = `${BASE_CLASS}Menu`
const NO_OP = () => {}

const defaultLinkFactory = ({href, className, children, onClick, rel, tabIndex, target, title}) => (
  <a
    href={href}
    className={className}
    onClick={onClick}
    rel={rel || undefined}
    target={target}
    title={title}
    tabIndex={tabIndex}
  >
    {children}
  </a>
)

/**
 * Dropdown menu containing sections of links, triggered from a simple button
 * with an optional icon.
 */
export default function DropdownBasic({
  button,
  closeOnDocumentClick = false,
  closeOnItemClick = false,
  expandOnMouseOver = false,
  linkFactory = defaultLinkFactory,
  menu,
  onToggleMenu = () => {}
}) {
  const [expanded, setExpanded] = useState(false)
  const [collapseByTouch, setCollapseByTouch] = useState(false)
  const wrapper = useRef(null)

  const toggleMenu = useCallback(
    expand => {
      const newExpanded = typeof expand !== 'undefined' ? expand : !expanded
      setExpanded(newExpanded)
    },
    [expanded]
  )

  useEffect(
    function () {
      const handleListener = add => {
        const listenerMethod = add ? 'addEventListener' : 'removeEventListener'
        document[listenerMethod]('click', onDocumentClick, false)
      }

      const onDocumentClick = event => {
        const {target} = event
        const isClickOutsideDropdown = !wrapper.current.contains(target)

        isClickOutsideDropdown && closeOnDocumentClick && toggleMenu(false)
      }

      handleListener(expanded)
      return () => handleListener(false)
    },
    [expanded, closeOnDocumentClick, toggleMenu]
  )

  const onClick = e => {
    onToggleMenu()
    toggleMenu()
  }

  /**
   * Mouse over event handler.
   */
  const onMouseOver = () => {
    setExpanded(true)
    setCollapseByTouch(true)
  }

  /**
   * Mouse out event handler.
   */
  const onMouseOut = () => {
    setExpanded(false)
    setCollapseByTouch(false)
  }

  /**
   * Function rendering menu element.
   */
  const renderMenuItem = ({title, links, isLastMenu, onMouseOut}, index) => {
    return (
      <div key={index} className={`${MENU_CLASS}-item`}>
        {title && <label className={`${MENU_CLASS}-title`}>{title}</label>}
        <ul className={`${MENU_CLASS}-list`}>
          {links.map((linkProps, index) => {
            const isLastItem = index === links.length - 1
            return renderLink({...linkProps, isLastMenu, onMouseOut, isLastItem}, index)
          })}
        </ul>
      </div>
    )
  }

  /**
   * Function rendering a menu element container.
   */
  const renderMenuItemContainer = ({id, menu, ref, onMouseOut}) => {
    const menuItems = menu.map((menuProps, index) => {
      const isLastMenu = index === menu.length - 1
      return renderMenuItem({...menuProps, onMouseOut, isLastMenu}, index)
    })

    return (
      <div className={MENU_CLASS} ref={ref} id={id}>
        {menuItems}
      </div>
    )
  }

  /**
   * Function rendering a simple list item link.
   */
  const renderLink = ({isLastMenu, isLastItem, onMouseOut, onClick, rel, target, text, url}, index) => {
    const Link = linkFactory
    const onClickHandler = e => {
      onClick && onClick(e)
      closeOnItemClick && toggleMenu(false)
    }

    return (
      <li key={index} className={`${MENU_CLASS}-listItem`}>
        <Link
          href={url}
          className={`${MENU_CLASS}-listLink`}
          onClick={onClickHandler}
          rel={rel || undefined}
          target={target}
          tabIndex={0}
          onBlur={isLastMenu && isLastItem ? onMouseOut : NO_OP}
        >
          {text}
        </Link>
      </li>
    )
  }

  const {text, icon: Icon} = button
  const ArrowButtonIcon = button.arrowButtonIcon || Chevronbottom
  const wrapperClassName = cx(BASE_CLASS, {
    'is-expanded': expanded
  })

  const dropdownContentID = `dropdown-menu-${text.replace(/ /g, '-')}`

  return (
    <div
      className={wrapperClassName}
      onMouseOver={expandOnMouseOver ? onMouseOver : NO_OP}
      onMouseOut={expandOnMouseOver ? onMouseOut : NO_OP}
    >
      <div className={`${BASE_CLASS}-buttonWrap`}>
        <button
          className={`${BASE_CLASS}-button`}
          onClick={onClick}
          onTouchStart={expandOnMouseOver && collapseByTouch ? onClick : NO_OP}
          aria-expanded={expanded}
          aria-haspopup
          aria-controls={dropdownContentID}
          tabIndex={0}
        >
          <span className={`${BASE_CLASS}-buttonContent`}>
            {Icon && (
              <span className={`${BASE_CLASS}-buttonIcon`}>
                <Icon />
              </span>
            )}
            <span>{text}</span>
          </span>
          <span className={`${BASE_CLASS}-buttonIcon`}>
            <ArrowButtonIcon />
          </span>
        </button>
      </div>
      {renderMenuItemContainer({menu, ref: wrapper, id: dropdownContentID, onMouseOut})}
    </div>
  )
}

DropdownBasic.displayName = 'DropdownBasic'

DropdownBasic.propTypes = {
  /**
   * Dropdown button object.
   */
  button: PropTypes.shape({
    /**
     * Optional button icon.
     */
    icon: PropTypes.func,
    /**
     * Button text.
     */
    text: PropTypes.string.isRequired,
    /**
     * Optional arrow button icon.
     */
    arrowButtonIcon: PropTypes.func
  }),
  /**
   * Menu array of sections.
   */
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Menu section title.
       */
      title: PropTypes.string,
      /**
       * Menu section links.
       */
      links: PropTypes.arrayOf(
        PropTypes.shape({
          /**
           * Link rel.
           */
          rel: PropTypes.string,
          /**
           * Link target.
           */
          target: PropTypes.string,
          /**
           * Link text.
           */
          text: PropTypes.string.isRequired,
          /**
           * Link title.
           */
          title: PropTypes.string,
          /**
           * Link url.
           */
          url: PropTypes.string.isRequired
        })
      )
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
   * Flag to close list on item click.
   */
  closeOnItemClick: PropTypes.bool,
  /**
   * Flag to close list on document click.
   */
  closeOnDocumentClick: PropTypes.bool
}
