# FormBuilder

> Description

<!-- ![](./assets/preview.png) -->

Documentation: https://docs.mpi-internal.com/scmspain/all--lib-form-builder-docs/

Playground: https://form-builder-workbench.surge.sh/

## Installation

```sh
$ npm install @s-ui/react-form-builder --save
```

## Usage

### Basic usage

```js
import FormBuilder from '@s-ui/react-form-builder'

return <FormBuilder />
```

> **Find full description and more examples in the [demo page](#).**

## Update Fields Value Programatically

To update a field programatically you can return an object from the onChange callback, and the key values inside the object will trigger a change in the field.

In this example we are chaning the value of the field `color` to `yellow` allways.

```js
const onChange = fields => {
    ...
    return {
        color: 'yellow'
    }
}

<FormBuilder
    ...
    onChange={onChange}
/>
```
