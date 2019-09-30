import L from 'leaflet'
import Polygons from './shapes/Polygons'
import {mapViewModes} from './constants'
import MarkerManager from './marker-manager'
import LayerManager from './layer-manager'

export default class LeafletMap {
  constructor(properties) {
    this.setMapDOMInstance(properties.mapDOMInstance)
    this.createMarkerManager(properties.mapDOMInstance)
    this.createLayerManager(properties.id)
    this.buildMap(properties)
    this.setZoomControlPosition(properties.zoomControlPosition)
    this.buildShapes(properties)
    this.subscribeToLeafletMapEvents()
    this.layerManager.addChangeViewController(
      properties,
      this._map,
      this._normalViewText,
      this._satelliteViewText
    )
    this.markerManager.addIconMarkersToMap({
      icons: properties.icons,
      map: this._map
    })
    this.dispatchFirstLoad()
  }

  buildMap(properties) {
    this.layerManager.createMapLayers(properties)
    const mapOptions = {
      center: [properties.latitude, properties.longitude],
      dragging: properties.dragging,
      layers: [this.layerManager.layers.map[properties.selectedMapViewMode]],
      scrollWheelZoom: properties.scrollWheelZoom,
      zoom: properties.zoom,
      zoomControl: properties.zoomControl
    }
    this._map = L.map(properties.id, mapOptions)
    this.attachPropsToMapInstance(properties)
  }

  dispatchFirstLoad() {
    this.dispatchCustomEvent({
      eventName: 'leaflet_map_loaded',
      detail: this.getParamsForRequest()
    })
  }

  buildShapes(properties) {
    properties.polygons && this.buildPolygons({...properties})
  }

  setMapDOMInstance(mapDOMInstance) {
    this.mapDOM = mapDOMInstance
  }

  buildPolygons({
    currentGeoCode,
    hoverStyles,
    onLayerClick,
    onPolygonWithBounds,
    polygons,
    showLabels
  }) {
    this.polygons = new Polygons({
      currentGeoCode,
      hoverStyles,
      onLayerClick,
      onPolygonWithBounds,
      showLabels
    })
    const geoJSON = this.polygons.setPolygonsOnMap({map: this._map, polygons})
    this.layerManager.addLayersToGroup(geoJSON, 'geoJSON')
  }

  createMarkerManager(mapId) {
    this.markerManager = new MarkerManager(mapId)
  }

  createLayerManager() {
    this.layerManager = new LayerManager()
  }

  showHeatMap(url) {
    this.layerManager.addHeatMapLayer(url, this._map)
  }

  removeHeatMapLayer() {
    this._map.removeLayer(this.layerManager.layers.heatMap)
  }

  setZoomControlPosition(position) {
    this._map.zoomControl && this._map.zoomControl.setPosition(position)
  }

  attachPropsToMapInstance(properties) {
    this._map.props = properties
  }

  setCenter(options) {
    this.setCenter(
      L.latLng(parseFloat(options.latitude), parseFloat(options.longitude))
    )
    options.zoom && this.setZoom(options.zoom)
  }

  getBounds() {
    return {
      northEast: this._map.getBounds().getNorthEast(),
      northWest: this._map.getBounds().getNorthWest(),
      southEast: this._map.getBounds().getSouthEast(),
      southWest: this._map.getBounds().getSouthWest()
    }
  }

  getZoomLevel() {
    return this._map.getZoom()
  }

  getCenter() {
    return {
      latitude: this._map.getCenter().lat,
      longitude: this._map.getCenter().lng
    }
  }

  getCenterWithZoom() {
    return {
      ...this.getCenter(),
      zoom: this.getZoomLevel()
    }
  }

  clearLayer(layer) {
    layer.clearLayers()
    this._map.removeLayer(layer)
  }

  addLayerGroupToMap(layer) {
    this._map.addLayer(layer)
  }

  invalidateSize(effect) {
    this._map.invalidateSize(effect)
  }

  setView(viewType) {
    if (
      viewType === mapViewModes.NORMAL &&
      this._currentLayer !== mapViewModes.NORMAL
    ) {
      this._map.removeLayer(this.layerManager.layers.map[1])
      this._map.addLayer(this.layerManager.layers.map[0])
      this._currentLayer = viewType
    } else if (
      viewType === mapViewModes.SATELLITE &&
      this._currentLayer !== mapViewModes.SATELLITE
    ) {
      this._map.removeLayer(this.layerManager.layers.map[0])
      this._map.addLayer(this.layerManager.layers.map[1])
      this._currentLayer = viewType
    }
  }

