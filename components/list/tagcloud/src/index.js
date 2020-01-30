import PropTypes from 'prop-types'
import React from 'react'
import TagChip from '@schibstedspain/sui-tag-chip'

const defaultLinkFactory = ({href, className, children}) => ( // eslint-disable-line
  <a href={href} className={className}>
    {children}
  </a>
)

const ListTagcloud = ({tags, linkFactory = defaultLinkFactory}) => (
  <div className="sui-ListTagcloud">
    {tags.map((tagProps, index) => (
      <TagChip key={index} linkFactory={linkFactory} {...tagProps} />
    ))}
  </div>
)

ListTagcloud.displayName = 'ListTagcloud'

ListTagcloud.propTypes = {
  /**
   * List of tag objects
   */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * tag text
       */
      label: PropTypes.node.isRequired,
      /**
       * URL for the tab link
       */
      link: PropTypes.string
    })
  ).isRequired,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func
}

export default ListTagcloud
