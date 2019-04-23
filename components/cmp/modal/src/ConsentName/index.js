import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {CLASS} from '../settings'

export function ConsentName({name, description, url}) {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    if (description) {
      setExpanded(!expanded)
    }
  }

  return (
    <div className={cx(description && `${CLASS}-consent--withDescription`)}>
      {url ? (
        <a
          className={`${CLASS}-consentLink`}
          href={url}
          target="_blank"
          rel="noopener"
        >
          {name}
        </a>
      ) : (
        <span
          className={cx(
            `${CLASS}-consentName`,
            expanded && `${CLASS}-consentName--expanded`
          )}
          onClick={handleExpand}
        >
          {name}
        </span>
      )}
      {description && (
        <span
          className={cx(
            `${CLASS}-consentDescription`,
            expanded && `${CLASS}-consentDescription--expanded`
          )}
        >
          {description}
        </span>
      )}
    </div>
  )
}

ConsentName.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
}
