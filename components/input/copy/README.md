# InputCopy

> Component that combines an input with a button to copy the value of the input.

## Installation

```sh
$ npm install @s-ui/sui-input-copy
```

## Usage

### Basic usage

#### Import package and use the component

**PROPS**
  * **buttonProps**: Object for pass props to the button.
  * **buttonText**: Literal for the button before copied.
  * **buttonTextAfterCopied**: Literal for the button after copying.
  * **isCopied**: Variable for control the component from outside.
  * **labelText**: Literal for label
  * **onCopy**: Function to execute after the text has been copied
  * **textToCopy**: Literal to be copied.
  * **timeoutReactivateButton**: Number of miliseconds to reactivate button (set to 0 to prevent the execution).

```js
import InputCopy from '@s-ui/sui-input-copy'

return (<InputCopy />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
// @import 'your theme';
@import '~@s-ui/sui-input-copy/lib/index';
```


> **Find full description and more examples in the [demo page](#).**
