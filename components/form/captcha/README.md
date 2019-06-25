# FormCaptcha

> FormCaptcha uses reCAPTCHA v2 with Checkbox variation 

See [documentation](https://developers.google.com/recaptcha/docs/display)

## Installation

```sh
$ npm install @schibstedspain/sui-form-captcha --save
```

## Usage

### Basic usage
```js
import FormCaptcha from '@schibstedspain/sui-form-captcha'

return (
  <FormCaptcha
    locale="es"
    siteKey="key123456789"
    onSubmit={response => console.log(response)}
  />
)
```


> **Find full description and more examples in the [demo page](#).**