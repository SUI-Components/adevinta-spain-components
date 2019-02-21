import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import cx from 'classnames'

export default function LinkBasic({
  className,
  disabled,
  handleClick,
  icon,
  literal,
  rel,
  target,
  title,
  useReactRouterLinks,
  url = '#'
}) {
  const linkClassName = cx('sui-LinkBasic', className)
  const renderContent = () =>
    icon && literal ? (
      <span>
        {icon}
        {literal}
      </span>
    ) : (
      literal || icon
    )

  if (disabled) {
    return (
      <span className={linkClassName} onClick={handleClick} title={title}>
        {renderContent()}
      </span>
    )
  }

  if (useReactRouterLinks) {
    return (
      <Link
        className={linkClassName}
        onClick={handleClick}
        rel={rel}
        target={target}
        title={title}
        to={url}
      >
        {renderContent()}
      </Link>
    )
  }

  return (
    <a
      className={linkClassName}
      href={url}
      onClick={handleClick}
      rel={rel}
      target={target}
      title={title}
    >
      {renderContent()}
    </a>
  )
}

LinkBasic.displayName = 'LinkBasic'

LinkBasic.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  icon: PropTypes.element,
  literal: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  useReactRouterLinks: PropTypes.bool
}
