import L from 'leaflet'

export default class SearchMapPolygons {
  _polygonList = []

  _storedPolygons = {}

  SPAIN_POLYGON_CENTER = {
    latitude: 40.4096,
    longitude: -3.68624
  }

  SPAIN_POLYGON_NAME = 'geom_724_0_0_0_0_0_0_0_0'

  BASE_CLASSNAME = 'scm-map__area'

  constructor({
    currentGeoCode,
    hoverStyles,
    onLayerClick,
    onPolygonWithBounds,
    showLabels
  }) {
    this.currentGeoCode = currentGeoCode
    this.hoverStyles = hoverStyles
    this.onLayerClick = onLayerClick
    this.onPolygonWithBounds = onPolygonWithBounds
    this.showLabels = showLabels
  }

  removePolygonsFromMap(map) {
    if (this._polygonList.length > 0) {
      this._polygonList.forEach(polygon => map.removeLayer(polygon))
    }
  }

  static zoomIn(evt) {
    const map = evt.target._map
    map.setView(evt.latlng, map.getZoom() + 2)
  }

  printPolygonOnMap({fitBound, map, polygon}) {
    const {BASE_CLASSNAME, hoverStyles} = this
    const className = fitBound ? `${BASE_CLASSNAME} fitBound` : BASE_CLASSNAME

    const that = this

    const getTooltipElement = feature => feature.getTooltip()?.getElement()

    const polygonGeoJSon = L.geoJson(polygon, {
      isBrother: polygon.isBrother,
      className,
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseout: function() {
            polygonGeoJSon.resetStyle(this)

            const tooltipElement = getTooltipElement(this)
            if (tooltipElement) tooltipElement.classList.remove('is-hover')
          },
          mouseover: function() {
            this.setStyle(hoverStyles)

            const tooltipElement = getTooltipElement(this)
            if (tooltipElement) tooltipElement.classList.add('is-hover')

            if (!L.Browser.ie && !L.Browser.opera) {
              this.bringToFront()
            }
          },
          click: function(event) {
            if (!layer?.feature?.properties?.Code) return

            const {Code} = layer.feature.properties

            return !that.currentGeoCode.includes(Code)
              ? that.onLayerClick(event)
              : () => {}
          }
        })
      }
    })

    this._polygonList.push(polygonGeoJSon)

    polygonGeoJSon.addTo(map)

    if (this.showLabels) {
      polygonGeoJSon.eachLayer(function(layer) {
        if (
          !layer?.feature?.properties?.LocationName ||
          !layer?.feature?.properties?.Code
        )
          return

        try {
          const {Code, LocationName} = layer.feature.properties

          !that.currentGeoCode.includes(Code) &&
            layer
              .bindTooltip(LocationName, {
                permanent: true,
                direction: 'center',
                className: fitBound ? 'is-fit-bound' : ''
              })
              .openTooltip()
        } catch (error) {}
      })
    }

    const polygonName = polygon.properties && polygon.properties.Code

    if (polygonName !== this.SPAIN_POLYGON_NAME) {
      const bounds = polygonGeoJSon.getBounds()
      if (bounds.isValid()) {
        return bounds
      }
    } else {
      const {latitude, longitude} = this.SPAIN_POLYGON_CENTER
      const centerSpain = new L.LatLng(latitude, longitude)
      map.panTo(centerSpain)
    }
  }

  setPolygonsOnMap({map, polygons}) {
    let bounds
    this.removePolygonsFromMap(map)

    if (!(polygons instanceof Array)) {
      polygons = [polygons]
    }

    polygons.forEach((polygon = {}) => {
      const {fitBound = true} = polygon

      if (fitBound) {
        bounds = bounds
          ? bounds.extend(this.printPolygonOnMap({fitBound, map, polygon}))
          : this.printPolygonOnMap({fitBound, map, polygon})
      } else {
        this.printPolygonOnMap({fitBound, map, polygon})
      }
    })

    this.onPolygonWithBounds({bounds, map})

    return this._polygonList
  }
}
