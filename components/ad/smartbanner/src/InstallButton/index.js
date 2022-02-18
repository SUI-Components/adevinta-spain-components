import PropTypes from 'prop-types'

const InstallButton = ({baseClass, children, onClick}) => {
  return (
    <button className={`${baseClass}-buttonInstall`} onClick={onClick}>
      {children}
    </button>
  )
}

InstallButton.displayName = 'InstallButton'
InstallButton.propTypes = {
  baseClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default InstallButton
