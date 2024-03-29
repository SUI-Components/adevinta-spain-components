import L from 'leaflet'

import Circle from './shapes/Circle'
import Polygons from './shapes/Polygons'
import {mapViewModes} from './constants'
import LayerManager from './layer-manager'
import MarkerManager from './marker-manager'

const DRAW_CLASS = 'drawnPolygon'
let simplifyGeoJson = null

export default class LeafletMap {
  constructor(properties) {
    this.setSimplifyDraw(properties)
    this.setMapDOMInstance(properties.mapDOMInstance)
    this.createMarkerManager(properties.mapDOMInstance)
    this.createLayerManager(properties.id)
    this.buildMap(properties)
    this.setZoomControlPosition(properties.zoomControlPosition)
    this.buildShapes(properties)
    this.subscribeToLeafletMapEvents()
    this.layerManager.addChangeViewController(properties, this._map, this._normalViewText, this._satelliteViewText)
    this.markerManager.addIconMarkersToMap({
      icons: properties.icons,
      map: this._map
    })
    this.preInitDrawing(properties)
    this.dispatchFirstLoad()
  }

  setViewCenter(coordinates, zoom) {
    this._map.setView(new L.LatLng(coordinates[0], coordinates[1]), zoom)
  }

  setSimplifyDraw({simplifyDraw, simplifyDrawMinimumCoordinates, simplifyTolerance, simplifyHighQuality}) {
    this._simplifyDraw = simplifyDraw
    this._simplifyDrawMinimumCoordinates = simplifyDrawMinimumCoordinates
    this._simplifyTolerance = simplifyTolerance
    this._simplifyHighQuality = simplifyHighQuality
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
    properties.radius && this.buildCircle({...properties})
  }

  setMapDOMInstance(mapDOMInstance) {
    this.mapDOM = mapDOMInstance
  }

  buildPolygons({currentGeoCode, hoverStyles, onLayerClick, onPolygonWithBounds, polygons, radius, showLabels}) {
    this.polygons = new Polygons({
      currentGeoCode,
      hoverStyles,
      onLayerClick,
      onPolygonWithBounds,
      radius,
      showLabels
    })
    this.polygons.setPolygonsOnMap({map: this._map, polygons})
  }