  pnpoly(x, y, coords) {
    const vert = [[0, 0]]

    for (let i = 0; i < coords.length; i++) {
      for (let j = 0; j < coords[i].length; j++) {
        vert.push(coords[i][j])
      }
      vert.push(coords[i][0])
      vert.push([0, 0])
    }

    let inside = false
    for (let i = 0, j = vert.length - 1; i < vert.length; j = i++) {
      if (
        vert[i][0] > y !== vert[j][0] > y &&
        x <
          ((vert[j][1] - vert[i][1]) * (y - vert[i][0])) /
            (vert[j][0] - vert[i][0]) +
            vert[i][1]
      )
        inside = !inside
    }

    return inside
  }

  pointInBoundingBox(point, bounds) {
    return !(
      point.coordinates[1] < bounds[0][0] ||
      point.coordinates[1] > bounds[1][0] ||
      point.coordinates[0] < bounds[0][1] ||
      point.coordinates[0] > bounds[1][1]
    )
  }

  boundingBoxAroundPolyCoords(coords) {
    let xAll = []
    let yAll = []

    for (let i = 0; i < coords[0].length; i++) {
      xAll.push(coords[0][i][1])
      yAll.push(coords[0][i][0])
    }

    xAll = xAll.sort(function(a, b) {
      return a - b
    })
    yAll = yAll.sort(function(a, b) {
      return a - b
    })

    return [[xAll[0], yAll[0]], [xAll[xAll.length - 1], yAll[yAll.length - 1]]]
  }

  isPoly(l) {
    return (
      l.feature &&
      l.feature.geometry &&
      l.feature.geometry.type &&
      ['Polygon', 'MultiPolygon'].indexOf(l.feature.geometry.type) !== -1
    )
  }

  pointInPolygon(p, poly) {
    let insidePoly = false
    const coordinates = poly.coordinates
    if (coordinates[0] && coordinates[0][0]) {
      const coords = poly.type === 'Polygon' ? [coordinates] : poly.coordinates
      let insideBox = false
      for (let i = 0; i < coords.length; i++) {
        if (
          this.pointInBoundingBox(
            p,
            this.boundingBoxAroundPolyCoords(coords[i])
          )
        )
          insideBox = true
      }
      if (!insideBox) return false

      for (let i = 0; i < coords.length; i++) {
        if (this.pnpoly(p.coordinates[1], p.coordinates[0], coords[i]))
          insidePoly = true
      }
    }

    return insidePoly
  }

