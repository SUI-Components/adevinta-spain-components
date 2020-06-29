import React, {useState} from 'react'
import PropTypes from 'prop-types'

import SuiSwitch from '@s-ui/react-atom-switch'

import IconAccordion from './iconAccordion'

export default function GroupItem({
  onItemChange,
  baseClass,
  itemInfo,
  itemValue
}) {
  const [expanded, setExpanded] = useState(false)

  const handleItemClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <div className={`${baseClass}-container`}>
        <div
          className={`${baseClass}-container-clicklable`}
          onClick={handleItemClick}
        >
          <IconAccordion />
          <p className={`${baseClass}-text`}>{itemInfo.name}</p>
        </div>
        <SuiSwitch
          type="single"
          name="groupItem"
          value={itemValue}
          onToggle={() => onItemChange(itemValue)}
        />
      </div>
      {expanded && (
        <div className={`${baseClass}-expanded-container`}>
          <p className={`${baseClass}-text`}>{itemInfo.description}</p>
        </div>
      )}
    </>
  )
}

GroupItem.propTypes = {
  baseClass: PropTypes.string,
  itemInfo: PropTypes.object,
  itemValue: PropTypes.object,
  name: PropTypes.string,
  onItemChange: PropTypes.func
}
