import {Component} from 'react'

import PropTypes from 'prop-types'

import {mapLanguages, mapViewModes, NO_OP} from './leaflet/constants'

class MapBasic extends Component {
  constructor(props) {
    super(props)
    this.setMapEventDefinition()
    this.isHeatmapVisible = false
    this.isSatelliteView = false
    this.mapInstance = undefined
  }

  setMapEventDefinition() {
    this.mapEventList = [
      {
        name: 'leaflet_map_click',
        handleFunction: evt => this.props.onMapClick(evt.detail)
      },
      {
        name: 'leaflet_map_drag',
        handleFunction: evt => this.props.onMapDrag(evt.detail)
      },
      {
        name: 'leaflet_map_dragend',
        handleFunction: evt => this.props.onMapDragEnd(evt.detail)
      },
      {
        name: 'leaflet_map_loaded',
        handleFunction: evt => this.props.onMapLoad(evt.detail)
      },
      {
        name: 'leaflet_map_zoomend',
        handleFunction: evt => this.props.onMapZoomEnd(evt.detail)
      },
      {
        name: 'leaflet_map_layer_normal',
        handleFunction: evt => this.props.onNormalView(evt.detail)
      },
      {
        name: 'leaflet_map_poiclick',
        handleFunction: evt => this.props.onPoiClick(evt.detail)
      },
      {
        name: 'leaflet_map_poidragend',
        handleFunction: evt => this.props.onPoiDragEnd(evt.detail)
      },
      {
        name: 'leaflet_map_poimouseout',
        handleFunction: () => this.props.onPoiMouseOut()
      },
      {
        name: 'leaflet_map_poimouseover',
        handleFunction: evt => this.props.onPoiMouseOver(evt.detail)
      },
      {
        name: 'leaflet_map_poimousemove',
        handleFunction: evt => this.props.onPoiMouseMove(evt.detail)
      },
      {
        name: 'leaflet_map_layer_satellite',
        handleFunction: evt => this.props.onSatelliteView(evt.detail)
      }
    ]
  }

  getMapConfig() {
    return {
      appCode: this.props.appCode,
      appId: this.props.appId,
      attribution: this.props.attribution,
      currentGeoCode: this.props.currentGeoCode,
      dragging: this.props.isInteractable,
      enableViewMenu: this.props.enableViewMenu,
      heatMapUrl: this.props.heatMapUrl,
      hoverStyles: this.props.hoverStyles,
      icons: this.props.icons,
      id: this.props.id,
      initialDrawnPolygon: this.props.initialDrawnPolygon,
      language: this.props.language,
      latitude: this.props.center[0],
      literals: this.props.literals,
      longitude: this.props.center[1],
      mapDOMInstance: this.mapDOMInstance,
      mapViewModes: this.props.mapViewModes,
      maxZoom: this.props.maxZoom,
      minZoom: this.props.minZoom,
      onDrawPolygonStop: this.props.onDrawPolygonStop,
      onDrawPolygonFinish: this.props.onDrawPolygonFinish,
      onDrawPolygonRemove: this.props.onDrawPolygonRemove,
      onLayerClick: this.props.onLayerClick,
      onPolygonWithBounds: this.props.onPolygonWithBounds,
      polygons: this.props.polygons,
      radius: this.props.radius,
      scrollWheelZoom: this.props.scrollWheelZoom,
      selectedMapViewMode: this.props.selectedMapViewMode,
      showHeatmap: this.props.showHeatmap,
      showLabels: this.props.showLabels,
      showSatelliteView: this.props.showSatelliteView,
      simplifyDraw: this.props.simplifyDraw,
      simplifyDrawMinimumCoordinates: this.props.simplifyDrawMinimumCoordinates,
      simplifyTolerance: this.props.simplifyTolerance,
      simplifyHighQuality: this.props.simplifyHighQuality,
      zoom: this.props.zoom,
      zoomControl: this.props.zoomable,
      zoomControlPosition: this.props.zoomControlPosition
    }
  }

  subscribeToMapEvents() {
    this.mapEventList.forEach(mapEvent =>
      this.mapDOMInstance.addEventListener(
        mapEvent.name,
        mapEvent.handleFunction
      )
    )
  }

  unsubscribeFromMapEvents() {
    this.mapEventList.forEach(mapEvent =>
      this.mapDOMInstance.removeEventListener(
        mapEvent.name,
        mapEvent.handleFunction
      )
    )
  }

  checkWhichViewShouldBeDisplayed(showSatelliteView) {
    if (showSatelliteView && !this.isSatelliteView) {
      this.isSatelliteView = true
      this.mapInstance.setView(mapViewModes.SATELLITE)
    } else if (!showSatelliteView && this.isSatelliteView) {
      this.isSatelliteView = false
      this.mapInstance.setView(mapViewModes.NORMAL)
    }
  }

