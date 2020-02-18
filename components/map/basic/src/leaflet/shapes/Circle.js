import L from 'leaflet'

export default class SearchMapCircle {
  _circle = {}

  constructor({latitude, longitude, radius, onPolygonWithBounds}) {
    this.latitude = latitude
    this.longitude = longitude
    this.radius = radius
    this.onPolygonWithBounds = onPolygonWithBounds
  }

  removeCircleFromMap(map) {
    map.removeLayer(this._circle)
  }

  static zoomIn(evt) {
    const map = evt.target._map
    map.setView(evt.latlng, map.getZoom() + 2)
  }

  printCircleOnMap({map}) {
    this._circle = L.circle([this.latitude, this.longitude], {
      radius: this.radius
    })

    this._circle.addTo(map)
  }

  setCircleOnMap({map}) {
    this.removeCircleFromMap(map)
    this.printCircleOnMap({map})

    const bounds = this._circle.getBounds()
    this.onPolygonWithBounds({bounds, map})
  }
}
