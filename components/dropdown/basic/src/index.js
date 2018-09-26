/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import React, {Component} from 'react'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

/**
 * Dropdown menu containing sections of links, triggered from a simple button
 * with an optional icon.
 */
class DropdownBasic extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      expanded: false,
      collapseByTouch: false
    }
  }

  /**
   * Empty function.
   */
  _doNothing = () => {}

  /**
   * Dropdown wrapper element.
   */
  _wrapper = React.createRef()

  /**
   * Toggle menu state: expanded/collapsed.
   */
  _toggleMenu = expand => {
    const expanded = expand || !this.state.expanded

    this._handleListener(expanded)
    this.setState({expanded})
  }

  /**
   * Mouse over event handler.
   */
  _onMouseOver = () => {
    this.setState({
      expanded: true,
      collapseByTouch: true
    })
  }

  /**
   * Mouse out event handler.
   */
  _onMouseOut = () => {
    this.setState({
      expanded: false,
      collapseByTouch: false
    })
  }

  /**
   * Function rendering menu element.
   */
  _renderMenuItem = ({title, links}, index) => (
    <div key={index} className={'sui-DropdownBasicMenu-item'}>
      {title && (
        <header className={'sui-DropdownBasicMenu-title'}>{title}</header>
      )}
      <ul className={'sui-DropdownBasicMenu-list'}>
        {links.map(this._renderLink)}
      </ul>
    </div>
  )

  /**
   * Function rendering a simple list item link.
   */
  _renderLink = ({onClick, target, text, url}, index) => {
    const Link = this.props.linkFactory
    const onClickHandler = e => {
      onClick && onClick(e)
      this.props.closeOnItemClick && this._toggleMenu(false)
    }

    return (
      <li key={index} className="sui-DropdownBasicMenu-listItem">
        <Link
          href={url}
          className="sui-DropdownBasicMenu-listLink"
          onClick={onClickHandler}
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
  _onDocumentClick = event => {
    const {target} = event
    const isClickOutsideDropdown = !this._wrapper.current.contains(target)

    isClickOutsideDropdown &&
      this.props.closeOnDocumentClick &&
      this._toggleMenu(false)
  }

  /**
   * Document listener handler.
   */
  _handleListener(add) {
    const listenerMethod = add ? 'addEventListener' : 'removeEventListener'
    document[listenerMethod]('click', this._onDocumentClick, false)
  }

  componentDidMount() {
    this.state.expanded && this._handleListener(true)
  }

  componentWillUnmount() {
    this._handleListener(false)
  }

  render() {
    const {expanded, collapseByTouch} = this.state
    const {button, menu, expandOnMouseOver} = this.props
    const {text, icon: Icon} = button
    const ArrowButtonIcon = button.arrowButtonIcon || Chevronbottom
    const wrapperClassName = cx('sui-DropdownBasic', {
      'is-expanded': expanded
    })
    return (
      <div
        className={wrapperClassName}
        onMouseOver={expandOnMouseOver ? this._onMouseOver : this._doNothing}
        onMouseOut={expandOnMouseOver ? this._onMouseOut : this._doNothing}
      >
        <div className="sui-DropdownBasic-buttonWrap">
          <button
            className="sui-DropdownBasic-button"
            onClick={expandOnMouseOver ? this._doNothing : this._toggleMenu}
            onTouchStart={
              expandOnMouseOver && collapseByTouch
                ? this._toggleMenu
                : this._doNothing
            }
          >
            <div className="sui-DropdownBasic-buttonContent">
              {Icon && <Icon svgClass="sui-DropdownBasic-buttonIcon" />}
              <span>{text}</span>
            </div>
            <ArrowButtonIcon svgClass="sui-DropdownBasic-buttonIcon" />
          </button>
        </div>
        <div className="sui-DropdownBasicMenu" ref={this._wrapper}>
          {menu.map(this._renderMenuItem)}
        </div>
      </div>
    )
  }
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
           * Link text.
           */
          text: PropTypes.string.isRequired,
          /**
           * Link url.
           */
          url: PropTypes.string.isRequired,
          /**
           * Link target.
           */
          target: PropTypes.string
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
  linkFactory: ({href, className, children, onClick, target, title}) => (
    <a
      href={href}
      className={className}
      onClick={onClick}
      target={target}
      title={title}
    >
      {children}
    </a>
  ),
  closeOnItemClick: false,
  closeOnDocumentClick: false
}

export default DropdownBasic
