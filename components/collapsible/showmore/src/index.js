import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '@s-ui/react-atom-button'
import cx from 'classnames'

const CollapsibleShowmore = ({
  children,
  copy = 'Show more',
  maxHeight = 100
}) => {
  const baseClass = 'sui-CollapsibleShowmore'
  const [heightContainer, setHeightContainer] = useState(maxHeight)
  const [hideButton, setHideButton] = useState(false)

  const buttonClassName = cx(`${baseClass}-actionButton`, {
    'is-hidden': hideButton
  })

  const unfold = () => {
    setHeightContainer('auto')
    setHideButton(true)
  }

  return (
    <div className={`${baseClass}`}>
      <div
        className={`${baseClass}-container`}
        style={{height: heightContainer}}
      >
        {children}
      </div>
      <Button
        className={buttonClassName}
        design="outline"
        title={copy}
        onClick={unfold}
      >
        {copy}
      </Button>
    </div>
  )
}

CollapsibleShowmore.displayName = 'CollapsibleShowmore'

CollapsibleShowmore.propTypes = {
  children: PropTypes.any.isRequired,
  copy: PropTypes.string.isRequired,
  maxHeight: PropTypes.number
}

export default CollapsibleShowmore
