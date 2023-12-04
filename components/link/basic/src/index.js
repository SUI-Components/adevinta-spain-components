import cx from 'classnames'
import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'
import {Link} from '@s-ui/react-router'

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
  as = 'a',
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
  const BASE_CLASS = 'sui-LinkBasic'
  const linkBasicClassName = cx(BASE_CLASS, className)
  const content = renderContent(icon, literal)
  const isAnchor = as === 'a'
  const commonProps = {
    className: linkBasicClassName,
    rel,
    title
  }
  const anchorProps = {
    href: url,
    target
  }
  const linkProps = {
    target,
    to: url
  }

  const onClick = event => {
    handleClick && handleClick(event)

    if (!isAnchor) {
      window.location.href = url
    }
  }

  if (disabled) {
    return (
      <span onClick={handleClick} {...commonProps}>
        {content}
      </span>
    )
  }

  if (useReactRouterLinks) {
    return (
      <Link onClick={handleClick} {...commonProps} {...linkProps}>
        {content}
      </Link>
    )
  }

  return (
    <PolymorphicElement as={as} onClick={onClick} {...commonProps} {...(isAnchor ? anchorProps : {})}>
      {content}
    </PolymorphicElement>
  )
}

LinkBasic.displayName = 'LinkBasic'

LinkBasic.propTypes = {
  as: PropTypes.string,
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
