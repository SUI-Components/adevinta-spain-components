import PropTypes from 'prop-types'

import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'

import {BASE_CLASS, DEFAULT_ATC_ICON} from './../../config.js'
const Icon = ({icon: Image = DEFAULT_ATC_ICON}) => {
  const image =
    typeof Image === 'string' ? (
      <img src={Image} />
    ) : (
      <AtomIcon
        size={ATOM_ICON_SIZES.extraExtraLarge}
        color={ATOM_ICON_COLORS.current}
      >
        {Image}
      </AtomIcon>
    )
  return <div className={`${BASE_CLASS}-helpContentImage`}>{image}</div>
}

Icon.displayName = 'Icon'
Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

export default Icon
