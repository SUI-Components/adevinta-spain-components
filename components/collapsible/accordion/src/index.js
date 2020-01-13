import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CollapsibleBasic from '@schibstedspain/sui-collapsible-basic'

function CollapsibleAccordion({
  preserveState = false,
  onItemChange = (collapsed, id) => {},
  items,
  icon
}) {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = id => {
    return collapsed => !preserveState && collapseItems(collapsed, id)
  }

  const collapseItems = (collapsed, id) => {
    const newOpenIndex = id === openIndex ? null : id
    setOpenIndex(newOpenIndex)
    onItemChange(collapsed, id)
  }

  return (
    <div>
      {items.map((item, index) => (
        <CollapsibleBasic
          key={index}
          {...item}
          collapsed={openIndex !== index}
          handleClick={handleClick(index)}
          icon={icon}
        >
          {item.content}
        </CollapsibleBasic>
      ))}
    </div>
  )
}

CollapsibleAccordion.displayName = 'CollapsibleAccordion'

CollapsibleAccordion.propTypes = {
  /**
   * Close the prev row open if other row has been opened (false)
   * Keep the prev row open if other row has been opened (true)
   */
  preserveState: PropTypes.bool,
  /**
   * Event that will send when select an item
   */
  onItemChange: PropTypes.func,
  /**
   * icon to be displayed.
   */
  icon: PropTypes.func,
  /**
   * Items array
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * label to be displayed.
       */
      label: PropTypes.node.isRequired,
      /**
       * children to be displayed when expanding component.
       */
      content: PropTypes.node.isRequired,
      /**
       * first state.
       */
      collapsed: PropTypes.bool
    })
  ).isRequired
}

export default CollapsibleAccordion
