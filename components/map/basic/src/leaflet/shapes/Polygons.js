import L from 'leaflet'

export default class SearchMapPolygons {
  _polygonList = []

  _storedPolygons = {}

  SPAIN_POLYGON_CENTER = {
    latitude: 40.4096,
    longitude: -3.68624
  }

  SPAIN_POLYGON_NAME = 'geom_724_0_0_0_0_0_0_0_0'

  constructor({hoverStyles, onPolygonWithBounds}) {
    this.hoverStyles = hoverStyles
    this.onPolygonWithBounds = onPolygonWithBounds
  }

  removePolygonsFromMap(map) {
    if (this._polygonList.length > 0) {
      this._polygonList.map(polygon => map.removeLayer(polygon))
    }
  }

  static zoomIn(evt) {
    const map = evt.target._map
    map.setView(evt.latlng, map.getZoom() + 2)
  }

  printPolygonOnMap({map, polygon}) {
    const {hoverStyles} = this
    const polygonGeoJSon = L.geoJson(polygon, {
      className: 'scm-map__area',
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseout: function() {
            polygonGeoJSon.resetStyle(this)
          },
          mouseover: function() {
            this.setStyle(hoverStyles)

            if (!L.Browser.ie && !L.Browser.opera) {
              this.bringToFront()
            }
          }
        })
      }
    })

    this._polygonList.push(polygonGeoJSon)
    polygonGeoJSon.addTo(map)

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

    polygons.map(polygon => {
      const {fitBound = true} = polygon

      if (fitBound) {
        bounds = bounds
          ? bounds.extend(this.printPolygonOnMap({map, polygon}))
          : this.printPolygonOnMap({map, polygon})
      } else {
        this.printPolygonOnMap({map, polygon})
      }
    })

    this.onPolygonWithBounds({bounds, map})

    return true
  }
}
