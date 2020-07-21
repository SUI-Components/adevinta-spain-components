# ScriptJsonLD

> Small script loader for structured data (json+ld)

## Installation

```sh
$ npm install @s-ui/react-script-json-ld
```

## Usage

### Basic usage
```js
import ScriptJsonLD from '@s-ui/react-script-json-ld'

const autoDealerStructuredData = {
  '@context': 'http://schema.org',
  '@type': 'AutoDealer',
  name: 'Dealer name',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avda. Maresme, 133',
    postalCode: '08302',
    addressLocality: 'Mataró'
  },
  image:
    'https://a.ccdn.es/coches/store_images_profesionales/123456_13032018103554.jpg',
  telephone: ['123456789'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '41.53194',
    longitude: '2.442895'
  }
}

return (<ScriptJsonLD json={autoDealerStructuredData} />)
```


> **Find full description and more examples in the [demo page](#).**