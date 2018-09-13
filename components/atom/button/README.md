# Button

> Atom Element: SUI button

![](./assets/screenshot.png)

## Installation

```sh
$ npm install @schibstedspain/sui-atom-button --save
```

## Usage

### Basic usage

```js
import Button from '@schibstedspain/sui-atom-button'

return (<div>
  <Button>Normal</Button>
  <Button focused>Focused</Button>
  <Button size='large' disabled>Disabled</Button>
</div>)

```

### Flexible props

All props available from regular buttons can be used.

```js
import Button from '@schibstedspain/sui-atom-button'

return (<div>
  <Button onClick={() => alert('Primary with onClick')}>
    Primary with onClick
  </Button>
  <Button type='accent' title="Title: Lorem Ipsum">
    Accent with title
  </Button>
  <Button type='secondary' className='customClass'>
    Secondary with className
  </Button>
</div>)

```

### Button inside Form

By default `AtomButton` inside a `form` will submit the form

```js
import Button from '@schibstedspain/sui-atom-button'

return (
  <form onSubmit={() => window.alert('Submit!')}>
    <div>
      <input type="text" placeholder="Put your name" />
    </div>
    <div>
      <Button>Submit</Button>
    </div>
  </form>
)
```

If we need several `AtomButton` inside a form we can specify which one we want to submit the form w/ props `isButton` and `isSubmit`

```js
import Button from '@schibstedspain/sui-atom-button'

return (
  <form onSubmit={() => window.alert('Submit!')}>
    <div>
      <input type="text" placeholder="Put your name" />
    </div>
    <div>
      <Button isButton onClick={() => window.alert('Click!')}>Click Me!</Button>
      <Button isButton onClick={() => window.alert('Click!')}>Click Me!</Button>
    </div>
    <div>
      <Button isSubmit>Submit</Button>
    </div>
  </form>
)
```

### Rendering a link
When `link` property is passed, the component will render an html link.

```js
import Button from '@schibstedspain/sui-atom-button'

return (
  <Button link href='http://www.schibsted.com/' target='_blank'>Link</Button>
)

```

output:

```html
<a class="sui-AtomButton sui-AtomButton--link" href="http://www.schibsted.com/" target='_blank'>Link</a>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/button).**
