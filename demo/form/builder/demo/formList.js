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
               hint: '¿Qué estás buscando?'
             },
             {
               id: 'category_fields',
               type: 'fieldset',
               display: 'inline',
               fields: [
                 {
                   id: 'category',
                   type: 'picker',
                   label: 'Categoría',
                   hint: 'Selecciona una categoría',
                   value: '',
                   datalist: [
                     {value: '', text: 'Todas las categorías'},
                     {value: '1', text: 'Motor'},
                     {value: '32', text: 'Inmobiliaria'},
                     {value: '3', text: 'Empleo'},
                     {value: '40', text: 'Formación y libros'},
                     {value: '184', text: 'Servicios'},
                     {value: '185', text: 'Negocios'},
                     {value: '2', text: 'Informática'},
                     {value: '9', text: 'Imagen y Sonido'},
                     {value: '83', text: 'Telefonía'},
                     {value: '39', text: 'Juegos'},
                     {value: '30', text: 'Casa y jardín'},
                     {value: '43', text: 'Moda y complementos'},
                     {value: '513', text: 'Bebes'},
                     {value: '44', text: 'Aficiones y ocio'},
                     {value: '31', text: 'Deportes y náutica'},
                     {value: '612', text: 'Mascotas y agricultura'},
                     {value: '2064', text: 'Comunidad'}
                   ]
                 },
                 {
                   id: 'subcategory1',
                   type: 'picker',
                   label: 'Subcategoría',
                   hint: 'Selecciona una subcategoría',
                   disabled: true,
                   value: ''
                 },
                 {
                   id: 'subcategory2',
                   type: 'picker',
                   label: 'Subcategoría',
                   hint: 'Selecciona una subcategoría',
                   disabled: true,
                   hidden: true,
                   value: ''
                 },
                 {
                   id: 'subcategory3',
                   type: 'picker',
                   label: 'Subcategoría',
                   hint: 'Selecciona una subcategoría',
                   disabled: true,
                   hidden: true,
                   value: ''
                 },
                 {
                   id: 'subcategory4',
                   type: 'picker',
                   label: 'Subcategoría',
                   hint: 'Selecciona una subcategoría',
                   disabled: true,
                   hidden: true,
                   value: ''
                 }
               ]
             },
             {
               id: 'location_fields',
               type: 'fieldset',
               display: 'inline',
               fields: [
                 {
                   id: 'ccaa',
                   type: 'picker',
                   label: 'Comunidad Autónoma',
                   hint: 'Selecciona una Comunidad Autónoma',
                   datalist: [
                     {value: '', text: 'Toda España'},
                     {value: '55', text: 'Andalucía'},
                     {value: '58', text: 'Aragón'},
                     {value: '33', text: 'Asturias'},
                     {value: '7', text: 'Baleares'},
                     {value: '62', text: 'Canarias'},
                     {value: '39', text: 'Cantabria'},
                     {value: '60', text: 'Castilla La Mancha'},
                     {value: '61', text: 'Castilla y León'},
                     {value: '54', text: 'Cataluña'},
                     {value: '51', text: 'Ceuta'},
                     {value: '56', text: 'Extremadura'},
                     {value: '53', text: 'Galicia'},
                     {value: '26', text: 'La Rioja'},
                     {value: '28', text: 'Madrid'},
                     {value: '52', text: 'Melilla'},
                     {value: '30', text: 'Murcia'},
                     {value: '31', text: 'Navarra'},
                     {value: '59', text: 'País Vasco'},
                     {value: '46', text: 'Valencia'}
                   ]
                 },
                 {
                   id: 'province',
                   type: 'picker',
                   label: 'Provincia',
                   hint: 'Selecciona la provincia',
                   value: '',
                   hidden: true,
                   datalist: []
                 },
                 {
                   id: 'nearprovinces',
                   type: 'picker',
                   display: 'switch',
                   label: 'Incluir provincias colindantes',
                   value: 'false',
                   hidden: true,
                   disabled: true
                 },
                 {
                   id: 'municipality',
                   type: 'picker',
                   display: 'autocomplete',
                   label: 'Municipio',
                   hint: 'Selecciona un municipio',
                   disabled: true,
                   hidden: true
                 },
                 {
                   id: 'zona',
                   type: 'picker',
                   display: 'filter',
                   label: 'Zona',
                   hint: 'Selecciona una zona',
                   disabled: true,
                   hidden: true
                 }
               ]
             },
             {
               id: 'ad_extras_fields',
               type: 'fieldset',
               display: 'inline',
               fields: [
                 {
                   id: 'carMake',
                   type: 'picker',
                   display: 'filter',
                   label: 'Marca',
                   hint: 'Selecciona una marca',
                   disabled: true,
                   hidden: true,
                   value: '',
                   datalist: [
                     {value: '', text: 'Todas las marcas'},
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
                   datalist: [
                     {value: '', text: 'Todas las marcas'},
                     {value: '2085', text: 'ADIVA'},
                     {value: '1200', text: 'ADLY'},
                     {value: '1714', text: 'AEON'},
                     {value: '1719', text: 'AIE'},
                     {value: '2009', text: 'AIYUMO'},
                     {value: '1998', text: 'AJP'},
                     {value: '51', text: 'ALFER'},
                     {value: '2027', text: 'ALPINA RENANIA'},
                     {value: '2174', text: 'AMERICAN IRONHORSE'},
                     {value: '2179', text: 'APACHE'},
                     {value: '2334', text: 'APOLLO ORION'},
                     {value: '52', text: 'APRILIA'},
                     {value: '2019', text: 'ARCTIC CAT'},
                     {value: '2361', text: 'ASIAWING'},
                     {value: '2349', text: 'ASKOLL'},
                     {value: '2336', text: 'ASTOR'},
                     {value: '53', text: 'ATALA'},
                     {value: '2184', text: 'AX ROAD'},
                     {value: '1999', text: 'AZEL'},
                     {value: '54', text: 'BAJAJ'},
                     {value: '2258', text: 'BAOTIAN'},
                     {value: '2185', text: 'BAROSSA'},
                     {value: '2281', text: 'BATERY'},
                     {value: '55', text: 'BENELLI'},
                     {value: '2223', text: 'BERECO'},
                     {value: '56', text: 'BETA'},
                     {value: '2175', text: 'BIG DOG'},
                     {value: '57', text: 'BIMOTA'},
                     {value: '7', text: 'BMW'},
                     {value: '2173', text: 'BOSS HOSS'},
                     {value: '2320', text: 'BRAMMO'},
                     {value: '2351', text: 'BRIXTON'},
                     {value: '2277', text: 'BRP'},
                     {value: '2290', text: 'BSG ELECTRICS'},
                     {value: '2283', text: 'BTM'},
                     {value: '2266', text: 'BUCCIMOTO'},
                     {value: '2010', text: 'BUELL'},
                     {value: '59', text: 'BULTACO'},
                     {value: '124', text: 'BUNKER TRIKE'},
                     {value: '60', text: 'CAGIVA'},
                     {value: '2253', text: 'CAN-AM'},
                     {value: '2186', text: 'CANNONDALE'},
                     {value: '2339', text: 'CANYON'},
                     {value: '2232', text: 'CBK'},
                     {value: '2285', text: 'CFMOTO'},
                     {value: '2221', text: 'CHOPPER NATION'},
                     {value: '2143', text: 'CLARAXAVI'},
                     {value: '276', text: 'CLIPIC'},
                     {value: '2064', text: 'COOLTRA'},
                     {value: '2028', text: 'CPI'},
                     {value: '2000', text: 'CSR'},
                     {value: '61', text: 'DAELIM'},
                     {value: '2243', text: 'DAK'},
                     {value: '2262', text: 'DAMAS'},
                     {value: '2249', text: 'DAYUN'},
                     {value: '62', text: 'DERBI'},
                     {value: '2111', text: 'DH HAOTIAN'},
                     {value: '2239', text: 'DI BLASI'},
                     {value: '2183', text: 'DINO'},
                     {value: '2350', text: 'DOBO'},
                     {value: '2011', text: 'DORTON'},
                     {value: '2260', text: 'DRAGON TT'},
                     {value: '63', text: 'DUCATI'},
                     {value: '2241', text: 'E-MAX'},
                     {value: '271', text: 'E-TON'},
                     {value: '2246', text: 'EASY TRIKE  '},
                     {value: '2365', text: 'EBROH'},
                     {value: '2358', text: 'EFUN'},
                     {value: '2299', text: 'ELECTRIC CITY MOTOR 00'},
                     {value: '2310', text: 'ELMOTO'},
                     {value: '2160', text: 'EMF'},
                     {value: '2278', text: 'EMOCYCLES'},
                     {value: '2330', text: 'ENERGICA'},
                     {value: '278', text: 'EXPLORER'},
                     {value: '64', text: 'FACTORY BIKE'},
                     {value: '2306', text: 'FALCÓN'},
                     {value: '175', text: 'FANTIC'},
                     {value: '2178', text: 'FARSPEED'},
                     {value: '2359', text: 'FAURO'},
                     {value: '2228', text: 'FAXON'},
                     {value: '2001', text: 'FAZTEK'},
                     {value: '1980', text: 'FB MONDIAL'},
                     {value: '2316', text: 'FRC'},
                     {value: '2270', text: 'GARELLI'},
                     {value: '65', text: 'GAS GAS'},
                     {value: '2123', text: 'GENERIC'},
                     {value: '66', text: 'GILERA'},
                     {value: '2225', text: 'GOELIX'},
                     {value: '2002', text: 'GOES'},
                     {value: '2250', text: 'GOVECS'},
                     {value: '2275', text: 'GOWINN'},
                     {value: '2012', text: 'HAMMEL'},
                     {value: '2318', text: 'HANWAY'},
                     {value: '67', text: 'HARLEY DAVIDSON'},
                     {value: '2264', text: 'HARTFORD'},
                     {value: '2273', text: 'HELECTRA'},
                     {value: '2291', text: 'HERON'},
                     {value: '68', text: 'HM'},
                     {value: '69', text: 'HONDA'},
                     {value: '2003', text: 'HRD'},
                     {value: '2282', text: 'HSUN'},
                     {value: '2082', text: 'HUATIAN'},
                     {value: '2340', text: 'HUDSON BOSS'},
                     {value: '70', text: 'HUSABERG'},
                     {value: '71', text: 'HUSQVARNA'},
                     {value: '72', text: 'HYOSUNG'},
                     {value: '2084', text: 'I-MOTO'},
                     {value: '2261', text: 'IMAX'},
                     {value: '2110', text: 'IMR'},
                     {value: '2108', text: 'INDIAN'},
                     {value: '2268', text: 'INFMOTO'},
                     {value: '2328', text: 'INNOCENTI'},
                     {value: '74', text: 'ITALJET'},
                     {value: '2188', text: 'JIANSHE'},
                     {value: '2231', text: 'JIN LUN'},
                     {value: '1471', text: 'JINCHENG'},
                     {value: '2363', text: 'JNEN'},
                     {value: '2140', text: 'JONWAY'},
                     {value: '2295', text: 'JTG'},
                     {value: '2272', text: 'JTS'},
                     {value: '2182', text: 'KANGXIN'},
                     {value: '2189', text: 'KASEA'},
                     {value: '75', text: 'KAWASAKI'},
                     {value: '2190', text: 'KAZUMA'},
                     {value: '1971', text: 'KEEWAY'},
                     {value: '2004', text: 'KENROD'},
                     {value: '2038', text: 'KINROAD'},
                     {value: '2321', text: 'KSR MOTO'},
                     {value: '76', text: 'KTM'},
                     {value: '2300', text: 'KUBERG'},
                     {value: '77', text: 'KYMCO'},
                     {value: '196', text: 'LAMBRETTA'},
                     {value: '2235', text: 'LAMURATTI'},
                     {value: '1991', text: 'LANVERTTI'},
                     {value: '2233', text: 'LAUGE JENSEN'},
                     {value: '2297', text: 'LECTRIC'},
                     {value: '2191', text: 'LEM'},
                     {value: '2293', text: 'LEMEV'},
                     {value: '2014', text: 'LEONART'},
                     {value: '2366', text: 'LEXMOTO'},
                     {value: '1497', text: 'LIFAN'},
                     {value: '2086', text: 'LING BEN'},
                     {value: '279', text: 'LINHAI'},
                     {value: '2242', text: 'LML'},
                     {value: '1997', text: 'LUBE'},
                     {value: '1713', text: 'MACBOR'},
                     {value: '78', text: 'MALAGUTI'},
                     {value: '2023', text: 'MASAI'},
                     {value: '2325', text: 'MASH'},
                     {value: '79', text: 'MBK'},
                     {value: '253', text: 'MECATECNO'},
                     {value: '2135', text: 'MEGELLI'},
                     {value: '1973', text: 'MEKO'},
                     {value: '232', text: 'MERLIN'},
                     {value: '2136', text: 'METRAKIT'},
                     {value: '2344', text: 'MH MOTORCYCLES'},
                     {value: '2015', text: 'MINELLI'},
                     {value: '2360', text: 'MITT'},
                     {value: '1963', text: 'MOBILETTE'},
                     {value: '2005', text: 'MONKEY BIKE'},
                     {value: '2287', text: 'MONSTER PRO'},
                     {value: '2167', text: 'MONTEROSSO'},
                     {value: '80', text: 'MONTESA'},
                     {value: '2303', text: 'MORIWAKI'},
                     {value: '2224', text: 'MOTIVAS'},
                     {value: '82', text: 'MOTO GUZZI'},
                     {value: '151', text: 'MOTO MORINI'},
                     {value: '81', text: 'MOTOGAC'},
                     {value: '83', text: 'MOTOR HISPANIA'},
                     {value: '2036', text: 'MOTOR MANIA'},
                     {value: '2222', text: 'MOTORS WATTS'},
                     {value: '2171', text: 'MTM'},
                     {value: '2006', text: 'MTR'},
                     {value: '254', text: 'MUZ'},
                     {value: '84', text: 'MV AGUSTA'},
                     {value: '2113', text: 'MXONDA'},
                     {value: '2276', text: 'NECO'},
                     {value: '2307', text: 'NIMOTO'},
                     {value: '2354', text: 'NIU '},
                     {value: '225', text: 'NORTON'},
                     {value: '2337', text: 'ORCAL'},
                     {value: '2093', text: 'ORION'},
                     {value: '2230', text: 'OSET'},
                     {value: '197', text: 'OSSA'},
                     {value: '2120', text: 'PEDA'},
                     {value: '33', text: 'PEUGEOT'},
                     {value: '86', text: 'PGO'},
                     {value: '87', text: 'PIAGGIO'},
                     {value: '2227', text: 'POLINI'},
                     {value: '1244', text: 'PUCH'},
                     {value: '1233', text: 'QINGQI'},
                     {value: '2289', text: 'QUADRO'},
                     {value: '2259', text: 'QUANTYA'},
                     {value: '2355', text: 'QUAZZAR'},
                     {value: '2245', text: 'RAV'},
                     {value: '2333', text: 'RAYCOOL ELECTRIC'},
                     {value: '2153', text: 'RAYDAN'},
                     {value: '2317', text: 'RCP'},
                     {value: '2248', text: 'REBEL'},
                     {value: '2265', text: 'REGAL RAPTOR'},
                     {value: '35', text: 'RENAULT'},
                     {value: '2165', text: 'RETTO'},
                     {value: '2251', text: 'REWACO'},
                     {value: '2257', text: 'RIDLEY MOTORCYCLES'},
                     {value: '88', text: 'RIEJU'},
                     {value: '2356', text: 'RIEJU NUUK'},
                     {value: '2329', text: 'RIYA'},
                     {value: '2263', text: 'ROAN'},
                     {value: '2322', text: 'ROKETA BIKE'},
                     {value: '2323', text: 'ROKETA MOTO'},
                     {value: '2346', text: 'ROMET'},
                     {value: '2362', text: 'ROYAL ALLOY'},
                     {value: '90', text: 'ROYAL ENFIELD'},
                     {value: '2007', text: 'RSX'},
                     {value: '2008', text: 'SACHS BIKES'},
                     {value: '2155', text: 'SAMADA'},
                     {value: '2364', text: 'SANBEN'},
                     {value: '2229', text: 'SAXON'},
                     {value: '2327', text: 'SCOMADI'},
                     {value: '91', text: 'SCORPA'},
                     {value: '2314', text: 'SCUTUM'},
                     {value: '2236', text: 'SENKE'},
                     {value: '2348', text: 'SETTER'},
                     {value: '1993', text: 'SHERCO'},
                     {value: '2332', text: 'SHERPA'},
                     {value: '2168', text: 'SHINERAY'},
                     {value: '93', text: 'SIAM'},
                     {value: '2288', text: 'SINCRO'},
                     {value: '2315', text: 'SINGAZ'},
                     {value: '2352', text: 'SKYTEAM'},
                     {value: '2025', text: 'SUMCO'},
                     {value: '1248', text: 'SUMO'},
                     {value: '44', text: 'SUZUKI'},
                     {value: '2353', text: 'SWM'},
                     {value: '95', text: 'SYM'},
                     {value: '2053', text: 'TBQ'},
                     {value: '199', text: 'TGB'},
                     {value: '2177', text: 'THUNDER MOUNTAIN'},
                     {value: '96', text: 'TM'},
                     {value: '2335', text: 'TNT'},
                     {value: '2338', text: 'TORROT'},
                     {value: '2124', text: 'TRAKKER'},
                     {value: '97', text: 'TRIUMPH'},
                     {value: '2331', text: 'TRS MOTORCYCLES'},
                     {value: '2292', text: 'TURBHO'},
                     {value: '2267', text: 'ULTRA MOTOR '},
                     {value: '2347', text: 'UM'},
                     {value: '2029', text: 'UNIVERSAL MOTOR'},
                     {value: '2280', text: 'UNORACING'},
                     {value: '2154', text: 'URAL'},
                     {value: '2141', text: 'VECTRIX'},
                     {value: '2345', text: 'VELIMOTOR'},
                     {value: '2341', text: 'VERTIGO'},
                     {value: '99', text: 'VESPA'},
                     {value: '1994', text: 'VESPINO'},
                     {value: '2226', text: 'VIA SCOOTER'},
                     {value: '2017', text: 'VICTORY'},
                     {value: '2254', text: 'VIGAR'},
                     {value: '2026', text: 'VIKERS'},
                     {value: '2294', text: 'VMOTO'},
                     {value: '2343', text: 'VOLTA MOTORBIKES'},
                     {value: '100', text: 'VOR'},
                     {value: '2018', text: 'VOXAN'},
                     {value: '2237', text: 'VYRUS'},
                     {value: '2220', text: 'WENLING'},
                     {value: '1737', text: 'WILDLANDER'},
                     {value: '2305', text: 'WK'},
                     {value: '2271', text: 'WOTTAN'},
                     {value: '2274', text: 'XERO'},
                     {value: '2169', text: 'XINGYUE'},
                     {value: '2255', text: 'XISPA'},
                     {value: '2218', text: 'XMOTOS'},
                     {value: '2269', text: 'XPA'},
                     {value: '101', text: 'YAMAHA'},
                     {value: '2279', text: 'YCF'},
                     {value: '2051', text: 'YIYING'},
                     {value: '2170', text: 'YMR'},
                     {value: '2304', text: 'YOUNG RIDER'},
                     {value: '123', text: 'ZELTECH'},
                     {value: '2234', text: 'ZERO'},
                     {value: '2252', text: 'ZERO MOTORCYCLES'},
                     {value: '2319', text: 'ZMS MOTORS'},
                     {value: '2176', text: 'ZNEN'},
                     {value: '2166', text: 'ZONGSHEN'},
                     {value: '2357', text: 'ZONTES'},
                     {value: '2302', text: 'ZUAP'}
                   ]
                 },
                 {
                   id: 'motorbikeModel',
                   type: 'text',
                   label: 'Modelo',
                   hint: 'Selecciona modelo',
                   hidden: true,
                   disabled: true
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
                   datalist: [
                     {value: '', text: 'Indiferente'},
                     {value: '2019', text: '2019'},
                     {value: '2018', text: '2018'},
                     {value: '2017', text: '2017'},
                     {value: '2016', text: '2016'},
                     {value: '2015', text: '2015'},
                     {value: '2014', text: '2014'},
                     {value: '2013', text: '2013'},
                     {value: '2012', text: '2012'},
                     {value: '2011', text: '2011'},
                     {value: '2010', text: '2010'},
                     {value: '2009', text: '2009'},
                     {value: '2008', text: '2008'},
                     {value: '2007', text: '2007'},
                     {value: '2006', text: '2006'},
                     {value: '2005', text: '2005'},
                     {value: '2004', text: '2004'},
                     {value: '2003', text: '2003'},
                     {value: '2002', text: '2002'},
                     {value: '2001', text: '2001'},
                     {value: '2000', text: '2000'},
                     {value: '1999', text: '1999'},
                     {value: '1998', text: '1998'},
                     {value: '1997', text: '1997'},
                     {value: '1996', text: '1996'},
                     {value: '1995', text: '1995'},
                     {value: '1994', text: '1994'},
                     {value: '1993', text: '1993'},
                     {value: '1992', text: '1992'},
                     {value: '1991', text: '1991'},
                     {value: '1990', text: '1990'},
                     {value: '1985', text: '1985'},
                     {value: '1980', text: '1980'},
                     {value: '1970', text: '1970'},
                     {value: '1960', text: '1960'},
                     {value: '1950', text: '1950'},
                     {value: '1940', text: '1940'},
                     {value: '1930', text: '1930'},
                     {value: '1920', text: '1920'},
                     {value: '1910', text: '1910'},
                     {value: '1900', text: '1900'}
                   ]
                 },
                 {
                   id: 'anoh',
                   type: 'picker',
                   label: 'Año hasta',
                   hint: 'Selecciona hasta qué año',
                   value: '',
                   hidden: true,
                   disabled: true,
                   datalist: [
                     {value: '', text: 'Indiferente'},
                     {value: '2019', text: '2019'},
                     {value: '2018', text: '2018'},
                     {value: '2017', text: '2017'},
                     {value: '2016', text: '2016'},
                     {value: '2015', text: '2015'},
                     {value: '2014', text: '2014'},
                     {value: '2013', text: '2013'},
                     {value: '2012', text: '2012'},
                     {value: '2011', text: '2011'},
                     {value: '2010', text: '2010'},
                     {value: '2009', text: '2009'},
                     {value: '2008', text: '2008'},
                     {value: '2007', text: '2007'},
                     {value: '2006', text: '2006'},
                     {value: '2005', text: '2005'},
                     {value: '2004', text: '2004'},
                     {value: '2003', text: '2003'},
                     {value: '2002', text: '2002'},
                     {value: '2001', text: '2001'},
                     {value: '2000', text: '2000'},
                     {value: '1999', text: '1999'},
                     {value: '1998', text: '1998'},
                     {value: '1997', text: '1997'},
                     {value: '1996', text: '1996'},
                     {value: '1995', text: '1995'},
                     {value: '1994', text: '1994'},
                     {value: '1993', text: '1993'},
                     {value: '1992', text: '1992'},
                     {value: '1991', text: '1991'},
                     {value: '1990', text: '1990'},
                     {value: '1985', text: '1985'},
                     {value: '1980', text: '1980'},
                     {value: '1970', text: '1970'},
                     {value: '1960', text: '1960'},
                     {value: '1950', text: '1950'},
                     {value: '1940', text: '1940'},
                     {value: '1930', text: '1930'},
                     {value: '1920', text: '1920'},
                     {value: '1910', text: '1910'},
                     {value: '1900', text: '1900'}
                   ]
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
                     {value: '', text: 'Indiferente'},
                     {value: 'gasolina', text: 'gasolina'},
                     {value: 'diesel', text: 'diesel'},
                     {value: 'eléctrico', text: 'eléctrico'},
                     {value: 'híbrido', text: 'híbrido'},
                     {value: 'GLP', text: 'GLP'},
                     {value: 'Otro', text: 'otro'}
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
                     {value: '', text: 'Todos'},
                     {value: 'n', text: 'Oferta'},
                     {value: 's', text: 'Demanda'}
                   ]
                 },
                 {
                   id: 'vendedor',
                   type: 'picker',
                   display: 'button-inline',
                   label: 'Tipo de vendedor',
                   value: '',
                   datalist: [
                     {value: '', text: 'Todos'},
                     {value: 'part', text: 'Particular'},
                     {value: 'prof', text: 'Profesional'}
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
                   datalist: [
                     {value: '', text: 'Indiferente'},
                     {value: '5000', text: 'hasta 5.000'},
                     {value: '10000', text: 'hasta 10.000'},
                     {value: '20000', text: 'hasta 20.000'},
                     {value: '30000', text: 'hasta 30.000'},
                     {value: '40000', text: 'hasta 40.000'},
                     {value: '60000', text: 'hasta 60.000'},
                     {value: '80000', text: 'hasta 80.000'},
                     {value: '100000', text: 'hasta 100.000'},
                     {value: '120000', text: 'hasta 120.000'},
                     {value: '140000', text: 'hasta 140.000'},
                     {value: '160000', text: 'hasta 160.000'},
                     {value: '180000', text: 'hasta 180.000'},
                     {value: '200000', text: 'hasta 200.000'},
                     {value: '250000', text: 'hasta 250.000'},
                     {value: '500000', text: 'hasta 500.000'},
                     {value: '750000', text: 'hasta 750.000'},
                     {value: '1000000', text: 'hasta 1.000.000'},
                     {value: '1250000', text: 'hasta 1.250.000'},
                     {value: '1500000', text: 'hasta 1.500.000'},
                     {value: '2000000', text: 'hasta 2.000.000'},
                     {value: '2500000', text: 'hasta 2.500.000'},
                     {value: '2500000', text: 'hasta 2.500.000'}
                   ]
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
                     {value: '', text: 'Todos'},
                     {value: 'manual', text: 'Manual'},
                     {value: 'automatico', text: 'Automático'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '100', text: 'menos de 100CV'},
                     {value: '150', text: 'entre 100 y 150CV'},
                     {value: '200', text: 'entre 150 y 200CV'},
                     {value: '250', text: 'entre 200 y 250CV'},
                     {value: '300', text: 'entre 250 y 300CV'},
                     {value: '400', text: 'más de 300 CV'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '49', text: '49 cc'},
                     {value: '50', text: '50 cc'},
                     {value: '125', text: '125 cc'},
                     {value: '250', text: '250 cc'},
                     {value: '500', text: '500 cc'},
                     {value: '600', text: '600 cc'},
                     {value: '800', text: '800 cc'},
                     {value: '1000', text: '1000 cc'},
                     {value: '1200', text: '1200 cc'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '49', text: '49 cc'},
                     {value: '50', text: '50 cc'},
                     {value: '125', text: '125 cc'},
                     {value: '250', text: '250 cc'},
                     {value: '500', text: '500 cc'},
                     {value: '600', text: '600 cc'},
                     {value: '800', text: '800 cc'},
                     {value: '1000', text: '1000 cc'},
                     {value: '1200', text: '1200 cc'}
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
                     {value: '', text: 'Todas'},
                     {value: '2', text: '2'},
                     {value: '3', text: '3'},
                     {value: '4', text: '4'},
                     {value: '5', text: '5'}
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
                     {value: '', text: 'Indiferente'},
                     {value: 'negr', text: 'Negro'},
                     {value: 'bla', text: 'Blanco'},
                     {value: 'gri', text: 'Gris'},
                     {value: 'azul', text: 'Azul'},
                     {value: 'roj', text: 'Rojo'},
                     {value: 'plat', text: 'Plata'},
                     {value: 'verde', text: 'Verde'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '100', text: 'hasta 100'},
                     {value: '500', text: 'hasta 500'},
                     {value: '1000', text: 'hasta 1.000'},
                     {value: '2000', text: 'hasta 2.000'},
                     {value: '5000', text: 'hasta 5.000'},
                     {value: '8000', text: 'hasta 8.000'},
                     {value: '10000', text: 'hasta 10.000'},
                     {value: '15000', text: 'hasta 15.000'},
                     {value: '20000', text: 'hasta 20.000'},
                     {value: '40000', text: 'hasta 40.000'},
                     {value: '60000', text: 'hasta 60.000'},
                     {value: '80000', text: 'hasta 80.000'},
                     {value: '100000', text: 'hasta 100.000'},
                     {value: '250000', text: 'hasta 250.000'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '0', text: '0 metros'},
                     {value: '2', text: '2 metros'},
                     {value: '3', text: '3 metros'},
                     {value: '4', text: '4 metros'},
                     {value: '5', text: '5 metros'},
                     {value: '6', text: '6 metros'},
                     {value: '7', text: '7 metros'},
                     {value: '8', text: '8 metros'},
                     {value: '9', text: '9 metros'},
                     {value: '10', text: '10 metros'},
                     {value: '11', text: '11 metros'},
                     {value: '12', text: '12 metros'},
                     {value: '14', text: '14 metros'},
                     {value: '15', text: '15 metros'},
                     {value: '16', text: '16 metros'},
                     {value: '17', text: '17 metros'},
                     {value: '18', text: '18 metros'},
                     {value: '19', text: '19 metros'},
                     {value: '20', text: '20 metros'},
                     {value: '25', text: '25 metros'},
                     {value: '30', text: '30 metros'},
                     {value: '35', text: '35 metros'},
                     {value: '40', text: '40 metros'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '0', text: '0'},
                     {value: '1', text: '1'},
                     {value: '2', text: '2'},
                     {value: '3', text: '3'},
                     {value: '4', text: '4'},
                     {value: '5', text: '5'},
                     {value: '6', text: '6'},
                     {value: '7', text: '7'},
                     {value: '8', text: '8'},
                     {value: '9', text: '9'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '0', text: '0'},
                     {value: '1', text: '1'},
                     {value: '2', text: '2'},
                     {value: '3', text: '3'},
                     {value: '4', text: '4'},
                     {value: '5', text: '5'},
                     {value: '6', text: '6'},
                     {value: '7', text: '7'},
                     {value: '8', text: '8'},
                     {value: '9', text: '9'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '0', text: '0'},
                     {value: '1', text: '1'},
                     {value: '2', text: '2'},
                     {value: '3', text: '3'},
                     {value: '4', text: '4'},
                     {value: '5', text: '5'},
                     {value: '6', text: '6'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '0', text: '0'},
                     {value: '1', text: '1'},
                     {value: '2', text: '2'},
                     {value: '3', text: '3'},
                     {value: '4', text: '4'},
                     {value: '5', text: '5'},
                     {value: '6', text: '6'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '20', text: '20'},
                     {value: '30', text: '30'},
                     {value: '40', text: '40'},
                     {value: '50', text: '50'},
                     {value: '60', text: '60'},
                     {value: '70', text: '70'},
                     {value: '80', text: '80'},
                     {value: '90', text: '90'},
                     {value: '100', text: '100'},
                     {value: '120', text: '120'},
                     {value: '140', text: '140'},
                     {value: '180', text: '180'},
                     {value: '200', text: '200'},
                     {value: '300', text: '300'},
                     {value: '400', text: '400'},
                     {value: '500', text: '500'},
                     {value: '600', text: '600'},
                     {value: '700', text: '700'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '20', text: '20'},
                     {value: '30', text: '30'},
                     {value: '40', text: '40'},
                     {value: '50', text: '50'},
                     {value: '60', text: '60'},
                     {value: '70', text: '70'},
                     {value: '80', text: '80'},
                     {value: '90', text: '90'},
                     {value: '100', text: '100'},
                     {value: '120', text: '120'},
                     {value: '140', text: '140'},
                     {value: '180', text: '180'},
                     {value: '200', text: '200'},
                     {value: '300', text: '300'},
                     {value: '400', text: '400'},
                     {value: '500', text: '500'},
                     {value: '600', text: '600'},
                     {value: '700', text: '700'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '10', text: 'a menos de 10 metros'},
                     {value: '50', text: 'a menos de 50 metros'},
                     {value: '100', text: 'a menos de 100 metros'},
                     {value: '200', text: 'a menos de 200 metros'},
                     {value: '400', text: 'a menos de 400 metros'},
                     {value: '800', text: 'a menos de 800 metros'},
                     {value: '1000', text: 'a menos de 1 km'},
                     {value: '5000', text: 'a menos de 5 kms'},
                     {value: '10000', text: 'a menos de 10 kms'},
                     {value: '50000', text: 'a menos de 50 kms'}
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
                     {value: '', text: 'Indiferente'},
                     {value: '0', text: 'Para coche'},
                     {value: '1', text: 'Para moto'}
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
                     {value: 'false', text: 'false'},
                     {value: 'true', text: 'true'}
                   ]
                 }
               ]
             },
             {
               id: 'order_fields',
               type: 'fieldset',
               display: 'inline',
               fields: [
                 {
                   id: 'orden',
                   type: 'picker',
                   display: 'picker',
                   label: 'Ordenar por',
                   value: 'relevance',
                   datalist: [
                     {value: 'relevance', text: 'Relevancia'},
                     {value: '', text: 'Fecha'},
                     {value: 'baratos', text: 'Más baratos'},
                     {value: 'caros', text: 'Más caros'}
                   ]
                 }
               ]
             }
           ],
           rules: {
             subcategory1: [
               {
                 when: [{operator: 'NEXISTS', id: 'category'}],
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
                 when: [{operator: 'EXISTS', id: 'category'}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: false,
                     datalist: [],
                     value: ''
                   },
                   remote: true
                 }
               }
             ],
             subcategory2: [
               {
                 when: [{operator: 'NEXISTS', id: 'category'}],
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
                 when: [{operator: 'NEXISTS', id: 'subcategory1'}],
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
                 when: [{operator: 'EXISTS', id: 'subcategory1'}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     datalist: [],
                     value: ''
                   },
                   remote: true
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'category'}],
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
             subcategory3: [
               {
                 when: [{operator: 'NEXISTS', id: 'category'}],
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
                 when: [{operator: 'NEXISTS', id: 'subcategory1'}],
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
                 when: [{operator: 'NEXISTS', id: 'subcategory2'}],
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
                 when: [{operator: 'EXISTS', id: 'subcategory2'}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     datalist: [],
                     value: ''
                   },
                   remote: true
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'subcategory1'}],
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
                 when: [{operator: 'EXISTS', id: 'category'}],
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
             subcategory4: [
               {
                 when: [{operator: 'NEXISTS', id: 'category'}],
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
                 when: [{operator: 'NEXISTS', id: 'subcategory1'}],
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
                 when: [{operator: 'NEXISTS', id: 'subcategory2'}],
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
                 when: [{operator: 'NEXISTS', id: 'subcategory3'}],
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
                 when: [{operator: 'EXISTS', id: 'subcategory3'}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     datalist: [],
                     value: ''
                   },
                   remote: true
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'subcategory2'}],
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
                 when: [{operator: 'EXISTS', id: 'subcategory1'}],
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
                 when: [{operator: 'EXISTS', id: 'category'}],
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
             province: [
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['']}],
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
                 when: [{operator: 'IN', id: 'ccaa', value: ['55']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '4', text: 'Almería'},
                       {value: '11', text: 'Cádiz'},
                       {value: '14', text: 'Córdoba'},
                       {value: '18', text: 'Granada'},
                       {value: '21', text: 'Huelva'},
                       {value: '23', text: 'Jaén'},
                       {value: '29', text: 'Málaga'},
                       {value: '41', text: 'Sevilla'}
                     ],
                     value: ''
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
                       {value: '', text: 'Todas las provincias'},
                       {value: '22', text: 'Huesca'},
                       {value: '44', text: 'Teruel'},
                       {value: '50', text: 'Zaragoza'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['33']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '33', text: 'Asturias'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['7']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '7', text: 'Baleares'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['62']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '35', text: 'Las Palmas'},
                       {value: '38', text: 'Tenerife'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['39']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '39', text: 'Cantabria'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['60']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '2', text: 'Albacete'},
                       {value: '13', text: 'Ciudad Real'},
                       {value: '16', text: 'Cuenca'},
                       {value: '19', text: 'Guadalajara'},
                       {value: '45', text: 'Toledo'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['61']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '5', text: 'Ávila'},
                       {value: '9', text: 'Burgos'},
                       {value: '24', text: 'León'},
                       {value: '34', text: 'Palencia'},
                       {value: '37', text: 'Salamanca'},
                       {value: '40', text: 'Segovia'},
                       {value: '42', text: 'Soria'},
                       {value: '47', text: 'Valladolid'},
                       {value: '49', text: 'Zamora'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['54']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '8', text: 'Barcelona'},
                       {value: '17', text: 'Girona'},
                       {value: '25', text: 'Lleida'},
                       {value: '43', text: 'Tarragona'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['51']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '51', text: 'Ceuta'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['56']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '6', text: 'Badajoz'},
                       {value: '10', text: 'Cáceres'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['53']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '15', text: 'A Coruña'},
                       {value: '27', text: 'Lugo'},
                       {value: '32', text: 'Ourense'},
                       {value: '36', text: 'Pontevedra'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['26']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '26', text: 'La Rioja'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['28']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '28', text: 'Madrid'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['52']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '52', text: 'Melilla'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['30']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '30', text: 'Murcia'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['31']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [{value: '31', text: 'Navarra'}],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['59']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '1', text: 'Álava'},
                       {value: '20', text: 'Guipúzcoa'},
                       {value: '48', text: 'Vizcaya'}
                     ],
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['46']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     datalist: [
                       {value: '', text: 'Todas las provincias'},
                       {value: '3', text: 'Alicante'},
                       {value: '12', text: 'Castellón'},
                       {value: '46', text: 'Valencia'}
                     ],
                     value: ''
                   }
                 }
               }
             ],
             nearprovinces: [
               {
                 when: [{operator: 'IN', id: 'ccaa', value: ['']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: 'false'
                   }
                 }
               },
               {
                 when: [
                   {operator: 'NIN', id: 'ccaa', value: ['']},
                   {operator: 'IN', id: 'province', value: ['']}
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: 'false'
                   }
                 }
               },
               {
                 when: [
                   {operator: 'NIN', id: 'ccaa', value: ['']},
                   {operator: 'NIN', id: 'province', value: ['']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: 'false'
                   }
                 }
               }
             ],
             municipality: [
               {
                 when: [{operator: 'CHANGED', id: 'ccaa'}],
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
                 when: [{operator: 'IN', id: 'province', value: ['']}],
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
                 when: [{operator: 'CHANGED', id: 'province', value: ['']}],
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
                 when: [{operator: 'IN', id: 'nearprovinces', value: ['true']}],
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
                   {operator: 'IN', id: 'nearprovinces', value: ['false']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             zona: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
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
                 when: [{operator: 'IN', id: 'province', value: ['']}],
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
                   {operator: 'IN', id: 'category', value: ['32']},
                   {operator: 'IN', id: 'nearprovinces', value: ['true']}
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
                   {operator: 'IN', id: 'category', value: ['32']},
                   {operator: 'NIN', id: 'province', value: ['']},
                   {operator: 'IN', id: 'nearprovinces', value: ['false']},
                   {operator: 'NIN', id: 'municipality', value: ['']}
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     datalist: [],
                     value: ''
                   },
                   remote: true
                 }
               }
             ],
             carMake: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                     id: 'subcategory1',
                     value: ['13', '15', '17']
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
                     id: 'subcategory1',
                     value: ['13', '15', '17']
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
             carModel: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                     operator: 'NIN',
                     id: 'subcategory1',
                     value: ['13', '15', '17']
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
                 when: [{operator: 'IN', id: 'carMake', value: ['']}],
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
                 when: [{operator: 'NIN', id: 'carMake', value: ['']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: false,
                     datalist: [],
                     value: ''
                   },
                   remote: true
                 }
               }
             ],
             motorbikeMake: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['14']}],
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
                     id: 'subcategory2',
                     value: ['930', '22', '23', '24', '25']
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
                     id: 'subcategory2',
                     value: ['930', '22', '23', '24', '25']
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
             motorbikeModel: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['14']}],
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
                     id: 'subcategory2',
                     value: ['930', '22', '23', '24', '25']
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
                 when: [{operator: 'IN', id: 'motorbikeMake', value: ['']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'motorbikeMake', value: ['']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: ''
                   }
                 }
               }
             ],
             anod: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080', '14']},
                   {
                     operator: 'NIN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080', '14']},
                   {
                     operator: 'IN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                     id: 'subcategory1',
                     value: ['13', '16', '18', '793', '61', '1340', '62']
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
                     id: 'subcategory1',
                     value: ['13', '16', '18', '793', '61', '1340', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             anoh: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080', '14']},
                   {
                     operator: 'NIN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080', '14']},
                   {
                     operator: 'IN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                     id: 'subcategory1',
                     value: ['13', '16', '18', '793', '61', '1340', '62']
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
                     id: 'subcategory1',
                     value: ['13', '16', '18', '793', '61', '1340', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             preciod: [
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['2064']},
                   {operator: 'IN', id: 'subcategory1', value: ['2069']}
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
                   {operator: 'IN', id: 'category', value: ['2064']},
                   {operator: 'NIN', id: 'subcategory1', value: ['2069']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'category', value: ['3']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'category', value: ['3']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             precioh: [
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['2064']},
                   {operator: 'IN', id: 'subcategory1', value: ['2069']}
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
                   {operator: 'IN', id: 'category', value: ['2064']},
                   {operator: 'NIN', id: 'subcategory1', value: ['2069']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'category', value: ['3']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'category', value: ['3']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             eslorah: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                   {operator: 'IN', id: 'category', value: ['1']},
                   {operator: 'NIN', id: 'subcategory1', value: ['695']}
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
                   {operator: 'IN', id: 'category', value: ['1']},
                   {operator: 'IN', id: 'subcategory1', value: ['695']},
                   {
                     operator: 'NIN',
                     id: 'subcategory2',
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
               },
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['1']},
                   {operator: 'IN', id: 'subcategory1', value: ['695']},
                   {
                     operator: 'IN',
                     id: 'subcategory2',
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
               }
             ],
             color: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                   {operator: 'IN', id: 'subcategory1', value: ['14', '1080']},
                   {
                     operator: 'IN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                   {operator: 'IN', id: 'subcategory1', value: ['14', '1080']},
                   {
                     operator: 'NIN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                     id: 'subcategory1',
                     value: ['13', '16', '18', '793', '61', '1340', '62']
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
                     id: 'subcategory1',
                     value: ['13', '16', '18', '793', '61', '1340', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             cajacambio: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['13']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['13']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             kms: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080', '14']},
                   {
                     operator: 'NIN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080', '14']},
                   {
                     operator: 'IN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
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
                     id: 'subcategory1',
                     value: [
                       '13',
                       '15',
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
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'subcategory1',
                     value: [
                       '13',
                       '15',
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
                     hidden: false
                   }
                 }
               }
             ],
             combustible: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080']},
                   {operator: 'NIN', id: 'subcategory2', value: ['64']}
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
                   {operator: 'IN', id: 'subcategory1', value: ['1080']},
                   {operator: 'IN', id: 'subcategory2', value: ['64']}
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
                     id: 'subcategory1',
                     value: ['13', '15', '16', '61', '1340', '62']
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
                     id: 'subcategory1',
                     value: ['13', '15', '16', '61', '1340', '62']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             potencia: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['13']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['13']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             numpuertas: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['13']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['13']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             ccd: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['14']}],
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
                     id: 'subcategory2',
                     value: ['930', '22', '23', '24', '25']
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
                     id: 'subcategory2',
                     value: ['930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             cch: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['1']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['14']}],
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
                     id: 'subcategory2',
                     value: ['930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true
                   }
                 }
               },
               {
                 when: [
                   {
                     operator: 'IN',
                     id: 'subcategory2',
                     value: ['930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             m2d: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['150']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Indiferente'},
                       {value: '10000', text: '10.000m2 (1 ha)'},
                       {value: '20000', text: '20.000m2 (2 ha)'},
                       {value: '40000', text: '40.000m2 (4 ha)'},
                       {value: '80000', text: '80.000m2 (8 ha)'},
                       {value: '160000', text: '160.000m2 (16 ha)'},
                       {value: '300000', text: '300.000m2 (30 ha)'},
                       {value: '500000', text: '500.000m2 (50 ha)'},
                       {value: '1000000', text: '1.000.000m2 (100 ha)'},
                       {value: '2000000', text: '2.000.000m2 (200 ha)'},
                       {value: '4000000', text: '4.000.000m2 (400 ha)'},
                       {value: '10000000', text: '10.000.000m2 (1000 ha)'}
                     ]
                   }
                 }
               },
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['32']},
                   {operator: 'NIN', id: 'subcategory1', value: ['150']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Indiferente'},
                       {value: '20', text: '20'},
                       {value: '30', text: '30'},
                       {value: '40', text: '40'},
                       {value: '50', text: '50'},
                       {value: '60', text: '60'},
                       {value: '70', text: '70'},
                       {value: '80', text: '80'},
                       {value: '90', text: '90'},
                       {value: '100', text: '100'},
                       {value: '120', text: '120'},
                       {value: '140', text: '140'},
                       {value: '180', text: '180'},
                       {value: '200', text: '200'},
                       {value: '300', text: '300'},
                       {value: '400', text: '400'},
                       {value: '500', text: '500'},
                       {value: '600', text: '600'},
                       {value: '700', text: '700'}
                     ]
                   }
                 }
               }
             ],
             m2h: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['150']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Indiferente'},
                       {value: '10000', text: '10.000m2 (1 ha)'},
                       {value: '20000', text: '20.000m2 (2 ha)'},
                       {value: '40000', text: '40.000m2 (4 ha)'},
                       {value: '80000', text: '80.000m2 (8 ha)'},
                       {value: '160000', text: '160.000m2 (16 ha)'},
                       {value: '300000', text: '300.000m2 (30 ha)'},
                       {value: '500000', text: '500.000m2 (50 ha)'},
                       {value: '1000000', text: '1.000.000m2 (100 ha)'},
                       {value: '2000000', text: '2.000.000m2 (200 ha)'},
                       {value: '4000000', text: '4.000.000m2 (400 ha)'},
                       {value: '10000000', text: '10.000.000m2 (1000 ha)'}
                     ]
                   }
                 }
               },
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['32']},
                   {operator: 'NIN', id: 'subcategory1', value: ['150']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Indiferente'},
                       {value: '20', text: '20'},
                       {value: '30', text: '30'},
                       {value: '40', text: '40'},
                       {value: '50', text: '50'},
                       {value: '60', text: '60'},
                       {value: '70', text: '70'},
                       {value: '80', text: '80'},
                       {value: '90', text: '90'},
                       {value: '100', text: '100'},
                       {value: '120', text: '120'},
                       {value: '140', text: '140'},
                       {value: '180', text: '180'},
                       {value: '200', text: '200'},
                       {value: '300', text: '300'},
                       {value: '400', text: '400'},
                       {value: '500', text: '500'},
                       {value: '600', text: '600'},
                       {value: '700', text: '700'}
                     ]
                   }
                 }
               }
             ],
             dormd: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             dormh: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             banosd: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             banosh: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             playa: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['156']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             tipog: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['160']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['160']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             vendedor: [
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['612']},
                   {operator: 'IN', id: 'subcategory1', value: ['1600']}
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
                   {operator: 'IN', id: 'category', value: ['612']},
                   {operator: 'NIN', id: 'subcategory1', value: ['1600']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'category', value: ['3', '184']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'category', value: ['3', '184']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             order_fields: [
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['2064']},
                   {operator: 'IN', id: 'subcategory1', value: ['2069']}
                 ],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'category', value: ['3']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true
                   }
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'category'}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'subcategory1'}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ],
             orden: [
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['1']},
                   {operator: 'IN', id: 'subcategory1', value: ['53']},
                   {operator: 'IN', id: 'subcategory2', value: ['54']},
                   {operator: 'IN', id: 'subcategory3', value: ['58']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'},
                       {value: 'ano', text: 'Más nuevos'},
                       {value: 'viejos', text: 'Más antiguos'},
                       {value: 'kilometraje', text: 'Horas de trabajo'}
                     ]
                   }
                 }
               },
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['1']},
                   {operator: 'IN', id: 'subcategory1', value: ['695']},
                   {operator: 'IN', id: 'subcategory2', value: ['696']}
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'},
                       {value: 'ano', text: 'Más nuevos'},
                       {value: 'viejos', text: 'Más antiguos'},
                       {value: 'eslora', text: 'Eslora'}
                     ]
                   }
                 }
               },
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['1']},
                   {operator: 'IN', id: 'subcategory1', value: ['1080', '14']},
                   {
                     operator: 'IN',
                     id: 'subcategory2',
                     value: ['64', '930', '22', '23', '24', '25']
                   }
                 ],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'},
                       {value: 'ano', text: 'Más nuevos'},
                       {value: 'viejos', text: 'Más antiguos'},
                       {value: 'kilometraje', text: 'Kilometraje'}
                     ]
                   }
                 }
               },
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['1']},
                   {
                     operator: 'IN',
                     id: 'subcategory1',
                     value: [
                       '13',
                       '15',
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
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'},
                       {value: 'ano', text: 'Más nuevos'},
                       {value: 'viejos', text: 'Más antiguos'},
                       {value: 'kilometraje', text: 'Kilometraje'}
                     ]
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'category', value: ['32']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: '',
                     datalist: [
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'},
                       {value: 'm2', text: 'm2'},
                       {value: 'preciom2', text: 'precio/m2'}
                     ]
                   }
                 }
               },
               {
                 when: [
                   {operator: 'IN', id: 'category', value: ['2064']},
                   {operator: 'IN', id: 'subcategory1', value: ['2069']}
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
                 when: [{operator: 'IN', id: 'category', value: ['3']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'category'}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: 'relevance',
                     datalist: [
                       {value: 'relevance', text: 'Relevancia'},
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'}
                     ]
                   }
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'subcategory1'}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: 'relevance',
                     datalist: [
                       {value: 'relevance', text: 'Relevancia'},
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'}
                     ]
                   }
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'subcategory2'}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: 'relevance',
                     datalist: [
                       {value: 'relevance', text: 'Relevancia'},
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'}
                     ]
                   }
                 }
               },
               {
                 when: [{operator: 'EXISTS', id: 'subcategory3'}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false,
                     value: 'relevance',
                     datalist: [
                       {value: 'relevance', text: 'Relevancia'},
                       {value: '', text: 'Fecha'},
                       {value: 'baratos', text: 'Más baratos'},
                       {value: 'caros', text: 'Más caros'}
                     ]
                   }
                 }
               }
             ],
             ikea: [
               {
                 when: [{operator: 'NIN', id: 'category', value: ['30']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'NIN', id: 'subcategory1', value: ['476']}],
                 then: {
                   data: {
                     disabled: true,
                     hidden: true,
                     value: ''
                   }
                 }
               },
               {
                 when: [{operator: 'IN', id: 'subcategory1', value: ['476']}],
                 then: {
                   data: {
                     disabled: false,
                     hidden: false
                   }
                 }
               }
             ]
           }
         }
       }
