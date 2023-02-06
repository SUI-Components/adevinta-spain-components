import PropTypes from 'prop-types'

const Link = ({url, children}) => {
  return (
    <a href={url} title={children}>
      {children}
    </a>
  )
}

Link.displayName = 'Link'
Link.propTypes = {
  children: PropTypes.object,
  url: PropTypes.string
}

export default Link
