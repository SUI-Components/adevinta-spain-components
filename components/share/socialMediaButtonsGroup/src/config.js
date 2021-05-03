import EmailIcon from '@adv-ui/fc-iconset/lib/EmailActionUnread'
import WhatsAppIcon from '@adv-ui/fc-iconset/lib/MessagingWhatsapp'
import FacebookIcon from '@adv-ui/fc-iconset/lib/SocialMediaFacebook'
import TwitterIcon from '@adv-ui/fc-iconset/lib/SocialMediaTwitter'

export const DEFAULT_SOCIAL_MEDIA_BUTTONS = [
  'mail',
  'whatsapp',
  'facebook',
  'twitter'
]

const DEFAULT_SOCIAL_MEDIA_DICTIONARY = {
  mail: {
    design: 'outline',
    leftIcon: <EmailIcon />,
    literal: 'Email',
    url: 'mailto:?body='
  },
  whatsapp: {
    design: 'outline',
    leftIcon: <WhatsAppIcon />,
    literal: 'WhatsApp',
    url: 'https://wa.me/?text='
  },
  facebook: {
    design: 'outline',
    leftIcon: <FacebookIcon />,
    literal: 'Facebook',
    url: 'http://www.facebook.com/share.php?u='
  },
  twitter: {
    design: 'outline',
    leftIcon: <TwitterIcon />,
    literal: 'Twitter',
    url: 'http://twitter.com/share?url='
  }
}

export default DEFAULT_SOCIAL_MEDIA_DICTIONARY
