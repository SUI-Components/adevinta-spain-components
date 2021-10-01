export const formPTACar = {
  form: {
    id: 'milanuncios-insert-car-v3',
    type: 'group',
    label: 'Publica tu anuncio',
    actionlabel: 'Publicar',
    fields: [
      {
        id: 'is_edit',
        type: 'picker',
        hidden: true,
        value: 'false',
        datalist: [
          {
            value: 'true'
          },
          {
            value: 'false'
          }
        ]
      },
      {
        id: 'demandax',
        type: 'picker',
        display: 'button-inline',
        label: 'Tipo de anuncio',
        value: 'n',
        datalist: [
          {
            value: 'n',
            text: 'Oferta'
          },
          {
            value: 's',
            text: 'Demanda'
          }
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
            id: 'carMake',
            type: 'picker',
            display: 'filter',
            label: 'Marca',
            required: true,
            datalist: [
              {
                value: '1330',
                text: 'ABARTH'
              },
              {
                value: '1',
                text: 'ALFA ROMEO'
              },
              {
                value: '238',
                text: 'ARO'
              },
              {
                value: '1326',
                text: 'ASIA'
              },
              {
                value: '2',
                text: 'ASIA MOTORS'
              },
              {
                value: '3',
                text: 'ASTON MARTIN'
              },
              {
                value: '4',
                text: 'AUDI'
              },
              {
                value: '111',
                text: 'AUSTIN'
              },
              {
                value: '1321',
                text: 'AUVERLAND'
              },
              {
                value: '6',
                text: 'BENTLEY'
              },
              {
                value: '241',
                text: 'BERTONE'
              },
              {
                value: '7',
                text: 'BMW'
              },
              {
                value: '8',
                text: 'CADILLAC'
              },
              {
                value: '9',
                text: 'CHEVROLET'
              },
              {
                value: '10',
                text: 'CHRYSLER'
              },
              {
                value: '11',
                text: 'CITROEN'
              },
              {
                value: '1327',
                text: 'CORVETTE'
              },
              {
                value: '1011',
                text: 'DACIA'
              },
              {
                value: '12',
                text: 'DAEWOO'
              },
              {
                value: '102',
                text: 'DAF'
              },
              {
                value: '13',
                text: 'DAIHATSU'
              },
              {
                value: '145',
                text: 'DAIMLER'
              },
              {
                value: '173',
                text: 'DODGE'
              },
              {
                value: '146',
                text: 'FERRARI'
              },
              {
                value: '14',
                text: 'FIAT'
              },
              {
                value: '15',
                text: 'FORD'
              },
              {
                value: '16',
                text: 'GALLOPER'
              },
              {
                value: '191',
                text: 'GMC'
              },
              {
                value: '69',
                text: 'HONDA'
              },
              {
                value: '234',
                text: 'HUMMER'
              },
              {
                value: '18',
                text: 'HYUNDAI'
              },
              {
                value: '1025',
                text: 'INFINITI'
              },
              {
                value: '185',
                text: 'INNOCENTI'
              },
              {
                value: '19',
                text: 'ISUZU'
              },
              {
                value: '126',
                text: 'IVECO'
              },
              {
                value: '103',
                text: 'IVECO-PEGASO'
              },
              {
                value: '20',
                text: 'JAGUAR'
              },
              {
                value: '21',
                text: 'JEEP'
              },
              {
                value: '22',
                text: 'KIA'
              },
              {
                value: '153',
                text: 'LADA'
              },
              {
                value: '243',
                text: 'LAMBORGHINI'
              },
              {
                value: '23',
                text: 'LANCIA'
              },
              {
                value: '24',
                text: 'LAND-ROVER'
              },
              {
                value: '128',
                text: 'LDV'
              },
              {
                value: '25',
                text: 'LEXUS'
              },
              {
                value: '147',
                text: 'LOTUS'
              },
              {
                value: '246',
                text: 'MAHINDRA'
              },
              {
                value: '26',
                text: 'MASERATI'
              },
              {
                value: '1323',
                text: 'MAYBACH'
              },
              {
                value: '27',
                text: 'MAZDA'
              },
              {
                value: '28',
                text: 'MERCEDES-BENZ'
              },
              {
                value: '29',
                text: 'MG'
              },
              {
                value: '222',
                text: 'MINI'
              },
              {
                value: '30',
                text: 'MITSUBISHI'
              },
              {
                value: '149',
                text: 'MORGAN'
              },
              {
                value: '31',
                text: 'NISSAN'
              },
              {
                value: '32',
                text: 'OPEL'
              },
              {
                value: '33',
                text: 'PEUGEOT'
              },
              {
                value: '112',
                text: 'PONTIAC'
              },
              {
                value: '34',
                text: 'PORSCHE'
              },
              {
                value: '35',
                text: 'RENAULT'
              },
              {
                value: '36',
                text: 'ROLLS-ROYCE'
              },
              {
                value: '37',
                text: 'ROVER'
              },
              {
                value: '38',
                text: 'SAAB'
              },
              {
                value: '1328',
                text: 'SANTANA'
              },
              {
                value: '39',
                text: 'SEAT'
              },
              {
                value: '40',
                text: 'SKODA'
              },
              {
                value: '41',
                text: 'SMART'
              },
              {
                value: '42',
                text: 'SSANGYONG'
              },
              {
                value: '43',
                text: 'SUBARU'
              },
              {
                value: '44',
                text: 'SUZUKI'
              },
              {
                value: '156',
                text: 'TALBOT'
              },
              {
                value: '45',
                text: 'TATA'
              },
              {
                value: '46',
                text: 'TOYOTA'
              },
              {
                value: '1324',
                text: 'UMM'
              },
              {
                value: '1325',
                text: 'VAZ'
              },
              {
                value: '47',
                text: 'VOLKSWAGEN'
              },
              {
                value: '48',
                text: 'VOLVO'
              },
              {
                value: '186',
                text: 'WARTBURG'
              }
            ],
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Indícanos la marca del vehículo'
              }
            ]
          },
          {
            id: 'carModel',
            type: 'picker',
            display: 'filter',
            label: 'Modelo',
            hint: 'Selecciona modelo',
            required: true,
            disabled: true,
            hidden: true,
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Indícanos el modelo del vehículo'
              }
            ]
          },
          {
            id: 'banos',
            type: 'picker',
            display: 'stepper',
            label: 'Puertas',
            value: '5',
            datalist: [
              {
                value: '2',
                text: '2 puertas'
              },
              {
                value: '3',
                text: '3 puertas'
              },
              {
                value: '4',
                text: '4 puertas'
              },
              {
                value: '5',
                text: '5 puertas'
              }
            ]
          },
          {
            id: 'combustible',
            type: 'picker',
            label: 'Combustible',
            required: true,
            datalist: [
              {
                value: 'Diesel',
                text: 'Diesel'
              },
              {
                value: 'Gasolina',
                text: 'Gasolina'
              },
              {
                value: 'Híbrido',
                text: 'Híbrido'
              },
              {
                value: 'Eléctrico',
                text: 'Eléctrico'
              },
              {
                value: 'GLP',
                text: 'GLP'
              }
            ],
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Indícanos el combustible del vehículo'
              }
            ]
          },
          {
            id: 'ano',
            type: 'picker',
            display: 'filter',
            label: 'Año de matriculación',
            hint: 'Año de matriculación',
            datalist: [
              {
                value: '2019',
                text: '2019'
              },
              {
                value: '2018',
                text: '2018'
              },
              {
                value: '2017',
                text: '2017'
              },
              {
                value: '2016',
                text: '2016'
              },
              {
                value: '2015',
                text: '2015'
              },
              {
                value: '2014',
                text: '2014'
              },
              {
                value: '2013',
                text: '2013'
              },
              {
                value: '2012',
                text: '2012'
              },
              {
                value: '2011',
                text: '2011'
              },
              {
                value: '2010',
                text: '2010'
              },
              {
                value: '2009',
                text: '2009'
              },
              {
                value: '2008',
                text: '2008'
              },
              {
                value: '2007',
                text: '2007'
              },
              {
                value: '2006',
                text: '2006'
              },
              {
                value: '2005',
                text: '2005'
              },
              {
                value: '2004',
                text: '2004'
              },
              {
                value: '2003',
                text: '2003'
              },
              {
                value: '2002',
                text: '2002'
              },
              {
                value: '2001',
                text: '2001'
              },
              {
                value: '2000',
                text: '2000'
              },
              {
                value: '1999',
                text: '1999'
              },
              {
                value: '1998',
                text: '1998'
              },
              {
                value: '1997',
                text: '1997'
              },
              {
                value: '1996',
                text: '1996'
              },
              {
                value: '1995',
                text: '1995'
              },
              {
                value: '1994',
                text: '1994'
              },
              {
                value: '1993',
                text: '1993'
              },
              {
                value: '1992',
                text: '1992'
              },
              {
                value: '1991',
                text: '1991'
              },
              {
                value: '1990',
                text: '1990'
              },
              {
                value: '1989',
                text: '1989'
              },
              {
                value: '1988',
                text: '1988'
              },
              {
                value: '1987',
                text: '1987'
              },
              {
                value: '1986',
                text: '1986'
              },
              {
                value: '1985',
                text: '1985'
              },
              {
                value: '1984',
                text: '1984'
              },
              {
                value: '1983',
                text: '1983'
              },
              {
                value: '1982',
                text: '1982'
              },
              {
                value: '1981',
                text: '1981'
              },
              {
                value: '1980',
                text: '1980'
              },
              {
                value: '1979',
                text: '1979'
              },
              {
                value: '1978',
                text: '1978'
              },
              {
                value: '1977',
                text: '1977'
              },
              {
                value: '1976',
                text: '1976'
              },
              {
                value: '1975',
                text: '1975'
              },
              {
                value: '1974',
                text: '1974'
              },
              {
                value: '1973',
                text: '1973'
              },
              {
                value: '1972',
                text: '1972'
              },
              {
                value: '1971',
                text: '1971'
              },
              {
                value: '1970',
                text: '1970'
              },
              {
                value: '1969',
                text: '1969'
              },
              {
                value: '1968',
                text: '1968'
              },
              {
                value: '1967',
                text: '1967'
              },
              {
                value: '1966',
                text: '1966'
              },
              {
                value: '1965',
                text: '1965'
              },
              {
                value: '1964',
                text: '1964'
              },
              {
                value: '1963',
                text: '1963'
              },
              {
                value: '1962',
                text: '1962'
              },
              {
                value: '1961',
                text: '1961'
              },
              {
                value: '1960',
                text: '1960'
              },
              {
                value: '1959',
                text: '1959'
              },
              {
                value: '1958',
                text: '1958'
              },
              {
                value: '1957',
                text: '1957'
              },
              {
                value: '1956',
                text: '1956'
              },
              {
                value: '1955',
                text: '1955'
              },
              {
                value: '1954',
                text: '1954'
              },
              {
                value: '1953',
                text: '1953'
              },
              {
                value: '1952',
                text: '1952'
              },
              {
                value: '1951',
                text: '1951'
              },
              {
                value: '1950',
                text: '1950'
              },
              {
                value: '1949',
                text: '1949'
              },
              {
                value: '1948',
                text: '1948'
              },
              {
                value: '1947',
                text: '1947'
              },
              {
                value: '1946',
                text: '1946'
              },
              {
                value: '1945',
                text: '1945'
              },
              {
                value: '1944',
                text: '1944'
              },
              {
                value: '1943',
                text: '1943'
              },
              {
                value: '1942',
                text: '1942'
              },
              {
                value: '1941',
                text: '1941'
              },
              {
                value: '1940',
                text: '1940'
              },
              {
                value: '1939',
                text: '1939'
              },
              {
                value: '1938',
                text: '1938'
              },
              {
                value: '1937',
                text: '1937'
              },
              {
                value: '1936',
                text: '1936'
              },
              {
                value: '1935',
                text: '1935'
              },
              {
                value: '1934',
                text: '1934'
              },
              {
                value: '1933',
                text: '1933'
              },
              {
                value: '1932',
                text: '1932'
              },
              {
                value: '1931',
                text: '1931'
              },
              {
                value: '1930',
                text: '1930'
              },
              {
                value: '1929',
                text: '1929'
              },
              {
                value: '1928',
                text: '1928'
              },
              {
                value: '1927',
                text: '1927'
              },
              {
                value: '1926',
                text: '1926'
              },
              {
                value: '1925',
                text: '1925'
              },
              {
                value: '1924',
                text: '1924'
              },
              {
                value: '1923',
                text: '1923'
              },
              {
                value: '1922',
                text: '1922'
              },
              {
                value: '1921',
                text: '1921'
              },
              {
                value: '1920',
                text: '1920'
              },
              {
                value: '1919',
                text: '1919'
              },
              {
                value: '1918',
                text: '1918'
              },
              {
                value: '1917',
                text: '1917'
              },
              {
                value: '1916',
                text: '1916'
              },
              {
                value: '1915',
                text: '1915'
              },
              {
                value: '1914',
                text: '1914'
              },
              {
                value: '1913',
                text: '1913'
              },
              {
                value: '1912',
                text: '1912'
              },
              {
                value: '1911',
                text: '1911'
              },
              {
                value: '1910',
                text: '1910'
              },
              {
                value: '1909',
                text: '1909'
              },
              {
                value: '1908',
                text: '1908'
              },
              {
                value: '1907',
                text: '1907'
              },
              {
                value: '1906',
                text: '1906'
              },
              {
                value: '1905',
                text: '1905'
              },
              {
                value: '1904',
                text: '1904'
              },
              {
                value: '1903',
                text: '1903'
              },
              {
                value: '1902',
                text: '1902'
              },
              {
                value: '1901',
                text: '1901'
              },
              {
                value: '1900',
                text: '1900'
              }
            ]
          },
          {
            id: 'playa',
            type: 'numeric',
            label: 'Potencia (CV)',
            constraints: [
              {
                property: {
                  min: '0'
                },
                message: 'La potencia debe ser igual o superior a 0'
              },
              {
                property: {
                  max: '999'
                },
                message: 'La potencia debe ser inferior a 1000'
              }
            ]
          },
          {
            id: 'kilometros',
            type: 'numeric',
            label: 'Kilómetros',
            constraints: [
              {
                property: {
                  min: '0'
                },
                message: 'Los kilómetros deben ser superiores a 0'
              },
              {
                property: {
                  max: '9999999'
                },
                message: 'Los kilómetros deben ser inferiores a 10.000.000'
              }
            ]
          },
          {
            id: 'm2',
            type: 'picker',
            display: 'button-inline',
            label: 'Tipo de cambio',
            value: '1',
            datalist: [
              {
                value: '1',
                text: 'Manual'
              },
              {
                value: '2',
                text: 'Automático'
              }
            ]
          },
          {
            id: 'color',
            type: 'picker',
            label: 'Color',
            datalist: [
              {
                value: 'Negro',
                text: 'Negro'
              },
              {
                value: 'Blanco',
                text: 'Blanco'
              },
              {
                value: 'Gris',
                text: 'Gris'
              },
              {
                value: 'Azul',
                text: 'Azul'
              },
              {
                value: 'Rojo',
                text: 'Rojo'
              },
              {
                value: 'Plata',
                text: 'Plata'
              },
              {
                value: 'Verde',
                text: 'Verde'
              },
              {
                value: 'Granate',
                text: 'Granate'
              },
              {
                value: 'Marron',
                text: 'Marron'
              },
              {
                value: 'Beige',
                text: 'Beige'
              },
              {
                value: 'Amarillo',
                text: 'Amarillo'
              },
              {
                value: 'Naranja',
                text: 'Naranja'
              },
              {
                value: 'Violeta',
                text: 'Violeta'
              },
              {
                value: 'Lila',
                text: 'Lila'
              },
              {
                value: 'Dorado',
                text: 'Dorado'
              }
            ]
          },
          {
            id: 'titulo',
            type: 'text',
            label: 'Título',
            display: 'text',
            required: true,
            hidden: true,
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
          },
          {
            id: 'precio',
            type: 'numeric',
            label: 'Precio',
            display: 'money',
            required: true,
            constraints: [
              {
                property: {
                  notnull: ''
                },
                message: 'Necesitamos el precio para publicar el anuncio'
              },
              {
                property: {
                  max: '999999999'
                },
                message: 'El precio debe ser inferior a 1.000.000.000'
              }
            ]
          },
          {
            id: 'vendedor',
            type: 'picker',
            display: 'button-inline',
            label: 'Tipo de vendedor',
            value: 'Particular',
            datalist: [
              {
                value: 'Particular',
                text: 'Particular'
              },
              {
                value: 'Profesional',
                text: 'Profesional'
              }
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
                message: 'Máximo 20 caracteres'
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
                message: 'Máximo 40 caracteres'
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
            id: 'consienteexport',
            type: 'picker',
            display: 'switch',
            label: 'Publica también tu anuncio gratis en Coches.net',
            value: 'true',
            hidden: true,
            disabled: true,
            datalist: [
              {
                value: 'n',
                text: 'false'
              },
              {
                value: 's',
                text: 'true'
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
      titulo: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
          }
        }
      ],
      precio: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              required: false,
              constraints: [
                {
                  property: {
                    max: '999999999'
                  },
                  message: 'El precio debe ser inferior a 1.000.000.000'
                }
              ]
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              required: true,
              constraints: [
                {
                  property: {
                    notnull: ''
                  },
                  message: 'Necesitamos el precio para publicar el anuncio'
                },
                {
                  property: {
                    max: '999999999'
                  },
                  message: 'El precio debe ser inferior a 1.000.000.000'
                }
              ]
            }
          }
        }
      ],
      carMake: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
          }
        }
      ],
      banos: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: '5'
            }
          }
        }
      ],
      combustible: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
          }
        }
      ],
      ano: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
          }
        }
      ],
      playa: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
          }
        }
      ],
      kilometros: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
          }
        }
      ],
      m2: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: '1'
            }
          }
        }
      ],
      color: [
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
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
      vendedor: [
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
      ],
      carModel: [
        {
          when: [
            {
              operator: 'IN',
              id: 'carMake',
              value: ['']
            }
          ],
          then: {
            data: {
              disabled: true,
              hidden: true,
              datalist: [],
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'CHANGED',
              id: 'carMake',
              value: []
            }
          ],
          then: {
            data: {
              disabled: true,
              hidden: false,
              datalist: [],
              value: ''
            },
            remote: true
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['n']
            }
          ],
          then: {
            data: {
              hidden: false,
              value: ''
            }
          }
        }
      ],
      consienteexport: [
        {
          when: [
            {
              operator: 'LESSTHAN',
              id: 'precio',
              value: [1200]
            }
          ],
          then: {
            data: {
              hidden: true,
              disabled: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'LESSTHAN',
              id: 'ano',
              value: [1969]
            }
          ],
          then: {
            data: {
              hidden: true,
              disabled: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'demandax',
              value: ['s']
            }
          ],
          then: {
            data: {
              hidden: true,
              disabled: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'kilometros',
              value: [0]
            }
          ],
          then: {
            data: {
              hidden: true,
              disabled: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'EQUALS',
              id: 'kilometros',
              value: ['']
            }
          ],
          then: {
            data: {
              hidden: true,
              disabled: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'IN',
              id: 'telefono1',
              value: ['']
            }
          ],
          then: {
            data: {
              hidden: true,
              disabled: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'IN',
              id: 'vendedor',
              value: ['Profesional']
            }
          ],
          then: {
            data: {
              hidden: true,
              disabled: true,
              value: ''
            }
          }
        },
        {
          when: [
            {
              operator: 'GREATERTHAN',
              id: 'precio',
              value: [1200]
            },
            {
              operator: 'GREATERTHAN',
              id: 'ano',
              value: [1969]
            },
            {
              operator: 'IN',
              id: 'demandax',
              value: ['n']
            },
            {
              operator: 'GREATERTHAN',
              id: 'kilometros',
              value: [1]
            },
            {
              operator: 'NIN',
              id: 'telefono1',
              value: ['']
            },
            {
              operator: 'IN',
              id: 'vendedor',
              value: ['Particular']
            }
          ],
          then: {
            data: {
              hidden: false,
              disabled: false,
              value: 's'
            }
          }
        }
      ]
    }
  }
}
