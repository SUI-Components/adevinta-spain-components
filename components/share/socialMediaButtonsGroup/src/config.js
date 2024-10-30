export const DEFAULT_SOCIAL_MEDIA_BUTTONS = ['mail', 'whatsapp', 'facebook', 'twitter']

const DEFAULT_SOCIAL_MEDIA_DICTIONARY = {
  mail: {
    design: 'outline',
    literal: 'Email',
    url: 'mailto:?body='
  },
  whatsapp: {
    design: 'outline',
    literal: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?text='
  },
  facebook: {
    design: 'outline',
    literal: 'Facebook',
    url: 'http://www.facebook.com/share.php?u='
  },
  twitter: {
    design: 'outline',
    literal: 'Twitter',
    url: 'http://twitter.com/share?url='
  }
}

export default DEFAULT_SOCIAL_MEDIA_DICTIONARY
