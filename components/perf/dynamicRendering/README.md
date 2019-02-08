# PerfDynamicRendering

This component improves performance using [dynamic rendering technique](https://developers.google.com/search/docs/guides/dynamic-rendering) at Component level.

It uses the `userAgent` prop to detect if the user is a bot or not.

*If you're a bot*, no matter if you're on the server side or the browser side, the wrapped content will be always rendered.

*If you're an user*:
  - On the server side, nothing is rendered.
  - On the client side, the content will be rendered when it is about to interesect the viewport.

You could completely disable the behaviour of the component using the prop `disabled` and thus it will render nothing until it is enabled. This could be useful to enable the component on the browser side when the user performs an action, like a click.

## Installation

```sh
$ npm install @schibstedspain/react-perf-dynamic-rendering --save
```

## Usage

### Basic usage
```js
import PerfDynamicRendering from '@schibstedspain/sui-perf-dynamic-rendering'

return (
  <React.Fragment>
    <PerfDynamicRendering userAgent={navigator.userAgent}>
      <img src='https://huge-image.com/panda.jpg'/>
    </PerfDynamicRendering>

    <PerfDynamicRendering disabled={true} userAgent={navigator.userAgent}>
      <img src='https://huge-image.com/panda_02.jpg'/>
    </PerfDynamicRendering>

    <PerfDynamicRendering height={50} userAgent={navigator.userAgent}>
      <img src='https://huge-image.com/panda_02.jpg'/>
    </PerfDynamicRendering>

    <PerfDynamicRendering height={50} userAgent={navigator.userAgent} force={true}>
      <p>This Image will be render in client and server even when the image it is outside of the viewport</p>
      <p>Or in the server even when is a regular user agent</p>
      <p>The practical effect of this, is make this component 100% transparent</p>
      <img src='https://huge-image.com/panda_02.jpg'/>
    </PerfDynamicRendering>

  </React.Fragment>
)
```

> **Find full description and more examples in the [demo page](#).**
