import PropTypes from 'prop-types'
import TagChip from '@s-ui/react-tag-chip'

const TagDeletableList = ({tags, onDelete}) => (
  <div className="sui-TagDeletableList">
    {tags.map(({...tagProps}, index) => (
      <TagChip key={index} onRequestDelete={onDelete(index)} {...tagProps} />
    ))}
  </div>
)

TagDeletableList.displayName = 'TagDeletableList'

TagDeletableList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  /**
   * List of tag objects
   */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    })
  ).isRequired
}

TagDeletableList.displayName = 'TagDeletableList'

export default TagDeletableList
