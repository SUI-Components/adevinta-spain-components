import React from 'react'
import Switch from '@s-ui/react-atom-switch'
import PropTypes from 'prop-types'

const classNameFactory = name =>
  name ? `sui-SettingItem-${name}` : 'sui-SettingItem'

const SettingItem = ({onToggle, title, description, withSwitch, children}) => {
  return (
    <div className={classNameFactory()}>
      <div className={classNameFactory('content-top')}>
        <div className={classNameFactory('content-top-text')}>
          <h2 className={classNameFactory('title')}>{title}</h2>
          <p className={classNameFactory('description')}>{description}</p>
        </div>
        {withSwitch && (
          <Switch
            name=""
            label=""
            labelLeft=""
            labelRight=""
            onToggle={onToggle}
          />
        )}
      </div>
      {children}
    </div>
  )
}

SettingItem.displayName = 'SettingItem'

SettingItem.propTypes = {
  /**
   * The onToggle handler passed down to the switch component
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * The title for this setting
   */
  title: PropTypes.string.isRequired,
  /**
   * A description node to describe the behavior of this setting
   */
  description: PropTypes.node,
  /**
   * Boolean to use or not use a switch
   */
  withSwitch: PropTypes.bool,
  /**
   * Optional children to add any kind of extra component to the setting item
   */
  children: PropTypes.node
}

SettingItem.defaultProps = {
  withSwitch: true
}

export default SettingItem
