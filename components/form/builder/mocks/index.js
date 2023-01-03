export const FORM_BUILDER_SELECT_FIELD_MOCK = {
  form: {
    id: 'milanuncios-insert-car-v3',
    type: 'group',
    label: 'Publica tu anuncio',
    actionlabel: 'Publicar',
    fields: [
      {
        id: 'hasEnergyCertificate',
        hint: '¿Tienes certificado energético?',
        type: 'picker',
        tabIndex: 0,
        display: 'dropdown',
        required: true,
        datalist: [
          {
            value: 'true',
            text: 'Sí, tengo el certificado energético'
          },
          {value: 'false', text: 'Está en trámite'}
        ],
        constraints: [
          {
            property: {notnull: ''},
            message: 'Este campo es obligatorio'
          }
        ]
      },
      {
        id: 'searchACountry',
        hint: 'Busca un país',
        type: 'picker',
        tabIndex: 0,
        display: 'autocomplete',
        required: true,
        datalist: [
          {
            value: 'spain',
            text: 'España'
          },
          {value: 'france', text: 'Francia'}
        ],
        constraints: [
          {
            property: {notnull: ''},
            message: 'Este campo es obligatorio'
          }
        ]
      }
    ],
    rules: {}
  }
}

export const FORM_BUILDER_SELECT_FIELD_WITH_DISABLED_MOCK = {
  form: {
    id: 'milanuncios-insert-car-v3',
    type: 'group',
    label: 'Publica tu anuncio',
    actionlabel: 'Publicar',
    fields: [
      {
        id: 'hasEnergyCertificate',
        hint: '¿Tienes certificado energético?',
        type: 'picker',
        tabIndex: 0,
        display: 'dropdown',
        required: true,
        disabled: true,
        datalist: [
          {
            value: 'true',
            text: 'Sí, tengo el certificado energético'
          },
          {value: 'false', text: 'Está en trámite'}
        ],
        constraints: [
          {
            property: {notnull: ''},
            message: 'Este campo es obligatorio'
          }
        ]
      },
      {
        id: 'searchACountry',
        hint: 'Busca un país',
        type: 'picker',
        tabIndex: 0,
        display: 'autocomplete',
        required: true,
        datalist: [
          {
            value: 'spain',
            text: 'España'
          },
          {value: 'france', text: 'Francia'}
        ],
        constraints: [
          {
            property: {notnull: ''},
            message: 'Este campo es obligatorio'
          }
        ]
      }
    ],
    rules: {}
  }
}
