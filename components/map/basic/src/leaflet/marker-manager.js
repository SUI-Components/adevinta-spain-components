import L from 'leaflet'

class MarkerManager {
  constructor(mapDOMInstance) {
    this.setMapDOMInstance(mapDOMInstance)
    this.setMarkerDefaults()

    this.POPUP_WAIT_TIME = 1000
  }

  setMapDOMInstance(mapDOMInstance) {
    this.mapDOM = mapDOMInstance
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

  createMarker(item) {
    const events = [
      {
        eventName: 'add',
        eventHandler: ({target}) => (target._icon.id = target.Id)
      },
      {eventName: 'click', eventHandler: e => this.isPoiClicked(e)},
      {eventName: 'mouseover', eventHandler: e => this.onMouseOver(e)},
      {eventName: 'mouseout', eventHandler: e => this.onMouseOut(e)},
      {eventName: 'mousemove', eventHandler: e => this.onMouseMove(e)}
    ]

    const {
      latitude,
      longitude,
      isSelected,
      markerType,
      propertyInfo = {}
    } = item

    const marker = L.marker([latitude, longitude], {
      icon: this.getIconFor({item})
    })
    marker.propertyInfo = propertyInfo
    marker.markerType = markerType
    marker.isSelected = isSelected
    marker.Id = propertyInfo.propertyId
    marker.latlon = latitude + ',' + longitude
    events.map(event => marker.on(event.eventName, event.eventHandler))
    return marker
  }

  onMouseOver(evt) {
    const {propertyInfo, markerType} = evt.target
    if (markerType === 0) {
      return
    }
    const {originalEvent} = evt

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseover',
      detail: {...propertyInfo, originalEvent}
    })
  }

  onMouseMove(evt) {
    const {propertyInfo, markerType} = evt.target
    if (markerType === 0) {
      return
    }
    const {originalEvent} = evt

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimousemove',
      detail: {...propertyInfo, originalEvent}
    })
  }

  onMouseOut(evt) {
    const {markerType} = evt.target
    if (markerType === 0) {
      return
    }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseout'
    })
  }

  isPoiClicked = evt => {
    const {propertyInfo, markerType} = evt.target
    if (markerType === 0) {
      return
    }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poiclick',
      detail: {...propertyInfo, markerType}
    })
  }

  setMarkerDefaults() {
    this._selectedPoiSelector = 'marker--selected'
    this.markerTypeEquivalences = ['minipoi', 'poi', 'label']
    this.DEFAULT_MARKER_TYPE = 'minipoi'
  }

  resetMarkerType(markerType) {
    this._markerType = markerType
  }

  addIconMarkersToMap({icons = [], map}) {
    icons.forEach(icon => {
      const iconInstance = L.icon({
        iconUrl: icon.iconUrl,
        iconSize: icon.size,
        iconAnchor: icon.anchor,
        shadowUrl: icon.shadowUrl
      })
      const marker = L.marker([icon.lat, icon.lng], {
        icon: iconInstance
      }).addTo(map)

      if (icon.popup) {
        const {content} = icon.popup
        // wait some time in order to get the correct position for the popup
        setTimeout(function() {
          marker.bindPopup(content).openPopup()
        }, this.POPUP_WAIT_TIME)
      }
    })
  }

  getIconFor({item}) {
    const {customClassName, isSelected, propertyInfo} = item
    const {price} = propertyInfo
    let className = this.getInitialIcon()
    let priceText = ''
    let extendedIconClassName = className

    if (className !== this.DEFAULT_MARKER_TYPE) {
      if (className === 'label') {
        priceText = price
      }
      extendedIconClassName += ' ' + className
      extendedIconClassName += ' ' + customClassName
    }

    className =
      extendedIconClassName +
      ' ' +
      (isSelected ? ' ' + this._selectedPoiSelector : '')

    return this.getDivIconFor({className, html: priceText})
  }

  getDivIconFor({className, html}) {
    return new L.DivIcon({className, html, iconSize: null})
  }

  getInitialIcon() {
    return (
      this.markerTypeEquivalences[this._markerType] || this.DEFAULT_MARKER_TYPE
    )
  }
}

export default MarkerManager
