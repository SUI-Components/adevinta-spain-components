# LoginPasswordReset

![Image of the component main interface](./assets/preview.png)

## About this component

The purpose of this component is to offer a password recovery interface integrated with the common authentication system of Adevinta.

To achieve so, the component not only renders visual elements, but also encapsulates and offers all the logic related with the password reset process, including error management and execution of use cases in charge of performing requests to the backend endpoints.

## Installation and requirements

This component has been developed and tested under the following environment:

* Node 16
* NPM 8
* React 17

SUI toolkit is required in order to make the component work, as other Adevinta projects do.

Although it may work under other environments, it is not guaranteed and has not been tested.

This component can be installed just by running the following command:

```sh
$ npm install @s-ui/sui-login-password-reset
```

## Basic rendering example

### Import package and use the component

In order to be invoked, the component needs at least to receive the `endpoints` property, which contains the URLs where the endpoints involved in the password recovery process are located.

```js
import LoginPasswordReset from '@s-ui/sui-login-password-reset'

const endpoints = {
  resetPassword: `http://reset-password-endpoint.com/api/v1/reset-password`,
  changePassword: `http://change-password-endpoint.com/api/v1/change-password`
}

return (<LoginPasswordReset endpoints={endpoints} />)
```

### Import the styles (Sass)

To ensure the component is rendered correctly applying the default styles, it is important to require them in the Sass file of the application.

Most of the component styles can be customized by overwriting the default value of some Scss tokens, to know more, please check the section of styles customization.

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/sui-login-password-reset/lib/index';
```

## Component customization

This component has been designed with customization and extensibility in mind, as it needs to be adaptable to different scenarios and requeriments depending on the project where it is used.

To ensure this extensibility there are available different mechanisms, each of them to cover a specific area or feature of the component.

### I18n

This component uses the `@s-ui/i18n` package to internationalize all texts shown in the interface. Literals are available in `src/literals/es-ES.js`.

Given that it may be necessary to customize these texts, there is available a mechanism to total or partially override them.

As an example, in a hypothetical scenario where the following literals structure is available:

(Only a fragment of the file is shown as an example)

```js
{
  LOGIN_CROSS: {
    PASSWORD_RESET: {
      DOUBTS: {
        TEXT: 'Envíanos un <a href="mailto:xxxxxx">email</a> o llámanos al <a href="tel:xxxxxx">xxxxx</a>.',
        TITLE: '¿Tienes dudas?',
        TOOLTIP:
          'Horario de atención al cliente: <br> De lunes a viernes de 9 a 20 h <br> Sábados de 9 a 14 h'
      }
    }
  }
}
```

In case of needing to override the literals `LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TITLE` and `LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TEXT`, without altering other existing literals, the application should update its own literals file to include the following structure:

```js
{
  LOGIN_CROSS: {
    PASSWORD_RESET: {
      DOUBTS: {
        TEXT: 'Overrided text.',
        TITLE: 'Overrided title'
      }
    }
  }
}
```

And then, it should pass its own instance of `@s-ui/i18n` to the component, through the `i18n` prop.

It is very important to verify that the following points are respected in order to ensure the extensibility works as expected:

1. The component expects to receive the instance of `@s-ui/i18n` within the `i18n`property. Avoid passing an object with the literals structure, as it will not work.

2. Overrided literals must maintain the same structure used by the component. All texts are always contained within the `LOGIN_CROSS` object, to avoid collisions with other already existing literals.

When receiving the `i18n` prop, the component will automatically detect that there are custom values for the literals `LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TITLE` and `LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TEXT`, but it will keep the default value for `LOGIN_CROSS.PASSWORD_RESET.DOUBTS.TOOLTIP`.

As an example, the following code shows how the component can be rendered including the `i18n` prop.

```js
import LoginPasswordReset from '@s-ui/sui-login-password-reset'

const {i18n} = useContext(Context)

return (<LoginPasswordReset i18n={i18n} {...otherProps} />)
```

**Note how the entire i18n instance is passed to the component, instead of just the literals object!**

### Style customization

TBD

### Icons

TBD

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

### Endpoints
TBD
### Events
TBD
## Technical comments
TBD

-> Algunas cosas deberían estar en un repo aparte pero está TBD. Por ejemplo el dominio que para simplificar está aquí.

-> Explicar quizás estructura de directorios de componentes ?