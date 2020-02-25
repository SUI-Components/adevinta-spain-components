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
$ npm install @s-ui/react-perf-dynamic-rendering --save
```

## Usage

### Basic usage
```js
import PerfDynamicRendering from '@s-ui/react-perf-dynamic-rendering'

return (
  <>
    <PerfDynamicRendering userAgent={navigator.userAgent}>
      <img src='https://huge-image.com/panda.jpg'/>
    </PerfDynamicRendering>

    <PerfDynamicRendering disabled={true} userAgent={navigator.userAgent}>
      <img src='https://huge-image.com/panda_02.jpg'/>
    </PerfDynamicRendering>

    <PerfDynamicRendering height={50} userAgent={navigator.userAgent}>
      <img src='https://huge-image.com/panda_02.jpg'/>
    </PerfDynamicRendering>

    <PerfDynamicRendering height={50} userAgent={navigator.userAgent} forceRender={true}>
      <p>This Image will be render in client and server even when the image it is outside of the viewport</p>
      <p>Or in the server even when is a regular user agent</p>
      <p>The practical effect of this, is make this component 100% transparent</p>
      <img src='https://huge-image.com/panda_02.jpg'/>
    </PerfDynamicRendering>

  </>
)
```

### Props

Common props you may want to specify include:

* `disabled` - Flag that determines if you want disable the Intersection Observer lazy load strategy. And use a controller lazy strategy ONLY in client side.
* `forceRender` - avoid any check and render always.
* `height` - Number that determines the height of the component that we're waiting in pixels.
* `userAgent` - String with the userAgent that will be used to check if is bot or normal user.
* `placeholder` - A component or html element that is used as a placeholder
* `rootMargin` - String in the format of the css margin property. the values serves to grow or shrink each side of the root element's bounding box before computing intersections.
* `botsUserAgents` - An Array of strings that is used to set the lists of userAgents for which the element is always rendered

> **Find full description and more examples in the [demo page](#).**