# TableBasic

> Table basic to show tabular information.

![Table Basic](./assets/preview.png)

## Installation

```sh
$ npm install @s-ui/react-table-basic --save
```

## Usage

### Basic usage

```js
import TableBasic from '@s-ui/react-table-basic'

const contentHeadMook = [
  'Versión',
  'Año',
  'Combustible',
  'Potencia',
  'Precio',
  ''
]

const contentBodyMook = [
  [
    {
      content: 'Volkswagen Golf Edition 1.0 TSI 85kW',
      type: 'th',
      isNowrap: true
    },
    {content: '2019'},
    {content: 'Gasolina'},
    {content: '115vc'},
    {content: 'Desde 24.000€'},
    {content: 'Más información'}
  ],
  [
    {
      content: 'Volkswagen Golf Edition 1.0 TSI 85kW',
      type: 'th',
      isNowrap: true
    },
    {content: '2019'},
    {content: 'Gasolina'},
    {content: '115vc'},
    {content: 'Desde 24.000€'},
    {content: 'Más información'}
  ]
]

return <TableBasic head={contentHeadMook} body={contentBodyMook} />
```

> **Find full description and more examples in the [demo page](#).**
