import React from 'react'
import PropTypes from 'prop-types'
import {Link} from '@s-ui/react-router'
import cx from 'classnames'

const renderContent = (icon, literal) =>
  icon && literal ? (
    <span>
      {icon}
      {literal}
    </span>
  ) : (
    literal || icon
  )

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
  const content = renderContent(icon, literal)

  if (disabled) {
    return (
      <span className={linkClassName} onClick={handleClick} title={title}>
        {content}
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
        {content}
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
      {content}
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
