import PropTypes from 'prop-types'
import AtomButton from '@s-ui/react-atom-button'

import DEFAULT_SOCIAL_MEDIA_DICTIONARY, {
  DEFAULT_SOCIAL_MEDIA_BUTTONS
} from './config'

const BASE_CLASS = 'sui-ShareSocialMediaButtonsGroup'

export default function ShareSocialMediaButtonsGroup({
  buttonsToShow = DEFAULT_SOCIAL_MEDIA_BUTTONS,
  onShare,
  paramsUrlString = '',
  socialMediaDictionary: socialMediaDictionaryFromProps = DEFAULT_SOCIAL_MEDIA_DICTIONARY
}) {
  const socialMediaDictionary = buttonsToShow.map(
    key =>
      Object.keys(socialMediaDictionaryFromProps).includes(key) &&
      socialMediaDictionaryFromProps[key]
  )

  return (
    <div className={BASE_CLASS}>
      {socialMediaDictionary.map(({literal, url, ...rest}, index) => (
        <AtomButton
          className={`${BASE_CLASS}-button`}
          href={`${url}${paramsUrlString}`}
          key={index}
          link
          onClick={onShare}
          target="_blank"
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
  literal: PropTypes.string,
  onShare: PropTypes.func,
  paramsUrlString: PropTypes.string,
  socialMediaDictionary: PropTypes.array
}

export {DEFAULT_SOCIAL_MEDIA_DICTIONARY as socialMediaDictionary}