  subscribeToLeafletMapEvents() {
    const pointInPolygon = (p, poly) => this.pointInPolygon(p, poly)
    const isPoly = layer => this.isPoly(layer)
    this._map.on('mousemove', ({latlng}) => {
      const geoJSON = this.layerManager.getLayers(
        this.layerManager.layers.geoJSON
      )
      geoJSON.forEach((item, index) => {
        const point = {coordinates: [latlng.lng, latlng.lat], type: 'Point'}
        item.eachLayer(layer => {
          const {_path: path = {}} = layer
          const {classList} = path
          classList && classList.remove('re-Mappage-polygon-hover')
          classList && classList.remove('re-Mappage-polygonUncle-hover')
          if (
            isPoly(layer) &&
            pointInPolygon(point, layer.toGeoJSON().geometry)
          ) {
            classList &&
              classList.add(
                !item.options.isBrother
                  ? 're-Mappage-polygon-hover'
                  : 're-Mappage-polygonUncle-hover'
              )
          }
        })
      })
    })
    this._map.on('load', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_load',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('click', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_click',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('dragend', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_dragend',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('zoomend', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_zoomend',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('baselayerchange', e => {
      if (e.name === this._tileLayerNormal) {
        this.dispatchCustomEvent({
          eventName: 'leaflet_map_layer_normal',
          detail: this.getParamsForRequest()
        })
      }
    })
    this._map.on('baselayerchange', e => {
      if (e.name === this._tileLayerSatName) {
        this.dispatchCustomEvent({
          eventName: 'leaflet_map_layer_satellite',
          detail: this.getParamsForRequest()
        })
      }
    })
  }

  getMapBoundingBox() {
    const {northWest, southEast} = this.getBounds()
    return (
      northWest.lng +
      ',' +
      northWest.lat +
      ';' +
      northWest.lng +
      ',' +
      southEast.lat +
      ';' +
      southEast.lng +
      ',' +
      southEast.lat +
      ';' +
      southEast.lng +
      ',' +
      northWest.lat +
      ';' +
      northWest.lng +
      ',' +
      northWest.lat
    )
  }

  getParamsForRequest() {
    const {zoom, latitude, longitude} = this.getCenterWithZoom(this._map)
    return {
      latitude,
      longitude,
      mapBoundingBox: this.getMapBoundingBox(),
      zoomLevel: zoom
    }
  }

  clearMarkersLayer() {
    this.layerManager.layers.markers &&
      this.clearLayer(this.layerManager.layers.markers)
  }

  // Returns the elements in arrayToCompare that are not present in the arrayOrigin
  getPositiveDiffOfArraysOfPoints(arrayOrigin, arrayToCompare) {
    return arrayOrigin.reduce((accumulate, originalArrayPoint) => {
      !arrayToCompare.some(comparedArrayPoint => {
        const {Id, isSelected, propertyInfo} = comparedArrayPoint
        const {isFavorite, highlighted} = propertyInfo
        return (
          Id === originalArrayPoint.Id &&
          isSelected === originalArrayPoint.isSelected &&
          isFavorite === originalArrayPoint.propertyInfo.isFavorite &&
          highlighted === originalArrayPoint.propertyInfo.highlighted
        )
      }) && accumulate.push(originalArrayPoint)
      return accumulate
    }, [])
  }

  dispatchCustomEvent({eventName, detail}) {
    let event

    if (
      this.mapDOM.CustomEvent &&
      typeof this.mapDOM.CustomEvent === 'function'
    ) {
      event = new this.mapDOM.CustomEvent(eventName, {detail})
    } else {
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, true, true, detail)
    }

    this.mapDOM.dispatchEvent(event)
  }

  addLayersToMap(layerDataArray, groupName, deprecatedLabelNoPrice) {
    const layers = layerDataArray.map(layerData =>
      this.markerManager.createMarker(layerData, deprecatedLabelNoPrice)
    )
    this.layerManager.addLayersToGroup(layers, groupName)
    this.addLayerGroupToMap(this.layerManager.layers[groupName])
  }

  // We should check if there's a better solution for cluster poi's like the use of plugins http://leafletjs.com/plugins.html#clusteringdecluttering
  displayPois(pois, deprecatedLabelNoPrice) {
    if (!pois || !pois.length) {
      this.clearMarkersLayer()
    } else {
      // Get new Marker Type by checking one new POI.
      const {markerType} = pois[0]
      const shouldClearAllMarkers =
        markerType !== this.markerManager.currentMarkerType

      // If we render a new type of Marker, then we need to clear all Markers.
      shouldClearAllMarkers && this.clearMarkersLayer()

      // Get current array of map Markers.
      const currentMarkers = this.layerManager.getLayers(
        this.layerManager.layers.markers
      )

      // To prevent repaint all POIs that are already visible, get the news to Add and the ones to be Removed.
      const pointsToAdd = this.getPositiveDiffOfArraysOfPoints(
        pois,
        currentMarkers
      )
      const pointsToDelete = this.getPositiveDiffOfArraysOfPoints(
        currentMarkers,
        pois
      )
      const pointsAreClickable = markerType > 0

      // Keep the current lat/lng of a POI that is going to be repaint due to selection with a new random lat/lng.
      // In order to prevent that POIs change its lat/lon for de-clusterized properties.
      // markerType > 0 means that POIs are clickable, so they can be selected, and for instance, repaint.
      pointsToDelete.length &&
        pointsAreClickable &&
        pointsToAdd.forEach(pointToAdd => {
          const pointToRefresh = pointsToDelete.find(
            pointToDelete => pointToDelete.Id === pointToAdd.Id
          )

          if (pointToRefresh) {
            pointToAdd.latitude = pointToRefresh._latlng.lat
            pointToAdd.longitude = pointToRefresh._latlng.lng
          }
        })

      // Set new markerType (0, 1, 2).
      this.markerManager.resetMarkerType(markerType)
      this.markerManager.currentMarkerType = markerType

      // Remove pointsToDelete, and Add new POI's to map.
      pointsToDelete.length &&
        this.layerManager.removeLayersFromGroup(pointsToDelete, 'markers')
      pointsToAdd.length &&
        this.addLayersToMap(pointsToAdd, 'markers', deprecatedLabelNoPrice)
    }
  }
}
