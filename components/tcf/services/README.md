# TcfServices

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-tcf-services
```

## Usage

### Basic usage
```js
import TcfServices from '@s-ui/react-tcf-services'

return (
<TcfServices>
    {service => (
        <TCFContainer
          getConsentStatus={() => service.getConsentStatus()}
          getVendorList={() => service.getVendorList()}
          loadUserConsent={() => service.loadUserConsent()}
          saveUserConsent={({purpose, vendor}) =>
            service.saveUserConsent({purpose, vendor})
          }
        />
    )}
  </TCFServices>)
```


> **Find full description and more examples in the [demo page](#).**