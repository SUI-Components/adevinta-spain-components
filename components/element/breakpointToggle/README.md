# BreakpointToggle

> Toogle elements. The 'breakpoint' option indicates when the item is displayed.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-breakpoint-toggle --save
```

## Usage

### Basic usage
```js
import BreakpointToggle from '@s-ui/react-breakpoint-toggle'

return (<div>
  <button>Normal button</button>
  <br />
  <BreakpointToggle breakpoint={575}>
    <button>Mobile button</button>
  </BreakpointToggle>
</div>)

```
