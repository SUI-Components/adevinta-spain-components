export const BorosTCF = {
  init: () => ({
    getConsentStatus: () => Promise.resolve('NOT_ACCEPTED'),
    loadUserConsent: () =>
      Promise.resolve({
        specialFeatureOptins: [],
        purposeConsents: [
          {
            index: 1,
            text:
              'Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.',
            initialValue: false
          },
          {
            index: 2,
            text:
              'Ads can be shown to you based on the content you’re viewing, the app you’re using, your approximate location, or your device type.',
            initialValue: false
          },
          {
            index: 3,
            text:
              'A profile can be built about you and your interests to show you personalised ads that are relevant to you',
            initialValue: false
          },
          {
            index: 4,
            text:
              'Personalised ads can be shown to you based on a profile about you ads that are relevant to you',
            initialValue: false
          },
          {
            index: 5,
            text:
              'A profile can be built about you and your interests to show you personalised content that is relevant to you.',
            initialValue: false
          },
          {
            index: 6,
            text:
              'Personalised content can be shown to you based on a profile about you.',
            initialValue: false
          },
          {
            index: 7,
            text:
              'The performance and effectiveness of ads that you see or interact with can be measured.',
            initialValue: false
          },
          {
            index: 8,
            text:
              'The performance and effectiveness of content that you see or interact with can be measured. be measured.',
            initialValue: false
          },
          {
            index: 9,
            text:
              'Market research can be used to learn more about the audiences who visit sites/apps and view ads.',
            initialValue: false
          },
          {
            index: 10,
            text:
              'Your data can be used to improve existing systems and software, and to develop new products',
            initialValue: false
          }
        ],
        purposeLegitimateInterests: [],
        publisherConsents: [],
        publisherLegitimateInterests: [],
        vendorConsents: [],
        vendorLegitimateInterests: []
      }),
    saveUserConsent: () => null
  })
}
