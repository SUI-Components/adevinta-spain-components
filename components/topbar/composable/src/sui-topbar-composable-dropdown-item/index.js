import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const getClasses = ({active, disabled}) =>
  cx('sui-DropdownMenuItem', {
    'sui-DropdownMenuItem--disabled': disabled,
    'sui-DropdownMenuItem--active': active
  })

function DropdownMenuItem({active = false, children, disabled}) {
  const className = getClasses({active, disabled})
  return <li className={className}>{children}</li>
}

DropdownMenuItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element
}

export default React.memo(DropdownMenuItem)
