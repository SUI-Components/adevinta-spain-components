import PropTypes from 'prop-types'
import React from 'react'
import Bullet from './bullet.js'
import cx from 'classnames'

const BASE_CLASS = 'sui-ListBullet'

const ListBullet = ({listItems, responsive}) => {
  const listBulletClass = cx(BASE_CLASS, {
    [`${BASE_CLASS}--responsive`]: responsive
  })

  return (
    <div className={listBulletClass}>
      {listItems &&
        listItems.map((item, index) => (
          <Bullet {...item} key={index} baseClass={BASE_CLASS} />
        ))}
    </div>
  )
}

ListBullet.displayName = 'ListBullet'

ListBullet.propTypes = {
  /**
   * List of bullet items
   */
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      illustration: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,

  /**
   * Responsive behaviour
   */
  responsive: PropTypes.bool
}

ListBullet.defaultProps = {
  responsive: false
}

export default ListBullet
