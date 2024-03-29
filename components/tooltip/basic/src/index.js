import ReactTooltip from 'react-tooltip'

import cx from 'classnames'
import PropTypes from 'prop-types'

export default function TooltipBasic(props) {
  const {className} = props
  const customClass = cx(`sui-TooltipBasic`, {
    [className]: !!className
  })
  return <ReactTooltip {...props} className={customClass} insecure={false} border />
}

TooltipBasic.propTypes = {
  className: PropTypes.string
}

TooltipBasic.displayName = 'TooltipBasic'
