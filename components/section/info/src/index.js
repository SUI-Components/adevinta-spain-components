import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const baseClass = 'sui-SectionInfo'
const titleClass = `${baseClass}-title`

class SectionInfo extends Component {
  render() {
    const {title, children} = this.props

    const contentClass = cx(`${baseClass}-content`, {
      [`${baseClass}-content--withoutTitle`]: !title
    })

    return (
      <section className={baseClass}>
        {title && <h3 className={titleClass}>{title}</h3>}
        <div className={contentClass}>{children}</div>
      </section>
    )
  }
}

SectionInfo.displayName = 'SectionInfo'

SectionInfo.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object
  ])
}

export default SectionInfo
