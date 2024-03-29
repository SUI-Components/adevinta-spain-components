import cx from 'classnames'
import PropTypes from 'prop-types'

import CircleX from '@s-ui/react-icons/lib/Circlex'

const Tag = ({Link, children, url, ...rest} = {}) =>
  url ? (
    <Link href={url} {...rest}>
      {children}
    </Link>
  ) : (
    <span {...rest}>{children}</span>
  )

Tag.propTypes = {
  Link: PropTypes.elementType,
  children: PropTypes.element,
  url: PropTypes.string
}

const tagChipClassName = ({isClickable, className = null}) =>
  cx('sui-TagChip', className, {
    'sui-TagChip-link': isClickable
  })

const preventDefaultHandler = handler => event => {
  if (handler) {
    event.preventDefault()
    event.stopPropagation()
    handler.apply()
  }
}

const TagChip = ({
  onRequestDelete,
  onClick,
  label,
  link: url,
  linkFactory,
  className,
  rel,
  title,
  icon: Icon = CircleX
}) => (
  <Tag
    className={tagChipClassName({isClickable: url || onClick, className})}
    Link={linkFactory}
    onClick={preventDefaultHandler(onClick)}
    rel={rel}
    title={title}
    url={url}
  >
    {label}
    {onRequestDelete && (
      <span onClick={preventDefaultHandler(onRequestDelete)} className="sui-TagChip-delete">
        <Icon svgClass="sui-TagChip-deleteIcon" />
      </span>
    )}
  </Tag>
)

TagChip.displayName = 'TagChip'

TagChip.propTypes = {
  /**
   * ClassName to be attached to the component element
   */
  className: PropTypes.string,
  /**
   * onRequestDelete event handler
   */
  onRequestDelete: PropTypes.func,
  /**
   * onClick event handler
   */
  onClick: PropTypes.func,
  /**
   * link url string
   */
  link: PropTypes.string,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func,
  /**
   * tag text
   */
  label: PropTypes.node.isRequired,
  /**
   * Delete custom icon
   */
  icon: PropTypes.func,
  /**
   * Title html attribute
   */
  title: PropTypes.string,
  /**
   * tag rel
   */
  rel: PropTypes.string
}

TagChip.defaultProps = {
  linkFactory: ({children, ...rest} = {}) => <a {...rest}>{children}</a> // eslint-disable-line
}

export default TagChip
