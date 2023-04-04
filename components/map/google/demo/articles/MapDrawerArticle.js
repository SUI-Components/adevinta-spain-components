import {useState} from 'react'

import MapGoogle, {
  MapGoogleDrawer,
  MapGooglePolygon
} from 'components/map/google/src/index.js'
import PropTypes from 'prop-types'

import {Button, H1, Text} from '@s-ui/documentation-library'

const className = 'DemoGoogleMapsDrawer'

const polylineStyles = {
  strokeColor: '#2b91c1',
  strokeOpacity: 0.5,
  strokeWeight: 4
}

const polygonStyles = {
  ...polylineStyles,
  fillColor: '#2b91c1'
}

export default function MapDrawerArticle({apiKey, height, width}) {
  const [draw, setDraw] = useState(false)
  const [pathLatLangLiteral, setPathLatLangLiteral] = useState()

  const handleStopDrawing = ({path}) => {
    setPathLatLangLiteral(path)
    setDraw(false)
  }

  return (
    <div className={className}>
      <H1>GoogleMapsDrawer</H1>
      <Text>
        Google Maps Drawer component to use as children of Map Google component.
        This should be used to draw freehand shapes on the map.
      </Text>
      <div>
        <Button onClick={() => setDraw(!draw)}>
          {draw ? 'Stop drawing' : 'Start drawing'}
        </Button>
      </div>

      <div style={{width: '100%', height: '400px'}}>
        <MapGoogle
          apiKey={apiKey}
          height={height}
          width={width}
          center={{lat: 40.714728, lng: -73.998672}}
          isInteractive
        >
          {pathLatLangLiteral && (
            <MapGooglePolygon
              path={pathLatLangLiteral}
              options={polygonStyles}
            />
          )}
          <MapGoogleDrawer
            drawing={draw}
            onStopDrawing={handleStopDrawing}
            polylineOptions={polylineStyles}
          />
        </MapGoogle>
      </div>

      <textarea
        key={pathLatLangLiteral}
        width={width}
        height="200px"
        rows="5"
        readOnly
        style={{width}}
      >
        {`Drawing path: ${JSON.stringify(pathLatLangLiteral)}`}
      </textarea>
    </div>
  )
}

MapDrawerArticle.displayName = 'MapDrawerArticle'

MapDrawerArticle.propTypes = {
  apiKey: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}
