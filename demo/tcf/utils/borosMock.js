/* eslint-disable no-unused-vars */
const mockedEmptyUserConsent = {
  isNew: true,
  specialFeature: {},
  purpose: {
    consents: {},
    legitimateInterests: {}
  },
  vendor: {
    consents: {},
    legitimateInterests: {}
  }
}
const mockedFullUserConsent = {
  isNew: false,
  specialFeature: {1: true},
  purpose: {
    consents: {
      1: false,
      2: false,
      3: true
    },
    legitimateInterests: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: true
    }
  },
  vendor: {
    consents: {
      8: true,
      9: true,
      12: true,
      28: false,
      25: false,
      6: false,
      24: false
    },
    legitimateInterests: {
      8: false,
      9: false,
      12: false,
      28: false,
      25: false,
      6: false,
      24: false
    }
  }
}

const mockedVendorList = {
  gvlSpecificationVersion: 2,
  vendorListVersion: 34,
  tcfPolicyVersion: 2,
  lastUpdated: '2020-04-16T16:05:18Z',
  purposes: {
    '1': {
      id: 1,
      name: 'Store and/or access information on a device',
      description:
        'Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.',
      descriptionLegal:
        'Vendors can:\n* Store and access information on the device such as cookies and device identifiers presented to a user.'
    },
    '2': {
      id: 2,
      name: 'Select basic ads',
      description:
        'Ads can be shown to you based on the content you\u2019re viewing, the app you\u2019re using, your approximate location, or your device type.',
      descriptionLegal:
        'To do basic ad selection vendors can:\n* Use real-time information about the context in which the ad will be shown, to show the ad, including information about the content and the device, such as: device type and capabilities, user agent, URL, IP address\n* Use a user\u2019s non-precise geolocation data\n* Control the frequency of ads shown to a user.\n* Sequence the order in which ads are shown to a user.\n* Prevent an ad from serving in an unsuitable editorial (brand-unsafe) context\nVendors cannot:\n* Create a personalised ads profile using this information for the selection of future ads.\n* N.B. Non-precise means only an approximate location involving at least a radius of 500 meters is permitted.'
    },
    '3': {
      id: 3,
      name: 'Create a personalised ads profile',
      description:
        'A profile can be built about you and your interests to show you personalised ads that are relevant to you.',
      descriptionLegal:
        "To create a personalised ads profile vendors can:\n* Collect information about a user, including a user's activity, interests, demographic information, or location, to create or edit a user profile for use in personalised advertising.\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalised advertising."
    },
    '4': {
      id: 4,
      name: 'Select personalised ads',
      description:
        'Personalised ads can be shown to you based on a profile about you.',
      descriptionLegal:
        'To select personalised ads vendors can:\n* Select personalised ads based on a user profile or other historical user data, including a user\u2019s prior activity, interests, visits to sites or apps, location, or demographic information.'
    },
    '5': {
      id: 5,
      name: 'Create a personalised content profile',
      description:
        'A profile can be built about you and your interests to show you personalised content that is relevant to you.',
      descriptionLegal:
        "To create a personalised content profile vendors can:\n* Collect information about a user, including a user's activity, interests, visits to sites or apps, demographic information, or location, to create or edit a user profile for personalising content.\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalising content."
    },
    '6': {
      id: 6,
      name: 'Select personalised content',
      description:
        'Personalised content can be shown to you based on a profile about you.',
      descriptionLegal:
        'To select personalised content vendors can:\n* Select personalised content based on a user profile or other historical user data, including a user\u2019s prior activity, interests, visits to sites or apps, location, or demographic information.'
    },
    '7': {
      id: 7,
      name: 'Measure ad performance',
      description:
        'The performance and effectiveness of ads that you see or interact with can be measured.',
      descriptionLegal:
        "To measure ad performance vendors can:\n* Measure whether and how ads were delivered to and interacted with by a user\n* Provide reporting about ads including their effectiveness and performance\n* Provide reporting about users who interacted with ads using data observed during the course of the user's interaction with that ad\n* Provide reporting to publishers about the ads displayed on their property\n* Measure whether an ad is serving in a suitable editorial environment (brand-safe) context\n* Determine the percentage of the ad that had the opportunity to be seen and the duration of that opportunity\n* Combine this information with other information previously collected, including from across websites and apps\nVendors cannot:\n*Apply panel- or similarly-derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)"
    },
    '8': {
      id: 8,
      name: 'Measure content performance',
      description:
        'The performance and effectiveness of content that you see or interact with can be measured.',
      descriptionLegal:
        'To measure content performance vendors can:\n* Measure and report on how content was delivered to and interacted with by users.\n* Provide reporting, using directly measurable or known information, about users who interacted with the content\n* Combine this information with other information previously collected, including from across websites and apps.\nVendors cannot:\n* Measure whether and how ads (including native ads) were delivered to and interacted with by a user.\n* Apply panel- or similarly derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)'
    },
    '9': {
      id: 9,
      name: 'Apply market research to generate audience insights',
      description:
        'Market research can be used to learn more about the audiences who visit sites/apps and view ads.',
      descriptionLegal:
        'To apply market research to generate audience insights vendors can:\n* Provide aggregate reporting to advertisers or their representatives about the audiences reached by their ads, through panel-based and similarly derived insights.\n* Provide aggregate reporting to publishers about the audiences that were served or interacted with content and/or ads on their property by applying panel-based and similarly derived insights.\n* Associate offline data with an online user for the purposes of market research to generate audience insights if vendors have declared to match and combine offline data sources (Feature 1)\n* Combine this information with other information previously collected including from across websites and apps. \nVendors cannot:\n* Measure the performance and effectiveness of ads that a specific user was served or interacted with, without a Legal Basis to measure ad performance.\n* Measure which content a specific user was served and how they interacted with it, without a Legal Basis to measure content performance.'
    },
    '10': {
      id: 10,
      name: 'Develop and improve products',
      description:
        'Your data can be used to improve existing systems and software, and to develop new products',
      descriptionLegal:
        'To develop new products and improve products vendors can:\n* Use information to improve their existing products with new features and to develop new products\n* Create new models and algorithms through machine learning\nVendors cannot:\n* Conduct any other data processing operation allowed under a different purpose under this purpose'
    }
  },
  features: {
    '1': {
      id: 1,
      name: 'Cotejar y combinar fuentes de datos off line',
      description:
        'Los datos obtenidos de fuentes de datos off line pueden combinarse con su actividad on line para respaldar una o más finalidades.',
      descriptionLegal:
        'Los proveedores pueden: \n* Combinar los datos obtenidos off line con los datos recogidos on line en apoyo de una o más Finalidades o Finalidades especiales.'
    },
    '2': {
      id: 2,
      name: 'Vincular diferentes dispositivos',
      description:
        'Se puede determinar que diferentes dispositivos pertenecen a usted o a su hogar para una o más finalidades.',
      descriptionLegal:
        'Los proveedores pueden:\n* Determinar de forma determinista que dos o más dispositivos pertenecen al mismo usuario u hogar\n* Determinar de forma probabilística que dos o más dispositivos pertenecen al mismo usuario u hogar\n* Analizar activamente las características del dispositivo para encontrar su identificación probabilística si los usuarios han permitido a los proveedores analizar activamente las características del dispositivo para su identificación (Funcionalidad especial 2)\n'
    },
    '3': {
      id: 3,
      name:
        'Recibir y utilizar para su identificación las características del dispositivo que    se envían automáticamente',
      description:
        'Su dispositivo puede distinguirse de otros dispositivos a partir de la información que envía automáticamente, como la dirección IP o el tipo de navegador.',
      descriptionLegal:
        'Los proveedores pueden:\n* Crear un identificador utilizando los datos recopilados automáticamente en un dispositivo para características específicas, por ejemplo, dirección IP o la cadena de agente de usuario.\n* Utilizar este identificador para intentar volver a identificar un dispositivo.\nLos proveedores no pueden:\n* Crear un identificador utilizando datos recogidos mediante el análisis activo de un dispositivo para hallar funcionalidads específicas, por ejemplo, fuentes instaladas o resolución de pantalla sin aceptación independiente del usuario para analizar de forma activa las características del dispositivo para su identificación.\n* Utilizar este identificador para volver a identificar un dispositivo.\n'
    }
  },
  specialFeatures: {
    1: {
      id: 1,
      name: 'Utilizar datos de localización geográfica precisa',
      description:
        'Sus datos de localización geográfica precisa se pu…ación puede tener una precisión de varios metros.',
      descriptionLegal:
        'Los proveedores pueden:↵* Recoger y tratar datos d…esto puede tener una precisión de varios metros.↵'
    },
    2: {
      id: 2,
      name:
        'Analizar activamente las características del dispositivo para su identificación',
      description:
        'Su dispositivo puede identificarse basándose en un…n única de las características de su dispositivo.',
      descriptionLegal:
        'Los proveedores pueden:↵* Crear un identificador u…icador para volver a identificar un dispositivo.↵'
    }
  },
  specialPurposes: {
    '1': {
      id: 1,
      name: 'Garantizar la seguridad, evitar fraudes y depurar errores',
      description:
        'Sus datos pueden utilizarse para supervisar y evitar actividades fraudulentas, y para asegurar que los sistemas y procesos funcionen de forma correcta y segura.',
      descriptionLegal:
        'Para garantizar la seguridad, evitar fraudes y depurar errores, los proveedores pueden:\n* Asegurarse de que los datos se transmitan de forma segura \n* Detectar y evitar actividades maliciosas, fraudulentas, inaceptables o ilegales.\n* Asegurar el funcionamiento correcto y eficaz de los sistemas y procesos, lo que incluye supervisar y mejorar el rendimiento de los sistemas y procesos empleados en las finalidades permitidas\nLos proveedores no pueden:\n* Llevar a cabo ninguna otra operación de tratamiento de datos permitida en virtud de una finalidad distinta.\nNota: Los datos recopilados y utilizados para garantizar la seguridad, evitar el fraude y depurar errores pueden incluir características del dispositivo enviadas automáticamente para su identificación, datos de geolocalización precisos y datos obtenidos analizando de forma activa las características del dispositivo para su identificación sin que sea necesario revelar más información y/o una aceptación independiente.  \n'
    },
    '2': {
      id: 2,
      name: 'Servir técnicamente anuncios o contenido',
      description:
        'Su dispositivo puede recibir y enviar información que le permita ver e interactuar con anuncios y contenido.',
      descriptionLegal:
        'Para servir información y responder a solicitudes técnicas, los proveedores pueden:\n* Utilizar la dirección IP de un usuario para entregar un anuncio a través de Internet\n* Responder a la interacción de un usuario con un anuncio enviando al usuario a una página de destino\n* Utilizar la dirección IP de un usuario para entregar contenido a través de Internet\n* Responder a la interacción de un usuario con el contenido enviando al usuario a una página de destino\n* Utilizar información sobre el tipo de dispositivo y sus capacidades para entregar anuncios o contenido, por ejemplo, para entregar el archivo publicitario o de vídeo de tamaño adecuado en un formato compatible con el dispositivo\nLos proveedores no pueden:\n* Llevar a cabo, según esta finalidad, ninguna otra operación de tratamiento de datos permitida en virtud de una finalidad distinta.\n'
    }
  },
  vendors: {
    '8': {
      id: 8,
      name: 'Emerse Sverige AB',
      purposes: [1, 3, 4],
      legIntPurposes: [2, 7, 8, 9],
      flexiblePurposes: [2, 9],
      specialPurposes: [1, 2],
      features: [1, 2],
      specialFeatures: [],
      policyUrl: 'https://www.emerse.com/privacy-policy/'
    },
    '9': {
      id: 9,
      name: 'AdMaxim Inc.',
      purposes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      legIntPurposes: [],
      flexiblePurposes: [],
      specialPurposes: [],
      features: [3],
      specialFeatures: [1],
      policyUrl: 'http://www.admaxim.com/admaxim-privacy-policy/'
    },
    '12': {
      id: 12,
      name: 'BeeswaxIO Corporation',
      purposes: [1, 2, 3, 4, 7],
      legIntPurposes: [],
      flexiblePurposes: [],
      specialPurposes: [2],
      features: [1, 3],
      specialFeatures: [1],
      policyUrl: 'https://www.beeswax.com/privacy/'
    },
    '28': {
      id: 28,
      name: 'TripleLift, Inc.',
      purposes: [1],
      legIntPurposes: [2, 7, 9, 10],
      flexiblePurposes: [2, 7, 9, 10],
      specialPurposes: [1, 2],
      features: [],
      specialFeatures: [1],
      policyUrl: 'https://triplelift.com/privacy/',
      overflow: {httpGetLimit: 32}
    },
    '25': {
      id: 25,
      name: 'Verizon Media EMEA Limited',
      purposes: [1, 3, 4, 5, 6],
      legIntPurposes: [2, 7, 8, 9, 10],
      flexiblePurposes: [2, 7, 8, 9, 10],
      specialPurposes: [1, 2],
      features: [1, 2, 3],
      specialFeatures: [1],
      policyUrl:
        'https://www.verizonmedia.com/policies/ie/en/verizonmedia/privacy/index.html'
    },
    '6': {
      id: 6,
      name: 'AdSpirit GmbH',
      purposes: [1, 2, 3, 4, 7, 10],
      legIntPurposes: [],
      flexiblePurposes: [2, 3, 4, 7],
      specialPurposes: [1, 2],
      features: [3],
      specialFeatures: [],
      policyUrl: 'http://www.adspirit.de/privacy',
      overflow: {httpGetLimit: 32}
    },
    '24': {
      id: 24,
      name: 'Epsilon',
      purposes: [1, 2, 3, 4, 5, 6, 7, 9, 10],
      legIntPurposes: [],
      flexiblePurposes: [],
      specialPurposes: [1, 2],
      features: [1, 2, 3],
      specialFeatures: [],
      policyUrl: 'https://www.conversantmedia.eu/legal/privacy-policy'
    }
  }
}

const mockedUserConsent = mockedEmptyUserConsent
export {mockedUserConsent, mockedVendorList}
