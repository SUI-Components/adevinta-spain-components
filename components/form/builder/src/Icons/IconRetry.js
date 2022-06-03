import {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12.08 2.8a9.41 9.41 0 017.27 3.41V3.96a1 1 0 112 0l.08 4.61a1 1 0 01-1 1l-4.61.08a1 1 0 010-2h2.13a7.39 7.39 0 00-5.87-2.85 7.5 7.5 0 106.68 10.89 1 1 0 011.79.9A9.49 9.49 0 1112.08 2.8z" />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
