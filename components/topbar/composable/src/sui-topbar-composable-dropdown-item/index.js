import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

function DropdownMenuItem({active, children, disabled}) {
  const classesContainer = cx('sui-DropdownMenuItem', {
    'sui-DropdownMenuItem--disabled': disabled,
    'sui-DropdownMenuItem--active': active
  })

  return <li className={classesContainer}>{children}</li>
}

DropdownMenuItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.element
}

DropdownMenuItem.defaultProps = {
  active: false
}

export default React.memo(DropdownMenuItem)
