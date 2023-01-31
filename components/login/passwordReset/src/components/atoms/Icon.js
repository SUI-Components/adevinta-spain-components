import PropTypes from 'prop-types'

import SuiAtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'

import {BASE_CLASS, DEFAULT_ATC_ICON} from '../../config.js'
const AtomIcon = ({icon: Image = DEFAULT_ATC_ICON}) => {
  const image =
    typeof Image === 'string' ? (
      <img src={Image} />
    ) : (
      <SuiAtomIcon
        size={ATOM_ICON_SIZES.extraExtraLarge}
        color={ATOM_ICON_COLORS.current}
      >
        {Image}
      </SuiAtomIcon>
    )
  return <div className={`${BASE_CLASS}-helpContentImage`}>{image}</div>
}

AtomIcon.displayName = 'AtomIcon'
AtomIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}

export default AtomIcon
