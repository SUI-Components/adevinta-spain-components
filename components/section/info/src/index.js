import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const baseClass = 'sui-SectionInfo'
const baseContentClass = `${baseClass}-content`
const titleClass = `${baseClass}-title`

export default function SectionInfo({title, children}) {
  const contentClass = cx(baseContentClass, {
    [`${baseContentClass}--withoutTitle`]: !title
  })

  return (
    <section className={baseClass}>
      {title && <h3 className={titleClass}>{title}</h3>}
      <div className={contentClass}>{children}</div>
    </section>
  )
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
