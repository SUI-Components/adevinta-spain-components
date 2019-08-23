import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {CLASS} from '../settings'

export function ConsentName({name, renderDescription, url}) {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={`${CLASS}-consent--withDescription`}>
      <span
        className={cx(
          `${CLASS}-consentName`,
          expanded && `${CLASS}-consentName--expanded`
        )}
        onClick={handleExpand}
      >
        {name}
      </span>
      {expanded && (
        <div
          className={cx(
            `${CLASS}-consentDescription`,
            `${CLASS}-consentDescription--expanded`
          )}
        >
          {renderDescription()}
        </div>
      )}
    </div>
  )
}

ConsentName.propTypes = {
  renderDescription: PropTypes.func,
  name: PropTypes.string,
  url: PropTypes.string
}
