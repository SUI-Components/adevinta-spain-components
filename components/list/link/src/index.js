import cx from 'classnames'
import PropTypes from 'prop-types'

import LinkBasic from '@s-ui/react-link-basic'

function ListLinkItem({displayInline, item, useReactRouterLinks}) {
  const className = cx('sui-ListLink-item', {
    'sui-ListLink-item--inline': displayInline
  })

  return (
    <li className={className}>
      <LinkBasic {...item} useReactRouterLinks={useReactRouterLinks} />
    </li>
  )
}

ListLinkItem.propTypes = {
  displayInline: PropTypes.bool,
  item: PropTypes.object,
  useReactRouterLinks: PropTypes.bool
}

export default function ListLink({displayInline, list = [], useReactRouterLinks}) {
  return (
    <ul className="sui-ListLink">
      {list.map((item, index) => (
        <ListLinkItem key={index} item={item} displayInline={displayInline} useReactRouterLinks={useReactRouterLinks} />
      ))}
    </ul>
  )
}

ListLink.displayName = 'ListLink'
ListLink.propTypes = {
  displayInline: PropTypes.bool,
  list: PropTypes.array,
  useReactRouterLinks: PropTypes.bool
}
