/* eslint-disable react/prop-types */
import React, {useCallback, useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

const BASE_CLASS = 'sui-DropdownBasic'
const MENU_CLASS = `${BASE_CLASS}Menu`
const NO_OP = () => {}

/**
 * Dropdown menu containing sections of links, triggered from a simple button
 * with an optional icon.
 */
export default function DropdownBasic(props) {
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
    function() {
      const handleListener = add => {
        const listenerMethod = add ? 'addEventListener' : 'removeEventListener'
        document[listenerMethod]('click', onDocumentClick, false)
      }

      const onDocumentClick = event => {
        const {target} = event
        const isClickOutsideDropdown = !wrapper.current.contains(target)

        isClickOutsideDropdown &&
          props.closeOnDocumentClick &&
          toggleMenu(false)
      }

      handleListener(expanded)
      return () => handleListener(false)
    },
    [expanded, props.closeOnDocumentClick, toggleMenu]
  )

  const onClick = e => {
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
  const renderMenuItem = ({title, links}, index) => (
    <div key={index} className={`${MENU_CLASS}-item`}>
      {title && <header className={`${MENU_CLASS}-title`}>{title}</header>}
      <ul className={`${MENU_CLASS}-list`}>{links.map(renderLink)}</ul>
    </div>
  )

  /**
   * Function rendering a simple list item link.
   */
  const renderLink = ({onClick, rel, target, text, url}, index) => {
    const Link = props.linkFactory
    const onClickHandler = e => {
      onClick && onClick(e)
      props.closeOnItemClick && toggleMenu(false)
    }

    return (
      <li key={index} className={`${MENU_CLASS}-listItem`}>
        <Link
          href={url}
          className={`${MENU_CLASS}-listLink`}
          onClick={onClickHandler}
          rel={rel || undefined}
          target={target}
          title={text}
        >
          {text}
        </Link>
      </li>
    )
  }

  const {button, menu, expandOnMouseOver} = props
  const {text, icon: Icon} = button
  const ArrowButtonIcon = button.arrowButtonIcon || Chevronbottom
  const wrapperClassName = cx(BASE_CLASS, {
    'is-expanded': expanded
  })

  return (
    <div
      className={wrapperClassName}
      onMouseOver={expandOnMouseOver ? onMouseOver : NO_OP}
      onMouseOut={expandOnMouseOver ? onMouseOut : NO_OP}
    >
      <div className={`${BASE_CLASS}-buttonWrap`}>
        <button
          className={`${BASE_CLASS}-button`}
          onClick={expandOnMouseOver ? NO_OP : onClick}
          onTouchStart={expandOnMouseOver && collapseByTouch ? onClick : NO_OP}
        >
          <div className={`${BASE_CLASS}-buttonContent`}>
            {Icon && <Icon svgClass={`${BASE_CLASS}-buttonIcon`} />}
            <span>{text}</span>
          </div>
          <ArrowButtonIcon svgClass={`${BASE_CLASS}-buttonIcon`} />
        </button>
      </div>
      <div className={MENU_CLASS} ref={wrapper}>
        {menu.map(renderMenuItem)}
      </div>
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

DropdownBasic.defaultProps = {
  expandOnMouseOver: false,
  linkFactory: ({href, className, children, onClick, rel, target, title}) => (
    <a
      href={href}
      className={className}
      onClick={onClick}
      rel={rel || undefined}
      target={target}
      title={title}
    >
      {children}
    </a>
  ),
  closeOnItemClick: false,
  closeOnDocumentClick: false
}
