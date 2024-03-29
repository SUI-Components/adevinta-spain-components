/* eslint-disable react/prop-types */
import cx from 'classnames'
import PropTypes from 'prop-types'

import Bell from '@s-ui/react-icons/lib/Bell'
import Check from '@s-ui/react-icons/lib/Check'
import Info from '@s-ui/react-icons/lib/Info'

const icons = {
  info: Info,
  error: Bell,
  success: Check
}

function _renderAction({handle, text, className}) {
  const actionClassName = cx(`sui-AlertBasic-button`, {
    [className]: !!className
  })
  return (
    <button className={actionClassName} onClick={handle}>
      {text}
    </button>
  )
}

function _renderActions(actions) {
  return <div className="sui-AlertBasic-actions">{actions.map((action, index) => _renderAction(action))}</div>
}

export default function AlertBasic({type, children, icon, actions, iconClose: IconClose, handleClose}) {
  const AlertIcon = icon || icons[type]
  return (
    <div>
      <div className={`sui-AlertBasic sui-AlertBasic--${type}`}>
        {IconClose && (
          <button className="sui-AlertBasic-buttonClose" onClick={handleClose}>
            <IconClose svgClass="sui-AlertBasic-buttonCloseIcon" />
          </button>
        )}
        <div className="sui-AlertBasic-message">
          <div>
            <AlertIcon svgClass="sui-AlertBasic-icon" />
          </div>
          <div>{children}</div>
        </div>
        {actions && !!actions.length && _renderActions(actions)}
      </div>
    </div>
  )
}

AlertBasic.propTypes = {
  type: PropTypes.oneOf(['info', 'error', 'success']),
  children: PropTypes.element,
  icon: PropTypes.func,
  iconClose: PropTypes.func,
  handleClose: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.func,
      text: PropTypes.string.isRequired,
      className: PropTypes.string
    })
  )
}

AlertBasic.displayName = 'AlertBasic'
