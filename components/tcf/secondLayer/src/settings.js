const DEFAULT_I18N = {
  GO_BACK_BUTTON: 'Volver atrás',
  ACCEPT_BUTTON: 'Aceptar',
  DISABLE_BUTTON: 'Deshabilitar todo',
  ENABLE_BUTTON: 'Habilitar todo',
  VENDOR_PAGE: {
    TITLE: 'Cookies propios o de terceros para publicidad segmentada',
    TEXT:
      'Nos importa mucho tu privacidad, por esta razón queremos informarte de las finalidades perseguidas por las cookies de publicidad personalizada además de con quién estamos compartiendo tus datos. Asimismo podrás definir las finalidades y los terceros con los que aceptas o no compartir tus datos de navegación, tus datos de localización y tus datos de carácter personal. Ten en cuenta que estas cookies van ligadas a tu sesión en el navegador por lo que si actualizas tus cookies, cambias de dispositivos o te conectas desde otro navegador, tendrás que volver a configurar tus preferencias.',
    GROUPS: {
      FIRST: {
        TITLE: 'Autorizo'
      },
      SECOND: {
        TITLE: 'Para los siguientes anunciantes y partners',
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
}

export const I18N = {
  it: DEFAULT_I18N,
  es: DEFAULT_I18N,
  en: DEFAULT_I18N,
  ca: DEFAULT_I18N,
  de: DEFAULT_I18N
}
