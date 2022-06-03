import {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M8 22c-1.7 0-3-1.5-3-3.3V6c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v12.7c0 1.8-1.3 3.3-3 3.3H8zM7 7v11.7c0 .7.5 1.3 1 1.3h8c.5 0 1-.6 1-1.3V7H7zm1-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1h3.9c.6 0 1.1.4 1.1 1s-.5 1-1.1 1H4.1C3.5 7 3 6.6 3 6s.5-1 1.1-1H8zm2 0h4V4h-4v1zm5.4 11.7c-.4.4-1 .4-1.4 0l-1.9-1.9-1.9 1.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.9-1.9-1.9-1.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.9 1.9 1.9-1.9c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.9 1.9 1.9 1.9c.4.4.4 1 0 1.4z" />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
