import L from 'leaflet'

export default class SearchMapPolygons {
  _radius = {}

  removeCircleFromMap(map) {
    map.removeLayer(this._radius)
  }

  static zoomIn(evt) {
    const map = evt.target._map
    map.setView(evt.latlng, map.getZoom() + 2)
  }

  printCircleOnMap({map, circle}) {
    this._radius = L.circle([circle.latitude, circle.longitude], {
      radius: circle.radius
    })

    this._radius.addTo(map)
  }

  setCircleOnMap({map, circle}) {
    this.removeCircleFromMap(map)

    this.printCircleOnMap({map, circle})

    return true
  }
}
