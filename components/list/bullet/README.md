# ListBullet

> Bullet list component
> It has two behaviours, standard, responsive and responsive block.

![demo](https://media.github.mpi-internal.com/user/955/files/37b7a980-8886-11ea-955c-9e017877ccd4)

## Installation

```sh
$ npm install @s-ui/react-list-bullet --save
```

## Usage

### Basic usage

```js
import ListBullet from '@s-ui/react-list-bullet'

const listItems = [
  {
    illustration: 'https://s.ccdn.es/images/motivation-search.svg',
    title: 'Publica con total seguridad',
    text:
      'Te damos todas las herramientas para un proceso de venta seguro'
  },
  {
    illustration: 'https://s.ccdn.es/images/motivation-trust.svg',
    title: 'Gestiona tu anuncio según tus necesidades',
    text: 'Edita y renueva tu anuncio tantas veces como necesites'
  }
]

return (<ListBullet listItems={listItems} />)
```

### Responsive usage

```js
import ListBullet from '@s-ui/react-list-bullet'

const listItems = [
  {
    illustration: 'https://s.ccdn.es/images/motivation-search.svg',
    title: 'Publica con total seguridad',
    text:
      'Te damos todas las herramientas para un proceso de venta seguro'
  },
  {
    illustration: 'https://s.ccdn.es/images/motivation-trust.svg',
    title: 'Gestiona tu anuncio según tus necesidades',
    text: 'Edita y renueva tu anuncio tantas veces como necesites'
  }
]

return (<ListBullet listItems={listItems} responsive="responsive" />)
```

### Responsive Block usage

```js
import ListBullet from '@s-ui/react-list-bullet'

const listItems = [
  {
    illustration: 'https://s.ccdn.es/images/motivation-search.svg',
    title: 'Publica con total seguridad',
    text:
      'Te damos todas las herramientas para un proceso de venta seguro'
  },
  {
    illustration: 'https://s.ccdn.es/images/motivation-trust.svg',
    title: 'Gestiona tu anuncio según tus necesidades',
    text: 'Edita y renueva tu anuncio tantas veces como necesites'
  }
]

return (<ListBullet listItems={listItems} responsive="responsiveBlock" />)
```

> **Find full description and more examples in the [demo page](https://adevinta-spain-components.now.sh/workbench/list/bullet/demo).**
