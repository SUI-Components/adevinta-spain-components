# ShareSocialMediaButtonsGroup

> Component to share in the different social medias

## Installation

```sh
$ npm install @s-ui/sui-share-social-media-buttons-group
```

## Usage

### Basic usage

#### Import package and use the component

**PROPS**
  * **buttonsToShow**: Array that contains the keys to choose which buttons to display and their order.
  * **onShare**: Func to execute after share.
  * **paramsUrlString**: Parameters to send to the social media url.
  * **socialMediaDictionary**: Dictionary for setting the social media buttons.

```js
import ShareSocialMediaButtonsGroup from '@s-ui/sui-share-social-media-buttons-group'

return (<ShareSocialMediaButtonsGroup />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
// @import 'your theme';
@import '~@s-ui/sui-share-social-media-buttons-group/lib/index';
```


> **Find full description and more examples in the [demo page](#).**
