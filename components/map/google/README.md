# MapGoogle

Simple bindings to the Google Maps API using React. Most of the components provided by this library are wrappers of [react-google-maps-api](https://github.com/JustFly1984/react-google-maps-api)

## Installation

```sh
$ npm install @s-ui/sui-map-google
```

## Usage

#### Map

Render a map. Toggle between a static map image and a dynamic map using `isInteractive` prop. The dynamic map is a wrapper of [GoogleMap](https://react-google-maps-api-docs.netlify.app/#googlemap) but also loads Google Maps script out of the box. Use `loaderNode` and `errorNode` to optionally display loading and error states. All the props defined in the wrapped component are also available.

```js
import MapGoogle from '@s-ui/sui-map-google'

const MapGoogleExample = () => {
  return <MapGoogle apiKey="AIzaSyDp7wqS1IyRZCvMMsY2LX2V1TXY4Lh8UGA" />
}
```

##### Add-ons

Render a set of add-ons on the dynamic map setting the following components as children of `MapGoogle`.

- [Marker](https://react-google-maps-api-docs.netlify.app/#marker)
- [Circle](https://react-google-maps-api-docs.netlify.app/#circle)
- [Polygon](https://react-google-maps-api-docs.netlify.app/#polygon)
- [Polyline](https://react-google-maps-api-docs.netlify.app/#polyline)
- [Rectangle](https://react-google-maps-api-docs.netlify.app/#rectangle)

```js
import MapGoogle from '@s-ui/sui-map-google'
import MapGoogleMarker from '@s-ui/sui-map-google/lib/marker/index.js'

const MapGoogleAddOnsExample = () => {
  return (
    <MapGoogle apiKey="AIzaSyDp7wqS1IyRZCvMMsY2LX2V1TXY4Lh8UGA">
      <MapGoogleMarker position={{lat: 40.714728, lng: -73.998672}} />
    </MapGoogle>
  )
}
```

#### MapImage

Render a static map image. Similar to `MapGoogle` it requires the `apiKey` prop. The rest of the props are the parameters defined in the Maps Static API [documentation](https://developers.google.com/maps/documentation/maps-static/start) (e.g. `center` and `zoom`).

It is recommended, depending on your usage of this static map, a digital signature - in addition to an API key - to authenticate requests. So, if you need to use a signed url, you can use `signedUrl` prop. This prop has priority over the rest of the props that generate the url when you don't need a signature. Pay attention to the [digital signature documentation](https://developers.google.com/maps/documentation/maps-static/digital-signature?hl=en) to see how to create this url in your web app.

```js
import MapGoogleImage from '@s-ui/sui-map-google/lib/image/index.js'

const MapGoogleImageExample = () => {
  return (
    <MapGoogleImage
      apiKey="AIzaSyDp7wqS1IyRZCvMMsY2LX2V1TXY4Lh8UGA"
      center="40.714728,-73.998672"
      zoom="12"
      size="600x600"
      alt="Mapa"
      width="600"
      height="600"
    />
  )
}
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/sui-map-google/lib/index';
```

> **Find full description and more examples in the [demo page](#).**
