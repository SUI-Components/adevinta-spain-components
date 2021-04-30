import PropTypes from 'prop-types'
import AtomButton from '@s-ui/react-atom-button'

import DEFAULT_CONFIG_SOCIAL_NETWORKS, {
  DEFAULT_SOCIAL_NETWORKS_KEYS
} from './config'

export default function ShareSocialMediaButtonsGroup({
  buttonsToShow = [],
  config = [],
  onShare,
  url
}) {
  const reducerGetFilteredSocialNetworks = (acc, curr) => {
    if (DEFAULT_SOCIAL_NETWORKS_KEYS.includes(curr.key)) acc.push(curr)
    return acc
  }

  const filteredSocialMedia =
    buttonsToShow.length > 0
      ? buttonsToShow.reduce(reducerGetFilteredSocialNetworks, [])
      : DEFAULT_CONFIG_SOCIAL_NETWORKS
  const socialMediaConfig = [...filteredSocialMedia, ...config]

  return (
    <div className="re-ShareSocialMediaButtonsGroup">
      {socialMediaConfig.map(({key, literal, urlSocialNetwork, ...rest}) => (
        <AtomButton
          key={key}
          href={`${urlSocialNetwork}${url}`}
          onClick={onShare}
          {...rest}
        >
          {literal}
        </AtomButton>
      ))}
    </div>
  )
}

ShareSocialMediaButtonsGroup.displayName = 'ShareSocialMediaButtonsGroup'
ShareSocialMediaButtonsGroup.propTypes = {
  buttonsToShow: PropTypes.array,
  config: PropTypes.array,
  literal: PropTypes.string,
  onShare: PropTypes.func,
  url: PropTypes.string
}
