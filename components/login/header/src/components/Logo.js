import PropTypes from 'prop-types'

import {BASE_CLASS, DEFAULT_BRAND_LOGO} from './../config.js'
const Logo = ({image = DEFAULT_BRAND_LOGO}) => {
  const brandImage = typeof image === 'string' ? <img src={image} /> : image
  return <div className={`${BASE_CLASS}-image`}>{brandImage}</div>
}

Logo.displayName = 'Logo'
Logo.propTypes = {
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

export default Logo
