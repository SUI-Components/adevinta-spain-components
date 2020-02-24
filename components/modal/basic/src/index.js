import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {createPortal} from 'react-dom'
import IconX from '@s-ui/react-icons/lib/X'
import cx from 'classnames'

const CLASS_MODAL_OPEN = 'is-modal-open'

class ModalBasic extends Component {
  contentDOMEl = React.createRef()

  wrapperDOMEl = React.createRef()

  state = {
    isClientReady: false,
    open: this.props.open
  }

  _getContainer() {
    const {portalContainerId} = this.props
    let containerDOMEl = document.getElementById(portalContainerId)
    // if container is not created, create it and attach to the body
    if (!containerDOMEl) {
      containerDOMEl = document.createElement('div')
      containerDOMEl.id = portalContainerId
      document.body.appendChild(containerDOMEl)
    }
    return containerDOMEl
  }

  _preventScrollIfNeeded = e => {
    if (this.noScroll) e.preventDefault()
  }

  _avoidOverscroll = () => {
    const {current} = this.contentDOMEl
    const {clientHeight, offsetHeight, scrollTop, scrollHeight} = current
    const currentScroll = scrollTop + offsetHeight
    // check if the content has to scroll in order to prevent the default
    // behaviour of the touchmove in case we don't need the scroll
    // that fixes the weird overscroll on ios and android
    this.noScroll = scrollHeight <= clientHeight

    if (scrollTop === 0) {
      current.scrollTop = 1
    } else if (currentScroll >= scrollHeight) {
      current.scrollTop = scrollTop - 1
    }
  }

  _closeModal = () => {
    this._toggleWindowScroll(false)
    this.setState({open: false})
    this.props.onClose()
  }

  _toggleWindowScroll(disableScroll) {
    const {classList} = window.document.body
    disableScroll
      ? classList.add(CLASS_MODAL_OPEN)
      : classList.remove(CLASS_MODAL_OPEN)
  }

  _handleCloseClick = () => {
    this._closeModal()
  }

  _handleOutsideClick = event => {
    if (
      this.props.closeOnOutsideClick &&
      event.target === this.wrapperDOMEl.current
    ) {
      this._closeModal()
    }
  }

  _renderHeader = () => {
    const {
      header,
      textClose,
      textCloseHidden,
      iconClose: IconClose
    } = this.props

    return (
      <div
        className="sui-ModalBasic-header"
        onTouchMove={e => e.preventDefault()}
      >
        {header}
        <button
          className="sui-ModalBasic-close"
          onClick={this._handleCloseClick}
          type="button"
        >
          <IconClose svgClass="sui-ModalBasic-closeIcon" />
          {textCloseHidden ? (
            <span className="sui-ModalBasic-closeTextHidden">{textClose}</span>
          ) : (
            textClose
          )}
        </button>
      </div>
    )
  }

  _renderModal() {
    const {className, content, header, footer} = this.props

    const wrapperClassName = cx('sui-ModalBasic', className, {
      'is-open': this.state.open,
      'sui-ModalBasic--verticallyCentered': this.props.centerVertically
    })

    const dialogClassName = cx('sui-ModalBasic-dialog', {
      'sui-ModalBasic-dialog--full': this.props.fitWindow
    })

    return (
      <div
        className={wrapperClassName}
        ref={this.wrapperDOMEl}
        onClick={this._handleOutsideClick}
      >
        <div className={dialogClassName}>
          {header && this._renderHeader()}
          <div
            className="sui-ModalBasic-content"
            onTouchStart={this._avoidOverscroll}
            onTouchMove={this._preventScrollIfNeeded}
            ref={this.contentDOMEl}
          >
            {content}
          </div>
          {footer && <div className="sui-ModalBasic-footer">{footer}</div>}
        </div>
      </div>
    )
  }

  componentDidMount() {
    // portals should work only in client, so, if usePortal is enabled
    // we will use a flag in order to render the component only in client
    const {usePortal} = this.props
    if (usePortal) {
      this.setState({isClientReady: true})
    }
  }

  UNSAFE_componentWillReceiveProps({open, disableWindowScroll}) { // eslint-disable-line
    if (disableWindowScroll) {
      this._toggleWindowScroll(open)
    }

    if (open !== this.state.open) {
      this.setState({open})
    }
  }

  componentWillUnmount() {
    this._toggleWindowScroll(false)
  }

  render() {
    const {usePortal} = this.props
    const {isClientReady} = this.state

    const modalElement = this._renderModal()

    if (usePortal) {
      // check if we're in the client using the flag isClientReady
      // as portals are only usable in client
      return isClientReady
        ? createPortal(modalElement, this._getContainer())
        : null
    }

    return modalElement
  }
}

ModalBasic.propTypes = {
  centerVertically: PropTypes.bool,
  className: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
  content: PropTypes.element.isRequired,
  disableWindowScroll: PropTypes.bool,
  fitWindow: PropTypes.bool,
  footer: PropTypes.element,
  header: PropTypes.element,
  iconClose: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  textClose: PropTypes.string,
  textCloseHidden: PropTypes.bool,
  /**
   * Container id element to be used to render the portal. If not available, it will be created for you.
   */
  portalContainerId: PropTypes.string,
  /**
   * Determines if modal will be rendered using a React Portal.
   */
  usePortal: PropTypes.bool
}

ModalBasic.defaultProps = {
  centerVertically: false,
  closeOnOutsideClick: false,
  disableWindowScroll: true,
  fitWindow: false,
  iconClose: IconX,
  onClose: () => {},
  open: false,
  portalContainerId: 'modal-react-portal',
  textClose: 'Close',
  textCloseHidden: true,
  usePortal: false
}

ModalBasic.displayName = 'ModalBasic'

export default ModalBasic
