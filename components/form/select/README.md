# FormSelect

> Wrapper around a select html element that gives a consistent look'n'feel across devices yet keeping the native functionality on being used.

![](https://user-images.githubusercontent.com/1561955/51612938-bce53d80-1f22-11e9-95f8-75ac892a4f5e.png)

## Installation

```sh
$ npm install @s-ui/react-form-select --save
```

## Usage

### Basic usage
```js
import FormSelect from '@s-ui/react-form-select'

const OPTIONS = [
  { key: 'default', value: '', content: '--Please choose an option--' },
  { key: 'dog', value: 'dog', content: 'Dog' },
  { key: 'cat', value: 'cat', content: 'Cat' },
  { key: 'hamster', value: 'hamster', content: 'Hamster' },
  { key: 'parrot', value: 'parrot', content: 'Parrot' }
]

return (
  <FormSelect
    options={OPTIONS}
    onChange={(e, data) => console.log(data)}
  />
)
```

```sass
@import '~@s-ui/react-form-select/lib/index';
```

> **Find full description and more examples in the [demo page](#).**