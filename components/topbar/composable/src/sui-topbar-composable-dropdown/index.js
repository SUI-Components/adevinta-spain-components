import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

function DropdownMenu({caret, classname, entries, icon, label, renderOnClick}) {
  const [displayMenu, setDisplayMenu] = useState(false)
  const [renderBody, setRenderBody] = useState(false)
  const wrapperRef = useRef()

  const closeMenu = ({target}) => {
    const isClickOutsideDropdown = !wrapperRef.current.contains(target)
    isClickOutsideDropdown && setDisplayMenu(false)
  }

  const toggle = e => {
    e.stopPropagation()
    setDisplayMenu(!displayMenu)
    if (renderOnClick) setRenderBody(true)
  }

  useEffect(function() {
    document.body.addEventListener('click', closeMenu)
    return () => document.body.removeEventListener('click', closeMenu)
  })

  const activeMenu = cx('sui-DropdownMenu-wrapper', classname, {
    'sui-DropdownMenu-wrapper--active': displayMenu
  })

  const visibleDropdown = cx('sui-DropdownMenu-body', {
    'sui-DropdownMenu-body--visible': displayMenu
  })

  return (
    <div className={activeMenu}>
      <div className="sui-DropdownMenu" ref={wrapperRef}>
        <div className="sui-DropdownMenu-header" onClick={toggle}>
          {icon}
          {label && (
            <span className="sui-DropdownMenu-headerMainLabel">{label}</span>
          )}
          {caret}
        </div>
        {(!renderOnClick || renderBody) && (
          <ul className={visibleDropdown}>{entries}</ul>
        )}
      </div>
    </div>
  )
}

export default React.memo(DropdownMenu, () => true)

DropdownMenu.propTypes = {
  caret: PropTypes.element,
  classname: PropTypes.string,
  entries: PropTypes.array,
  icon: PropTypes.element,
  label: PropTypes.string,
  renderOnClick: PropTypes.bool
}
