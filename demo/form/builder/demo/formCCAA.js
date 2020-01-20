export const json = {
         form: {
           id: 'milanuncios-filter',
           type: 'group',
           label: 'Busca en milanuncios',
           actionlabel: 'Buscar',
           fields: [
             {
               id: 'ccaa',
               type: 'picker',
               label: 'Comunidad Autónoma',
               hint: 'Selecciona una Comunidad Autónoma',
               datalist: [
                 {
                   value: '',
                   text: 'Toda España'
                 },
                 {
                   value: '55',
                   text: 'Andalucía'
                 },
                 {
                   value: '58',
                   text: 'Aragón'
                 },
                 {
                   value: '39',
                   text: 'Cantabria'
                 },
                 {
                   value: '60',
                   text: 'Castilla La Mancha'
                 },
                 {
                   value: '61',
                   text: 'Castilla y León'
                 },
                 {
                   value: '54',
                   text: 'Cataluña'
                 },
                 {
                   value: '51',
                   text: 'Ceuta'
                 },
                 {
                   value: '28',
                   text: 'Madrid'
                 },
                 {
                   value: '46',
                   text: 'Valencia'
                 },
                 {
                   value: '56',
                   text: 'Extremadura'
                 },
                 {
                   value: '53',
                   text: 'Galicia'
                 },
                 {
                   value: '7',
                   text: 'Baleares'
                 },
                 {
                   value: '62',
                   text: 'Canarias'
                 },
                 {
                   value: '26',
                   text: 'La rioja'
                 },
                 {
                   value: '52',
                   text: 'Melilla'
                 },
                 {
                   value: '31',
                   text: 'Navarra'
                 },
                 {
                   value: '59',
                   text: 'País Vasco'
                 },
                 {
                   value: '33',
                   text: 'Asturias'
                 },
                 {
                   value: '30',
                   text: 'Murcia'
                 }
               ]
             },
             {
               id: 'province',
               type: 'picker',
               label: 'Provincia',
               hint: 'Selecciona una provincia',
               disabled: true,
               value: ''
             },
             {
               id: 'nearprovinces',
               type: 'picker',
               display: 'switch',
               label: 'Incluir provincias colindantes',
               value: 'false',
               disabled: true
             },
             {
               id: 'municipality',
               type: 'picker',
               display: 'autocomplete',
               label: 'Municipio',
               hint: 'Selecciona un municipio',
               disabled: true
             }
           ],
           rules: {
             nearprovinces: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'ccaa',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     value: 'false'
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'province',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     value: 'false'
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'CHANGED',
                     id: 'province',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     value: 'false'
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'municipality',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     value: 'false'
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'province',
                     value: ['']
                   },
                   {
                     operator: 'CHANGED',
                     id: 'municipality',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     value: 'false'
                   }
                 }
               }
             ],
             province: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'ccaa',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     value: 'false'
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['55']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {
                         value: '4',
                         text: 'Almería'
                       },
                       {
                         value: '11',
                         text: 'Cádiz'
                       },
                       {
                         value: '14',
                         text: 'Códoba'
                       },
                       {
                         value: '18',
                         text: 'Granada'
                       },
                       {
                         value: '21',
                         text: 'Huelva'
                       },
                       {
                         value: '23',
                         text: 'Jaén'
                       },
                       {
                         value: '29',
                         text: 'Málaga'
                       },
                       {
                         value: '41',
                         text: 'Sevilla'
                       }
                     ]
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['58']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {
                         value: '44',
                         text: 'Teruel'
                       },
                       {
                         value: '50',
                         text: 'Zaragoza'
                       }
                     ]
                   }
                 }
               }
             ],
             municipality: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'ccaa',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     value: '',
                     datalist: []
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'province',
                     value: ['']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     value: '',
                     datalist: []
                   }
                 }
               },
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
                     datalist: [],
                     value: ''
                   },
                   remote: true
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'nearprovinces',
                     value: ['true']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'nearprovinces',
                     value: ['false']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     value: ''
                   }
                 }
               }
             ]
           }
         }
       }
