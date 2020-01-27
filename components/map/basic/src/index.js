import React, {memo, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import LeafletMap from './leaflet/map'
import {mapLanguages, mapViewModes, NO_OP} from './leaflet/constants'

function MapBasic(props) {
  const isHeatmapVisible = useRef(false)
  const isSatelliteView = useRef(false)
  const mapDOMInstance = useRef()
  const mapInstance = useRef({
    displayPois: pois => {},
    setView: view => {},
    showHeatMap: url => {},
    removeHeatMapLayer: NO_OP
  })
  const mapEventList = useRef([])

  const setMapEventDefinition = () => {
    mapEventList.current = [
      {
        name: 'leaflet_map_click',
        handleFunction: ({detail}) => props.onMapClick(detail)
      },
      {
        name: 'leaflet_map_dragend',
        handleFunction: ({detail}) => props.onMapDragEnd(detail)
      },
      {
        name: 'leaflet_map_loaded',
        handleFunction: ({detail}) => props.onMapLoad(detail)
      },
      {
        name: 'leaflet_map_zoomend',
        handleFunction: ({detail}) => props.onMapZoomEnd(detail)
      },
      {
        name: 'leaflet_map_layer_normal',
        handleFunction: ({detail}) => props.onNormalView(detail)
      },
      {
        name: 'leaflet_map_poiclick',
        handleFunction: ({detail}) => props.onPoiClick(detail)
      },
      {
        name: 'leaflet_map_poimouseout',
        handleFunction: () => props.onPoiMouseOut()
      },
      {
        name: 'leaflet_map_poimouseover',
        handleFunction: ({detail}) => props.onPoiMouseOver(detail)
      },
      {
        name: 'leaflet_map_poimousemove',
        handleFunction: ({detail}) => props.onPoiMouseMove(detail)
      },
      {
        name: 'leaflet_map_layer_satellite',
        handleFunction: ({detail}) => props.onSatelliteView(detail)
      }
    ]
  }

  setMapEventDefinition()

  const subscribeToMapEvents = () => {
    mapEventList.current.forEach(({name, handleFunction}) =>
      mapDOMInstance.current.addEventListener(name, handleFunction)
    )
  }

  const unsubscribeFromMapEvents = () => {
    mapEventList.current.forEach(({name, handleFunction}) =>
      mapDOMInstance.current.removeEventListener(name, handleFunction)
    )
  }

  const checkWhichViewShouldBeDisplayed = showSatelliteView => {
    if (showSatelliteView && !isSatelliteView.current) {
      isSatelliteView.current = true
      mapInstance.current.setView(mapViewModes.SATELLITE)
    } else if (!showSatelliteView && isSatelliteView.current) {
      isSatelliteView.current = false
      mapInstance.current.setView(mapViewModes.NORMAL)
    }
  }

  const checkIfHeatMapShouldBeDisplayed = (showHeatmap, url) => {
    if (showHeatmap && !isHeatmapVisible.current) {
      isHeatmapVisible.current = true
      mapInstance.current.showHeatMap(url)
    } else if (!showHeatmap && isHeatmapVisible.current) {
      isHeatmapVisible.current = false
      mapInstance.current.removeHeatMapLayer()
    }
  }

  useEffect(
    function() {
      const getMapConfig = () => ({
        ...props,
        dragging: props.isInteractable,
        latitude: props.center[0],
        longitude: props.center[1],
        mapDOMInstance,
        zoomControl: props.zoomable
      })

      const {heatMapUrl, pois, showHeatmap, showSatelliteView} = props
      subscribeToMapEvents()

      if (mapInstance.current === null) {
        subscribeToMapEvents()
        mapInstance.current = new LeafletMap(getMapConfig())
        mapInstance.current.displayPois(pois)
      } else {
        mapInstance.current.displayPois(pois)
        checkIfHeatMapShouldBeDisplayed(showHeatmap, heatMapUrl)
        checkWhichViewShouldBeDisplayed(showSatelliteView)
      }

      return () => unsubscribeFromMapEvents()
    },
    [props]
  )

  return (
    <div
      className="re-Wrapper sui-MapBasic"
      style={props.height && {height: props.height}}
      id={props.id}
      ref={mapDOMInstance}
    />
  )
}

MapBasic.propTypes = {
  appCode: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  /**
   * The attribution control allows you to display attribution data in a small text box on a map.
   */
  attribution: PropTypes.string,
  /**
   * An array composed by lat and lng like: [lat, lng]
   */
  center: PropTypes.array,
  currentGeoCode: PropTypes.arrayOf.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /**
   * Heat map url is the source where we are going to get the heatMap layers
   */
  heatMapUrl: PropTypes.string,
  /**
   * In some cases our styles will be loaded after our map being created. In this cases we must specify our map height by code F.E on sui-studio
   */
  height: PropTypes.string,
  /**
   * Leaflet path options when hovering layers https://leafletjs.com/reference-1.5.0.html#path-option
   */
  hoverStyles: PropTypes.object,
  /**
   * The DOM Id that we would like to have on our map div if none is provided 'map-container' will be its id.
   */
  id: PropTypes.string,
  /**
   * Language code for requesting a map tile rendered in a specific language.
   */
  language: PropTypes.oneOf(Object.values(mapLanguages)),
  literals: PropTypes.object,
  /**
   * Array of map view modes. Those models are defined could be: mapViewModes.NORMAL, mapViewModes.SATELLITE
   */
  mapViewModes: PropTypes.array,
  /**
   * A number used to lock the max zoom that a user can do.
   */
  maxZoom: PropTypes.number,
  /**
   * A number used to lock the min zoom or zoom out that a user can do.
   */
  minZoom: PropTypes.number,
  onLayerClick: PropTypes.func,
  onMapClick: PropTypes.func,
  onMapDragEnd: PropTypes.func,
  onMapLoad: PropTypes.func,
  onMapZoomEnd: PropTypes.func,
  onNormalView: PropTypes.func,
  onPoiClick: PropTypes.func,
  onPoiMouseOut: PropTypes.func,
  onPoiMouseOver: PropTypes.func,
  onPoiMouseMove: PropTypes.func,
  onSatelliteView: PropTypes.func,
  /**
   * An array of points of interest. More info and examples on readme.
   */
  pois: PropTypes.array,
  /**
   * An array of polygons. Where we can build forms on our map.
   */
  polygons: PropTypes.object,
  /**
   * A number to specify which of our map view modes is selected.
   * For example if our mapViewModes are: [mapViewModes.NORMAL, mapViewModes.SATELLITE] and we set this to 0 our selected map will be NORMAL.
   */
  selectedMapViewMode: PropTypes.number,
  /**
   * Whether our map should show the heat map. The usage of this prop is attached to our heatMapUrl.
   */
  showHeatmap: PropTypes.bool,
  showLabels: PropTypes.bool,
  /**
   * Used to call setView internal function and force to show the Satellite view.
   */
  showSatelliteView: PropTypes.bool,
  /**
   * The init zoom of our map
   */
  zoom: PropTypes.number,
  /**
   * Set to false to disable the zoom
   */
  zoomable: PropTypes.bool,
  /**
   * Where should be displayed our zoomControl if it is enabled.
   */
  zoomControlPosition: PropTypes.string,
  /**
   * Show layers menu to let the user select satellite or normal.
   */
  enableViewMenu: PropTypes.bool,
  /**
   * An array of icons that will be added as markers to our map. Not the same purpose as POI's
   */
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      popup: PropTypes.shape({
        content: PropTypes.string.isRequired
      }),
      iconUrl: PropTypes.string.isRequired,
      size: PropTypes.array,
      anchor: PropTypes.array,
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  ),
  /**
   * BY DEFAULT set to true. Set it to false to disable the use to drag and move on the map.
   */
  isInteractable: PropTypes.bool,
  /**
   * This property indicates if the map zooms in or out in response to mouse wheel events.
   */
  scrollWheelZoom: PropTypes.bool,
  /**
   * This property indicates the action to be performed with the polygon. By DEFAULT it does a fitBounds.
   */
  onPolygonWithBounds: PropTypes.func
}

