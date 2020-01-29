export const formPTAMotor = {
  form: {
    id: 'cochesnet-insertion',
    type: 'group',
    label: 'Publica tu anuncio',
    actionlabel: 'Publica tu anuncio',
    fields: [
      {
        id: 'images',
        type: 'images',
        label: 'Fotografías de tu coche',
        display: 'image'
      },
      {
        id: 'carData',
        type: 'fieldset',
        display: 'inline',
        label: 'Datos de tu coche',
        fields: [
          {
            id: 'carMake',
            type: 'picker',
            label: 'Marca',
            disabled: false,
            required: true,
            datalist: [
              {value: '1330', text: 'ABARTH'},
              {value: '1', text: 'ALFA ROMEO'},
              {value: '238', text: 'ARO'},
              {value: '1326', text: 'ASIA'},
              {value: '2', text: 'ASIA MOTORS'},
              {value: '3', text: 'ASTON MARTIN'},
              {value: '4', text: 'AUDI'},
              {value: '111', text: 'AUSTIN'},
              {value: '1321', text: 'AUVERLAND'},
              {value: '6', text: 'BENTLEY'},
              {value: '241', text: 'BERTONE'},
              {value: '7', text: 'BMW'},
              {value: '8', text: 'CADILLAC'},
              {value: '9', text: 'CHEVROLET'},
              {value: '10', text: 'CHRYSLER'},
              {value: '11', text: 'CITROEN'},
              {value: '1327', text: 'CORVETTE'},
              {value: '1011', text: 'DACIA'},
              {value: '12', text: 'DAEWOO'},
              {value: '102', text: 'DAF'},
              {value: '13', text: 'DAIHATSU'},
              {value: '145', text: 'DAIMLER'},
              {value: '173', text: 'DODGE'},
              {value: '146', text: 'FERRARI'},
              {value: '14', text: 'FIAT'},
              {value: '15', text: 'FORD'},
              {value: '16', text: 'GALLOPER'},
              {value: '191', text: 'GMC'},
              {value: '69', text: 'HONDA'},
              {value: '234', text: 'HUMMER'},
              {value: '18', text: 'HYUNDAI'},
              {value: '1025', text: 'INFINITI'},
              {value: '185', text: 'INNOCENTI'},
              {value: '19', text: 'ISUZU'},
              {value: '126', text: 'IVECO'},
              {value: '103', text: 'IVECO-PEGASO'},
              {value: '20', text: 'JAGUAR'},
              {value: '21', text: 'JEEP'},
              {value: '22', text: 'KIA'},
              {value: '153', text: 'LADA'},
              {value: '243', text: 'LAMBORGHINI'},
              {value: '23', text: 'LANCIA'},
              {value: '24', text: 'LAND-ROVER'},
              {value: '128', text: 'LDV'},
              {value: '25', text: 'LEXUS'},
              {value: '147', text: 'LOTUS'},
              {value: '246', text: 'MAHINDRA'},
              {value: '26', text: 'MASERATI'},
              {value: '1323', text: 'MAYBACH'},
              {value: '27', text: 'MAZDA'},
              {value: '28', text: 'MERCEDES-BENZ'},
              {value: '29', text: 'MG'},
              {value: '222', text: 'MINI'},
              {value: '30', text: 'MITSUBISHI'},
              {value: '149', text: 'MORGAN'},
              {value: '31', text: 'NISSAN'},
              {value: '32', text: 'OPEL'},
              {value: '33', text: 'PEUGEOT'},
              {value: '112', text: 'PONTIAC'},
              {value: '34', text: 'PORSCHE'},
              {value: '35', text: 'RENAULT'},
              {value: '36', text: 'ROLLS-ROYCE'},
              {value: '37', text: 'ROVER'},
              {value: '38', text: 'SAAB'},
              {value: '1328', text: 'SANTANA'},
              {value: '39', text: 'SEAT'},
              {value: '40', text: 'SKODA'},
              {value: '41', text: 'SMART'},
              {value: '42', text: 'SSANGYONG'},
              {value: '43', text: 'SUBARU'},
              {value: '44', text: 'SUZUKI'},
              {value: '156', text: 'TALBOT'},
              {value: '45', text: 'TATA'},
              {value: '46', text: 'TOYOTA'},
              {value: '1324', text: 'UMM'},
              {value: '1325', text: 'VAZ'},
              {value: '47', text: 'VOLKSWAGEN'},
              {value: '48', text: 'VOLVO'},
              {value: '186', text: 'WARTBURG'}
            ]
          },
          {
            id: 'carModel',
            type: 'picker',
            label: 'Modelo',
            disabled: true,
            required: true
          },
          {
            id: 'carBodyStyle',
            type: 'picker',
            label: 'Carrocería',
            disabled: true,
            required: true
          },
          {
            id: 'fuel',
            type: 'picker',
            label: 'Combustible',
            disabled: true,
            required: true
          },
          {
            id: 'registrationDate',
            type: 'picker',
            label: 'Año',
            disabled: true,
            required: true
          },
          {
            id: 'carVersion',
            type: 'picker',
            label: 'Versión',
            disabled: true,
            required: true
          },
          {
            id: 'mileage',
            type: 'text',
            label: 'Kilómetros',
            display: 'distance',
            disabled: false,
            required: true,
            constraints: [
              {type: 'pattern', value: '\\d*', message: 'Sólo números ;)'}
            ]
          },
          {
            id: 'transmission',
            type: 'picker',
            display: 'button-inline',
            label: 'Cambio',
            disabled: false,
            required: true,
            datalist: [
              {value: '1', text: 'Automático'},
              {value: '2', text: 'Manual'}
            ]
          },
          {
            id: 'color',
            type: 'picker',
            label: 'Color',
            disabled: false,
            required: true,
            datalist: [
              {value: '1', text: 'Amarillo'},
              {value: '2', text: 'Azul'},
              {value: '3', text: 'Beige'},
              {value: '4', text: 'Blanco'},
              {value: '5', text: 'Granate'},
              {value: '6', text: 'Gris / Plata'},
              {value: '7', text: 'Marrón'},
              {value: '8', text: 'Naranja'},
              {value: '9', text: 'Negro'},
              {value: '10', text: 'Rojo'},
              {value: '11', text: 'Rosa'},
              {value: '12', text: 'Verde'},
              {value: '13', text: 'Violeta / Lila'}
            ]
          },
          {
            id: 'price',
            type: 'numeric',
            label: 'Precio',
            display: 'money',
            required: false,
            constraints: [
              {type: 'pattern', value: '\\d*', message: 'Sólo números ;)'}
            ]
          }
        ]
      },
      {
        id: 'extraData',
        type: 'fieldset',
        display: 'inline',
        label: 'Datos Adicionales',
        fields: [
          {
            id: 'description',
            type: 'text',
            label:
              'Añade toda la información que quieras sobre el estado de tu vehículo',
            display: 'multiline',
            required: true,
            constraints: [
              {
                type: 'maxlength',
                value: '2000',
                message: 'Tas pasaaao!'
              }
            ]
          }
        ]
      },
      {
        id: 'userData',
        type: 'fieldset',
        display: 'inline',
        label: 'Datos de contacto',
        fields: [
          {
            id: 'province',
            type: 'picker',
            label: 'Provincia',
            required: true,
            datalist: [
              {value: '15', text: 'A Coruña'},
              {value: '1', text: 'Álava'},
              {value: '2', text: 'Albacete'},
              {value: '3', text: 'Alicante'},
              {value: '4', text: 'Almería'},
              {value: '33', text: 'Asturias'},
              {value: '5', text: 'Ávila'},
              {value: '6', text: 'Badajoz'},
              {value: '7', text: 'Baleares'},
              {value: '8', text: 'Barcelona'},
              {value: '9', text: 'Burgos'},
              {value: '10', text: 'Cáceres'},
              {value: '11', text: 'Cádiz'},
              {value: '39', text: 'Cantabria'},
              {value: '12', text: 'Castellón'},
              {value: '51', text: 'Ceuta'},
              {value: '13', text: 'Ciudad Real'},
              {value: '14', text: 'Córdoba'},
              {value: '16', text: 'Cuenca'},
              {value: '17', text: 'Girona'},
              {value: '18', text: 'Granada'},
              {value: '19', text: 'Guadalajara'},
              {value: '20', text: 'Guipúzcoa'},
              {value: '21', text: 'Huelva'},
              {value: '22', text: 'Huesca'},
              {value: '23', text: 'Jaén'},
              {value: '26', text: 'La Rioja'},
              {value: '35', text: 'Las Palmas'},
              {value: '24', text: 'León'},
              {value: '25', text: 'Lleida'},
              {value: '27', text: 'Lugo'},
              {value: '28', text: 'Madrid'},
              {value: '29', text: 'Málaga'},
              {value: '52', text: 'Melilla'},
              {value: '30', text: 'Murcia'},
              {value: '31', text: 'Navarra'},
              {value: '32', text: 'Orense'},
              {value: '34', text: 'Palencia'},
              {value: '36', text: 'Pontevedra'},
              {value: '37', text: 'Salamanca'},
              {value: '40', text: 'Segovia'},
              {value: '41', text: 'Sevilla'},
              {value: '42', text: 'Soria'},
              {value: '38', text: 'Sta. C. Tenerife'},
              {value: '43', text: 'Tarragona'},
              {value: '44', text: 'Teruel'},
              {value: '45', text: 'Toledo'},
              {value: '46', text: 'Valencia'},
              {value: '47', text: 'Valladolid'},
              {value: '48', text: 'Vizcaya'},
              {value: '49', text: 'Zamora'},
              {value: '50', text: 'Zaragoza'}
            ],
            constraints: [
              {type: 'notnull', value: '', message: 'Campo requerido'}
            ]
          },
          {
            id: 'phone',
            type: 'numeric',
            display: 'phone',
            label: 'Teléfono',
            required: true,
            constraints: [
              {type: 'pattern', value: '\\d*', message: 'Sólo números ;)'}
            ]
          }
        ]
      },
      {
        id: 'extras',
        type: 'fieldset',
        display: 'inline',
        label: 'Extras',
        fields: [
          {
            id: 'publishVibbo',
            type: 'picker',
            display: 'switch',
            label: 'Publicar también en Vibbo',
            value: 'false',
            datalist: [
              {value: 'false', text: 'false'},
              {value: 'true', text: 'true'}
            ]
          }
        ]
      }
    ],
    rules: {
      carModel: [
        {
          when: [{operator: 'EXISTS', id: 'carMake', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            },
            remote: true
          }
        }
      ],
      carBodyStyle: [
        {
          when: [{operator: 'EXISTS', id: 'carModel', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            },
            remote: true
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carMake', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        }
      ],
      fuel: [
        {
          when: [
            {operator: 'EXISTS', id: 'carBodyStyle', value: []},
            {operator: 'EXISTS', id: 'carModel', value: []}
          ],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            },
            remote: true
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carModel', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carMake', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        }
      ],
      registrationDate: [
        {
          when: [
            {operator: 'EXISTS', id: 'fuel', value: []},
            {operator: 'EXISTS', id: 'carModel', value: []},
            {operator: 'EXISTS', id: 'carBodyStyle', value: []}
          ],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            },
            remote: true
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carModel', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carMake', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carBodyStyle', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        }
      ],
      carVersion: [
        {
          when: [
            {operator: 'EXISTS', id: 'registrationDate', value: []},
            {operator: 'EXISTS', id: 'fuel', value: []},
            {operator: 'EXISTS', id: 'carModel', value: []},
            {operator: 'EXISTS', id: 'carBodyStyle', value: []}
          ],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            },
            remote: true
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'fuel', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carBodyStyle', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carModel', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        },
        {
          when: [{operator: 'EXISTS', id: 'carMake', value: []}],
          then: {
            data: {
              disabled: true,
              required: true,
              datalist: [],
              value: ''
            }
          }
        }
      ]
    }
  }
}
