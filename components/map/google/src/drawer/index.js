/* eslint-disable no-undef */
import {useEffect} from 'react'

import PropTypes from 'prop-types'

import {useGoogleMap} from '@react-google-maps/api'

import {DISABLED_MAP_INTERACTION_OPTIONS, ENABLED_MAP_INTERACTION_OPTIONS} from './settings.js'

function GoogleMapsDrawer({drawing = false, onStopDrawing, polylineOptions = {}}) {
  const mapsLibrary = google?.maps // Looking for global google object
  const mapRef = useGoogleMap() // Get map instance from context

  useEffect(() => {
    if (drawing) {
      startDrawing()
    } else {
      stopDrawing()
    }
    return () => clearListeners()
  }, [drawing]) // eslint-disable-line react-hooks/exhaustive-deps

  const draw = ({polyline}) => {
    mapsLibrary.event.addListener(mapRef, 'mousemove', event => polyline.getPath().push(event.latLng))
  }

  const clearListeners = () => {
    mapsLibrary.event.clearListeners(mapRef, 'mousedown')
    mapsLibrary.event.clearListeners(mapRef, 'mousemove')
    mapsLibrary.event.clearListeners(mapRef, 'mouseup')
    mapsLibrary.event.clearListeners(mapRef, 'touchmove')
  }

  // This will convert the path from MVCArray<LatLng> to a LatLngLiteral array
  const convertMVCArrayToLatLngLiteralArray = ({polyline}) => {
    const path = polyline.getPath().getArray()

    return path.map(({lat, lng}) => ({
      lat: lat(),
      lng: lng()
    }))
  }

  const stopDrawing = ({polyline} = {}) => {
    if (!mapsLibrary || !mapRef || !polyline) return []

    const path = convertMVCArrayToLatLngLiteralArray({polyline})

    // Remove the polyline from the map
    polyline.setMap(null)

    mapRef.setOptions(ENABLED_MAP_INTERACTION_OPTIONS)

    onStopDrawing({path})
  }

  const startDrawing = () => {
    if (!mapsLibrary || !mapRef) return []

    mapRef.setOptions(DISABLED_MAP_INTERACTION_OPTIONS)

    const polyline = new mapsLibrary.Polyline({
      map: mapRef,
      clickable: false,
      options: polylineOptions
    })

    mapsLibrary.event.addListener(mapRef, 'touchmove', e => e.preventDefault())
    mapsLibrary.event.addListener(mapRef, 'mousedown', () => draw({polyline}))
    mapsLibrary.event.addListener(mapRef, 'mouseup', () => stopDrawing({polyline}))
  }

  // No need to render anything, just listen to drawing events and draw on the map
  return null
}

GoogleMapsDrawer.displayName = 'GoogleMapsDrawer'
GoogleMapsDrawer.propTypes = {
  drawing: PropTypes.bool,
  onStopDrawing: PropTypes.func.isRequired,
  polylineOptions: PropTypes.object
}

export default GoogleMapsDrawer
