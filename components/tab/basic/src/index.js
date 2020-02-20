import PropTypes from 'prop-types'
import React, {useState} from 'react'
import cx from 'classnames'

export default function TabBasic({
  activeTab: initialActiveTab = 0,
  handleClick,
  tabsList
}) {
  const [activeTab, setActiveTab] = useState(initialActiveTab)

  const createHandleClick = index => {
    return event => {
      event.preventDefault()
      setActiveTab(index)
      handleClick(index, tabsList[index])
    }
  }

  const renderTabs = () => {
    return tabsList.map((tabLabel, index) => {
      const tabLinkClassName = cx('sui-TabBasic-link', {
        'is-active': activeTab === index
      })

      return (
        <li className="sui-TabBasic-item" key={index}>
          <button
            className={tabLinkClassName}
            onClick={createHandleClick(index)}
            role="tab"
          >
            {tabLabel}
          </button>
        </li>
      )
    })
  }

  return <ul className="sui-TabBasic">{renderTabs()}</ul>
}

TabBasic.displayName = 'TabBasic'

TabBasic.propTypes = {
  /**
   * List of tabs
   */
  tabsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

  /**
   * Point at the selected tab
   */
  activeTab: PropTypes.number,

  /**
   * By clicking on every single tab, `handleClick` is triggered and sends an
   * object with the item information and position in the array.
   */
  handleClick: PropTypes.func.isRequired
}