MapBasic.defaultProps = {
  attribution:
    'Map &copy; 1987-2019 <a href="http://developer.here.com">HERE</a>',
  center: [40.00237, -3.99902],
  currentGeoCode: [],
  id: 'map-container',
  isInteractable: true,
  language: mapLanguages.ENGLISH,
  mapViewModes: [mapViewModes.NORMAL, mapViewModes.SATELLITE],
  maxZoom: 20,
  minZoom: 6,
  onLayerClick: NO_OP,
  onMapClick: NO_OP,
  onMapDragEnd: NO_OP,
  onMapLoad: NO_OP,
  onMapZoomEnd: NO_OP,
  onNormalView: NO_OP,
  onPoiClick: NO_OP,
  onPoiMouseMove: NO_OP,
  onPoiMouseOut: NO_OP,
  onPoiMouseOver: NO_OP,
  onPolygonWithBounds: ({bounds, map}) => bounds && map.fitBounds(bounds),
  onSatelliteView: NO_OP,
  scrollWheelZoom: true,
  selectedMapViewMode: 0,
  showLabels: false,
  zoom: 14,
  zoomable: false,
  zoomControlPosition: 'bottomleft'
}

MapBasic.displayName = 'MapBasic'

export default memo(MapBasic, () => true)
export {mapLanguages}