  buildCircle({latitude, longitude, radius, onPolygonWithBounds}) {
    this.circle = new Circle({
      latitude,
      longitude,
      radius,
      onPolygonWithBounds
    })
    this.circle.setCircleOnMap({map: this._map})
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
    this.setCenter(L.latLng(parseFloat(options.latitude), parseFloat(options.longitude)))
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

  isCoordinatesVisibleOnScreen(latLng) {
    return this._map.getBounds().contains(latLng)
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
    if (viewType === mapViewModes.NORMAL && this._currentLayer !== mapViewModes.NORMAL) {
      this._map.removeLayer(this.layerManager.layers.map[1])
      this._map.addLayer(this.layerManager.layers.map[0])
      this._currentLayer = viewType
    } else if (viewType === mapViewModes.SATELLITE && this._currentLayer !== mapViewModes.SATELLITE) {
      this._map.removeLayer(this.layerManager.layers.map[0])
      this._map.addLayer(this.layerManager.layers.map[1])
      this._currentLayer = viewType
    }
  }

  subscribeToLeafletMapEvents() {
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
    this._map.on('drag', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_drag',
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
    this.layerManager.layers.markers && this.clearLayer(this.layerManager.layers.markers)
  }

  // Returns the elements in arrayToCompare that are not present in the arrayOrigin
  getPositiveDiffOfArraysOfPoints({pois, currentMarkers}) {
    return pois.reduce((accumulate, originalArrayPoint) => {
      !currentMarkers.some(comparedArrayPoint => {
        return (
          comparedArrayPoint.Id === originalArrayPoint.Id &&
          comparedArrayPoint.options.icon.options.className.includes(originalArrayPoint.customClassName)
        )
      }) && accumulate.push(originalArrayPoint)
      return accumulate
    }, [])
  }

  getPositiveDiffOfArraysOfPointsAux({pois, currentMarkers}) {
    return currentMarkers.reduce((accumulate, originalArrayPoint) => {
      !pois.some(comparedArrayPoint => {
        return (
          comparedArrayPoint.Id === originalArrayPoint.Id &&
          originalArrayPoint.options.icon.options.className.includes(comparedArrayPoint.customClassName)
        )
      }) && accumulate.push(originalArrayPoint)
      return accumulate
    }, [])
  }

  dispatchCustomEvent({eventName, detail}) {
    let event

    if (this.mapDOM.CustomEvent && typeof this.mapDOM.CustomEvent === 'function') {
      event = new this.mapDOM.CustomEvent(eventName, {detail})
    } else {
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, true, true, detail)
    }

    this.mapDOM.dispatchEvent(event)
  }

  addLayersToMap(layerDataArray, groupName) {
    const layers = layerDataArray.map(layerData => this.markerManager.createMarker(layerData))
    this.layerManager.addLayersToGroup(layers, groupName)
    this.addLayerGroupToMap(this.layerManager.layers[groupName])
  }

  // We should check if there's a better solution for cluster poi's like the use of plugins http://leafletjs.com/plugins.html#clusteringdecluttering
  displayPois(pois) {
    if (!pois || !pois.length) {
      this.clearMarkersLayer()
    } else {
      // Get new Marker Type by checking one new POI.
      const {markerType} = pois[0]
      const shouldClearAllMarkers = markerType !== this.markerManager.currentMarkerType

      // If we render a new type of Marker, then we need to clear all Markers.
      shouldClearAllMarkers && this.clearMarkersLayer()

      // Get current array of map Markers.
      const currentMarkers = this.layerManager.getLayers(this.layerManager.layers.markers)

      // To prevent repaint all POIs that are already visible, get the news to Add and the ones to be Removed.
      const pointsToAdd = this.getPositiveDiffOfArraysOfPoints({
        pois,
        currentMarkers
      })
      const pointsToDelete = this.getPositiveDiffOfArraysOfPointsAux({
        currentMarkers,
        pois
      })
      const pointsAreClickable = markerType > 0

      // Keep the current lat/lng of a POI that is going to be repaint due to selection with a new random lat/lng.
      // In order to prevent that POIs change its lat/lon for de-clusterized properties.
      // markerType > 0 means that POIs are clickable, so they can be selected, and for instance, repaint.
      pointsToDelete.length &&
        pointsAreClickable &&
        pointsToAdd.forEach(pointToAdd => {
          const pointToRefresh = pointsToDelete.find(pointToDelete => pointToDelete.Id === pointToAdd.Id)

          if (pointToRefresh) {
            pointToAdd.latitude = pointToRefresh._latlng.lat
            pointToAdd.longitude = pointToRefresh._latlng.lng
          }
        })

      // Set new markerType (0, 1, 2).
      this.markerManager.resetMarkerType(markerType)
      this.markerManager.currentMarkerType = markerType

      // Remove pointsToDelete, and Add new POI's to map.
      pointsToDelete.length && this.layerManager.removeLayersFromGroup(pointsToDelete, 'markers')
      pointsToAdd.length && this.addLayersToMap(pointsToAdd, 'markers')
    }
  }

  preInitDrawing(properties) {
    // For the drawing-in-progress controller object
    this._drawingPolygon = null

    // For the already finished Geo JSON drawn shape
    this._drawnPolygonRemoveButton = null
    this._drawnPolygon =
      L.geoJson(properties.initialDrawnPolygon, {
        className: DRAW_CLASS
      }).getLayers()[0] || null

    // Save drawing events
    this._drawingEvents = {
      onDrawPolygonStop: properties.onDrawPolygonStop,
      onDrawPolygonFinish: properties.onDrawPolygonFinish,
      onDrawPolygonRemove: properties.onDrawPolygonRemove
    }

    // Add an existing drawn polygon if any
    if (this._drawnPolygon) {
      this.initAsyncDrawingLayer().then(() => {
        // Fit and center map view to drawn polygon
        const bounds = this._drawnPolygon?.getBounds()
        if (bounds?.isValid()) this._map.fitBounds(bounds, {animate: false})

        // Add it to the map
        this.drawingAddFinishedPolygon(this._drawnPolygon, false)
      })
    }
  }

  async initAsyncDrawingLayer() {
    if (L.Draw && this._drawControl) return // do nothing if already loaded

    // Load drawing plugin
    const [simplifyModule] = await Promise.all([import('@turf/simplify'), import('leaflet-draw')])

    simplifyGeoJson = simplifyModule.default

    // Create editable layer
    const drawnItems = new L.FeatureGroup()
    this._map.addLayer(drawnItems)

    // Crate controller
    this._drawControl = new L.Control.Draw({edit: {featureGroup: drawnItems}})
    this._map.addControl(this._drawControl)

    /**
     * Add drawing events
     */
    this._map.on(L.Draw.Event.CREATED, ({layer: drawnPolygon}) => {
      this.drawingAddFinishedPolygon(drawnPolygon)
    })
    this._map.on(L.Draw.Event.DRAWSTOP, () => {
      this._drawingEvents.onDrawPolygonStop()
    })
  }

  drawingCheckPlugin() {
    if (!L.Draw) throw new Error('`leaflet-draw` is still not loaded!')
  }

  drawingStartPolygon() {
    const polygonOption = this._drawControl.options.polygon
    this._drawingPolygon = new L.Draw.Polygon(this._map, polygonOption)
    this._drawingPolygon.setOptions({shapeOptions: {className: DRAW_CLASS}})
    this._drawingPolygon.enable()
  }

  drawingStopPolygon() {
    if (!this._drawingPolygon) return -1
    this._drawingPolygon.disable()
    this._drawingPolygon = null
  }

  drawingAddFinishedPolygon(drawnPolygon, triggerEvent = true) {
    // add polygon to map

    const shouldSimplifyDraw =
      this._simplifyDraw && drawnPolygon._latlngs[0].length >= this._simplifyDrawMinimumCoordinates

    const simplifiedPolygon =
      (shouldSimplifyDraw &&
        L.geoJson(
          simplifyGeoJson(drawnPolygon.toGeoJSON(), {
            tolerance: this._simplifyTolerance,
            highQuality: this._simplifyHighQuality
          }),
          {
            className: DRAW_CLASS
          }
        ).getLayers()[0]) ||
      null

    this._drawnPolygon = shouldSimplifyDraw ? simplifiedPolygon : drawnPolygon
    this._map.addLayer(this._drawnPolygon)

    // add the 'remove' button
    const icon = L.divIcon({
      className: `${DRAW_CLASS}RemoveButton`,
      iconSize: [40, 40]
    })
    const coords = this._drawnPolygon._latlngs[0]
    const buttonCoord = coords.reduce((acc, coord) => (coord.lat > acc.lat ? coord : acc), coords[0])
    this._drawnPolygonRemoveButton = L.marker([buttonCoord.lat, buttonCoord.lng], {icon})
      .on('click', () => this.drawingClear())
      .addTo(this._map)

    if (triggerEvent) {
      this._drawingEvents.onDrawPolygonFinish(this._drawnPolygon.toGeoJSON())
    }
  }

  drawingClear() {
    if (this._drawnPolygon) {
      this._map.removeLayer(this._drawnPolygon)
      this._map.removeLayer(this._drawnPolygonRemoveButton)
      this._drawingEvents.onDrawPolygonRemove({
        polygon: this._drawnPolygon.toGeoJSON(),
        mapBoundingBox: this.getMapBoundingBox()
      })
      this._drawnPolygon = null
      this._drawnPolygonRemoveButton = null
    }
  }

  getPublicAPI() {
    return {
      isCoordinatesVisibleOnScreen: latLng => this.isCoordinatesVisibleOnScreen(latLng),
      setView: viewType => this.setView(viewType),
      zoomIn: () => this._map.zoomIn(),
      zoomOut: () => this._map.zoomOut(),
      drawing: {
        load: () => this.initAsyncDrawingLayer(),
        startPolygon: () => {
          this.drawingCheckPlugin()
          this.drawingClear()
          this.drawingStartPolygon()
        },
        stopPolygon: () => {
          this.drawingCheckPlugin()
          this.drawingStopPolygon()
        },
        clear: () => {
          this.drawingCheckPlugin()
          this.drawingClear()
        }
      }
    }
  }
}
