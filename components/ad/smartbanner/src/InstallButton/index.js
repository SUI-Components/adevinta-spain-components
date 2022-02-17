import PropTypes from 'prop-types'

const InstallButton = ({children, onClick}) => {
  const baseClass = 'sui-AdSmartbanner'
  return (
    <button className={`${baseClass}-buttonInstall`} onClick={onClick}>
      {children}
    </button>
  )
}

InstallButton.displayName = 'InstallButton'
InstallButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default InstallButton
