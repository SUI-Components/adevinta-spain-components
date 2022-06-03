import {memo} from 'react'
import PropTypes from 'prop-types'

const SVG = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M8 13.3c2.9 0 5.3-2.4 5.3-5.3 0-1.4-.6-2.8-1.6-3.8S9.4 2.7 8 2.7C5.1 2.7 2.7 5.1 2.7 8s2.4 5.3 5.3 5.3zm0 1.4A6.7 6.7 0 018 1.3c1.8 0 3.5.7 4.7 2s2 2.9 2 4.7c0 3.7-3 6.7-6.7 6.7zm-.7-7.4c0-.3.3-.6.7-.6s.7.3.7.6v3.3c0 .4-.3.7-.7.7s-.7-.3-.7-.6V7.3zM8 6c.4 0 .7-.3.7-.7s-.3-.6-.7-.6-.7.3-.7.6.3.7.7.7z" />
  </svg>
)

SVG.propTypes = {
  className: PropTypes.string
}

export default memo(SVG)
