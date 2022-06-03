import {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M3 18a1 1 0 001 1h16a1.07 1.07 0 00.52-.14 1 1 0 00.33-1.38l-8-13.1a1 1 0 00-.33-.38 1 1 0 00-1.37.34l-8 13.1A1 1 0 003 18zm-1.53-1.6l8-13.11a3 3 0 015.12 0l8 13.11a3 3 0 01-1 4.12A3.05 3.05 0 0120 21H4a3 3 0 01-3-3 2.93 2.93 0 01.47-1.6zM12 17.62a1 1 0 10-1-1 1 1 0 001 1zM12 7.5a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1z" />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
