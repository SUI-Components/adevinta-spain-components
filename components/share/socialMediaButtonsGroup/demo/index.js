import ShareSocialMediaButtonsGroup, {
  socialMediaDictionary
} from 'components/share/socialMediaButtonsGroup/src/index'

const myConfig = {
  mail: {
    ...socialMediaDictionary.mail,
    design: 'solid',
    leftIcon: null
  },
  whatsapp: {
    ...socialMediaDictionary.whatsapp,
    color: 'social-whatsapp',
    design: 'solid',
    leftIcon: null
  },
  facebook: {
    ...socialMediaDictionary.facebook,
    color: 'social-facebook',
    design: 'solid',
    leftIcon: null
  },
  twitter: {
    ...socialMediaDictionary.twitter,
    color: 'social-twitter',
    design: 'solid',
    leftIcon: null
  },
  myOhterSocialMedia: {
    color: 'social-youtube',
    design: 'solid',
    literal: 'Other Social Media'
  }
}

const DemoSocialMediaButtonsGroup = () => {
  return (
    <div>
      <h1>Social Media Buttons</h1>

      <h2>All default buttons</h2>
      <ShareSocialMediaButtonsGroup textToShare="https://www.fotocasa.es/es/" />

      <h2>Some buttons</h2>
      <ShareSocialMediaButtonsGroup
        buttonsToShow={['whatsapp', 'facebook']}
        textToShare="https://www.fotocasa.es/es/"
      />

      <h2>Different order</h2>
      <ShareSocialMediaButtonsGroup
        buttonsToShow={['whatsapp', 'twitter', 'mail', 'facebook']}
        textToShare="https://www.fotocasa.es/es/"
      />

      <h2>Custom Social Media Dictionary</h2>
      <ShareSocialMediaButtonsGroup
        buttonsToShow={[
          'facebook',
          'mail',
          'myOhterSocialMedia',
          'twitter',
          'whatsapp'
        ]}
        socialMediaDictionary={myConfig}
        textToShare="https://www.fotocasa.es/es/"
      />
    </div>
  )
}

export default DemoSocialMediaButtonsGroup
