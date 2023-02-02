# LoginPasswordReset

Work in progress.

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/sui-login-password-reset
```

## Usage

### Basic usage

#### Import package and use the component

```js
import LoginPasswordReset from '@s-ui/sui-login-password-reset'

const icons = {
  helpContent: 'https://frtassets.fotocasa.es/ut/statics/img/service-desk.svg',
  helpContentInfoTooltip: <InfoOutline />,
  inputShowPassword: <EyeOffOutline size="medium" />,
  inputHidePassword: <EyeOpenOutline size="medium" />
}

return (<LoginPasswordReset icons={icons} />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/sui-login-password-reset/lib/index';
```


> **Find full description and more examples in the [demo page](#).**
