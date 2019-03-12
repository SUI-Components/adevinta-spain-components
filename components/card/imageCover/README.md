# CardImageCover

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-card-image-cover --save
```

## Usage

### Basic usage

```js
import CardImageCover from '@schibstedspain/sui-card-image-cover'

const cardData = {
  media: {
    alt: "Lorem ipsum",
    src: "https://s.ccdn.es/images/landing-seller-hero@2x.jpg"
  },
  title: "Lorem ipsum dolor sit amet",
  text: "Nulla orci mauris, ultricies hendrerit augue eu",
  url: "https://www.coches.net",
  tag: {
    url: 'http://www.coches.net/novedades/',
    text: 'News',
    type: 'novedades'
  }
}

return (<CardImageCover {...cardData} />)
```


> **Find full description and more examples in the [demo page](#).**
