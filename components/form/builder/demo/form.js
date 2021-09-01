/* eslint-disable */
const uniqueArray = arr =>
  Array.from(new Set(arr.map(a => a.value))).map(value => {
    return arr.find(a => a.value === value)
  })

export const json = {
         form: {
           id: 'milanuncios-filter',
           type: 'group',
           label: 'Busca en milanuncios',
           actionlabel: 'Buscar',
           fields: [
             {
               id: 'palabras',
               type: 'text',
               display: 'ma_keyword_input',
               hint: '¿Qué estás buscando?'
             },

             {
               id: 'cat',
               type: 'picker',
               display: 'ma_category_picker',
               label: 'Categoría',
               hint: 'Selecciona una categoría',
               value: '',
               datalist: uniqueArray([
                 {
                   value: '',
                   text: 'Todas las categorías'
                 },
                 {
                   value: '1',
                   text: 'Motor'
                 },
                 {
                   value: '13',
                   text: 'Coches'
                 },
                 {
                   value: '15',
                   text: 'Todoterreno'
                 },
                 {
                   value: '50',
                   text: 'Remolques'
                 },
                 {
                   value: '1080',
                   text: 'Coches clásicos'
                 },
                 {
                   value: '64',
                   text: 'Coches clasicos'
                 },
                 {
                   value: '1070',
                   text: 'Recambios clasicos'
                 },
                 {
                   value: '881',
                   text: 'Coches sin carnet'
                 },
                 {
                   value: '889',
                   text: 'Coches sin carnet'
                 },
                 {
                   value: '890',
                   text: 'Recambios coches sin carnet'
                 },
                 {
                   value: '47',
                   text: 'Recambios y accesorios'
                 },
                 {
                   value: '49',
                   text: 'Llantas'
                 },
                 {
                   value: '48',
                   text: 'Motores'
                 },
                 {
                   value: '50',
                   text: 'Remolques'
                 },
                 {
                   value: '52',
                   text: 'Autorradios'
                 },
                 {
                   value: '1300',
                   text: 'Neumáticos'
                 },
                 {
                   value: '1390',
                   text: 'Navegadores GPS'
                 },
                 {
                   value: '929',
                   text: 'Recambios y despieces de motos'
                 },
                 {
                   value: '2062',
                   text: 'Silla infantil para coche'
                 },
                 {
                   value: '159',
                   text: 'Otros'
                 },
                 {
                   value: '14',
                   text: 'Motos'
                 },
                 {
                   value: '930',
                   text: 'Motos clásicas'
                 },
                 {
                   value: '22',
                   text: 'Ciclomotores'
                 },
                 {
                   value: '23',
                   text: 'Scooters'
                 },
                 {
                   value: '24',
                   text: 'Motos de carretera'
                 },
                 {
                   value: '25',
                   text: 'Motos de cross'
                 },
                 {
                   value: '761',
                   text: 'Minimotos'
                 },
                 {
                   value: '26',
                   text: 'Accesorios'
                 },
                 {
                   value: '929',
                   text: 'Recambios y despieces'
                 },
                 {
                   value: '16',
                   text: 'Furgonetas'
                 },
                 {
                   value: '17',
                   text: 'Camiones'
                 },
                 {
                   value: '18',
                   text: 'Autobuses'
                 },
                 {
                   value: '46',
                   text: 'Caravanas'
                 },
                 {
                   value: '793',
                   text: 'Autocaravanas'
                 },
                 {
                   value: '61',
                   text: 'Quads'
                 },
                 {
                   value: '1340',
                   text: 'Buggies'
                 },
                 {
                   value: '62',
                   text: 'Karts'
                 },
                 {
                   value: '63',
                   text: 'Tuning'
                 },
                 {
                   value: '53',
                   text: 'Maquinaria'
                 },
                 {
                   value: '55',
                   text: 'Vehículos industriales'
                 },
                 {
                   value: '56',
                   text: 'Carretillas elevadoras'
                 },
                 {
                   value: '57',
                   text: 'Grúas'
                 },
                 {
                   value: '579',
                   text: 'Otros'
                 },
                 {
                   value: '54',
                   text: 'Maquinaria Agrícola'
                 },
                 {
                   value: '58',
                   text: 'Tractores'
                 },
                 {
                   value: '59',
                   text: 'Remolques agricolas'
                 },
                 {
                   value: '60',
                   text: 'Cosechadoras'
                 },
                 {
                   value: '580',
                   text: 'Otros'
                 },
                 {
                   value: '695',
                   text: 'Embarcaciones'
                 },
                 {
                   value: '696',
                   text: 'Barcos'
                 },
                 {
                   value: '697',
                   text: 'Lanchas neumáticas'
                 },
                 {
                   value: '699',
                   text: 'Barcos de pesca'
                 },
                 {
                   value: '700',
                   text: 'Barcos a motor'
                 },
                 {
                   value: '701',
                   text: 'Yates'
                 },
                 {
                   value: '702',
                   text: 'Veleros'
                 },
                 {
                   value: '703',
                   text: 'Catamaranes'
                 },
                 {
                   value: '704',
                   text: 'Vela ligera'
                 },
                 {
                   value: '705',
                   text: 'Amarres'
                 },
                 {
                   value: '706',
                   text: 'Alquiler de amarres'
                 },
                 {
                   value: '707',
                   text: 'Venta de amarres'
                 },
                 {
                   value: '708',
                   text: 'Accesorios barcos'
                 },
                 {
                   value: '709',
                   text: 'Motores fueraborda'
                 },
                 {
                   value: '710',
                   text: 'GPS'
                 },
                 {
                   value: '711',
                   text: 'Cartas naúticas'
                 },
                 {
                   value: '712',
                   text: 'Otros'
                 },
                 {
                   value: '713',
                   text: 'Motos de agua'
                 },
                 {
                   value: '714',
                   text: 'Piraguas'
                 },
                 {
                   value: '715',
                   text: 'Canoas'
                 },
                 {
                   value: '716',
                   text: 'Kayak'
                 },
                 {
                   value: '717',
                   text: 'Windsurf'
                 },
                 {
                   value: '718',
                   text: 'Surf'
                 },
                 {
                   value: '719',
                   text: 'Kitesurf'
                 },
                 {
                   value: '741',
                   text: 'Trajes de neopreno'
                 },
                 {
                   value: '720',
                   text: 'Otros'
                 },
                 {
                   value: '950',
                   text: 'Servicios motor'
                 },
                 {
                   value: '51',
                   text: 'Otros'
                 },
                 {
                   value: '32',
                   text: 'Inmobiliaria'
                 },
                 {
                   value: '156',
                   text: 'Viviendas'
                 },
                 {
                   value: '727',
                   text: 'Casas Rurales'
                 },
                 {
                   value: '1040',
                   text: 'Alquiler vacaciones'
                 },
                 {
                   value: '122',
                   text: 'Pisos'
                 },
                 {
                   value: '131',
                   text: 'Venta de pisos'
                 },
                 {
                   value: '132',
                   text: 'Alquiler de pisos'
                 },
                 {
                   value: '133',
                   text: 'Compartir piso'
                 },
                 {
                   value: '133',
                   text: 'Alquilar habitación'
                 },
                 {
                   value: '123',
                   text: 'Apartamentos'
                 },
                 {
                   value: '134',
                   text: 'Alquiler apartamentos'
                 },
                 {
                   value: '135',
                   text: 'Venta apartamentos'
                 },
                 {
                   value: '133',
                   text: 'Compartir piso / alquilar habitación'
                 },
                 {
                   value: '124',
                   text: 'Chalets'
                 },
                 {
                   value: '138',
                   text: 'Alquiler de chalets'
                 },
                 {
                   value: '139',
                   text: 'Venta de chalets'
                 },
                 {
                   value: '133',
                   text: 'Compartir piso / alquilar habitación'
                 },
                 {
                   value: '125',
                   text: 'áticos'
                 },
                 {
                   value: '140',
                   text: 'Alquiler de áticos'
                 },
                 {
                   value: '141',
                   text: 'Venta de áticos'
                 },
                 {
                   value: '126',
                   text: 'Estudios'
                 },
                 {
                   value: '142',
                   text: 'Alquiler de estudios'
                 },
                 {
                   value: '143',
                   text: 'Venta de estudios'
                 },
                 {
                   value: '127',
                   text: 'Lofts'
                 },
                 {
                   value: '144',
                   text: 'Alquiler de lofts'
                 },
                 {
                   value: '145',
                   text: 'Venta de lofts'
                 },
                 {
                   value: '766',
                   text: 'Casas'
                 },
                 {
                   value: '767',
                   text: 'Alquiler de casas'
                 },
                 {
                   value: '768',
                   text: 'Venta de casas'
                 },
                 {
                   value: '760',
                   text: 'Casas prefabricadas'
                 },
                 {
                   value: '128',
                   text: 'Locales comerciales'
                 },
                 {
                   value: '136',
                   text: 'Alquiler de locales'
                 },
                 {
                   value: '137',
                   text: 'Venta de locales'
                 },
                 {
                   value: '349',
                   text: 'Traspaso'
                 },
                 {
                   value: '350',
                   text: 'Traspasos Academias'
                 },
                 {
                   value: '351',
                   text: 'Tiendas de alimentación'
                 },
                 {
                   value: '352',
                   text: 'Traspasos Bares'
                 },
                 {
                   value: '353',
                   text: 'Traspasos Cibercafés'
                 },
                 {
                   value: '354',
                   text: 'Traspasos Clinicas'
                 },
                 {
                   value: '1350',
                   text: 'Traspasos Estancos'
                 },
                 {
                   value: '355',
                   text: 'Traspasos Farmacias'
                 },
                 {
                   value: '356',
                   text: 'Traspasos Gimnasios'
                 },
                 {
                   value: '357',
                   text: 'Traspasos Guarderías'
                 },
                 {
                   value: '358',
                   text: 'Hostales y Hoteles'
                 },
                 {
                   value: '359',
                   text: 'Traspasos Inmobiliarias'
                 },
                 {
                   value: '360',
                   text: 'Licencia de taxi'
                 },
                 {
                   value: '361',
                   text: 'Traspasos Locutorios'
                 },
                 {
                   value: '362',
                   text: 'Traspasos Panaderías'
                 },
                 {
                   value: '363',
                   text: 'Traspasos Peluquerías'
                 },
                 {
                   value: '364',
                   text: 'Traspasos Residencias'
                 },
                 {
                   value: '365',
                   text: 'Traspasos Restaurantes'
                 },
                 {
                   value: '366',
                   text: 'Traspasos Talleres'
                 },
                 {
                   value: '367',
                   text: 'Tiendas de informática'
                 },
                 {
                   value: '368',
                   text: 'Tiendas de moda'
                 },
                 {
                   value: '369',
                   text: 'Traspasos Tintorerías'
                 },
                 {
                   value: '370',
                   text: 'Traspasos Videoclubs'
                 },
                 {
                   value: '371',
                   text: 'Otros'
                 },
                 {
                   value: '129',
                   text: 'Oficinas'
                 },
                 {
                   value: '146',
                   text: 'Alquiler de oficinas'
                 },
                 {
                   value: '147',
                   text: 'Venta de oficinas'
                 },
                 {
                   value: '130',
                   text: 'Naves Industriales'
                 },
                 {
                   value: '148',
                   text: 'Alquiler de naves'
                 },
                 {
                   value: '149',
                   text: 'Venta de naves'
                 },
                 {
                   value: '150',
                   text: 'Terrenos'
                 },
                 {
                   value: '151',
                   text: 'Fincas rústicas'
                 },
                 {
                   value: '154',
                   text: 'Alquiler de fincas'
                 },
                 {
                   value: '155',
                   text: 'Venta de fincas'
                 },
                 {
                   value: '152',
                   text: 'Parcelas rústicas'
                 },
                 {
                   value: '153',
                   text: 'Solares'
                 },
                 {
                   value: '160',
                   text: 'Plazas de garaje'
                 },
                 {
                   value: '182',
                   text: 'Alquiler de garajes'
                 },
                 {
                   value: '183',
                   text: 'Venta de garajes'
                 },
                 {
                   value: '1520',
                   text: 'Trasteros'
                 },
                 {
                   value: '1530',
                   text: 'Alquiler de trasteros'
                 },
                 {
                   value: '1540',
                   text: 'Venta de trasteros'
                 },
                 {
                   value: '1360',
                   text: 'Edificios'
                 },
                 {
                   value: '1370',
                   text: 'Alquiler de edificios'
                 },
                 {
                   value: '1380',
                   text: 'Venta de edificios'
                 },
                 {
                   value: '3',
                   text: 'Empleo'
                 },
                 {
                   value: '210',
                   text: 'Abogados'
                 },
                 {
                   value: '188',
                   text: 'Administración'
                 },
                 {
                   value: '220',
                   text: 'Secretarias'
                 },
                 {
                   value: '191',
                   text: 'Recepcionistas'
                 },
                 {
                   value: '229',
                   text: 'Administrativos'
                 },
                 {
                   value: '189',
                   text: 'Arquitectos'
                 },
                 {
                   value: '190',
                   text: 'Artes y diseño'
                 },
                 {
                   value: '225',
                   text: 'Diseñadores web'
                 },
                 {
                   value: '226',
                   text: 'Diseñadores de moda'
                 },
                 {
                   value: '227',
                   text: 'Diseñadores gráficos'
                 },
                 {
                   value: '228',
                   text: 'Músicos'
                 },
                 {
                   value: '218',
                   text: 'Restauradores'
                 },
                 {
                   value: '233',
                   text: 'Cocineros-Camareros'
                 },
                 {
                   value: '193',
                   text: 'Comerciales'
                 },
                 {
                   value: '960',
                   text: 'Comerciales independientes'
                 },
                 {
                   value: '970',
                   text: 'Venta alarmas'
                 },
                 {
                   value: '980',
                   text: 'Seguros'
                 },
                 {
                   value: '990',
                   text: 'Sector energético'
                 },
                 {
                   value: '1000',
                   text: 'Venta por catálogo'
                 },
                 {
                   value: '1010',
                   text: 'Otros'
                 },
                 {
                   value: '194',
                   text: 'Construcción'
                 },
                 {
                   value: '195',
                   text: 'Consultores'
                 },
                 {
                   value: '196',
                   text: 'Contables'
                 },
                 {
                   value: '197',
                   text: 'Control de calidad'
                 },
                 {
                   value: '198',
                   text: 'Directivos-Gerentes'
                 },
                 {
                   value: '199',
                   text: 'Educación'
                 },
                 {
                   value: '205',
                   text: 'Finanzas'
                 },
                 {
                   value: '201',
                   text: 'Auditores'
                 },
                 {
                   value: '202',
                   text: 'Banca'
                 },
                 {
                   value: '203',
                   text: 'Bolsa'
                 },
                 {
                   value: '204',
                   text: 'Seguros'
                 },
                 {
                   value: '230',
                   text: 'Economistas'
                 },
                 {
                   value: '207',
                   text: 'Informáticos'
                 },
                 {
                   value: '208',
                   text: 'Ingenieros'
                 },
                 {
                   value: '209',
                   text: 'Investigadores'
                 },
                 {
                   value: '212',
                   text: 'Marketing'
                 },
                 {
                   value: '232',
                   text: 'Mensajeros'
                 },
                 {
                   value: '234',
                   text: 'Oficios profesion.'
                 },
                 {
                   value: '215',
                   text: 'Periodistas'
                 },
                 {
                   value: '216',
                   text: 'Publicidad'
                 },
                 {
                   value: '217',
                   text: 'Recursos Humanos'
                 },
                 {
                   value: '219',
                   text: 'Sanidad'
                 },
                 {
                   value: '764',
                   text: 'Servicio doméstico'
                 },
                 {
                   value: '222',
                   text: 'Servicios sociales'
                 },
                 {
                   value: '223',
                   text: 'Traductores'
                 },
                 {
                   value: '231',
                   text: 'Transportistas'
                 },
                 {
                   value: '224',
                   text: 'Turismo'
                 },
                 {
                   value: '221',
                   text: 'Vigilantes-Porteros'
                 },
                 {
                   value: '214',
                   text: 'Otras'
                 },
                 {
                   value: '40',
                   text: 'Formación y libros'
                 },
                 {
                   value: '321',
                   text: 'Clases particulares'
                 },
                 {
                   value: '322',
                   text: 'Primaria/Secundaria'
                 },
                 {
                   value: '323',
                   text: 'Universidad'
                 },
                 {
                   value: '324',
                   text: 'Idiomas'
                 },
                 {
                   value: '325',
                   text: 'Otros'
                 },
                 {
                   value: '334',
                   text: 'Libros y más'
                 },
                 {
                   value: '335',
                   text: 'Libros'
                 },
                 {
                   value: '345',
                   text: 'Libros de texto'
                 },
                 {
                   value: '750',
                   text: 'Novelas'
                 },
                 {
                   value: '336',
                   text: 'Apuntes'
                 },
                 {
                   value: '337',
                   text: 'Revistas/Comics'
                 },
                 {
                   value: '2060',
                   text: 'Revistas'
                 },
                 {
                   value: '2061',
                   text: 'Comics'
                 },
                 {
                   value: '338',
                   text: 'Enciclopedias, diccionarios y atlas'
                 },
                 {
                   value: '326',
                   text: 'Idiomas'
                 },
                 {
                   value: '327',
                   text: 'Cursos de inglés'
                 },
                 {
                   value: '328',
                   text: 'Cursos de francés'
                 },
                 {
                   value: '329',
                   text: 'Cursos de italiano'
                 },
                 {
                   value: '330',
                   text: 'Cursos de alemán'
                 },
                 {
                   value: '331',
                   text: 'Cursos de portugués'
                 },
                 {
                   value: '343',
                   text: 'Cursos de catalán'
                 },
                 {
                   value: '344',
                   text: 'Cursos de español'
                 },
                 {
                   value: '333',
                   text: 'Otros idiomas'
                 },
                 {
                   value: '312',
                   text: 'Master'
                 },
                 {
                   value: '316',
                   text: 'Comercio exterior'
                 },
                 {
                   value: '317',
                   text: 'Comunicación'
                 },
                 {
                   value: '341',
                   text: 'Dirección de empresas'
                 },
                 {
                   value: '315',
                   text: 'Master en finanzas'
                 },
                 {
                   value: '342',
                   text: 'Master en marketing'
                 },
                 {
                   value: '340',
                   text: 'Master en periodismo'
                 },
                 {
                   value: '313',
                   text: 'Prevencion de riesgos'
                 },
                 {
                   value: '314',
                   text: 'Recursos humanos'
                 },
                 {
                   value: '339',
                   text: 'Master en turismo'
                 },
                 {
                   value: '318',
                   text: 'Otros Masters'
                 },
                 {
                   value: '293',
                   text: 'Cursos'
                 },
                 {
                   value: '294',
                   text: 'Cursos de buceo'
                 },
                 {
                   value: '295',
                   text: 'Cursos de cocina'
                 },
                 {
                   value: '296',
                   text: 'Cursos de contabilidad'
                 },
                 {
                   value: '297',
                   text: 'Cursos de estética'
                 },
                 {
                   value: '298',
                   text: 'Cursos de ofimática'
                 },
                 {
                   value: '299',
                   text: 'Cursos de fotografía'
                 },
                 {
                   value: '300',
                   text: 'Cursos de guitarra'
                 },
                 {
                   value: '301',
                   text: 'Cursos de informática'
                 },
                 {
                   value: '302',
                   text: 'Cursos de marketing'
                 },
                 {
                   value: '303',
                   text: 'Cursos de masaje'
                 },
                 {
                   value: '304',
                   text: 'Cursos de mecanografía'
                 },
                 {
                   value: '310',
                   text: 'Cursos de piano'
                 },
                 {
                   value: '305',
                   text: 'Cursos de pintura'
                 },
                 {
                   value: '306',
                   text: 'Cursos de protocolo'
                 },
                 {
                   value: '307',
                   text: 'Escuelas de aviación'
                 },
                 {
                   value: '308',
                   text: 'Escuelas de baile'
                 },
                 {
                   value: '309',
                   text: 'Escuelas de turismo y hosteleria'
                 },
                 {
                   value: '2094',
                   text: 'Cursos de aventura'
                 },
                 {
                   value: '311',
                   text: 'Otros Cursos'
                 },
                 {
                   value: '319',
                   text: 'Oposiciones'
                 },
                 {
                   value: '320',
                   text: 'Autoescuelas'
                 },
                 {
                   value: '184',
                   text: 'Servicios'
                 },
                 {
                   value: '235',
                   text: 'Para personas'
                 },
                 {
                   value: '238',
                   text: 'Belleza'
                 },
                 {
                   value: '763',
                   text: 'Dietética'
                 },
                 {
                   value: '239',
                   text: 'Organización de fiestas'
                 },
                 {
                   value: '240',
                   text: 'Dentistas'
                 },
                 {
                   value: '241',
                   text: 'Despedidas de soltero'
                 },
                 {
                   value: '242',
                   text: 'Floristerías'
                 },
                 {
                   value: '243',
                   text: 'Fotógrafos'
                 },
                 {
                   value: '244',
                   text: 'Gimnasios'
                 },
                 {
                   value: '245',
                   text: 'Masajistas'
                 },
                 {
                   value: '246',
                   text: 'Modistas'
                 },
                 {
                   value: '247',
                   text: 'Niñeras y cuidadores'
                 },
                 {
                   value: '1570',
                   text: 'Psicólogos'
                 },
                 {
                   value: '249',
                   text: 'Videntes'
                 },
                 {
                   value: '250',
                   text: 'Para el hogar'
                 },
                 {
                   value: '257',
                   text: 'Antenistas'
                 },
                 {
                   value: '258',
                   text: 'Carpinteros'
                 },
                 {
                   value: '266',
                   text: 'Cerrajeros'
                 },
                 {
                   value: '267',
                   text: 'Climatización'
                 },
                 {
                   value: '268',
                   text: 'Cristaleros'
                 },
                 {
                   value: '251',
                   text: 'Decoradores'
                 },
                 {
                   value: '262',
                   text: 'Desatrancos'
                 },
                 {
                   value: '252',
                   text: 'Desinsectación'
                 },
                 {
                   value: '270',
                   text: 'Electricistas'
                 },
                 {
                   value: '271',
                   text: 'Electrodomésticos'
                 },
                 {
                   value: '273',
                   text: 'Fontaneros'
                 },
                 {
                   value: '253',
                   text: 'Guardamuebles'
                 },
                 {
                   value: '292',
                   text: 'Informáticos'
                 },
                 {
                   value: '254',
                   text: 'Limpieza'
                 },
                 {
                   value: '255',
                   text: 'Mudanzas'
                 },
                 {
                   value: '263',
                   text: 'Pintores'
                 },
                 {
                   value: '279',
                   text: 'Persianistas'
                 },
                 {
                   value: '259',
                   text: 'Reformas'
                 },
                 {
                   value: '269',
                   text: 'Tejados y fachadas'
                 },
                 {
                   value: '277',
                   text: 'Toldos'
                 },
                 {
                   value: '278',
                   text: 'Otros'
                 },
                 {
                   value: '280',
                   text: 'Para empresas'
                 },
                 {
                   value: '284',
                   text: 'Abogados'
                 },
                 {
                   value: '281',
                   text: 'Asesorías'
                 },
                 {
                   value: '286',
                   text: 'Detectives'
                 },
                 {
                   value: '282',
                   text: 'Diseño y reprografía'
                 },
                 {
                   value: '283',
                   text: 'Escaparatistas'
                 },
                 {
                   value: '289',
                   text: 'Traducciones'
                 },
                 {
                   value: '290',
                   text: 'Otros'
                 },
                 {
                   value: '1840',
                   text: 'Servicios de Electronica'
                 },
                 {
                   value: '950',
                   text: 'Para motor'
                 },
                 {
                   value: '293',
                   text: 'Cursos'
                 },
                 {
                   value: '294',
                   text: 'Cursos de buceo'
                 },
                 {
                   value: '295',
                   text: 'Cursos de cocina'
                 },
                 {
                   value: '296',
                   text: 'Cursos de contabilidad'
                 },
                 {
                   value: '297',
                   text: 'Cursos de estética'
                 },
                 {
                   value: '298',
                   text: 'Cursos de ofimática'
                 },
                 {
                   value: '299',
                   text: 'Cursos de fotografía'
                 },
                 {
                   value: '300',
                   text: 'Cursos de guitarra'
                 },
                 {
                   value: '301',
                   text: 'Cursos de informática'
                 },
                 {
                   value: '302',
                   text: 'Cursos de marketing'
                 },
                 {
                   value: '303',
                   text: 'Cursos de masaje'
                 },
                 {
                   value: '304',
                   text: 'Cursos de mecanografía'
                 },
                 {
                   value: '310',
                   text: 'Cursos de piano'
                 },
                 {
                   value: '305',
                   text: 'Cursos de pintura'
                 },
                 {
                   value: '306',
                   text: 'Cursos de protocolo'
                 },
                 {
                   value: '307',
                   text: 'Escuelas de aviación'
                 },
                 {
                   value: '308',
                   text: 'Escuelas de baile'
                 },
                 {
                   value: '309',
                   text: 'Escuelas de turismo y hosteleria'
                 },
                 {
                   value: '2094',
                   text: 'Cursos de aventura'
                 },
                 {
                   value: '311',
                   text: 'Otros Cursos'
                 },
                 {
                   value: '2073',
                   text: 'Para bicicletas'
                 },
                 {
                   value: '1190',
                   text: 'Para mascotas'
                 },
                 {
                   value: '185',
                   text: 'Negocios'
                 },
                 {
                   value: '390',
                   text: 'Financiación'
                 },
                 {
                   value: '391',
                   text: 'Socios capitalistas'
                 },
                 {
                   value: '392',
                   text: 'Acciones'
                 },
                 {
                   value: '393',
                   text: 'Prestamos'
                 },
                 {
                   value: '384',
                   text: 'Mobiliario'
                 },
                 {
                   value: '396',
                   text: 'Mobiliario oficina'
                 },
                 {
                   value: '385',
                   text: 'Mobiliario comercial'
                 },
                 {
                   value: '386',
                   text: 'Mobiliario de hosteleria'
                 },
                 {
                   value: '387',
                   text: 'Mobiliario de peluqueria'
                 },
                 {
                   value: '388',
                   text: 'Mobiliario clinico'
                 },
                 {
                   value: '389',
                   text: 'Otros'
                 },
                 {
                   value: '372',
                   text: 'Franquicias'
                 },
                 {
                   value: '373',
                   text: 'Agencias de viaje'
                 },
                 {
                   value: '374',
                   text: 'Franquicias Cafeterías'
                 },
                 {
                   value: '375',
                   text: 'Franquicias Farmacias'
                 },
                 {
                   value: '376',
                   text: 'Franquicias Guarderías'
                 },
                 {
                   value: '377',
                   text: 'Franquicias Informatica'
                 },
                 {
                   value: '378',
                   text: 'Franquicias Inmobiliarias'
                 },
                 {
                   value: '379',
                   text: 'Franquicias Moda y Ropa'
                 },
                 {
                   value: '380',
                   text: 'Franquicias Peluquerías'
                 },
                 {
                   value: '381',
                   text: 'Franquicias Restaurantes'
                 },
                 {
                   value: '382',
                   text: 'Franquicias Videoclubs'
                 },
                 {
                   value: '383',
                   text: 'Otras franquicias'
                 },
                 {
                   value: '349',
                   text: 'Traspasos'
                 },
                 {
                   value: '350',
                   text: 'Traspasos Academias'
                 },
                 {
                   value: '351',
                   text: 'Tiendas de alimentación'
                 },
                 {
                   value: '352',
                   text: 'Traspasos Bares'
                 },
                 {
                   value: '353',
                   text: 'Traspasos Cibercafés'
                 },
                 {
                   value: '354',
                   text: 'Traspasos Clinicas'
                 },
                 {
                   value: '1350',
                   text: 'Traspasos Estancos'
                 },
                 {
                   value: '355',
                   text: 'Traspasos Farmacias'
                 },
                 {
                   value: '356',
                   text: 'Traspasos Gimnasios'
                 },
                 {
                   value: '357',
                   text: 'Traspasos Guarderías'
                 },
                 {
                   value: '358',
                   text: 'Hostales y Hoteles'
                 },
                 {
                   value: '359',
                   text: 'Traspasos Inmobiliarias'
                 },
                 {
                   value: '360',
                   text: 'Licencia de taxi'
                 },
                 {
                   value: '361',
                   text: 'Traspasos Locutorios'
                 },
                 {
                   value: '362',
                   text: 'Traspasos Panaderías'
                 },
                 {
                   value: '363',
                   text: 'Traspasos Peluquerías'
                 },
                 {
                   value: '364',
                   text: 'Traspasos Residencias'
                 },
                 {
                   value: '365',
                   text: 'Traspasos Restaurantes'
                 },
                 {
                   value: '366',
                   text: 'Traspasos Talleres'
                 },
                 {
                   value: '367',
                   text: 'Tiendas de informática'
                 },
                 {
                   value: '368',
                   text: 'Tiendas de moda'
                 },
                 {
                   value: '369',
                   text: 'Traspasos Tintorerías'
                 },
                 {
                   value: '370',
                   text: 'Traspasos Videoclubs'
                 },
                 {
                   value: '371',
                   text: 'Otros'
                 },
                 {
                   value: '347',
                   text: 'Venta de empresas'
                 },
                 {
                   value: '348',
                   text: 'Alquiler de negocio'
                 },
                 {
                   value: '346',
                   text: 'Oportunidades de negocio'
                 },
                 {
                   value: '53',
                   text: 'Maquinaria'
                 },
                 {
                   value: '55',
                   text: 'Vehículos industriales'
                 },
                 {
                   value: '56',
                   text: 'Carretillas elevadoras'
                 },
                 {
                   value: '57',
                   text: 'Grúas'
                 },
                 {
                   value: '579',
                   text: 'Otros'
                 },
                 {
                   value: '54',
                   text: 'Maquinaria Agrícola'
                 },
                 {
                   value: '58',
                   text: 'Tractores'
                 },
                 {
                   value: '59',
                   text: 'Remolques agricolas'
                 },
                 {
                   value: '60',
                   text: 'Cosechadoras'
                 },
                 {
                   value: '580',
                   text: 'Otros'
                 },
                 {
                   value: '395',
                   text: 'Productos y stocks'
                 },
                 {
                   value: '574',
                   text: 'Proveedores'
                 },
                 {
                   value: '575',
                   text: 'Importadores'
                 },
                 {
                   value: '576',
                   text: 'Mayoristas'
                 },
                 {
                   value: '577',
                   text: 'Distribuidores'
                 },
                 {
                   value: '578',
                   text: 'Otros'
                 },
                 {
                   value: '960',
                   text: 'Comerciales independientes'
                 },
                 {
                   value: '970',
                   text: 'Venta alarmas'
                 },
                 {
                   value: '980',
                   text: 'Seguros'
                 },
                 {
                   value: '990',
                   text: 'Sector energético'
                 },
                 {
                   value: '1000',
                   text: 'Venta por catálogo'
                 },
                 {
                   value: '1010',
                   text: 'Otros'
                 },
                 {
                   value: '1320',
                   text: 'Compra-venta de oro'
                 },
                 {
                   value: '2',
                   text: 'Informática'
                 },
                 {
                   value: '28',
                   text: 'Ordenadores'
                 },
                 {
                   value: '65',
                   text: 'Monitores'
                 },
                 {
                   value: '29',
                   text: 'Portátiles'
                 },
                 {
                   value: '1120',
                   text: 'Tablets y ebooks'
                 },
                 {
                   value: '11',
                   text: 'Impresoras'
                 },
                 {
                   value: '78',
                   text: 'Mac'
                 },
                 {
                   value: '72',
                   text: 'PDA'
                 },
                 {
                   value: '10',
                   text: 'Componentes'
                 },
                 {
                   value: '66',
                   text: 'Discos Duros'
                 },
                 {
                   value: '67',
                   text: 'Procesadores'
                 },
                 {
                   value: '68',
                   text: 'Grabadoras'
                 },
                 {
                   value: '69',
                   text: 'Placas base'
                 },
                 {
                   value: '70',
                   text: 'Tarjetas gráficas'
                 },
                 {
                   value: '2099',
                   text: 'Memorias RAM'
                 },
                 {
                   value: '71',
                   text: 'Otros'
                 },
                 {
                   value: '2179',
                   text: 'Accesorios y periféricos'
                 },
                 {
                   value: '80',
                   text: 'Software'
                 },
                 {
                   value: '120',
                   text: 'Fotocopiadoras'
                 },
                 {
                   value: '1390',
                   text: 'Navegadores GPS'
                 },
                 {
                   value: '292',
                   text: 'Reparación de ordenadores'
                 },
                 {
                   value: '9',
                   text: 'Imagen y Sonido'
                 },
                 {
                   value: '555',
                   text: 'Fotografía'
                 },
                 {
                   value: '93',
                   text: 'Cámaras digitales'
                 },
                 {
                   value: '2075',
                   text: 'Cámaras reflex digitales'
                 },
                 {
                   value: '2076',
                   text: 'Cámaras compactas digitales'
                 },
                 {
                   value: '556',
                   text: 'Cámaras analógicas'
                 },
                 {
                   value: '2077',
                   text: 'Cámaras analógicas reflex'
                 },
                 {
                   value: '2078',
                   text: 'Cámaras analógicas compactas'
                 },
                 {
                   value: '2079',
                   text: 'Objetivos y lentes'
                 },
                 {
                   value: '2080',
                   text: 'Flashes'
                 },
                 {
                   value: '2081',
                   text: 'Trípodes'
                 },
                 {
                   value: '2082',
                   text: 'Bolsas y mochilas'
                 },
                 {
                   value: '559',
                   text: 'Otros'
                 },
                 {
                   value: '81',
                   text: 'Imagen'
                 },
                 {
                   value: '85',
                   text: 'Televisores'
                 },
                 {
                   value: '157',
                   text: 'Convencionales'
                 },
                 {
                   value: '106',
                   text: 'Plasma'
                 },
                 {
                   value: '107',
                   text: 'Tft - Lcd'
                 },
                 {
                   value: '1580',
                   text: 'LED'
                 },
                 {
                   value: '2089',
                   text: 'Otros televisores'
                 },
                 {
                   value: '86',
                   text: 'Reproductores de DVD'
                 },
                 {
                   value: '87',
                   text: 'Reproductores multimedia'
                 },
                 {
                   value: '88',
                   text: 'Reproductores VHS'
                 },
                 {
                   value: '89',
                   text: 'Videocámaras'
                 },
                 {
                   value: '90',
                   text: 'Películas'
                 },
                 {
                   value: '91',
                   text: 'VHS'
                 },
                 {
                   value: '92',
                   text: 'DVD'
                 },
                 {
                   value: '1590',
                   text: 'Blu Ray'
                 },
                 {
                   value: '2059',
                   text: 'Otros'
                 },
                 {
                   value: '94',
                   text: 'Antenas y decodificadores'
                 },
                 {
                   value: '104',
                   text: 'Proyectores'
                 },
                 {
                   value: '120',
                   text: 'Fotocopiadoras'
                 },
                 {
                   value: '121',
                   text: 'Maquinas de escribir'
                 },
                 {
                   value: '82',
                   text: 'Sonido'
                 },
                 {
                   value: '101',
                   text: 'Equipos de sonido'
                 },
                 {
                   value: '95',
                   text: 'Equipos completos'
                 },
                 {
                   value: '96',
                   text: 'Amplificadores'
                 },
                 {
                   value: '97',
                   text: 'Altavoces'
                 },
                 {
                   value: '102',
                   text: 'Sintonizadores'
                 },
                 {
                   value: '103',
                   text: 'Tocadiscos'
                 },
                 {
                   value: '105',
                   text: 'Otros'
                 },
                 {
                   value: '99',
                   text: 'Minicadenas'
                 },
                 {
                   value: '100',
                   text: 'Minidisc'
                 },
                 {
                   value: '108',
                   text: 'Home Cinema'
                 },
                 {
                   value: '109',
                   text: 'Reproductores mp3 y mp4'
                 },
                 {
                   value: '110',
                   text: 'Mesas de mezclas'
                 },
                 {
                   value: '2090',
                   text: 'Auriculares'
                 },
                 {
                   value: '84',
                   text: 'Música'
                 },
                 {
                   value: '560',
                   text: 'Partituras'
                 },
                 {
                   value: '561',
                   text: 'Cds Cintas y Vinilos'
                 },
                 {
                   value: '2091',
                   text: 'Casetes'
                 },
                 {
                   value: '2092',
                   text: 'Vinilos'
                 },
                 {
                   value: '2093',
                   text: 'CDs'
                 },
                 {
                   value: '562',
                   text: 'Instrumentos musicales'
                 },
                 {
                   value: '563',
                   text: 'Pianos'
                 },
                 {
                   value: '564',
                   text: 'Saxofones'
                 },
                 {
                   value: '565',
                   text: 'Guitarras eléctricas'
                 },
                 {
                   value: '566',
                   text: 'Guitarras clásicas'
                 },
                 {
                   value: '567',
                   text: 'Bajos'
                 },
                 {
                   value: '568',
                   text: 'Baterías'
                 },
                 {
                   value: '569',
                   text: 'Violines'
                 },
                 {
                   value: '570',
                   text: 'Acordeones'
                 },
                 {
                   value: '571',
                   text: 'Armónicas'
                 },
                 {
                   value: '572',
                   text: 'Flautas'
                 },
                 {
                   value: '1810',
                   text: 'Trompetas'
                 },
                 {
                   value: '573',
                   text: 'Otros'
                 },
                 {
                   value: '83',
                   text: 'Telefonía'
                 },
                 {
                   value: '111',
                   text: 'Móviles'
                 },
                 {
                   value: '112',
                   text: 'Teléfonos móviles'
                 },
                 {
                   value: '1260',
                   text: 'Blackberry'
                 },
                 {
                   value: '1250',
                   text: 'HTC'
                 },
                 {
                   value: '1280',
                   text: 'Huawei'
                 },
                 {
                   value: '1270',
                   text: 'iPhone'
                 },
                 {
                   value: '162',
                   text: 'LG'
                 },
                 {
                   value: '164',
                   text: 'Motorola'
                 },
                 {
                   value: '166',
                   text: 'Nokia'
                 },
                 {
                   value: '170',
                   text: 'Samsung'
                 },
                 {
                   value: '173',
                   text: 'Sony'
                 },
                 {
                   value: '161',
                   text: 'Alcatel'
                 },
                 {
                   value: '175',
                   text: 'Otras marcas'
                 },
                 {
                   value: '1840',
                   text: 'Servicios de Telefonía'
                 },
                 {
                   value: '114',
                   text: 'Manos libres'
                 },
                 {
                   value: '115',
                   text: 'Fundas'
                 },
                 {
                   value: '176',
                   text: 'Tarjetas prepago'
                 },
                 {
                   value: '179',
                   text: 'Cables'
                 },
                 {
                   value: '178',
                   text: 'cargadores'
                 },
                 {
                   value: '177',
                   text: 'Baterías'
                 },
                 {
                   value: '116',
                   text: 'Otros'
                 },
                 {
                   value: '2184',
                   text: 'Smartwatch'
                 },
                 {
                   value: '117',
                   text: 'Teléfonos inalámbricos'
                 },
                 {
                   value: '118',
                   text: 'Fax'
                 },
                 {
                   value: '119',
                   text: 'Centralitas'
                 },
                 {
                   value: '180',
                   text: 'Contestadores'
                 },
                 {
                   value: '1120',
                   text: 'Tablets / iPad'
                 },
                 {
                   value: '39',
                   text: 'Juegos'
                 },
                 {
                   value: '438',
                   text: 'Juegos de bar'
                 },
                 {
                   value: '397',
                   text: 'Billares'
                 },
                 {
                   value: '398',
                   text: 'Futbolines'
                 },
                 {
                   value: '399',
                   text: 'Máquinas tragaperras'
                 },
                 {
                   value: '400',
                   text: 'Pinballs'
                 },
                 {
                   value: '401',
                   text: 'Dardos'
                 },
                 {
                   value: '402',
                   text: 'Otros juegos de bar'
                 },
                 {
                   value: '403',
                   text: 'Juguetes'
                 },
                 {
                   value: '404',
                   text: 'Muñecas'
                 },
                 {
                   value: '405',
                   text: 'Scalextric'
                 },
                 {
                   value: '596',
                   text: 'Trenes eléctricos'
                 },
                 {
                   value: '407',
                   text: 'Juegos de mesa'
                 },
                 {
                   value: '408',
                   text: 'Juegos de rol'
                 },
                 {
                   value: '409',
                   text: 'Juegos educativos'
                 },
                 {
                   value: '679',
                   text: 'Bicicletas'
                 },
                 {
                   value: '2045',
                   text: 'Bicicletas BMX'
                 },
                 {
                   value: '2046',
                   text: 'Bicicletas de carretera'
                 },
                 {
                   value: '2057',
                   text: 'Bicicletas clásicas'
                 },
                 {
                   value: '2047',
                   text: 'Bicicletas de descenso'
                 },
                 {
                   value: '2056',
                   text: 'Bicicletas eléctricas'
                 },
                 {
                   value: '2058',
                   text: 'Bicicletas estáticas y spinning'
                 },
                 {
                   value: '2048',
                   text: 'Bicicletas de montaña'
                 },
                 {
                   value: '2049',
                   text: 'Bicicletas de mujer'
                 },
                 {
                   value: '2050',
                   text: 'Bicicletas de niños'
                 },
                 {
                   value: '2051',
                   text: 'Bicicletas de paseo y ciudad'
                 },
                 {
                   value: '2052',
                   text: 'Bicicletas de trial'
                 },
                 {
                   value: '2053',
                   text: 'Bicicletas de triatlon'
                 },
                 {
                   value: '2054',
                   text: 'Equipamiento y accesorios'
                 },
                 {
                   value: '2055',
                   text: 'Componentes y recambios'
                 },
                 {
                   value: '2073',
                   text: 'Servicios bicicletas'
                 },
                 {
                   value: '1100',
                   text: 'Airsoft'
                 },
                 {
                   value: '411',
                   text: 'Otros juguetes'
                 },
                 {
                   value: '412',
                   text: 'Videoconsolas'
                 },
                 {
                   value: '413',
                   text: 'Consolas'
                 },
                 {
                   value: '414',
                   text: 'XBox'
                 },
                 {
                   value: '783',
                   text: 'Xbox 360'
                 },
                 {
                   value: '1760',
                   text: 'XBox One'
                 },
                 {
                   value: '415',
                   text: 'PlayStation'
                 },
                 {
                   value: '416',
                   text: 'PlayStation 2'
                 },
                 {
                   value: '782',
                   text: 'PlayStation 3'
                 },
                 {
                   value: '1780',
                   text: 'PlayStation 4'
                 },
                 {
                   value: '784',
                   text: 'PSP'
                 },
                 {
                   value: '1700',
                   text: 'PS Vita'
                 },
                 {
                   value: '418',
                   text: 'Nintendo 64'
                 },
                 {
                   value: '785',
                   text: 'Nintendo DS'
                 },
                 {
                   value: '1610',
                   text: 'Nintendo 3DS'
                 },
                 {
                   value: '786',
                   text: 'Wii'
                 },
                 {
                   value: '1820',
                   text: 'Wii U'
                 },
                 {
                   value: '419',
                   text: 'Gameboy'
                 },
                 {
                   value: '420',
                   text: 'Gameboy Advanced'
                 },
                 {
                   value: '422',
                   text: 'Otras consolas'
                 },
                 {
                   value: '423',
                   text: 'Videojuegos'
                 },
                 {
                   value: '424',
                   text: 'Juegos de XBox'
                 },
                 {
                   value: '787',
                   text: 'Juegos de Xbox 360'
                 },
                 {
                   value: '1770',
                   text: 'Juegos de XBox One'
                 },
                 {
                   value: '425',
                   text: 'Juegos de PlayStation'
                 },
                 {
                   value: '426',
                   text: 'Juegos de PlayStation 2'
                 },
                 {
                   value: '789',
                   text: 'Juegos de PlayStation 3'
                 },
                 {
                   value: '1790',
                   text: 'Juegos de PlayStation 4'
                 },
                 {
                   value: '790',
                   text: 'Juegos de PSP'
                 },
                 {
                   value: '1710',
                   text: 'Juegos de PS Vita'
                 },
                 {
                   value: '428',
                   text: 'Juegos de Nintendo'
                 },
                 {
                   value: '791',
                   text: 'Juegos de Nintendo DS'
                 },
                 {
                   value: '1620',
                   text: 'Juegos de Nintendo 3DS'
                 },
                 {
                   value: '792',
                   text: 'Juegos de Wii'
                 },
                 {
                   value: '1830',
                   text: 'Juegos de Wii U'
                 },
                 {
                   value: '429',
                   text: 'Juegos de PC'
                 },
                 {
                   value: '430',
                   text: 'Juegos de Gameboy'
                 },
                 {
                   value: '431',
                   text: 'Otros juegos'
                 },
                 {
                   value: '432',
                   text: 'Accesorios'
                 },
                 {
                   value: '1840',
                   text: 'Servicios para Videoconsolas'
                 },
                 {
                   value: '433',
                   text: 'Otros'
                 },
                 {
                   value: '434',
                   text: 'Ajedrez'
                 },
                 {
                   value: '592',
                   text: 'Modelismo'
                 },
                 {
                   value: '593',
                   text: 'Aeromodelismo'
                 },
                 {
                   value: '594',
                   text: 'Automodelismo'
                 },
                 {
                   value: '595',
                   text: 'Modelismo naval'
                 },
                 {
                   value: '596',
                   text: 'Modelismo ferroviario'
                 },
                 {
                   value: '597',
                   text: 'Radiocontrol'
                 },
                 {
                   value: '598',
                   text: 'Otros'
                 },
                 {
                   value: '597',
                   text: 'Radiocontrol'
                 },
                 {
                   value: '437',
                   text: 'Otros'
                 },
                 {
                   value: '30',
                   text: 'Casa y Jardín'
                 },
                 {
                   value: '513',
                   text: 'Bebes'
                 },
                 {
                   value: '2133',
                   text: 'Moda bebe niño'
                 },
                 {
                   value: '514',
                   text: 'Ropa'
                 },
                 {
                   value: '2169',
                   text: 'Lotes'
                 },
                 {
                   value: '2170',
                   text: 'Conjuntos'
                 },
                 {
                   value: '2135',
                   text: 'Abrigos y buzos'
                 },
                 {
                   value: '2136',
                   text: 'Pantalones y petos'
                 },
                 {
                   value: '2137',
                   text: 'Camisas, camisetas y jerseys'
                 },
                 {
                   value: '2138',
                   text: 'Trajes ceremonia'
                 },
                 {
                   value: '2139',
                   text: 'Otros'
                 },
                 {
                   value: '2140',
                   text: 'Calzado'
                 },
                 {
                   value: '2141',
                   text: 'Otros'
                 },
                 {
                   value: '2134',
                   text: 'Moda bebe niña'
                 },
                 {
                   value: '2142',
                   text: 'Ropa'
                 },
                 {
                   value: '2171',
                   text: 'Lotes'
                 },
                 {
                   value: '2172',
                   text: 'Conjuntos'
                 },
                 {
                   value: '2173',
                   text: 'Vestidos'
                 },
                 {
                   value: '2143',
                   text: 'Abrigos y buzos'
                 },
                 {
                   value: '2144',
                   text: 'Faldas y pantalones'
                 },
                 {
                   value: '2145',
                   text: 'Blusas, camisetas y jerseys'
                 },
                 {
                   value: '2146',
                   text: 'Vestidos ceremonia'
                 },
                 {
                   value: '2147',
                   text: 'Otros'
                 },
                 {
                   value: '2148',
                   text: 'Calzado'
                 },
                 {
                   value: '2149',
                   text: 'Otros'
                 },
                 {
                   value: '515',
                   text: 'Cunas para bebe'
                 },
                 {
                   value: '516',
                   text: 'Coches de bebe y sillas de paseo'
                 },
                 {
                   value: '2062',
                   text: 'Silla infantil para coche'
                 },
                 {
                   value: '517',
                   text: 'Juguetes para bebes'
                 },
                 {
                   value: '2150',
                   text: 'Tronas'
                 },
                 {
                   value: '2151',
                   text: 'Bañeras y cambiadores'
                 },
                 {
                   value: '2152',
                   text: 'Mochilas y fulares portabebes'
                 },
                 {
                   value: '2153',
                   text: 'Hamacas y columpios'
                 },
                 {
                   value: '518',
                   text: 'Accesorios para bebe'
                 },
                 {
                   value: '439',
                   text: 'Gastronomía'
                 },
                 {
                   value: '440',
                   text: 'Vinos'
                 },
                 {
                   value: '441',
                   text: 'Alimentación'
                 },
                 {
                   value: '442',
                   text: 'Otros'
                 },
                 {
                   value: '443',
                   text: 'Menaje del hogar'
                 },
                 {
                   value: '444',
                   text: 'Cuberterías'
                 },
                 {
                   value: '445',
                   text: 'Cristalerías'
                 },
                 {
                   value: '446',
                   text: 'Vajillas'
                 },
                 {
                   value: '447',
                   text: 'Otros'
                 },
                 {
                   value: '454',
                   text: 'Jardinería'
                 },
                 {
                   value: '455',
                   text: 'Plantas'
                 },
                 {
                   value: '456',
                   text: 'Semillas'
                 },
                 {
                   value: '457',
                   text: 'Mobiliario de jardín'
                 },
                 {
                   value: '458',
                   text: 'Herramientas'
                 },
                 {
                   value: '459',
                   text: 'Cortacesped'
                 },
                 {
                   value: '1720',
                   text: 'Leña'
                 },
                 {
                   value: '1880',
                   text: 'Piscinas'
                 },
                 {
                   value: '460',
                   text: 'Otros'
                 },
                 {
                   value: '461',
                   text: 'Textil'
                 },
                 {
                   value: '462',
                   text: 'Alfombras'
                 },
                 {
                   value: '463',
                   text: 'Sábanas y mantas'
                 },
                 {
                   value: '464',
                   text: 'Cortinas'
                 },
                 {
                   value: '465',
                   text: 'Manteles'
                 },
                 {
                   value: '466',
                   text: 'Edredones y fundas'
                 },
                 {
                   value: '467',
                   text: 'Otros'
                 },
                 {
                   value: '448',
                   text: 'Bricolaje'
                 },
                 {
                   value: '449',
                   text: 'Taladros'
                 },
                 {
                   value: '450',
                   text: 'Lijadoras'
                 },
                 {
                   value: '451',
                   text: 'Materiales de construcción'
                 },
                 {
                   value: '452',
                   text: 'Juegos de herramientas'
                 },
                 {
                   value: '453',
                   text: 'Otros'
                 },
                 {
                   value: '468',
                   text: 'Arte y decoración'
                 },
                 {
                   value: '469',
                   text: 'Pinturas'
                 },
                 {
                   value: '470',
                   text: 'Esculturas'
                 },
                 {
                   value: '471',
                   text: 'Cristal'
                 },
                 {
                   value: '472',
                   text: 'Láminas'
                 },
                 {
                   value: '473',
                   text: 'Marcos'
                 },
                 {
                   value: '474',
                   text: 'Velas'
                 },
                 {
                   value: '475',
                   text: 'Otros'
                 },
                 {
                   value: '494',
                   text: 'Electrodomésticos'
                 },
                 {
                   value: '495',
                   text: 'Frigoríficos'
                 },
                 {
                   value: '496',
                   text: 'Lavadoras'
                 },
                 {
                   value: '769',
                   text: 'Lavavajillas'
                 },
                 {
                   value: '497',
                   text: 'Hornos'
                 },
                 {
                   value: '499',
                   text: 'Secadoras'
                 },
                 {
                   value: '500',
                   text: 'Aire acondicionado'
                 },
                 {
                   value: '501',
                   text: 'Calentadores de agua'
                 },
                 {
                   value: '502',
                   text: 'Microondas'
                 },
                 {
                   value: '503',
                   text: 'Congeladores'
                 },
                 {
                   value: '504',
                   text: 'Cafeteras'
                 },
                 {
                   value: '2174',
                   text: 'Belleza y estética'
                 },
                 {
                   value: '2175',
                   text: 'Planchas de pelo'
                 },
                 {
                   value: '2176',
                   text: 'Secadores y rizadores'
                 },
                 {
                   value: '2177',
                   text: 'Cortapelos, afeitadoras y depiladoras'
                 },
                 {
                   value: '2178',
                   text: 'Otros'
                 },
                 {
                   value: '505',
                   text: 'Planchas'
                 },
                 {
                   value: '506',
                   text: 'Aspiradoras'
                 },
                 {
                   value: '1730',
                   text: 'Estufas'
                 },
                 {
                   value: '2183',
                   text: 'Máquinas de coser'
                 },
                 {
                   value: '507',
                   text: 'Otros'
                 },
                 {
                   value: '493',
                   text: 'Iluminación'
                 },
                 {
                   value: '476',
                   text: 'Muebles'
                 },
                 {
                   value: '477',
                   text: 'Muebles de cocina'
                 },
                 {
                   value: '396',
                   text: 'Muebles de oficina'
                 },
                 {
                   value: '479',
                   text: 'Saneamientos'
                 },
                 {
                   value: '480',
                   text: 'Bañeras'
                 },
                 {
                   value: '481',
                   text: 'Lavabos'
                 },
                 {
                   value: '482',
                   text: 'Tazas'
                 },
                 {
                   value: '483',
                   text: 'Otros'
                 },
                 {
                   value: '484',
                   text: 'Mesas'
                 },
                 {
                   value: '485',
                   text: 'Mesillas'
                 },
                 {
                   value: '486',
                   text: 'Sillas sofás sillones'
                 },
                 {
                   value: '487',
                   text: 'Armarios'
                 },
                 {
                   value: '488',
                   text: 'Librerías'
                 },
                 {
                   value: '489',
                   text: 'Colchones'
                 },
                 {
                   value: '490',
                   text: 'Somieres'
                 },
                 {
                   value: '491',
                   text: 'Literas'
                 },
                 {
                   value: '492',
                   text: 'Otros'
                 },
                 {
                   value: '646',
                   text: 'Antigüedades'
                 },
                 {
                   value: '1220',
                   text: 'Ortopedia'
                 },
                 {
                   value: '43',
                   text: 'Moda y complementos'
                 },
                 {
                   value: '529',
                   text: 'Moda mujer'
                 },
                 {
                   value: '2102',
                   text: 'Ropa'
                 },
                 {
                   value: '530',
                   text: 'Abrigos y chaquetas'
                 },
                 {
                   value: '2104',
                   text: 'Jersey'
                 },
                 {
                   value: '532',
                   text: 'Camisas y blusas'
                 },
                 {
                   value: '531',
                   text: 'Camisetas'
                 },
                 {
                   value: '2103',
                   text: 'Ropa deportiva'
                 },
                 {
                   value: '535',
                   text: 'Pantalones'
                 },
                 {
                   value: '534',
                   text: 'Faldas'
                 },
                 {
                   value: '2105',
                   text: 'Moda flamenca'
                 },
                 {
                   value: '2106',
                   text: 'Traje regional'
                 },
                 {
                   value: '537',
                   text: 'Vestidos de fiesta'
                 },
                 {
                   value: '536',
                   text: 'Vestidos de novia'
                 },
                 {
                   value: '1240',
                   text: 'Vestidos'
                 },
                 {
                   value: '1930',
                   text: 'Premamá'
                 },
                 {
                   value: '533',
                   text: 'Tops'
                 },
                 {
                   value: '538',
                   text: 'Lencería y bikinis'
                 },
                 {
                   value: '540',
                   text: 'Otros'
                 },
                 {
                   value: '539',
                   text: 'Calzado'
                 },
                 {
                   value: '2107',
                   text: 'Zapatillas'
                 },
                 {
                   value: '2168',
                   text: 'Zapatos'
                 },
                 {
                   value: '2108',
                   text: 'Sandalias'
                 },
                 {
                   value: '2109',
                   text: 'Botas'
                 },
                 {
                   value: '2110',
                   text: 'Botines'
                 },
                 {
                   value: '2111',
                   text: 'Otros'
                 },
                 {
                   value: '2112',
                   text: 'Complementos'
                 },
                 {
                   value: '541',
                   text: 'Bolsos'
                 },
                 {
                   value: '542',
                   text: 'Cinturones'
                 },
                 {
                   value: '2113',
                   text: 'Accesorios'
                 },
                 {
                   value: '543',
                   text: 'Gafas'
                 },
                 {
                   value: '546',
                   text: 'Relojes'
                 },
                 {
                   value: '547',
                   text: 'Joyas y bisutería'
                 },
                 {
                   value: '549',
                   text: 'Anillos'
                 },
                 {
                   value: '550',
                   text: 'Collares y colgantes'
                 },
                 {
                   value: '551',
                   text: 'Pendientes'
                 },
                 {
                   value: '552',
                   text: 'Pulseras'
                 },
                 {
                   value: '548',
                   text: 'Joyerías'
                 },
                 {
                   value: '1320',
                   text: 'Compra-venta de oro'
                 },
                 {
                   value: '553',
                   text: 'Otros'
                 },
                 {
                   value: '545',
                   text: 'Perfumes'
                 },
                 {
                   value: '544',
                   text: 'Cosméticos'
                 },
                 {
                   value: '1310',
                   text: 'Disfraces'
                 },
                 {
                   value: '519',
                   text: 'Moda hombre'
                 },
                 {
                   value: '2115',
                   text: 'Ropa'
                 },
                 {
                   value: '520',
                   text: 'Abrigos y chaquetas'
                 },
                 {
                   value: '2116',
                   text: 'Cazadoras y americanas'
                 },
                 {
                   value: '523',
                   text: 'Camisas'
                 },
                 {
                   value: '525',
                   text: 'Polos'
                 },
                 {
                   value: '524',
                   text: 'Camisetas'
                 },
                 {
                   value: '526',
                   text: 'Pantalones'
                 },
                 {
                   value: '2117',
                   text: 'Chandal y sudaderas'
                 },
                 {
                   value: '522',
                   text: 'Chaqués y trajes de novio'
                 },
                 {
                   value: '521',
                   text: 'Trajes'
                 },
                 {
                   value: '528',
                   text: 'Otros'
                 },
                 {
                   value: '527',
                   text: 'Calzado'
                 },
                 {
                   value: '2118',
                   text: 'Zapatillas'
                 },
                 {
                   value: '2119',
                   text: 'Zapatos'
                 },
                 {
                   value: '2120',
                   text: 'Botas y botines'
                 },
                 {
                   value: '2121',
                   text: 'Otros'
                 },
                 {
                   value: '2122',
                   text: 'Complementos'
                 },
                 {
                   value: '2124',
                   text: 'Cinturones'
                 },
                 {
                   value: '2126',
                   text: 'Gafas'
                 },
                 {
                   value: '2127',
                   text: 'Relojes'
                 },
                 {
                   value: '2128',
                   text: 'Accesorios'
                 },
                 {
                   value: '2129',
                   text: 'Joyas'
                 },
                 {
                   value: '2130',
                   text: 'Perfumes y colonias'
                 },
                 {
                   value: '2131',
                   text: 'Cosmeticos'
                 },
                 {
                   value: '2132',
                   text: 'Disfraces'
                 },
                 {
                   value: '2100',
                   text: 'Moda niño'
                 },
                 {
                   value: '510',
                   text: 'Ropa infantil'
                 },
                 {
                   value: '2181',
                   text: 'Abrigos y chaquetas'
                 },
                 {
                   value: '2155',
                   text: 'Camisas, camisetas y jerseys'
                 },
                 {
                   value: '2154',
                   text: 'Pantalones y petos'
                 },
                 {
                   value: '2156',
                   text: 'Trajes, ceremonia y uniformes'
                 },
                 {
                   value: '2180',
                   text: 'Otros'
                 },
                 {
                   value: '511',
                   text: 'Calzado infantil'
                 },
                 {
                   value: '2158',
                   text: 'Disfraces'
                 },
                 {
                   value: '512',
                   text: 'Otros'
                 },
                 {
                   value: '2101',
                   text: 'Moda niña'
                 },
                 {
                   value: '2159',
                   text: 'Ropa infantil'
                 },
                 {
                   value: '2182',
                   text: 'Abrigos y chaquetas'
                 },
                 {
                   value: '2160',
                   text: 'Pantalones y petos'
                 },
                 {
                   value: '2161',
                   text: 'Blusas, camisetas y jerseys'
                 },
                 {
                   value: '2162',
                   text: 'Vestidos, ceremonia y uniformes'
                 },
                 {
                   value: '2163',
                   text: 'Otros'
                 },
                 {
                   value: '2164',
                   text: 'Calzado infantil'
                 },
                 {
                   value: '2166',
                   text: 'Disfraces'
                 },
                 {
                   value: '2167',
                   text: 'Otros'
                 },
                 {
                   value: '2114',
                   text: 'Maletas'
                 },
                 {
                   value: '2157',
                   text: 'Mochilas y maletas infantil'
                 },
                 {
                   value: '1220',
                   text: 'Ortopedia'
                 },
                 {
                   value: '554',
                   text: 'Otros'
                 },
                 {
                   value: '513',
                   text: 'Bebes'
                 },
                 {
                   value: '2133',
                   text: 'Moda bebe niño'
                 },
                 {
                   value: '514',
                   text: 'Ropa'
                 },
                 {
                   value: '2169',
                   text: 'Lotes'
                 },
                 {
                   value: '2170',
                   text: 'Conjuntos'
                 },
                 {
                   value: '2135',
                   text: 'Abrigos y buzos'
                 },
                 {
                   value: '2136',
                   text: 'Pantalones y petos'
                 },
                 {
                   value: '2137',
                   text: 'Camisas, camisetas y jerseys'
                 },
                 {
                   value: '2138',
                   text: 'Trajes ceremonia'
                 },
                 {
                   value: '2139',
                   text: 'Otros'
                 },
                 {
                   value: '2140',
                   text: 'Calzado'
                 },
                 {
                   value: '2141',
                   text: 'Otros'
                 },
                 {
                   value: '2134',
                   text: 'Moda bebe niña'
                 },
                 {
                   value: '2142',
                   text: 'Ropa'
                 },
                 {
                   value: '2171',
                   text: 'Lotes'
                 },
                 {
                   value: '2172',
                   text: 'Conjuntos'
                 },
                 {
                   value: '2173',
                   text: 'Vestidos'
                 },
                 {
                   value: '2143',
                   text: 'Abrigos y buzos'
                 },
                 {
                   value: '2144',
                   text: 'Faldas y pantalones'
                 },
                 {
                   value: '2145',
                   text: 'Blusas, camisetas y jerseys'
                 },
                 {
                   value: '2146',
                   text: 'Vestidos ceremonia'
                 },
                 {
                   value: '2147',
                   text: 'Otros'
                 },
                 {
                   value: '2148',
                   text: 'Calzado'
                 },
                 {
                   value: '2149',
                   text: 'Otros'
                 },
                 {
                   value: '515',
                   text: 'Cunas para bebe'
                 },
                 {
                   value: '516',
                   text: 'Coches de bebe y sillas de paseo'
                 },
                 {
                   value: '2062',
                   text: 'Silla infantil para coche'
                 },
                 {
                   value: '517',
                   text: 'Juguetes para bebes'
                 },
                 {
                   value: '2150',
                   text: 'Tronas'
                 },
                 {
                   value: '2151',
                   text: 'Bañeras y cambiadores'
                 },
                 {
                   value: '2152',
                   text: 'Mochilas y fulares portabebes'
                 },
                 {
                   value: '2153',
                   text: 'Hamacas y columpios'
                 },
                 {
                   value: '518',
                   text: 'Accesorios para bebe'
                 },
                 {
                   value: '44',
                   text: 'Aficiones y ocio'
                 },
                 {
                   value: '723',
                   text: 'Volar'
                 },
                 {
                   value: '672',
                   text: 'Paracaidismo'
                 },
                 {
                   value: '673',
                   text: 'Parapente'
                 },
                 {
                   value: '677',
                   text: 'Vuelo sin motor'
                 },
                 {
                   value: '724',
                   text: 'Ultraligeros'
                 },
                 {
                   value: '725',
                   text: 'Ala Delta'
                 },
                 {
                   value: '726',
                   text: 'Otros'
                 },
                 {
                   value: '592',
                   text: 'Modelismo'
                 },
                 {
                   value: '593',
                   text: 'Aeromodelismo'
                 },
                 {
                   value: '594',
                   text: 'Automodelismo'
                 },
                 {
                   value: '595',
                   text: 'Modelismo naval'
                 },
                 {
                   value: '596',
                   text: 'Modelismo ferroviario'
                 },
                 {
                   value: '597',
                   text: 'Radiocontrol'
                 },
                 {
                   value: '598',
                   text: 'Otros'
                 },
                 {
                   value: '599',
                   text: 'Caza y pesca'
                 },
                 {
                   value: '600',
                   text: 'Caza'
                 },
                 {
                   value: '601',
                   text: 'Escopetas'
                 },
                 {
                   value: '602',
                   text: 'Perros de caza'
                 },
                 {
                   value: '603',
                   text: 'Monterías'
                 },
                 {
                   value: '604',
                   text: 'Cotos de caza'
                 },
                 {
                   value: '605',
                   text: 'Artículos de caza'
                 },
                 {
                   value: '15',
                   text: 'Todoterrenos'
                 },
                 {
                   value: '607',
                   text: 'Pesca'
                 },
                 {
                   value: '608',
                   text: 'Cañas de pescar'
                 },
                 {
                   value: '609',
                   text: 'Cotos de pesca'
                 },
                 {
                   value: '610',
                   text: 'Artículos de pesca'
                 },
                 {
                   value: '696',
                   text: 'Barcos'
                 },
                 {
                   value: '697',
                   text: 'Lanchas neumáticas'
                 },
                 {
                   value: '699',
                   text: 'Barcos de pesca'
                 },
                 {
                   value: '700',
                   text: 'Barcos a motor'
                 },
                 {
                   value: '701',
                   text: 'Yates'
                 },
                 {
                   value: '702',
                   text: 'Veleros'
                 },
                 {
                   value: '703',
                   text: 'Catamaranes'
                 },
                 {
                   value: '704',
                   text: 'Vela ligera'
                 },
                 {
                   value: '644',
                   text: 'Coleccionismo'
                 },
                 {
                   value: '645',
                   text: 'Acciones'
                 },
                 {
                   value: '647',
                   text: 'Armas'
                 },
                 {
                   value: '1100',
                   text: 'Airsoft'
                 },
                 {
                   value: '648',
                   text: 'Bebidas'
                 },
                 {
                   value: '649',
                   text: 'Billetes'
                 },
                 {
                   value: '650',
                   text: 'Calendarios'
                 },
                 {
                   value: '651',
                   text: 'Cartas'
                 },
                 {
                   value: '652',
                   text: 'Carteles y posters'
                 },
                 {
                   value: '653',
                   text: 'Comics y tebeos'
                 },
                 {
                   value: '654',
                   text: 'Cromos'
                 },
                 {
                   value: '655',
                   text: 'Llaveros'
                 },
                 {
                   value: '656',
                   text: 'Loterías'
                 },
                 {
                   value: '121',
                   text: 'Máquinas de escribir'
                 },
                 {
                   value: '657',
                   text: 'Mecheros'
                 },
                 {
                   value: '658',
                   text: 'Minerales'
                 },
                 {
                   value: '659',
                   text: 'Miniaturas'
                 },
                 {
                   value: '660',
                   text: 'Monedas'
                 },
                 {
                   value: '661',
                   text: 'Periódicos'
                 },
                 {
                   value: '662',
                   text: 'Pins'
                 },
                 {
                   value: '663',
                   text: 'Postales'
                 },
                 {
                   value: '664',
                   text: 'Relojes'
                 },
                 {
                   value: '665',
                   text: 'Sellos'
                 },
                 {
                   value: '666',
                   text: 'Tarjetas telefónicas'
                 },
                 {
                   value: '667',
                   text: 'Vitolas'
                 },
                 {
                   value: '668',
                   text: 'Otros'
                 },
                 {
                   value: '762',
                   text: 'Telescopios'
                 },
                 {
                   value: '448',
                   text: 'Bricolaje'
                 },
                 {
                   value: '449',
                   text: 'Taladros'
                 },
                 {
                   value: '450',
                   text: 'Lijadoras'
                 },
                 {
                   value: '451',
                   text: 'Materiales de construcción'
                 },
                 {
                   value: '452',
                   text: 'Juegos de herramientas'
                 },
                 {
                   value: '453',
                   text: 'Otros'
                 },
                 {
                   value: '682',
                   text: 'Cometas'
                 },
                 {
                   value: '62',
                   text: 'Karting'
                 },
                 {
                   value: '674',
                   text: 'Puenting'
                 },
                 {
                   value: '675',
                   text: 'Radioaficionados'
                 },
                 {
                   value: '597',
                   text: 'Radiocontrol'
                 },
                 {
                   value: '63',
                   text: 'Tunning'
                 },
                 {
                   value: '727',
                   text: 'Casas rurales'
                 },
                 {
                   value: '729',
                   text: 'Camping'
                 },
                 {
                   value: '1040',
                   text: 'Alquiler vacaciones'
                 },
                 {
                   value: '730',
                   text: 'Montañismo'
                 },
                 {
                   value: '1100',
                   text: 'Airsoft'
                 },
                 {
                   value: '732',
                   text: 'Entradas'
                 },
                 {
                   value: '776',
                   text: 'Entradas deportes'
                 },
                 {
                   value: '733',
                   text: 'Entradas de fútbol'
                 },
                 {
                   value: '777',
                   text: 'Entradas de baloncesto'
                 },
                 {
                   value: '778',
                   text: 'Entradas de tenis'
                 },
                 {
                   value: '779',
                   text: 'otros deportes'
                 },
                 {
                   value: '734',
                   text: 'Entradas de concierto'
                 },
                 {
                   value: '735',
                   text: 'Entradas de cine'
                 },
                 {
                   value: '736',
                   text: 'Entradas espectáculos'
                 },
                 {
                   value: '1630',
                   text: 'Billetes'
                 },
                 {
                   value: '1650',
                   text: 'Billetes de autobus'
                 },
                 {
                   value: '1640',
                   text: 'Billetes de tren'
                 },
                 {
                   value: '1660',
                   text: 'Billetes de avión'
                 },
                 {
                   value: '737',
                   text: 'Discotecas'
                 },
                 {
                   value: '738',
                   text: 'Restaurantes'
                 },
                 {
                   value: '739',
                   text: 'Bares'
                 },
                 {
                   value: '31',
                   text: 'Deportes y náutica'
                 },
                 {
                   value: '678',
                   text: 'Deportes'
                 },
                 {
                   value: '2096',
                   text: 'Baloncesto'
                 },
                 {
                   value: '679',
                   text: 'Bicicletas'
                 },
                 {
                   value: '2045',
                   text: 'Bicicletas BMX'
                 },
                 {
                   value: '2046',
                   text: 'Bicicletas de carretera'
                 },
                 {
                   value: '2057',
                   text: 'Bicicletas clásicas'
                 },
                 {
                   value: '2047',
                   text: 'Bicicletas de descenso'
                 },
                 {
                   value: '2056',
                   text: 'Bicicletas eléctricas'
                 },
                 {
                   value: '2058',
                   text: 'Bicicletas estáticas y spinning'
                 },
                 {
                   value: '2048',
                   text: 'Bicicletas de montaña'
                 },
                 {
                   value: '2049',
                   text: 'Bicicletas de mujer'
                 },
                 {
                   value: '2050',
                   text: 'Bicicletas de niños'
                 },
                 {
                   value: '2051',
                   text: 'Bicicletas de paseo y ciudad'
                 },
                 {
                   value: '2052',
                   text: 'Bicicletas de trial'
                 },
                 {
                   value: '2053',
                   text: 'Bicicletas de triatlon'
                 },
                 {
                   value: '2054',
                   text: 'Equipamiento y accesorios'
                 },
                 {
                   value: '2055',
                   text: 'Componentes y recambios'
                 },
                 {
                   value: '2073',
                   text: 'Servicios bicicletas'
                 },
                 {
                   value: '1910',
                   text: 'Boxeo'
                 },
                 {
                   value: '680',
                   text: 'Buceo'
                 },
                 {
                   value: '294',
                   text: 'Escuelas de buceo'
                 },
                 {
                   value: '599',
                   text: 'Caza y Pesca'
                 },
                 {
                   value: '600',
                   text: 'Caza'
                 },
                 {
                   value: '601',
                   text: 'Escopetas'
                 },
                 {
                   value: '602',
                   text: 'Perros de caza'
                 },
                 {
                   value: '603',
                   text: 'Monterías'
                 },
                 {
                   value: '604',
                   text: 'Cotos de caza'
                 },
                 {
                   value: '605',
                   text: 'Artículos de caza'
                 },
                 {
                   value: '15',
                   text: 'Todoterrenos'
                 },
                 {
                   value: '607',
                   text: 'Pesca'
                 },
                 {
                   value: '608',
                   text: 'Cañas de pescar'
                 },
                 {
                   value: '609',
                   text: 'Cotos de pesca'
                 },
                 {
                   value: '610',
                   text: 'Artículos de pesca'
                 },
                 {
                   value: '696',
                   text: 'Barcos'
                 },
                 {
                   value: '697',
                   text: 'Lanchas neumáticas'
                 },
                 {
                   value: '699',
                   text: 'Barcos de pesca'
                 },
                 {
                   value: '700',
                   text: 'Barcos a motor'
                 },
                 {
                   value: '701',
                   text: 'Yates'
                 },
                 {
                   value: '702',
                   text: 'Veleros'
                 },
                 {
                   value: '703',
                   text: 'Catamaranes'
                 },
                 {
                   value: '704',
                   text: 'Vela ligera'
                 },
                 {
                   value: '682',
                   text: 'Cometas'
                 },
                 {
                   value: '639',
                   text: 'Equitación'
                 },
                 {
                   value: '754',
                   text: 'Caballos'
                 },
                 {
                   value: '753',
                   text: 'Yeguas'
                 },
                 {
                   value: '745',
                   text: 'Potros'
                 },
                 {
                   value: '752',
                   text: 'Ponys'
                 },
                 {
                   value: '751',
                   text: 'Mulas'
                 },
                 {
                   value: '749',
                   text: 'Burros'
                 },
                 {
                   value: '748',
                   text: 'Monturas'
                 },
                 {
                   value: '747',
                   text: 'Carruajes'
                 },
                 {
                   value: '746',
                   text: 'Van'
                 },
                 {
                   value: '743',
                   text: 'Transporte'
                 },
                 {
                   value: '744',
                   text: 'Otros'
                 },
                 {
                   value: '684',
                   text: 'Escalada'
                 },
                 {
                   value: '685',
                   text: 'Esquí'
                 },
                 {
                   value: '244',
                   text: 'Gimnasios'
                 },
                 {
                   value: '686',
                   text: 'Snowboard'
                 },
                 {
                   value: '687',
                   text: 'Futbol'
                 },
                 {
                   value: '688',
                   text: 'Golf'
                 },
                 {
                   value: '689',
                   text: 'Monopatines'
                 },
                 {
                   value: '690',
                   text: 'Padel'
                 },
                 {
                   value: '691',
                   text: 'Patines'
                 },
                 {
                   value: '2095',
                   text: 'Running'
                 },
                 {
                   value: '692',
                   text: 'Tenis'
                 },
                 {
                   value: '693',
                   text: 'Tiro con arco'
                 },
                 {
                   value: '1100',
                   text: 'Airsoft'
                 },
                 {
                   value: '694',
                   text: 'Otros'
                 },
                 {
                   value: '695',
                   text: 'Embarcaciones'
                 },
                 {
                   value: '696',
                   text: 'Barcos'
                 },
                 {
                   value: '697',
                   text: 'Lanchas neumáticas'
                 },
                 {
                   value: '699',
                   text: 'Barcos de pesca'
                 },
                 {
                   value: '700',
                   text: 'Barcos a motor'
                 },
                 {
                   value: '701',
                   text: 'Yates'
                 },
                 {
                   value: '702',
                   text: 'Veleros'
                 },
                 {
                   value: '703',
                   text: 'Catamaranes'
                 },
                 {
                   value: '704',
                   text: 'Vela ligera'
                 },
                 {
                   value: '705',
                   text: 'Amarres'
                 },
                 {
                   value: '706',
                   text: 'Alquiler de amarres'
                 },
                 {
                   value: '707',
                   text: 'Venta de amarres'
                 },
                 {
                   value: '708',
                   text: 'Accesorios barcos'
                 },
                 {
                   value: '709',
                   text: 'Motores fueraborda'
                 },
                 {
                   value: '710',
                   text: 'GPS'
                 },
                 {
                   value: '711',
                   text: 'Cartas naúticas'
                 },
                 {
                   value: '712',
                   text: 'Otros'
                 },
                 {
                   value: '713',
                   text: 'Motos de agua'
                 },
                 {
                   value: '714',
                   text: 'Piraguas'
                 },
                 {
                   value: '715',
                   text: 'Canoas'
                 },
                 {
                   value: '716',
                   text: 'Kayak'
                 },
                 {
                   value: '717',
                   text: 'Windsurf'
                 },
                 {
                   value: '718',
                   text: 'Surf'
                 },
                 {
                   value: '719',
                   text: 'Kitesurf'
                 },
                 {
                   value: '741',
                   text: 'Trajes de neopreno'
                 },
                 {
                   value: '720',
                   text: 'Otros'
                 },
                 {
                   value: '612',
                   text: 'Mascotas y agricultura'
                 },
                 {
                   value: '613',
                   text: 'Perros'
                 },
                 {
                   value: '1170',
                   text: 'Perros'
                 },
                 {
                   value: '1960',
                   text: 'Akita inu'
                 },
                 {
                   value: '1950',
                   text: 'Alaskan malamute'
                 },
                 {
                   value: '2000',
                   text: 'American bully'
                 },
                 {
                   value: '902',
                   text: 'American Stanford'
                 },
                 {
                   value: '629',
                   text: 'Basset Hound'
                 },
                 {
                   value: '775',
                   text: 'Beagle'
                 },
                 {
                   value: '2030',
                   text: 'Bichón frisé'
                 },
                 {
                   value: '2020',
                   text: 'Bichón Habanero'
                 },
                 {
                   value: '774',
                   text: 'Bichón Maltés'
                 },
                 {
                   value: '1980',
                   text: 'Bodeguero ratonero andaluz'
                 },
                 {
                   value: '904',
                   text: 'Border Collie'
                 },
                 {
                   value: '1990',
                   text: 'Boston terrier'
                 },
                 {
                   value: '614',
                   text: 'Boxer'
                 },
                 {
                   value: '1940',
                   text: 'Boyero de berna'
                 },
                 {
                   value: '905',
                   text: 'Braco'
                 },
                 {
                   value: '906',
                   text: 'Bretón'
                 },
                 {
                   value: '907',
                   text: 'Bulldog Frances'
                 },
                 {
                   value: '615',
                   text: 'Bulldog Inglés'
                 },
                 {
                   value: '901',
                   text: 'Bull terrier'
                 },
                 {
                   value: '2044',
                   text: 'Bullmastiff'
                 },
                 {
                   value: '771',
                   text: 'Caniches'
                 },
                 {
                   value: '908',
                   text: 'Carlino'
                 },
                 {
                   value: '1920',
                   text: 'Cavalier'
                 },
                 {
                   value: '909',
                   text: 'Chihuahua'
                 },
                 {
                   value: '927',
                   text: 'Chow chow'
                 },
                 {
                   value: '616',
                   text: 'Cocker'
                 },
                 {
                   value: '617',
                   text: 'Dalmata'
                 },
                 {
                   value: '618',
                   text: 'Doberman'
                 },
                 {
                   value: '910',
                   text: 'Dogo Argentino'
                 },
                 {
                   value: '911',
                   text: 'Dogo Burdeos'
                 },
                 {
                   value: '619',
                   text: 'Otros dogos'
                 },
                 {
                   value: '620',
                   text: 'Fox terrier'
                 },
                 {
                   value: '621',
                   text: 'Galgos'
                 },
                 {
                   value: '913',
                   text: 'Golden Retriever'
                 },
                 {
                   value: '622',
                   text: 'Gran danés'
                 },
                 {
                   value: '623',
                   text: 'Husky'
                 },
                 {
                   value: '912',
                   text: 'Jack Russell'
                 },
                 {
                   value: '624',
                   text: 'Labradores'
                 },
                 {
                   value: '625',
                   text: 'Mastines'
                 },
                 {
                   value: '626',
                   text: 'Pastor Alemán'
                 },
                 {
                   value: '2040',
                   text: 'Pastor Belga'
                 },
                 {
                   value: '2010',
                   text: 'Pastor del Cáucaso'
                 },
                 {
                   value: '627',
                   text: 'Pekines'
                 },
                 {
                   value: '915',
                   text: 'Perro de Agua'
                 },
                 {
                   value: '916',
                   text: 'Pincher'
                 },
                 {
                   value: '917',
                   text: 'Pitbull'
                 },
                 {
                   value: '602',
                   text: 'Podenco'
                 },
                 {
                   value: '919',
                   text: 'Pointer'
                 },
                 {
                   value: '920',
                   text: 'Pomerania'
                 },
                 {
                   value: '922',
                   text: 'Ratón de Praga'
                 },
                 {
                   value: '628',
                   text: 'Rottweiler'
                 },
                 {
                   value: '630',
                   text: 'Samoyedo'
                 },
                 {
                   value: '631',
                   text: 'San bernardo'
                 },
                 {
                   value: '923',
                   text: 'Schnauzer'
                 },
                 {
                   value: '632',
                   text: 'Setters'
                 },
                 {
                   value: '772',
                   text: 'Shar Pei'
                 },
                 {
                   value: '1970',
                   text: 'Shiba inu'
                 },
                 {
                   value: '773',
                   text: 'Shih Tzu'
                 },
                 {
                   value: '924',
                   text: 'Staffordshire'
                 },
                 {
                   value: '925',
                   text: 'Teckel'
                 },
                 {
                   value: '926',
                   text: 'Terranova'
                 },
                 {
                   value: '770',
                   text: 'Westy'
                 },
                 {
                   value: '633',
                   text: 'Yorkshire'
                 },
                 {
                   value: '634',
                   text: 'Otras razas'
                 },
                 {
                   value: '636',
                   text: 'Cruces de perros'
                 },
                 {
                   value: '1090',
                   text: 'Montas de perros'
                 },
                 {
                   value: '635',
                   text: 'Perreras'
                 },
                 {
                   value: '1180',
                   text: 'Accesorios y productos'
                 },
                 {
                   value: '1190',
                   text: 'Servicios para perros'
                 },
                 {
                   value: '637',
                   text: 'Gatos'
                 },
                 {
                   value: '2084',
                   text: 'Gatos'
                 },
                 {
                   value: '2085',
                   text: 'Cruces y mestizos de Gatos'
                 },
                 {
                   value: '2086',
                   text: 'Accesorios para Gatos'
                 },
                 {
                   value: '638',
                   text: 'Peces'
                 },
                 {
                   value: '639',
                   text: 'Caballos'
                 },
                 {
                   value: '754',
                   text: 'Caballos'
                 },
                 {
                   value: '753',
                   text: 'Yeguas'
                 },
                 {
                   value: '745',
                   text: 'Potros'
                 },
                 {
                   value: '752',
                   text: 'Ponys'
                 },
                 {
                   value: '751',
                   text: 'Mulas'
                 },
                 {
                   value: '749',
                   text: 'Burros'
                 },
                 {
                   value: '748',
                   text: 'Monturas'
                 },
                 {
                   value: '747',
                   text: 'Carruajes'
                 },
                 {
                   value: '746',
                   text: 'Van'
                 },
                 {
                   value: '743',
                   text: 'Transporte'
                 },
                 {
                   value: '744',
                   text: 'Otros'
                 },
                 {
                   value: '640',
                   text: 'Pájaros y aves'
                 },
                 {
                   value: '2087',
                   text: 'Pájaros y aves'
                 },
                 {
                   value: '2088',
                   text: 'Accesorios para pájaros'
                 },
                 {
                   value: '641',
                   text: 'Conejos'
                 },
                 {
                   value: '1140',
                   text: 'Hurones'
                 },
                 {
                   value: '1150',
                   text: 'Reptiles'
                 },
                 {
                   value: '1160',
                   text: 'Ganadería'
                 },
                 {
                   value: '1410',
                   text: 'Alimentacion animales'
                 },
                 {
                   value: '1420',
                   text: 'Cabras'
                 },
                 {
                   value: '1430',
                   text: 'Cerdos'
                 },
                 {
                   value: '1440',
                   text: 'Gallinas'
                 },
                 {
                   value: '1450',
                   text: 'Gallos'
                 },
                 {
                   value: '1460',
                   text: 'Ovejas'
                 },
                 {
                   value: '1470',
                   text: 'Patos'
                 },
                 {
                   value: '1480',
                   text: 'Vacas'
                 },
                 {
                   value: '1490',
                   text: 'Toros'
                 },
                 {
                   value: '1500',
                   text: 'Terneros'
                 },
                 {
                   value: '1510',
                   text: 'Otro ganado'
                 },
                 {
                   value: '642',
                   text: 'Otros animales'
                 },
                 {
                   value: '643',
                   text: 'Veterinarios'
                 },
                 {
                   value: '1600',
                   text: 'Mascotas perdidas'
                 },
                 {
                   value: '2064',
                   text: 'Comunidad'
                 },
                 {
                   value: '2068',
                   text: 'Compartir coche'
                 },
                 {
                   value: '2066',
                   text: 'Compartir Parking'
                 },
                 {
                   value: '2065',
                   text: 'Coworking'
                 },
                 {
                   value: '2069',
                   text: 'Intercambio de idiomas'
                 },
                 {
                   value: '2071',
                   text: 'Intercambio de vacaciones'
                 },
                 {
                   value: '2070',
                   text: 'Retornos mercancías'
                 },
                 {
                   value: '2067',
                   text: 'Trueque'
                 },
                 {
                   value: '133',
                   text: 'Compartir piso'
                 }
               ])
             },

             {
               id: 'province',
               type: 'picker',
               label: 'Provincia',
               hint: 'Selecciona la provincia',
               value: '',
               datalist: uniqueArray([
                 {
                   value: '',
                   text: 'Toda España'
                 },
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
               ])
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
             },
             {
               id: 'carMake',
               type: 'picker',
               display: 'filter',
               label: 'Marca',
               hint: 'Selecciona una marca',
               disabled: true,
               hidden: true,
               value: '',
               datalist: uniqueArray([
                 {
                   value: '',
                   text: 'Todas las marcas'
                 },
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
               ])
             },
             {
               id: 'carModel',
               type: 'picker',
               display: 'filter',
               label: 'Modelo',
               hint: 'Selecciona modelo',
               disabled: true,
               hidden: true
             },
             {
               id: 'motorbikeMake',
               type: 'picker',
               display: 'filter',
               label: 'Marca',
               hint: 'Selecciona una marca',
               disabled: true,
               hidden: true,
               value: '',
               datalist: uniqueArray([
                 {
                   value: '',
                   text: 'Todas las marcas'
                 },
                 {
                   value: '2085',
                   text: 'ADIVA'
                 },
                 {
                   value: '1200',
                   text: 'ADLY'
                 },
                 {
                   value: '1714',
                   text: 'AEON'
                 },
                 {
                   value: '1719',
                   text: 'AIE'
                 },
                 {
                   value: '2009',
                   text: 'AIYUMO'
                 },
                 {
                   value: '1998',
                   text: 'AJP'
                 },
                 {
                   value: '51',
                   text: 'ALFER'
                 },
                 {
                   value: '2027',
                   text: 'ALPINA RENANIA'
                 },
                 {
                   value: '2174',
                   text: 'AMERICAN IRONHORSE'
                 },
                 {
                   value: '2179',
                   text: 'APACHE'
                 },
                 {
                   value: '2334',
                   text: 'APOLLO ORION'
                 },
                 {
                   value: '52',
                   text: 'APRILIA'
                 },
                 {
                   value: '2019',
                   text: 'ARCTIC CAT'
                 },
                 {
                   value: '2361',
                   text: 'ASIAWING'
                 },
                 {
                   value: '2349',
                   text: 'ASKOLL'
                 },
                 {
                   value: '2336',
                   text: 'ASTOR'
                 },
                 {
                   value: '53',
                   text: 'ATALA'
                 },
                 {
                   value: '2184',
                   text: 'AX ROAD'
                 },
                 {
                   value: '1999',
                   text: 'AZEL'
                 },
                 {
                   value: '54',
                   text: 'BAJAJ'
                 },
                 {
                   value: '2258',
                   text: 'BAOTIAN'
                 },
                 {
                   value: '2185',
                   text: 'BAROSSA'
                 },
                 {
                   value: '2281',
                   text: 'BATERY'
                 },
                 {
                   value: '55',
                   text: 'BENELLI'
                 },
                 {
                   value: '2223',
                   text: 'BERECO'
                 },
                 {
                   value: '56',
                   text: 'BETA'
                 },
                 {
                   value: '2175',
                   text: 'BIG DOG'
                 },
                 {
                   value: '57',
                   text: 'BIMOTA'
                 },
                 {
                   value: '7',
                   text: 'BMW'
                 },
                 {
                   value: '2173',
                   text: 'BOSS HOSS'
                 },
                 {
                   value: '2320',
                   text: 'BRAMMO'
                 },
                 {
                   value: '2351',
                   text: 'BRIXTON'
                 },
                 {
                   value: '2277',
                   text: 'BRP'
                 },
                 {
                   value: '2290',
                   text: 'BSG ELECTRICS'
                 },
                 {
                   value: '2283',
                   text: 'BTM'
                 },
                 {
                   value: '2266',
                   text: 'BUCCIMOTO'
                 },
                 {
                   value: '2010',
                   text: 'BUELL'
                 },
                 {
                   value: '59',
                   text: 'BULTACO'
                 },
                 {
                   value: '124',
                   text: 'BUNKER TRIKE'
                 },
                 {
                   value: '60',
                   text: 'CAGIVA'
                 },
                 {
                   value: '2253',
                   text: 'CAN-AM'
                 },
                 {
                   value: '2186',
                   text: 'CANNONDALE'
                 },
                 {
                   value: '2339',
                   text: 'CANYON'
                 },
                 {
                   value: '2232',
                   text: 'CBK'
                 },
                 {
                   value: '2285',
                   text: 'CFMOTO'
                 },
                 {
                   value: '2221',
                   text: 'CHOPPER NATION'
                 },
                 {
                   value: '2143',
                   text: 'CLARAXAVI'
                 },
                 {
                   value: '276',
                   text: 'CLIPIC'
                 },
                 {
                   value: '2064',
                   text: 'COOLTRA'
                 },
                 {
                   value: '2028',
                   text: 'CPI'
                 },
                 {
                   value: '2000',
                   text: 'CSR'
                 },
                 {
                   value: '61',
                   text: 'DAELIM'
                 },
                 {
                   value: '2243',
                   text: 'DAK'
                 },
                 {
                   value: '2262',
                   text: 'DAMAS'
                 },
                 {
                   value: '2249',
                   text: 'DAYUN'
                 },
                 {
                   value: '62',
                   text: 'DERBI'
                 },
                 {
                   value: '2111',
                   text: 'DH HAOTIAN'
                 },
                 {
                   value: '2239',
                   text: 'DI BLASI'
                 },
                 {
                   value: '2183',
                   text: 'DINO'
                 },
                 {
                   value: '2350',
                   text: 'DOBO'
                 },
                 {
                   value: '2011',
                   text: 'DORTON'
                 },
                 {
                   value: '2260',
                   text: 'DRAGON TT'
                 },
                 {
                   value: '63',
                   text: 'DUCATI'
                 },
                 {
                   value: '2241',
                   text: 'E-MAX'
                 },
                 {
                   value: '271',
                   text: 'E-TON'
                 },
                 {
                   value: '2246',
                   text: 'EASY TRIKE  '
                 },
                 {
                   value: '2365',
                   text: 'EBROH'
                 },
                 {
                   value: '2358',
                   text: 'EFUN'
                 },
                 {
                   value: '2299',
                   text: 'ELECTRIC CITY MOTOR 00'
                 },
                 {
                   value: '2310',
                   text: 'ELMOTO'
                 },
                 {
                   value: '2160',
                   text: 'EMF'
                 },
                 {
                   value: '2278',
                   text: 'EMOCYCLES'
                 },
                 {
                   value: '2330',
                   text: 'ENERGICA'
                 },
                 {
                   value: '278',
                   text: 'EXPLORER'
                 },
                 {
                   value: '64',
                   text: 'FACTORY BIKE'
                 },
                 {
                   value: '2306',
                   text: 'FALCÓN'
                 },
                 {
                   value: '175',
                   text: 'FANTIC'
                 },
                 {
                   value: '2178',
                   text: 'FARSPEED'
                 },
                 {
                   value: '2359',
                   text: 'FAURO'
                 },
                 {
                   value: '2228',
                   text: 'FAXON'
                 },
                 {
                   value: '2001',
                   text: 'FAZTEK'
                 },
                 {
                   value: '1980',
                   text: 'FB MONDIAL'
                 },
                 {
                   value: '2316',
                   text: 'FRC'
                 },
                 {
                   value: '2270',
                   text: 'GARELLI'
                 },
                 {
                   value: '65',
                   text: 'GAS GAS'
                 },
                 {
                   value: '2123',
                   text: 'GENERIC'
                 },
                 {
                   value: '66',
                   text: 'GILERA'
                 },
                 {
                   value: '2225',
                   text: 'GOELIX'
                 },
                 {
                   value: '2002',
                   text: 'GOES'
                 },
                 {
                   value: '2250',
                   text: 'GOVECS'
                 },
                 {
                   value: '2275',
                   text: 'GOWINN'
                 },
                 {
                   value: '2012',
                   text: 'HAMMEL'
                 },
                 {
                   value: '2318',
                   text: 'HANWAY'
                 },
                 {
                   value: '67',
                   text: 'HARLEY DAVIDSON'
                 },
                 {
                   value: '2264',
                   text: 'HARTFORD'
                 },
                 {
                   value: '2273',
                   text: 'HELECTRA'
                 },
                 {
                   value: '2291',
                   text: 'HERON'
                 },
                 {
                   value: '68',
                   text: 'HM'
                 },
                 {
                   value: '69',
                   text: 'HONDA'
                 },
                 {
                   value: '2003',
                   text: 'HRD'
                 },
                 {
                   value: '2282',
                   text: 'HSUN'
                 },
                 {
                   value: '2082',
                   text: 'HUATIAN'
                 },
                 {
                   value: '2340',
                   text: 'HUDSON BOSS'
                 },
                 {
                   value: '70',
                   text: 'HUSABERG'
                 },
                 {
                   value: '71',
                   text: 'HUSQVARNA'
                 },
                 {
                   value: '72',
                   text: 'HYOSUNG'
                 },
                 {
                   value: '2084',
                   text: 'I-MOTO'
                 },
                 {
                   value: '2261',
                   text: 'IMAX'
                 },
                 {
                   value: '2110',
                   text: 'IMR'
                 },
                 {
                   value: '2108',
                   text: 'INDIAN'
                 },
                 {
                   value: '2268',
                   text: 'INFMOTO'
                 },
                 {
                   value: '2328',
                   text: 'INNOCENTI'
                 },
                 {
                   value: '74',
                   text: 'ITALJET'
                 },
                 {
                   value: '2188',
                   text: 'JIANSHE'
                 },
                 {
                   value: '2231',
                   text: 'JIN LUN'
                 },
                 {
                   value: '1471',
                   text: 'JINCHENG'
                 },
                 {
                   value: '2363',
                   text: 'JNEN'
                 },
                 {
                   value: '2140',
                   text: 'JONWAY'
                 },
                 {
                   value: '2295',
                   text: 'JTG'
                 },
                 {
                   value: '2272',
                   text: 'JTS'
                 },
                 {
                   value: '2182',
                   text: 'KANGXIN'
                 },
                 {
                   value: '2189',
                   text: 'KASEA'
                 },
                 {
                   value: '75',
                   text: 'KAWASAKI'
                 },
                 {
                   value: '2190',
                   text: 'KAZUMA'
                 },
                 {
                   value: '1971',
                   text: 'KEEWAY'
                 },
                 {
                   value: '2004',
                   text: 'KENROD'
                 },
                 {
                   value: '2038',
                   text: 'KINROAD'
                 },
                 {
                   value: '2321',
                   text: 'KSR MOTO'
                 },
                 {
                   value: '76',
                   text: 'KTM'
                 },
                 {
                   value: '2300',
                   text: 'KUBERG'
                 },
                 {
                   value: '77',
                   text: 'KYMCO'
                 },
                 {
                   value: '196',
                   text: 'LAMBRETTA'
                 },
                 {
                   value: '2235',
                   text: 'LAMURATTI'
                 },
                 {
                   value: '1991',
                   text: 'LANVERTTI'
                 },
                 {
                   value: '2233',
                   text: 'LAUGE JENSEN'
                 },
                 {
                   value: '2297',
                   text: 'LECTRIC'
                 },
                 {
                   value: '2191',
                   text: 'LEM'
                 },
                 {
                   value: '2293',
                   text: 'LEMEV'
                 },
                 {
                   value: '2014',
                   text: 'LEONART'
                 },
                 {
                   value: '2366',
                   text: 'LEXMOTO'
                 },
                 {
                   value: '1497',
                   text: 'LIFAN'
                 },
                 {
                   value: '2086',
                   text: 'LING BEN'
                 },
                 {
                   value: '279',
                   text: 'LINHAI'
                 },
                 {
                   value: '2242',
                   text: 'LML'
                 },
                 {
                   value: '1997',
                   text: 'LUBE'
                 },
                 {
                   value: '1713',
                   text: 'MACBOR'
                 },
                 {
                   value: '78',
                   text: 'MALAGUTI'
                 },
                 {
                   value: '2023',
                   text: 'MASAI'
                 },
                 {
                   value: '2325',
                   text: 'MASH'
                 },
                 {
                   value: '79',
                   text: 'MBK'
                 },
                 {
                   value: '253',
                   text: 'MECATECNO'
                 },
                 {
                   value: '2135',
                   text: 'MEGELLI'
                 },
                 {
                   value: '1973',
                   text: 'MEKO'
                 },
                 {
                   value: '232',
                   text: 'MERLIN'
                 },
                 {
                   value: '2136',
                   text: 'METRAKIT'
                 },
                 {
                   value: '2344',
                   text: 'MH MOTORCYCLES'
                 },
                 {
                   value: '2015',
                   text: 'MINELLI'
                 },
                 {
                   value: '2360',
                   text: 'MITT'
                 },
                 {
                   value: '1963',
                   text: 'MOBILETTE'
                 },
                 {
                   value: '2005',
                   text: 'MONKEY BIKE'
                 },
                 {
                   value: '2287',
                   text: 'MONSTER PRO'
                 },
                 {
                   value: '2167',
                   text: 'MONTEROSSO'
                 },
                 {
                   value: '80',
                   text: 'MONTESA'
                 },
                 {
                   value: '2303',
                   text: 'MORIWAKI'
                 },
                 {
                   value: '2224',
                   text: 'MOTIVAS'
                 },
                 {
                   value: '82',
                   text: 'MOTO GUZZI'
                 },
                 {
                   value: '151',
                   text: 'MOTO MORINI'
                 },
                 {
                   value: '81',
                   text: 'MOTOGAC'
                 },
                 {
                   value: '83',
                   text: 'MOTOR HISPANIA'
                 },
                 {
                   value: '2036',
                   text: 'MOTOR MANIA'
                 },
                 {
                   value: '2222',
                   text: 'MOTORS WATTS'
                 },
                 {
                   value: '2171',
                   text: 'MTM'
                 },
                 {
                   value: '2006',
                   text: 'MTR'
                 },
                 {
                   value: '254',
                   text: 'MUZ'
                 },
                 {
                   value: '84',
                   text: 'MV AGUSTA'
                 },
                 {
                   value: '2113',
                   text: 'MXONDA'
                 },
                 {
                   value: '2276',
                   text: 'NECO'
                 },
                 {
                   value: '2307',
                   text: 'NIMOTO'
                 },
                 {
                   value: '2354',
                   text: 'NIU '
                 },
                 {
                   value: '225',
                   text: 'NORTON'
                 },
                 {
                   value: '2337',
                   text: 'ORCAL'
                 },
                 {
                   value: '2093',
                   text: 'ORION'
                 },
                 {
                   value: '2230',
                   text: 'OSET'
                 },
                 {
                   value: '197',
                   text: 'OSSA'
                 },
                 {
                   value: '2120',
                   text: 'PEDA'
                 },
                 {
                   value: '33',
                   text: 'PEUGEOT'
                 },
                 {
                   value: '86',
                   text: 'PGO'
                 },
                 {
                   value: '87',
                   text: 'PIAGGIO'
                 },
                 {
                   value: '2227',
                   text: 'POLINI'
                 },
                 {
                   value: '1244',
                   text: 'PUCH'
                 },
                 {
                   value: '1233',
                   text: 'QINGQI'
                 },
                 {
                   value: '2289',
                   text: 'QUADRO'
                 },
                 {
                   value: '2259',
                   text: 'QUANTYA'
                 },
                 {
                   value: '2355',
                   text: 'QUAZZAR'
                 },
                 {
                   value: '2245',
                   text: 'RAV'
                 },
                 {
                   value: '2333',
                   text: 'RAYCOOL ELECTRIC'
                 },
                 {
                   value: '2153',
                   text: 'RAYDAN'
                 },
                 {
                   value: '2317',
                   text: 'RCP'
                 },
                 {
                   value: '2248',
                   text: 'REBEL'
                 },
                 {
                   value: '2265',
                   text: 'REGAL RAPTOR'
                 },
                 {
                   value: '35',
                   text: 'RENAULT'
                 },
                 {
                   value: '2165',
                   text: 'RETTO'
                 },
                 {
                   value: '2251',
                   text: 'REWACO'
                 },
                 {
                   value: '2257',
                   text: 'RIDLEY MOTORCYCLES'
                 },
                 {
                   value: '88',
                   text: 'RIEJU'
                 },
                 {
                   value: '2356',
                   text: 'RIEJU NUUK'
                 },
                 {
                   value: '2329',
                   text: 'RIYA'
                 },
                 {
                   value: '2263',
                   text: 'ROAN'
                 },
                 {
                   value: '2322',
                   text: 'ROKETA BIKE'
                 },
                 {
                   value: '2323',
                   text: 'ROKETA MOTO'
                 },
                 {
                   value: '2346',
                   text: 'ROMET'
                 },
                 {
                   value: '2362',
                   text: 'ROYAL ALLOY'
                 },
                 {
                   value: '90',
                   text: 'ROYAL ENFIELD'
                 },
                 {
                   value: '2007',
                   text: 'RSX'
                 },
                 {
                   value: '2008',
                   text: 'SACHS BIKES'
                 },
                 {
                   value: '2155',
                   text: 'SAMADA'
                 },
                 {
                   value: '2364',
                   text: 'SANBEN'
                 },
                 {
                   value: '2229',
                   text: 'SAXON'
                 },
                 {
                   value: '2327',
                   text: 'SCOMADI'
                 },
                 {
                   value: '91',
                   text: 'SCORPA'
                 },
                 {
                   value: '2314',
                   text: 'SCUTUM'
                 },
                 {
                   value: '2236',
                   text: 'SENKE'
                 },
                 {
                   value: '2348',
                   text: 'SETTER'
                 },
                 {
                   value: '1993',
                   text: 'SHERCO'
                 },
                 {
                   value: '2332',
                   text: 'SHERPA'
                 },
                 {
                   value: '2168',
                   text: 'SHINERAY'
                 },
                 {
                   value: '93',
                   text: 'SIAM'
                 },
                 {
                   value: '2288',
                   text: 'SINCRO'
                 },
                 {
                   value: '2315',
                   text: 'SINGAZ'
                 },
                 {
                   value: '2352',
                   text: 'SKYTEAM'
                 },
                 {
                   value: '2025',
                   text: 'SUMCO'
                 },
                 {
                   value: '1248',
                   text: 'SUMO'
                 },
                 {
                   value: '44',
                   text: 'SUZUKI'
                 },
                 {
                   value: '2353',
                   text: 'SWM'
                 },
                 {
                   value: '95',
                   text: 'SYM'
                 },
                 {
                   value: '2053',
                   text: 'TBQ'
                 },
                 {
                   value: '199',
                   text: 'TGB'
                 },
                 {
                   value: '2177',
                   text: 'THUNDER MOUNTAIN'
                 },
                 {
                   value: '96',
                   text: 'TM'
                 },
                 {
                   value: '2335',
                   text: 'TNT'
                 },
                 {
                   value: '2338',
                   text: 'TORROT'
                 },
                 {
                   value: '2124',
                   text: 'TRAKKER'
                 },
                 {
                   value: '97',
                   text: 'TRIUMPH'
                 },
                 {
                   value: '2331',
                   text: 'TRS MOTORCYCLES'
                 },
                 {
                   value: '2292',
                   text: 'TURBHO'
                 },
                 {
                   value: '2267',
                   text: 'ULTRA MOTOR '
                 },
                 {
                   value: '2347',
                   text: 'UM'
                 },
                 {
                   value: '2029',
                   text: 'UNIVERSAL MOTOR'
                 },
                 {
                   value: '2280',
                   text: 'UNORACING'
                 },
                 {
                   value: '2154',
                   text: 'URAL'
                 },
                 {
                   value: '2141',
                   text: 'VECTRIX'
                 },
                 {
                   value: '2345',
                   text: 'VELIMOTOR'
                 },
                 {
                   value: '2341',
                   text: 'VERTIGO'
                 },
                 {
                   value: '99',
                   text: 'VESPA'
                 },
                 {
                   value: '1994',
                   text: 'VESPINO'
                 },
                 {
                   value: '2226',
                   text: 'VIA SCOOTER'
                 },
                 {
                   value: '2017',
                   text: 'VICTORY'
                 },
                 {
                   value: '2254',
                   text: 'VIGAR'
                 },
                 {
                   value: '2026',
                   text: 'VIKERS'
                 },
                 {
                   value: '2294',
                   text: 'VMOTO'
                 },
                 {
                   value: '2343',
                   text: 'VOLTA MOTORBIKES'
                 },
                 {
                   value: '100',
                   text: 'VOR'
                 },
                 {
                   value: '2018',
                   text: 'VOXAN'
                 },
                 {
                   value: '2237',
                   text: 'VYRUS'
                 },
                 {
                   value: '2220',
                   text: 'WENLING'
                 },
                 {
                   value: '1737',
                   text: 'WILDLANDER'
                 },
                 {
                   value: '2305',
                   text: 'WK'
                 },
                 {
                   value: '2271',
                   text: 'WOTTAN'
                 },
                 {
                   value: '2274',
                   text: 'XERO'
                 },
                 {
                   value: '2169',
                   text: 'XINGYUE'
                 },
                 {
                   value: '2255',
                   text: 'XISPA'
                 },
                 {
                   value: '2218',
                   text: 'XMOTOS'
                 },
                 {
                   value: '2269',
                   text: 'XPA'
                 },
                 {
                   value: '101',
                   text: 'YAMAHA'
                 },
                 {
                   value: '2279',
                   text: 'YCF'
                 },
                 {
                   value: '2051',
                   text: 'YIYING'
                 },
                 {
                   value: '2170',
                   text: 'YMR'
                 },
                 {
                   value: '2304',
                   text: 'YOUNG RIDER'
                 },
                 {
                   value: '123',
                   text: 'ZELTECH'
                 },
                 {
                   value: '2234',
                   text: 'ZERO'
                 },
                 {
                   value: '2252',
                   text: 'ZERO MOTORCYCLES'
                 },
                 {
                   value: '2319',
                   text: 'ZMS MOTORS'
                 },
                 {
                   value: '2176',
                   text: 'ZNEN'
                 },
                 {
                   value: '2166',
                   text: 'ZONGSHEN'
                 },
                 {
                   value: '2357',
                   text: 'ZONTES'
                 },
                 {
                   value: '2302',
                   text: 'ZUAP'
                 }
               ])
             },
             {
               id: 'motorbikeModel',
               type: 'picker',
               display: 'filter',
               label: 'Modelo',
               hint: 'Selecciona modelo',
               disabled: true,
               hidden: true
             },
             {
               id: 'preciod',
               type: 'numeric',
               display: 'money',
               label: 'Precio desde',
               constraints: [
                 {
                   property: {
                     max: '999999999'
                   },
                   message: 'El precio debe ser inferior a 1.000.000.000'
                 }
               ]
             },
             {
               id: 'precioh',
               type: 'numeric',
               display: 'money',
               label: 'Precio hasta',
               constraints: [
                 {
                   property: {
                     max: '999999999'
                   },
                   message: 'El precio debe ser inferior a 1.000.000.000'
                 }
               ]
             },
             {
               id: 'anod',
               type: 'picker',
               label: 'Año desde',
               hint: 'Selecciona desde qué año',
               value: '',
               hidden: true,
               disabled: true,
               datalist: uniqueArray([
                 {
                   value: '',
                   text: 'Indiferente'
                 },
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
                   value: '1985',
                   text: '1985'
                 },
                 {
                   value: '1980',
                   text: '1980'
                 },
                 {
                   value: '1970',
                   text: '1970'
                 },
                 {
                   value: '1960',
                   text: '1960'
                 },
                 {
                   value: '1950',
                   text: '1950'
                 },
                 {
                   value: '1940',
                   text: '1940'
                 },
                 {
                   value: '1930',
                   text: '1930'
                 },
                 {
                   value: '1920',
                   text: '1920'
                 },
                 {
                   value: '1910',
                   text: '1910'
                 },
                 {
                   value: '1900',
                   text: '1900'
                 }
               ])
             },
             {
               id: 'anoh',
               type: 'picker',
               label: 'Año hasta',
               hint: 'Selecciona hasta qué año',
               value: '',
               hidden: true,
               disabled: true,
               datalist: uniqueArray([
                 {
                   value: '',
                   text: 'Indiferente'
                 },
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
                   value: '1985',
                   text: '1985'
                 },
                 {
                   value: '1980',
                   text: '1980'
                 },
                 {
                   value: '1970',
                   text: '1970'
                 },
                 {
                   value: '1960',
                   text: '1960'
                 },
                 {
                   value: '1950',
                   text: '1950'
                 },
                 {
                   value: '1940',
                   text: '1940'
                 },
                 {
                   value: '1930',
                   text: '1930'
                 },
                 {
                   value: '1920',
                   text: '1920'
                 },
                 {
                   value: '1910',
                   text: '1910'
                 },
                 {
                   value: '1900',
                   text: '1900'
                 }
               ])
             },
             {
               id: 'combustible',
               type: 'picker',
               label: 'Combustible',
               hint: 'Tipo de combustible',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: 'gasolina',
                   text: 'gasolina'
                 },
                 {
                   value: 'diesel',
                   text: 'diesel'
                 },
                 {
                   value: 'eléctrico',
                   text: 'eléctrico'
                 },
                 {
                   value: 'híbrido',
                   text: 'híbrido'
                 },
                 {
                   value: 'GLP',
                   text: 'GLP'
                 },
                 {
                   value: 'Otro',
                   text: 'otro'
                 }
               ]
             },
             {
               id: 'demanda',
               type: 'picker',
               display: 'button-inline',
               label: 'Tipo de anuncio',
               value: '',
               hidden: false,
               disabled: false,
               datalist: [
                 {
                   value: '',
                   text: 'Todos'
                 },
                 {
                   value: 'n',
                   text: 'Oferta'
                 },
                 {
                   value: 's',
                   text: 'Demanda'
                 }
               ]
             },
             {
               id: 'vendedor',
               type: 'picker',
               display: 'button-inline',
               label: 'Tipo de vendedor',
               value: '',
               datalist: [
                 {
                   value: '',
                   text: 'Todos'
                 },
                 {
                   value: 'part',
                   text: 'Particular'
                 },
                 {
                   value: 'prof',
                   text: 'Profesional'
                 }
               ]
             },
             {
               id: 'kms',
               type: 'picker',
               label: 'Kilometros',
               hint: 'Selecciona los kilómetros',
               value: '',
               hidden: true,
               disabled: true,
               datalist: uniqueArray([
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '5000',
                   text: 'hasta 5.000'
                 },
                 {
                   value: '10000',
                   text: 'hasta 10.000'
                 },
                 {
                   value: '20000',
                   text: 'hasta 20.000'
                 },
                 {
                   value: '30000',
                   text: 'hasta 30.000'
                 },
                 {
                   value: '40000',
                   text: 'hasta 40.000'
                 },
                 {
                   value: '60000',
                   text: 'hasta 60.000'
                 },
                 {
                   value: '80000',
                   text: 'hasta 80.000'
                 },
                 {
                   value: '100000',
                   text: 'hasta 100.000'
                 },
                 {
                   value: '120000',
                   text: 'hasta 120.000'
                 },
                 {
                   value: '140000',
                   text: 'hasta 140.000'
                 },
                 {
                   value: '160000',
                   text: 'hasta 160.000'
                 },
                 {
                   value: '180000',
                   text: 'hasta 180.000'
                 },
                 {
                   value: '200000',
                   text: 'hasta 200.000'
                 },
                 {
                   value: '250000',
                   text: 'hasta 250.000'
                 },
                 {
                   value: '500000',
                   text: 'hasta 500.000'
                 },
                 {
                   value: '750000',
                   text: 'hasta 750.000'
                 },
                 {
                   value: '1000000',
                   text: 'hasta 1.000.000'
                 },
                 {
                   value: '1250000',
                   text: 'hasta 1.250.000'
                 },
                 {
                   value: '1500000',
                   text: 'hasta 1.500.000'
                 },
                 {
                   value: '2000000',
                   text: 'hasta 2.000.000'
                 },
                 {
                   value: '2500000',
                   text: 'hasta 2.500.000'
                 },
                 {
                   value: '2500000',
                   text: 'hasta 2.500.000'
                 }
               ])
             },
             {
               id: 'cajacambio',
               type: 'picker',
               display: 'button-inline',
               label: 'Cambio',
               hint: 'Qué tipo de cambio de marchas',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Todos'
                 },
                 {
                   value: 'manual',
                   text: 'Manual'
                 },
                 {
                   value: 'automatico',
                   text: 'Automático'
                 }
               ]
             },
             {
               id: 'potencia',
               type: 'picker',
               label: 'Potencia',
               hint: 'Selecciona la potencia del vehículo',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '100',
                   text: 'menos de 100CV'
                 },
                 {
                   value: '150',
                   text: 'entre 100 y 150CV'
                 },
                 {
                   value: '200',
                   text: 'entre 150 y 200CV'
                 },
                 {
                   value: '250',
                   text: 'entre 200 y 250CV'
                 },
                 {
                   value: '300',
                   text: 'entre 250 y 300CV'
                 },
                 {
                   value: '400',
                   text: 'más de 300 CV'
                 }
               ]
             },
             {
               id: 'ccd',
               type: 'picker',
               label: 'CC desde',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '49',
                   text: '49 cc'
                 },
                 {
                   value: '50',
                   text: '50 cc'
                 },
                 {
                   value: '125',
                   text: '125 cc'
                 },
                 {
                   value: '250',
                   text: '250 cc'
                 },
                 {
                   value: '500',
                   text: '500 cc'
                 },
                 {
                   value: '600',
                   text: '600 cc'
                 },
                 {
                   value: '800',
                   text: '800 cc'
                 },
                 {
                   value: '1000',
                   text: '1000 cc'
                 },
                 {
                   value: '1200',
                   text: '1200 cc'
                 }
               ]
             },
             {
               id: 'cch',
               type: 'picker',
               label: 'CC hasta',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '49',
                   text: '49 cc'
                 },
                 {
                   value: '50',
                   text: '50 cc'
                 },
                 {
                   value: '125',
                   text: '125 cc'
                 },
                 {
                   value: '250',
                   text: '250 cc'
                 },
                 {
                   value: '500',
                   text: '500 cc'
                 },
                 {
                   value: '600',
                   text: '600 cc'
                 },
                 {
                   value: '800',
                   text: '800 cc'
                 },
                 {
                   value: '1000',
                   text: '1000 cc'
                 },
                 {
                   value: '1200',
                   text: '1200 cc'
                 }
               ]
             },
             {
               id: 'numpuertas',
               type: 'picker',
               display: 'button-inline',
               label: 'Número de puertas',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Todas'
                 },
                 {
                   value: '2',
                   text: '2'
                 },
                 {
                   value: '3',
                   text: '3'
                 },
                 {
                   value: '4',
                   text: '4'
                 },
                 {
                   value: '5',
                   text: '5'
                 }
               ]
             },
             {
               id: 'color',
               type: 'picker',
               label: 'Color',
               hint: 'Selecciona el color',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: 'negr',
                   text: 'Negro'
                 },
                 {
                   value: 'bla',
                   text: 'Blanco'
                 },
                 {
                   value: 'gri',
                   text: 'Gris'
                 },
                 {
                   value: 'azul',
                   text: 'Azul'
                 },
                 {
                   value: 'roj',
                   text: 'Rojo'
                 },
                 {
                   value: 'plat',
                   text: 'Plata'
                 },
                 {
                   value: 'verde',
                   text: 'Verde'
                 }
               ]
             },
             {
               id: 'work_hours',
               type: 'picker',
               label: 'Horas de trabajo',
               hint: 'Selecciona el número de horas',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '100',
                   text: 'hasta 100'
                 },
                 {
                   value: '500',
                   text: 'hasta 500'
                 },
                 {
                   value: '1000',
                   text: 'hasta 1.000'
                 },
                 {
                   value: '2000',
                   text: 'hasta 2.000'
                 },
                 {
                   value: '5000',
                   text: 'hasta 5.000'
                 },
                 {
                   value: '8000',
                   text: 'hasta 8.000'
                 },
                 {
                   value: '10000',
                   text: 'hasta 10.000'
                 },
                 {
                   value: '15000',
                   text: 'hasta 15.000'
                 },
                 {
                   value: '20000',
                   text: 'hasta 20.000'
                 },
                 {
                   value: '40000',
                   text: 'hasta 40.000'
                 },
                 {
                   value: '60000',
                   text: 'hasta 60.000'
                 },
                 {
                   value: '80000',
                   text: 'hasta 80.000'
                 },
                 {
                   value: '100000',
                   text: 'hasta 100.000'
                 },
                 {
                   value: '250000',
                   text: 'hasta 250.000'
                 }
               ]
             },
             {
               id: 'eslorah',
               type: 'picker',
               label: 'Eslora',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '0',
                   text: '0 metros'
                 },
                 {
                   value: '2',
                   text: '2 metros'
                 },
                 {
                   value: '3',
                   text: '3 metros'
                 },
                 {
                   value: '4',
                   text: '4 metros'
                 },
                 {
                   value: '5',
                   text: '5 metros'
                 },
                 {
                   value: '6',
                   text: '6 metros'
                 },
                 {
                   value: '7',
                   text: '7 metros'
                 },
                 {
                   value: '8',
                   text: '8 metros'
                 },
                 {
                   value: '9',
                   text: '9 metros'
                 },
                 {
                   value: '10',
                   text: '10 metros'
                 },
                 {
                   value: '11',
                   text: '11 metros'
                 },
                 {
                   value: '12',
                   text: '12 metros'
                 },
                 {
                   value: '14',
                   text: '14 metros'
                 },
                 {
                   value: '15',
                   text: '15 metros'
                 },
                 {
                   value: '16',
                   text: '16 metros'
                 },
                 {
                   value: '17',
                   text: '17 metros'
                 },
                 {
                   value: '18',
                   text: '18 metros'
                 },
                 {
                   value: '19',
                   text: '19 metros'
                 },
                 {
                   value: '20',
                   text: '20 metros'
                 },
                 {
                   value: '25',
                   text: '25 metros'
                 },
                 {
                   value: '30',
                   text: '30 metros'
                 },
                 {
                   value: '35',
                   text: '35 metros'
                 },
                 {
                   value: '40',
                   text: '40 metros'
                 }
               ]
             },
             {
               id: 'dormd',
               type: 'picker',
               label: 'Dormitorios desde',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '0',
                   text: '0'
                 },
                 {
                   value: '1',
                   text: '1'
                 },
                 {
                   value: '2',
                   text: '2'
                 },
                 {
                   value: '3',
                   text: '3'
                 },
                 {
                   value: '4',
                   text: '4'
                 },
                 {
                   value: '5',
                   text: '5'
                 },
                 {
                   value: '6',
                   text: '6'
                 },
                 {
                   value: '7',
                   text: '7'
                 },
                 {
                   value: '8',
                   text: '8'
                 },
                 {
                   value: '9',
                   text: '9'
                 }
               ]
             },
             {
               id: 'dormh',
               type: 'picker',
               label: 'Dormitorios hasta',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '0',
                   text: '0'
                 },
                 {
                   value: '1',
                   text: '1'
                 },
                 {
                   value: '2',
                   text: '2'
                 },
                 {
                   value: '3',
                   text: '3'
                 },
                 {
                   value: '4',
                   text: '4'
                 },
                 {
                   value: '5',
                   text: '5'
                 },
                 {
                   value: '6',
                   text: '6'
                 },
                 {
                   value: '7',
                   text: '7'
                 },
                 {
                   value: '8',
                   text: '8'
                 },
                 {
                   value: '9',
                   text: '9'
                 }
               ]
             },
             {
               id: 'banosd',
               type: 'picker',
               label: 'Baños desde',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '0',
                   text: '0'
                 },
                 {
                   value: '1',
                   text: '1'
                 },
                 {
                   value: '2',
                   text: '2'
                 },
                 {
                   value: '3',
                   text: '3'
                 },
                 {
                   value: '4',
                   text: '4'
                 },
                 {
                   value: '5',
                   text: '5'
                 },
                 {
                   value: '6',
                   text: '6'
                 }
               ]
             },
             {
               id: 'banosh',
               type: 'picker',
               label: 'Baños hasta',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '0',
                   text: '0'
                 },
                 {
                   value: '1',
                   text: '1'
                 },
                 {
                   value: '2',
                   text: '2'
                 },
                 {
                   value: '3',
                   text: '3'
                 },
                 {
                   value: '4',
                   text: '4'
                 },
                 {
                   value: '5',
                   text: '5'
                 },
                 {
                   value: '6',
                   text: '6'
                 }
               ]
             },
             {
               id: 'm2d',
               type: 'picker',
               label: 'm2 desde',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '20',
                   text: '20'
                 },
                 {
                   value: '30',
                   text: '30'
                 },
                 {
                   value: '40',
                   text: '40'
                 },
                 {
                   value: '50',
                   text: '50'
                 },
                 {
                   value: '60',
                   text: '60'
                 },
                 {
                   value: '70',
                   text: '70'
                 },
                 {
                   value: '80',
                   text: '80'
                 },
                 {
                   value: '90',
                   text: '90'
                 },
                 {
                   value: '100',
                   text: '100'
                 },
                 {
                   value: '120',
                   text: '120'
                 },
                 {
                   value: '140',
                   text: '140'
                 },
                 {
                   value: '180',
                   text: '180'
                 },
                 {
                   value: '200',
                   text: '200'
                 },
                 {
                   value: '300',
                   text: '300'
                 },
                 {
                   value: '400',
                   text: '400'
                 },
                 {
                   value: '500',
                   text: '500'
                 },
                 {
                   value: '600',
                   text: '600'
                 },
                 {
                   value: '700',
                   text: '700'
                 }
               ]
             },
             {
               id: 'm2h',
               type: 'picker',
               label: 'm2 hasta',
               hint: 'Selecciona un valor',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '20',
                   text: '20'
                 },
                 {
                   value: '30',
                   text: '30'
                 },
                 {
                   value: '40',
                   text: '40'
                 },
                 {
                   value: '50',
                   text: '50'
                 },
                 {
                   value: '60',
                   text: '60'
                 },
                 {
                   value: '70',
                   text: '70'
                 },
                 {
                   value: '80',
                   text: '80'
                 },
                 {
                   value: '90',
                   text: '90'
                 },
                 {
                   value: '100',
                   text: '100'
                 },
                 {
                   value: '120',
                   text: '120'
                 },
                 {
                   value: '140',
                   text: '140'
                 },
                 {
                   value: '180',
                   text: '180'
                 },
                 {
                   value: '200',
                   text: '200'
                 },
                 {
                   value: '300',
                   text: '300'
                 },
                 {
                   value: '400',
                   text: '400'
                 },
                 {
                   value: '500',
                   text: '500'
                 },
                 {
                   value: '600',
                   text: '600'
                 },
                 {
                   value: '700',
                   text: '700'
                 }
               ]
             },
             {
               id: 'playa',
               type: 'picker',
               label: 'Playa',
               hint: 'A qué distancia de la playa está?',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '10',
                   text: 'a menos de 10 metros'
                 },
                 {
                   value: '50',
                   text: 'a menos de 50 metros'
                 },
                 {
                   value: '100',
                   text: 'a menos de 100 metros'
                 },
                 {
                   value: '200',
                   text: 'a menos de 200 metros'
                 },
                 {
                   value: '400',
                   text: 'a menos de 400 metros'
                 },
                 {
                   value: '800',
                   text: 'a menos de 800 metros'
                 },
                 {
                   value: '1000',
                   text: 'a menos de 1 km'
                 },
                 {
                   value: '5000',
                   text: 'a menos de 5 kms'
                 },
                 {
                   value: '10000',
                   text: 'a menos de 10 kms'
                 },
                 {
                   value: '50000',
                   text: 'a menos de 50 kms'
                 }
               ]
             },
             {
               id: 'tipog',
               type: 'picker',
               label: 'Garage',
               value: '',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: '',
                   text: 'Indiferente'
                 },
                 {
                   value: '0',
                   text: 'Para coche'
                 },
                 {
                   value: '1',
                   text: 'Para moto'
                 }
               ]
             },
             {
               id: 'ikea',
               type: 'picker',
               display: 'switch',
               label: 'Ver solo productos de ikea',
               hidden: true,
               disabled: true,
               datalist: [
                 {
                   value: 'true',
                   text: 'true'
                 },
                 {
                   value: 'false',
                   text: 'false'
                 }
               ]
             },
             {
               id: 'orden',
               type: 'picker',
               display: 'picker',
               label: 'Ordenar por',
               value: '',
               datalist: [
                 {
                   value: '',
                   text: 'Fecha'
                 },
                 {
                   value: 'baratos',
                   text: 'Más baratos'
                 },
                 {
                   value: 'caros',
                   text: 'Más caros'
                 }
               ]
             }
           ],
           rules: {
             nearprovinces: [
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
             municipality: [
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
             ],
             carMake: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['13', '15', '17', '18', '793', '61', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['13', '15', '17', '18', '793', '61', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             carModel: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['13', '15', '17', '18', '793', '61', '62']
                   },
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
                     operator: 'IN',
                     id: 'cat',
                     value: ['13', '15', '17', '18', '793', '61', '62']
                   },
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
                     operator: 'NIN',
                     id: 'cat',
                     value: ['13', '15', '17', '18', '793', '61', '62']
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
               }
             ],
             motorbikeMake: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             motorbikeModel: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   },
                   {
                     operator: 'IN',
                     id: 'motorbikeMake',
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
                     operator: 'IN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   },
                   {
                     operator: 'CHANGED',
                     id: 'motorbikeMake',
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
                     operator: 'NIN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
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
               }
             ],
             anod: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '13',
                       '15',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '17',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62',
                       '695',
                       '696',
                       '697',
                       '699',
                       '700',
                       '701',
                       '702',
                       '703',
                       '704'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '13',
                       '15',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '17',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62',
                       '695',
                       '696',
                       '697',
                       '699',
                       '700',
                       '701',
                       '702',
                       '703',
                       '704'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             anoh: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '13',
                       '15',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '17',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62',
                       '695',
                       '696',
                       '697',
                       '699',
                       '700',
                       '701',
                       '702',
                       '703',
                       '704'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '13',
                       '15',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '17',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62',
                       '695',
                       '696',
                       '697',
                       '699',
                       '700',
                       '701',
                       '702',
                       '703',
                       '704'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             preciod: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '950',
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '950',
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               }
             ],
             precioh: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '950',
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '950',
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               }
             ],
             eslorah: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '695',
                       '696',
                       '697',
                       '699',
                       '700',
                       '701',
                       '702',
                       '703',
                       '704'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '695',
                       '696',
                       '697',
                       '699',
                       '700',
                       '701',
                       '702',
                       '703',
                       '704'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             color: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '13',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '13',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             cajacambio: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['13']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['13']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             kms: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '13',
                       '15',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '17',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '13',
                       '15',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '17',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             combustible: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['13', '15', '64', '16', '61', '1340', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['13', '15', '64', '16', '61', '1340', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             potencia: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['13']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['13']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             numpuertas: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['13']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['13']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             ccd: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             cch: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['14', '930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             m2d: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '128',
                       '136',
                       '137',
                       '349',
                       '350',
                       '351',
                       '352',
                       '353',
                       '354',
                       '1350',
                       '355',
                       '356',
                       '357',
                       '358',
                       '359',
                       '361',
                       '362',
                       '363',
                       '364',
                       '365',
                       '366',
                       '367',
                       '368',
                       '369',
                       '370',
                       '371',
                       '129',
                       '146',
                       '147',
                       '130',
                       '148',
                       '149',
                       '1520',
                       '1530',
                       '1540',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '128',
                       '136',
                       '137',
                       '349',
                       '350',
                       '351',
                       '352',
                       '353',
                       '354',
                       '1350',
                       '355',
                       '356',
                       '357',
                       '358',
                       '359',
                       '361',
                       '362',
                       '363',
                       '364',
                       '365',
                       '366',
                       '367',
                       '368',
                       '369',
                       '370',
                       '371',
                       '129',
                       '146',
                       '147',
                       '130',
                       '148',
                       '149',
                       '150',
                       '151',
                       '154',
                       '155',
                       '152',
                       '153',
                       '1520',
                       '1530',
                       '1540',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['150', '151', '154', '155', '152', '153']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {
                         value: '',
                         text: 'Indiferente'
                       },
                       {
                         value: '10000',
                         text: '10.000m2 (1 ha)'
                       },
                       {
                         value: '20000',
                         text: '20.000m2 (2 ha)'
                       },
                       {
                         value: '40000',
                         text: '40.000m2 (4 ha)'
                       },
                       {
                         value: '80000',
                         text: '80.000m2 (8 ha)'
                       },
                       {
                         value: '160000',
                         text: '160.000m2 (16 ha)'
                       },
                       {
                         value: '300000',
                         text: '300.000m2 (30 ha)'
                       },
                       {
                         value: '500000',
                         text: '500.000m2 (50 ha)'
                       },
                       {
                         value: '1000000',
                         text: '1.000.000m2 (100 ha)'
                       },
                       {
                         value: '2000000',
                         text: '2.000.000m2 (200 ha)'
                       },
                       {
                         value: '4000000',
                         text: '4.000.000m2 (400 ha)'
                       },
                       {
                         value: '10000000',
                         text: '10.000.000m2 (1000 ha)'
                       }
                     ]
                   }
                 }
               }
             ],
             m2h: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '128',
                       '136',
                       '137',
                       '349',
                       '350',
                       '351',
                       '352',
                       '353',
                       '354',
                       '1350',
                       '355',
                       '356',
                       '357',
                       '358',
                       '359',
                       '361',
                       '362',
                       '363',
                       '364',
                       '365',
                       '366',
                       '367',
                       '368',
                       '369',
                       '370',
                       '371',
                       '129',
                       '146',
                       '147',
                       '130',
                       '148',
                       '149',
                       '1520',
                       '1530',
                       '1540',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '128',
                       '136',
                       '137',
                       '349',
                       '350',
                       '351',
                       '352',
                       '353',
                       '354',
                       '1350',
                       '355',
                       '356',
                       '357',
                       '358',
                       '359',
                       '361',
                       '362',
                       '363',
                       '364',
                       '365',
                       '366',
                       '367',
                       '368',
                       '369',
                       '370',
                       '371',
                       '129',
                       '146',
                       '147',
                       '130',
                       '148',
                       '149',
                       '150',
                       '151',
                       '154',
                       '155',
                       '152',
                       '153',
                       '1520',
                       '1530',
                       '1540',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['150', '151', '154', '155', '152', '153']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {
                         value: '',
                         text: 'Indiferente'
                       },
                       {
                         value: '10000',
                         text: '10.000m2 (1 ha)'
                       },
                       {
                         value: '20000',
                         text: '20.000m2 (2 ha)'
                       },
                       {
                         value: '40000',
                         text: '40.000m2 (4 ha)'
                       },
                       {
                         value: '80000',
                         text: '80.000m2 (8 ha)'
                       },
                       {
                         value: '160000',
                         text: '160.000m2 (16 ha)'
                       },
                       {
                         value: '300000',
                         text: '300.000m2 (30 ha)'
                       },
                       {
                         value: '500000',
                         text: '500.000m2 (50 ha)'
                       },
                       {
                         value: '1000000',
                         text: '1.000.000m2 (100 ha)'
                       },
                       {
                         value: '2000000',
                         text: '2.000.000m2 (200 ha)'
                       },
                       {
                         value: '4000000',
                         text: '4.000.000m2 (400 ha)'
                       },
                       {
                         value: '10000000',
                         text: '10.000.000m2 (1000 ha)'
                       }
                     ]
                   }
                 }
               }
             ],
             dormd: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             dormh: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             banosd: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             banosh: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             playa: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             tipog: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['160', '182', '183']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: ['160', '182', '183']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               }
             ],
             vendedor: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               }
             ],
             orden: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: ['58']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {
                         value: '',
                         text: 'fecha'
                       },
                       {
                         value: 'baratos',
                         text: 'Más baratos'
                       },
                       {
                         value: 'caros',
                         text: 'Más caros'
                       },
                       {
                         value: 'ano',
                         text: 'Más nuevos'
                       },
                       {
                         value: 'viejos',
                         text: 'Más antiguos'
                       },
                       {
                         value: 'kilometraje',
                         text: 'Horas de trabajo'
                       }
                     ]
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '695',
                       '696',
                       '697',
                       '699',
                       '700',
                       '701',
                       '702',
                       '703',
                       '704'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {
                         value: '',
                         text: 'fecha'
                       },
                       {
                         value: 'baratos',
                         text: 'Más baratos'
                       },
                       {
                         value: 'caros',
                         text: 'Más caros'
                       },
                       {
                         value: 'ano',
                         text: 'Más nuevos'
                       },
                       {
                         value: 'viejos',
                         text: 'Más antiguos'
                       },
                       {
                         value: 'eslora',
                         text: 'Eslora'
                       }
                     ]
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '13',
                       '15',
                       '64',
                       '14',
                       '930',
                       '22',
                       '23',
                       '24',
                       '25',
                       '16',
                       '17',
                       '18',
                       '793',
                       '61',
                       '1340',
                       '62'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {
                         value: '',
                         text: 'fecha'
                       },
                       {
                         value: 'baratos',
                         text: 'Más baratos'
                       },
                       {
                         value: 'caros',
                         text: 'Más caros'
                       },
                       {
                         value: 'ano',
                         text: 'Más nuevos'
                       },
                       {
                         value: 'viejos',
                         text: 'Más antiguos'
                       },
                       {
                         value: 'kilometraje',
                         text: 'Kilometraje'
                       }
                     ]
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '32',
                       '156',
                       '727',
                       '122',
                       '131',
                       '132',
                       '133',
                       '123',
                       '134',
                       '135',
                       '124',
                       '138',
                       '139',
                       '125',
                       '140',
                       '141',
                       '126',
                       '142',
                       '143',
                       '127',
                       '144',
                       '145',
                       '766',
                       '767',
                       '768',
                       '128',
                       '136',
                       '137',
                       '349',
                       '350',
                       '351',
                       '352',
                       '353',
                       '354',
                       '1350',
                       '355',
                       '356',
                       '357',
                       '358',
                       '359',
                       '361',
                       '362',
                       '363',
                       '364',
                       '365',
                       '366',
                       '367',
                       '368',
                       '369',
                       '370',
                       '371',
                       '129',
                       '146',
                       '147',
                       '130',
                       '148',
                       '149',
                       '1520',
                       '1530',
                       '1540',
                       '1360',
                       '1370',
                       '1380',
                       '1040'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {
                         value: '',
                         text: 'fecha'
                       },
                       {
                         value: 'baratos',
                         text: 'Más baratos'
                       },
                       {
                         value: 'caros',
                         text: 'Más caros'
                       },
                       {
                         value: 'm2',
                         text: 'm2'
                       },
                       {
                         value: 'preciom2',
                         text: 'precio/m2'
                       }
                     ]
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               }
             ],
             ikea: [
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '476',
                       '477',
                       '396',
                       '479',
                       '484',
                       '485',
                       '486',
                       '487',
                       '488',
                       '489',
                       '490',
                       '491',
                       '492'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '476',
                       '477',
                       '396',
                       '479',
                       '484',
                       '485',
                       '486',
                       '487',
                       '488',
                       '489',
                       '490',
                       '491',
                       '492'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true
                   }
                 }
               }
             ],
             orden: [
               {
                 when: [
                   {
                     operator: 'NIN',
                     id: 'cat',
                     value: [
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'cat',
                     value: [
                       '3',
                       '210',
                       '188',
                       '220',
                       '191',
                       '229',
                       '189',
                       '190',
                       '225',
                       '226',
                       '227',
                       '228',
                       '218',
                       '233',
                       '193',
                       '960',
                       '970',
                       '980',
                       '990',
                       '1000',
                       '1010',
                       '194',
                       '195',
                       '196',
                       '197',
                       '198',
                       '199',
                       '205',
                       '201',
                       '202',
                       '203',
                       '204',
                       '230',
                       '207',
                       '208',
                       '209',
                       '212',
                       '232',
                       '234',
                       '215',
                       '216',
                       '217',
                       '219',
                       '764',
                       '222',
                       '223',
                       '231',
                       '224',
                       '221',
                       '214'
                     ]
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true
                   }
                 }
               }
             ]
           }
         }
       }


