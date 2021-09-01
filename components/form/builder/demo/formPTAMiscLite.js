export const formPTAMiscLite = {
  form: {
    id: 'milanuncios-insert-misclite',
    type: 'group',
    label: 'Publica tu anuncio',
    actionlabel: 'Publicar',
    fields: [
      {
        id: 'is_edit',
        type: 'picker',
        hidden: true,
        value: 'false',
        datalist: [{value: 'true'}, {value: 'false'}]
      },
      {
        id: 'demandax',
        type: 'picker',
        display: 'button-inline',
        label: 'Tipo de anuncio',
        value: 'n',
        datalist: [
          {value: 'n', text: 'Vendo'},
          {value: 's', text: 'Compro (o busco)'}
        ],
        required: true,
        constraints: [
          {
            property: {
              notnull: ''
            },
            message: 'Campo requerido'
          }
        ]
      },
      {
        id: 'ad_info',
        type: 'fieldset',
        display: 'inline',
        label: 'Datos del anuncio',
        fields: [
          {
            id: 'titulo',
            type: 'text',
            label: 'Título',
            display: 'text',
            required: true,
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Necesitamos un título para publicar el anuncio'
              },
              {
                property: {
                  maxlength: '40'
                },
                message: 'Máximo 40 caracteres'
              }
            ]
          },
          {
            id: 'texto',
            type: 'text',
            label: 'Descripción',
            display: 'multiline',
            required: true,
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Necesitamos una descripción para publicar el anuncio'
              },
              {
                property: {
                  minlength: '35'
                },
                message: 'Mínimo 35 caracteres'
              },
              {
                property: {
                  maxlength: '3000'
                },
                message: 'Máximo 3000 caracteres'
              }
            ]
          }
        ]
      },
      {
        id: 'location',
        type: 'fieldset',
        display: 'inline',
        label: 'Localización',
        fields: [
          {
            id: 'province',
            type: 'picker',
            display: 'filter',
            label: 'Provincia',
            datalist: [
              {
                value: '15',
                text: 'A Coruña'
              },
              {
                value: '1',
                text: 'Álava'
              },
              {
                value: '2',
                text: 'Albacete'
              },
              {
                value: '3',
                text: 'Alicante'
              },
              {
                value: '4',
                text: 'Almería'
              },
              {
                value: '33',
                text: 'Asturias'
              },
              {
                value: '5',
                text: 'Ávila'
              },
              {
                value: '6',
                text: 'Badajoz'
              },
              {
                value: '7',
                text: 'Baleares'
              },
              {
                value: '8',
                text: 'Barcelona'
              },
              {
                value: '9',
                text: 'Burgos'
              },
              {
                value: '10',
                text: 'Cáceres'
              },
              {
                value: '11',
                text: 'Cádiz'
              },
              {
                value: '39',
                text: 'Cantabria'
              },
              {
                value: '12',
                text: 'Castellón'
              },
              {
                value: '51',
                text: 'Ceuta'
              },
              {
                value: '13',
                text: 'Ciudad Real'
              },
              {
                value: '14',
                text: 'Córdoba'
              },
              {
                value: '16',
                text: 'Cuenca'
              },
              {
                value: '17',
                text: 'Girona'
              },
              {
                value: '18',
                text: 'Granada'
              },
              {
                value: '19',
                text: 'Guadalajara'
              },
              {
                value: '20',
                text: 'Guipúzcoa'
              },
              {
                value: '21',
                text: 'Huelva'
              },
              {
                value: '22',
                text: 'Huesca'
              },
              {
                value: '23',
                text: 'Jaén'
              },
              {
                value: '26',
                text: 'La Rioja'
              },
              {
                value: '35',
                text: 'Las Palmas'
              },
              {
                value: '24',
                text: 'León'
              },
              {
                value: '25',
                text: 'Lleida'
              },
              {
                value: '27',
                text: 'Lugo'
              },
              {
                value: '28',
                text: 'Madrid'
              },
              {
                value: '29',
                text: 'Málaga'
              },
              {
                value: '52',
                text: 'Melilla'
              },
              {
                value: '30',
                text: 'Murcia'
              },
              {
                value: '31',
                text: 'Navarra'
              },
              {
                value: '32',
                text: 'Ourense'
              },
              {
                value: '34',
                text: 'Palencia'
              },
              {
                value: '36',
                text: 'Pontevedra'
              },
              {
                value: '37',
                text: 'Salamanca'
              },
              {
                value: '40',
                text: 'Segovia'
              },
              {
                value: '41',
                text: 'Sevilla'
              },
              {
                value: '42',
                text: 'Soria'
              },
              {
                value: '43',
                text: 'Tarragona'
              },
              {
                value: '38',
                text: 'Tenerife'
              },
              {
                value: '44',
                text: 'Teruel'
              },
              {
                value: '45',
                text: 'Toledo'
              },
              {
                value: '46',
                text: 'Valencia'
              },
              {
                value: '47',
                text: 'Valladolid'
              },
              {
                value: '48',
                text: 'Vizcaya'
              },
              {
                value: '49',
                text: 'Zamora'
              },
              {
                value: '50',
                text: 'Zaragoza'
              }
            ],
            required: true,
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Selecciona una provincia'
              }
            ]
          },
          {
            id: 'municipality',
            type: 'picker',
            display: 'filter',
            label: 'Localidad',
            disabled: true,
            required: true,
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Selecciona un Localidad'
              }
            ]
          }
        ]
      },
      {
        id: 'user_info',
        type: 'fieldset',
        display: 'inline',
        label: 'Datos de contacto',
        fields: [
          {
            id: 'nombre',
            type: 'text',
            label: 'Nombre',
            display: 'text',
            constraints: [
              {
                property: {
                  maxlength: '20'
                },
                message: 'Máximo 20 carácteres'
              }
            ]
          },
          {
            id: 'email',
            type: 'text',
            label: 'Email',
            display: 'mail',
            required: true,
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Campo requerido'
              },
              {
                property: {
                  pattern:
                    '(?:[A-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[A-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-z0-9-]*[A-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])'
                },
                message: 'Ha de ser un email válido'
              },
              {
                property: {
                  maxlength: '40'
                },
                message: 'Máximo 40 carácteres'
              }
            ]
          },
          {
            id: 'telefono1',
            type: 'text',
            display: 'phone',
            label: 'Teléfono 1',
            constraints: [
              {
                property: {
                  pattern: '^(\\+34|0034|34)?[6|7|9][0-9]{8}$'
                },
                message: 'Este teléfono no es válido'
              }
            ]
          },
          {
            id: 'telefono2',
            type: 'text',
            display: 'phone',
            label: 'Teléfono 2',
            constraints: [
              {
                property: {
                  pattern: '^(\\+34|0034|34)?[6|7|9][0-9]{8}$'
                },
                message: 'Este teléfono no es válido'
              }
            ]
          },
          {
            id: 'terms',
            type: 'picker',
            label: 'Acepto las condiciones de uso y la política de privacidad',
            hint:
              'En la sección de gestión de privacidad del área de usuario podrás aprender más sobre los distintos usos de tus datos y gestionar los permisos sobre ellos.',
            display: 'checkbox',
            value: 'false',
            required: true,
            constraints: [
              {
                property: {
                  pattern: '^true$'
                },
                message:
                  'Tienes que aceptar las condiciones de uso y la política de privacidad'
              }
            ],
            datalist: [
              {
                value: 'false',
                text: 'false'
              },
              {
                value: 'true',
                text: 'true'
              }
            ]
          }
        ]
      }
    ],
    rules: {
      municipality: [
        {
          when: [
            {
              operator: 'CHANGED',
              id: 'province',
              value: []
            }
          ],
          then: {
            data: {
              disabled: true,
              hidden: false,
              required: true,
              datalist: [],
              value: ''
            },
            remote: true
          }
        }
      ],
      demandax: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'is_edit',
              value: ['true']
            }
          ],
          then: {
            data: {
              hidden: true
            }
          }
        }
      ],
      email: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'is_edit',
              value: ['true']
            }
          ],
          then: {
            data: {
              disabled: true
            }
          }
        }
      ],
      terms: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'is_edit',
              value: ['true']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: 'true'
            }
          }
        }
      ]
    }
  }
}
