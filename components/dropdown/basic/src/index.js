/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

const NO_OP = () => {}

/**
 * Dropdown menu containing sections of links, triggered from a simple button
 * with an optional icon.
 */
export default function DropdownBasic(props) {
  const [expanded, setExpanded] = useState(false)
  const [collapseByTouch, setCollapseByTouch] = useState(false)
  const wrapper = useRef(null)

  /**
   * Toggle menu state: expanded/collapsed.
   */
  const toggleMenu = expand => {
    const newExpanded = expand || !expanded

    handleListener(newExpanded)
    setExpanded(newExpanded)
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
    <div key={index} className={'sui-DropdownBasicMenu-item'}>
      {title && (
        <header className={'sui-DropdownBasicMenu-title'}>{title}</header>
      )}
      <ul className={'sui-DropdownBasicMenu-list'}>{links.map(renderLink)}</ul>
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
      <li key={index} className="sui-DropdownBasicMenu-listItem">
        <Link
          href={url}
          className="sui-DropdownBasicMenu-listLink"
          onClick={onClickHandler}
          rel={rel}
          target={target}
          title={text}
        >
          {text}
        </Link>
      </li>
    )
  }

  /**
   * Document click event handler.
   */
  const onDocumentClick = event => {
    const {target} = event
    const isClickOutsideDropdown = !wrapper.current.contains(target)

    isClickOutsideDropdown && props.closeOnDocumentClick && toggleMenu(false)
  }

  /**
   * Document listener handler.
   */
  const handleListener = add => {
    const listenerMethod = add ? 'addEventListener' : 'removeEventListener'
    document[listenerMethod]('click', onDocumentClick, false)
  }
  const {button, menu, expandOnMouseOver} = props
  const {text, icon: Icon} = button
  const ArrowButtonIcon = button.arrowButtonIcon || Chevronbottom
  const wrapperClassName = cx('sui-DropdownBasic', {
    'is-expanded': expanded
  })

  return (
    <div
      className={wrapperClassName}
      onMouseOver={expandOnMouseOver ? onMouseOver : NO_OP}
      onMouseOut={expandOnMouseOver ? onMouseOut : NO_OP}
    >
      <div className="sui-DropdownBasic-buttonWrap">
        <button
          className="sui-DropdownBasic-button"
          onClick={expandOnMouseOver ? NO_OP : toggleMenu}
          onTouchStart={
            expandOnMouseOver && collapseByTouch ? toggleMenu : NO_OP
          }
        >
          <div className="sui-DropdownBasic-buttonContent">
            {Icon && <Icon svgClass="sui-DropdownBasic-buttonIcon" />}
            <span>{text}</span>
          </div>
          <ArrowButtonIcon svgClass="sui-DropdownBasic-buttonIcon" />
        </button>
      </div>
      <div className="sui-DropdownBasicMenu" ref={wrapper}>
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
