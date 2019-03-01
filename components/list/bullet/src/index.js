import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const ListBullet = ({listItems, linkFactory, responsive}) => {
  const listBulletClass = cx('sui-ListBullet', {
    'sui-ListBullet--responsive': responsive
  })

  return (
    <div className={listBulletClass}>
      {listItems &&
        listItems.map((item, index) => (
          <div key={index} className="sui-ListBullet-item">
            <img
              className="sui-ListBullet-illustration"
              src={item.illustration}
            />
            <div className="sui-ListBullet-description">
              {item.title && (
                <h3 className="sui-ListBullet-title">{item.title}</h3>
              )}
              {item.description && (
                <p className="sui-ListBullet-text">{item.description}</p>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

ListBullet.displayName = 'ListBullet'

ListBullet.propTypes = {
  /**
   * List of bullet items
   */
  listItems: PropTypes.shape({
    illustration: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func,
  /**
   * Factory used to create navigation links
   */
  responsive: PropTypes.bool
}

ListBullet.defaultProps = {
  linkFactory: ({href, className, children} = {}) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
  responsive: false
}

export default ListBullet
