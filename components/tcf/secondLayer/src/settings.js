export const ADEVINTA_COLLECTED_CONSENTS = {
  purposes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  specialPurposes: [1, 2],
  features: [3],
  specialFeatures: [1]
}

const DEFAULT_I18N = {
  LEGITIMATE_INTEREST_COPY: 'Interés legítimo',
  CONSENT_COPY: '',
  GO_BACK_BUTTON: 'Volver atrás',
  ACCEPT_BUTTON: 'Aceptar',
  DISABLE_BUTTON: 'Deshabilitar todo',
  ENABLE_BUTTON: 'Habilitar todo',
  SECOND_LAYER: {
    TITLE: 'Configuración',
    TEXT:
      'Usted permite tratar sus datos para esta web (o aplicación), navegador y dispositivo con los siguientes fines:',
    PURPOSES_TITLE: 'Propósitos',
    SPECIAL_PURPOSES_TITLE: 'Propósitos especiales',
    FEATURES_TITLE: 'Características',
    SPECIAL_FEATURES_TITLE: 'Características especiales',
    PARTNERS_LINK: 'Ver listado de socios',
    READ_MORE: 'Leer más',
    READ_LESS: 'Leer menos'
  },
  VENDOR_PAGE: {
    TITLE: 'Cookies propios o de terceros para publicidad segmentada',
    TEXT:
      'Nos importa mucho tu privacidad, por esta razón queremos informarte de las finalidades perseguidas por las cookies de publicidad personalizada además de con quién estamos compartiendo tus datos. Asimismo podrás definir las finalidades y los terceros con los que aceptas o no compartir tus datos de navegación, tus datos de localización y tus datos de carácter personal. Ten en cuenta que estas cookies van ligadas a tu sesión en el navegador por lo que si actualizas tus cookies, cambias de dispositivos o te conectas desde otro navegador, tendrás que volver a configurar tus preferencias.',
    GROUPS: {
      TITLE: 'Listado de partners con los que trabajamos',
      EXPANDED: {
        PURPOSES: 'Propósitos',
        LEGITIMATE_INTEREST_PURPOSES: 'Interés legítimo en:',
        SPECIAL_PURPOSES: 'Propósitos especiales',
        FEATURES: 'Características',
        SPECIAL_FEATURES: 'Características especiales',
        POLICY_URL: 'Política de privacidad'
      }
    }
  }
}

export const I18N = {
  it: DEFAULT_I18N,
  es: DEFAULT_I18N,
  en: DEFAULT_I18N,
  ca: DEFAULT_I18N,
  de: DEFAULT_I18N
}
