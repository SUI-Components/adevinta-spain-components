import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import LinkBasic from '@schibstedspain/sui-link-basic'

export default function ListLink({
  displayInline,
  list = [],
  useReactRouterLinks
}) {
  const renderLink = (item, index) => {
    const classListItem = cx('sui-ListLink-item', {
      'sui-ListLink-item--inline': displayInline
    })

    return (
      <li className={classListItem} key={index}>
        <LinkBasic {...item} useReactRouterLinks={useReactRouterLinks} />
      </li>
    )
  }

  return <ul className="sui-ListLink">{list.map(renderLink)}</ul>
}

ListLink.displayName = 'ListLink'
ListLink.propTypes = {
  displayInline: PropTypes.bool,
  list: PropTypes.array,
  useReactRouterLinks: PropTypes.bool
}
