# CmpUi

This component shows a Banner to inform the user that the website use cookies with different purposes. From here, it could just accept it and keep using the website or open the in order to know more about this and even customize the consents.

The banner will be shown only if the user hasn't accepted yet the consents.

**Required** You need to have loaded the cmp compliant library in order to be able to use this component. Otherwise it won't be shown.

## Installation

```sh
$ npm install @schibstedspain/react-cmp-ui --save
```

## Usage

### Basic usage
```js
import CmpUi from '@schibstedspain/react-cmp-ui'

return (
  <CmpUi
    companyName="Your Company Name LTD"
    logo="https://www.schibsted.es/wp-content/themes/Schibsted-spn/img/logo.png"
    privacyUrl="#privacy-url-to-configure"
  />
)
```
