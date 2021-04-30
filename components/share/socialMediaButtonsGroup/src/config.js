import EmailIcon from '@adv-ui/fc-iconset/lib/EmailActionUnread'
import WhatsAppIcon from '@adv-ui/fc-iconset/lib/MessagingWhatsapp'
import FacebookIcon from '@adv-ui/fc-iconset/lib/SocialMediaFacebook'
import TwitterIcon from '@adv-ui/fc-iconset/lib/SocialMediaTwitter'

export const DEFAULT_SOCIAL_NETWORKS_KEYS = [
  'mail',
  'whatsapp',
  'facebook',
  'twitter'
]

const DEFAULT_CONFIG_SOCIAL_NETWORKS = [
  {
    key: 'mail',
    color: 'primary',
    design: 'outline',
    leftIcon: <EmailIcon />,
    literal: 'Email',
    url: 'mailto:?body='
  },
  {
    key: 'whatsapp',
    color: 'primary',
    design: 'outline',
    leftIcon: <WhatsAppIcon />,
    literal: 'WhatsApp',
    url: 'https://wa.me/?text='
  },
  {
    key: 'facebook',
    color: 'primary',
    design: 'outline',
    leftIcon: <FacebookIcon />,
    literal: 'Facebook',
    url: 'http://www.facebook.com/share.php?u='
  },
  {
    key: 'twitter',
    color: 'primary',
    design: 'outline',
    leftIcon: <TwitterIcon />,
    literal: 'Twitter',
    url: 'http://twitter.com/share?url='
  }
]

export default DEFAULT_CONFIG_SOCIAL_NETWORKS
