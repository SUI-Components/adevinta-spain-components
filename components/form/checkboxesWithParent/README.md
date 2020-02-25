# FormCheckboxesWithParent

Component to show a list of checkboxes with parent checkbox.

## Context

- Parent will be checked when all children are.
- When a child is not checked, the parent neither.
- On check parent all children will be checked (or unchecked, depending on parent status). 


## Installation

```sh
$ npm install @s-ui/react-form-checkboxes-with-parent --save
```


## Usage

### Basic usage
```js
import FormCheckboxesWithParent from '@s-ui/react-form-checkboxes-with-parent'

return (<FormCheckboxesWithParent />)
```

### Add component styles to index.scss file:

```sass
@import '~@s-ui/react-form-checkboxes-with-parent/lib/index'
```


> **Find full description and more examples in the [demo page](http://sui-components.now.sh/workbench/form/checkboxesWithParent/demo).**