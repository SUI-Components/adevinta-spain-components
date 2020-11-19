const DEFAULT_I18N = {
  LEGITIMATE_INTEREST_COPY: 'Interés legítimo',
  CONSENT_COPY: '',
  GO_BACK_BUTTON: 'Volver atrás',
  ACCEPT_BUTTON: 'Aceptar',
  DISABLE_BUTTON: 'Deshabilitar todo',
  ENABLE_BUTTON: 'Habilitar todo',
  YES: 'Sí',
  NO: 'No',
  DAYS: 'días',
  HOURS: 'horas',
  MINUTES: 'minutos',
  SECONDS: 'segundos',
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
      TITLE_CONSENT: 'Tratamiento de datos basado en consentimiento',
      TITLE_LEGITIMATEINTEREST:
        'Tratamiento de datos basado en interés legítimo',
      EXPANDED: {
        COOKIES: {
          TITLE: 'Caducidad de las cookies',
          COOKIES_MAX_AGE_SECONDS: 'Duración máxima de las cookies',
          NEGATIVE_OR_ZERO_MAX_AGE: 'Caducidad inmediata',
          USES_NON_COOKIE_ACCESS: 'Acceso a datos no basado en cookies',
          DEVICE_STORAGE_DISCLOSURE_URL: 'Información adicional'
        },
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

const IT_I18N = {
  LEGITIMATE_INTEREST_COPY: 'Interesse legittimo',
  CONSENT_COPY: '',
  GO_BACK_BUTTON: 'Indietro',
  ACCEPT_BUTTON: 'Accetta',
  DISABLE_BUTTON: 'Rifiuta tutto',
  ENABLE_BUTTON: 'Accetta tutto',
  YES: 'Sì',
  NO: 'No',
  DAYS: 'giorni',
  HOURS: 'ore',
  MINUTES: 'minuti',
  SECONDS: 'secondi',
  SECOND_LAYER: {
    TITLE: 'Configurazione',
    TEXT:
      'Cliccando, acconsenti al trattamento dei tuoi dati per questo sito web (o app), navigatore e dispositivo con le seguenti finalità:',
    PURPOSES_TITLE: 'Finalità',
    SPECIAL_PURPOSES_TITLE: 'Finalità speciali',
    FEATURES_TITLE: 'Caratteristiche',
    SPECIAL_FEATURES_TITLE: 'Caratteristiche speciali',
    PARTNERS_LINK: 'Lista dei partner',
    READ_MORE: 'Mostra altro',
    READ_LESS: 'Nascondi'
  },
  VENDOR_PAGE: {
    TITLE: 'Cookie di prima o terza parte per la pubblicità segmentata',
    TITLE_CONSENT: 'Trattamento dei dati basato sul consenso',
    TITLE_LEGITIMATEINTEREST:
      "Trattamento dei dati basato sull'interesse legittimo",
    TEXT:
      'Ci preoccupiamo molto della tua privacy, per questo motivo vogliamo informarti delle finalità perseguite dai cookie per la pubblicità personalizzata, e farti sapere con chi stiamo condividendo le tue informazioni. Potrai inoltre definire le finalità e le terze parti con le quali accetti o meno di condividere i tuoi dati di navigazione, di posizione e i tuoi dati personali. Tieni presente che questi cookie sono legati alla tua sessione di navigazione, quindi se aggiorni i tuoi cookie, cambiando dispositivo o connettendoti da un altro browser, dovrai riconfigurare le tue preferenze.',
    GROUPS: {
      TITLE: 'Lista di partners con cui lavoriamo',
      EXPANDED: {
        COOKIES: {
          TITLE: 'Scadenza dei cookies',
          COOKIES_MAX_AGE_SECONDS: 'Durata massima dei cookies',
          NEGATIVE_OR_ZERO_MAX_AGE: 'Scandenza immediata',
          USES_NON_COOKIE_ACCESS: 'Accesso a dati non basato su cookies',
          DEVICE_STORAGE_DISCLOSURE_URL: 'Informazioni aggiuntive'
        },
        PURPOSES: 'Finalità',
        LEGITIMATE_INTEREST_PURPOSES: 'Interesse legittimo in:',
        SPECIAL_PURPOSES: 'Finalità speciali',
        FEATURES: 'Caratteristiche',
        SPECIAL_FEATURES: 'Caratteristiche speciali',
        POLICY_URL: 'Privacy Policy'
      }
    }
  }
}

export const I18N = {
  it: IT_I18N,
  es: DEFAULT_I18N,
  en: DEFAULT_I18N,
  ca: DEFAULT_I18N,
  de: DEFAULT_I18N
}
