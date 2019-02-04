import PropTypes from 'prop-types'
import React from 'react'
import DropdownMenu from './sui-topbar-composable-dropdown'
import DropdownMenuItem from './sui-topbar-composable-dropdown-item'

export default function TopbarComposable({left, right}) {
  return (
    <header className="sui-Topbarmenu">
      <div className="sui-Topbarmenu-left">{left}</div>
      <div className="sui-Topbarmenu-right">{right}</div>
    </header>
  )
}

TopbarComposable.displayName = 'TopbarComposable'
TopbarComposable.propTypes = {
  left: PropTypes.array,
  right: PropTypes.array
}

export {DropdownMenu, DropdownMenuItem}
