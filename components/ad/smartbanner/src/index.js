import PropTypes from 'prop-types'
import IconCloseDefault from '@s-ui/react-icons/lib/X'
import cx from 'classnames'
import RatingStar from './RatingStar'

function AdSmartbanner({
  buttonText,
  customRatingIcons,
  icon: IconClose = IconCloseDefault,
  imageUrl,
  logoNode,
  onClick,
  onClose,
  ratingMax,
  ratingValue = null,
  staticPosition = false,
  text,
  title
}) {
  const baseClass = 'sui-AdSmartbanner'

  const className = cx(baseClass, {
    'is-static': staticPosition
  })
  const baseClassLogo = `${baseClass}-logo`

  return (
    <div className={className}>
      <button className={`${baseClass}-buttonClose`} onClick={onClose}>
        <IconClose svgClass={`${baseClass}-buttonCloseIcon`} />
      </button>
      <div className={`${baseClass}-primary`}>
        {logoNode ? (
          <div className={baseClassLogo}>{logoNode}</div>
        ) : (
          <img alt="logo" src={imageUrl} className={baseClassLogo} />
        )}
      </div>
      <div className={`${baseClass}-secondary`}>
        <h3 className={`${baseClass}-title`}>{title}</h3>
        <p className={`${baseClass}-text`}>{text}</p>
        {ratingValue !== null && (
          <div className={`${baseClass}-ratingContainer`}>
            <RatingStar
              ratingValue={ratingValue}
              ratingMax={ratingMax}
              icons={customRatingIcons}
            />
          </div>
        )}
      </div>
      <button className={`${baseClass}-buttonInstall`} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  )
}

AdSmartbanner.propTypes = {
  buttonText: PropTypes.string.isRequired,
  customRatingIcons: PropTypes.object,
  icon: PropTypes.func,
  imageUrl: PropTypes.string,
  logoNode: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  ratingMax: PropTypes.number,
  ratingValue: PropTypes.number,
  staticPosition: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

AdSmartbanner.displayName = 'AdSmartbanner'

export default AdSmartbanner