  checkIfHeatMapShouldBeDisplayed(showHeatmap, url) {
    if (showHeatmap && !this.isHeatmapVisible) {
      this.isHeatmapVisible = true
      this.mapInstance.showHeatMap(url)
    } else if (!showHeatmap && this.isHeatmapVisible) {
      this.isHeatmapVisible = false
      this.mapInstance.removeHeatMapLayer()
    }
  }

  componentWillUnmount() {
    this.unsubscribeFromMapEvents()
  }

  shouldComponentUpdate() {
    // The component itself has no changes. All changes are managed through leaflet maps api.
    return false
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps({
    zoom,
    center,
    heatMapUrl,
    pois,
    showHeatmap,
    isSetViewEnabled,
    showSatelliteView
  }) {
    if (isSetViewEnabled) {
      this.mapInstance.setViewCenter(center, zoom)
    }

    this.mapInstance.displayPois(pois)
    this.checkIfHeatMapShouldBeDisplayed(showHeatmap, heatMapUrl)
    this.checkWhichViewShouldBeDisplayed(showSatelliteView)
  }

  componentDidMount() {
    const LeafletMap = require('./leaflet/map').default

    this.subscribeToMapEvents()
    this.mapInstance = new LeafletMap(this.getMapConfig())
    this.mapInstance.displayPois(this.props.pois)

    this.setPublicAPI(this.mapInstance)
  }

  setPublicAPI(mapInstance) {
    const publicAPI = mapInstance.getPublicAPI()
    this.props.onAvailablePublicAPI(publicAPI)
  }

  render() {
    return (
      <div
        className="re-Wrapper sui-MapBasic"
        style={this.props.height && {height: this.props.height}}
        ref={ele => {
          this.mapDOMInstance = ele
        }}
        id={this.props.id}
      />
    )
  }
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
   * A GEO JSON object for an existing user's drawn polygon
   */
  initialDrawnPolygon: PropTypes.object,
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
  /**
   * Capture a public API object which enables us to trigger some actions from the outside
   */
  onAvailablePublicAPI: PropTypes.func,
  onDrawPolygonStop: PropTypes.func,
  onDrawPolygonFinish: PropTypes.func,
  onDrawPolygonRemove: PropTypes.func,
  onLayerClick: PropTypes.func,
  onMapClick: PropTypes.func,
  onMapDrag: PropTypes.func,
  onMapDragEnd: PropTypes.func,
  onMapLoad: PropTypes.func,
  onMapZoomEnd: PropTypes.func,
  onNormalView: PropTypes.func,
  onPoiClick: PropTypes.func,
  onPoiDragEnd: PropTypes.func,
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
   * A number used to render a radius shape.
   */
  radius: PropTypes.number,
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
   * If true updates the map center and zoom when the component render
   */
  isSetViewEnabled: PropTypes.bool,
  /**
   * This property indicates if the map zooms in or out in response to mouse wheel events.
   */
  scrollWheelZoom: PropTypes.bool,
  /**
   * This properties indicates if you want to simplify the polygons when draw and their options.
   */
  simplifyDraw: PropTypes.bool,
  simplifyDrawMinimumCoordinates: PropTypes.number,
  simplifyTolerance: PropTypes.number,
  simplifyHighQuality: PropTypes.bool,
  /**
   * This property indicates the action to be performed with the polygon. By DEFAULT it does a fitBounds.
   */
  onPolygonWithBounds: PropTypes.func
}

MapBasic.defaultProps = {
  attribution:
    'Map &copy; 1987-2020 <a href="https://developer.here.com" title="APIs and SDKs to build powerful location-aware apps">HERE.com</a>',
  center: [40.00237, -3.99902],
  currentGeoCode: [],
  id: 'map-container',
  isInteractable: true,
  language: mapLanguages.ENGLISH,
  mapViewModes: [mapViewModes.NORMAL, mapViewModes.SATELLITE],
  maxZoom: 20,
  minZoom: 6,
  onAvailablePublicAPI: NO_OP,
  onDrawPolygonStop: NO_OP,
  onDrawPolygonFinish: NO_OP,
  onDrawPolygonRemove: NO_OP,
  onLayerClick: NO_OP,
  onMapClick: NO_OP,
  onMapDrag: NO_OP,
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
  simplifyDraw: false,
  simplifyDrawMinimumCoordinates: 0,
  simplifyTolerance: 0.002,
  simplifyHighQuality: false,
  zoom: 14,
  zoomable: false,
  zoomControlPosition: 'bottomleft'
}

MapBasic.displayName = 'MapBasic'

export {mapLanguages}
export default MapBasic
