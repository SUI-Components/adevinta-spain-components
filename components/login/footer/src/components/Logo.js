import PropTypes from 'prop-types'

const Logo = ({image}) => {
  const brandImage = typeof image === 'string' ? <img src={image} /> : image
  return brandImage
}

Logo.displayName = 'Logo'
Logo.propTypes = {
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

export default Logo