export const categories = {
  "form": {
    "id": "milanuncios-filter",
    "type": "group",
    "label": "Busca en milanuncios",
    "actionlabel": "Buscar",
    "fields": [
      {
        "id": "category",
        "type": "picker",
        "label": "Categoría",
        "hint": "Selecciona una categoría",
        "value": "",
        "datalist": [
          {
            "value": "",
            "text": "Todas las categorías"
          },
          {
            "value": "1",
            "text": "Motor"
          },
          {
            "value": "32",
            "text": "Inmobiliaria"
          },
          {
            "value": "3",
            "text": "Empleo"
          },
          {
            "value": "40",
            "text": "Formación y libros"
          },
          {
            "value": "184",
            "text": "Servicios"
          },
          {
            "value": "185",
            "text": "Negocios"
          },
          {
            "value": "2",
            "text": "Informática"
          },
          {
            "value": "9",
            "text": "Imagen y Sonido"
          },
          {
            "value": "83",
            "text": "Telefonía"
          },
          {
            "value": "39",
            "text": "Juegos"
          },
          {
            "value": "30",
            "text": "Casa y jardín"
          },
          {
            "value": "43",
            "text": "Moda y complementos"
          },
          {
            "value": "513",
            "text": "Bebes"
          },
          {
            "value": "44",
            "text": "Aficiones y ocio"
          },
          {
            "value": "31",
            "text": "Deportes y náutica"
          },
          {
            "value": "612",
            "text": "Mascotas y agricultura"
          },
          {
            "value": "2064",
            "text": "Comunidad"
          }
        ]
      },
      {
        "id": "subcategory1",
        "type": "picker",
        "label": "Subcategoría",
        "hint": "Selecciona una subcategoría",
        "disabled": true,
        "value": ""
      },
      {
        "id": "subcategory2",
        "type": "picker",
        "label": "Subcategoría",
        "hint": "Selecciona una subcategoría",
        "disabled": true,
        "hidden": true,
        "value": ""
      },
      {
        "id": "subcategory3",
        "type": "picker",
        "label": "Subcategoría",
        "hint": "Selecciona una subcategoría",
        "disabled": true,
        "hidden": true,
        "value": ""
      },
      {
        "id": "subcategory4",
        "type": "picker",
        "label": "Subcategoría",
        "hint": "Selecciona una subcategoría",
        "disabled": true,
        "hidden": true,
        "value": ""
      }
    ],
    "rules": {
      "subcategory1": [
        {
          "when": [
            {"operator": "EXISTS", "id": "category", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": false,
              "datalist": [],
              "value": ""
            },
            "remote": true
          }
        }
      ],
      "subcategory2": [
        {
          "when": [
            {"operator": "EXISTS", "id": "subcategory1", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            },
            "remote": true
          }
        },
        {
          "when": [
            {"operator": "EXISTS", "id": "category", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            }
          }
        }
      ],
      "subcategory3": [
        {
          "when": [
            {"operator": "CHANGED", "id": "subcategory2", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            },
            "remote": true
          }
        },
        {
          "when": [
            {"operator": "CHANGED", "id": "category", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            }
          }
        },
        {
          "when": [
            {"operator": "CHANGED", "id": "subcategory1", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            }
          }
        }
      ],
      "subcategory4": [
        {
          "when": [
            {"operator": "CHANGED", "id": "subcategory3", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            },
            "remote": true
          }
        },
        {
          "when": [
            {"operator": "CHANGED", "id": "category", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            }
          }
        },
        {
          "when": [
            {"operator": "CHANGED", "id": "subcategory1", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            }
          }
        },
        {
          "when": [
            {"operator": "CHANGED", "id": "subcategory2", "value": []}
          ],
          "then": {
            "data": {
              "disabled": true,
              "hidden": true,
              "datalist": [],
              "value": ""
            }
          }
        }
      ]
    }
  }
}
