# LoginHeader

Header for login layout

![](./assets/preview.png)

## Installation

```sh
$ npm install @s-ui/sui-login-header
```

## Usage

### Basic usage

#### Import package and use the component

```js
import LoginHeader from '@s-ui/sui-login-header'

const button = {
  text: 'Help',
  props: { // AtomButton props
    href: 'http://www.adevinta.es'
  }
}

const logo = 'https://statics.awesomecdn.com/images/adevinta.svg'

return (<LoginHeader button={button} logo={logo} />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/sui-login-header/lib/index';
```


> **Find full description and more examples in the [demo page](#).**
