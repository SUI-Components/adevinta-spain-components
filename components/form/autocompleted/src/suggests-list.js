import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import ListItem from './list-item'

const SuggestsList = forwardRef((props, ref) => {
  return (
    <ul ref={ref} className="sui-FormAutocompleted-suggests">
      {props.suggests.map((suggest, index) => (
        <ListItem
          {...props}
          key={suggest.id || index}
          item={suggest}
          isActive={index === props.active}
        />
      ))}
    </ul>
  )
})

SuggestsList.propTypes = {
  suggests: PropTypes.array.isRequired,
  active: PropTypes.number
}

export default SuggestsList
