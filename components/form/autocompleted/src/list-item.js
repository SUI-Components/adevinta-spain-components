/* eslint-disable react/jsx-no-bind */
import cx from 'classnames'
import PropTypes from 'prop-types'

export default function ListItem({handleSelect, isActive, item}) {
  const classes = cx('sui-FormAutocompleted-suggestsItem', {
    'is-active': isActive
  })

  return (
    <li className={classes} onClick={handleSelect.bind(null, item)}>
      {item.content}
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.object,
  handleSelect: PropTypes.func,
  isActive: PropTypes.bool
}
