class TcfRepository {
  constructor({cmpApi, window}) {
    this._window = window
    this._cmpApi = cmpApi
  }

  getTCData() {
    return new Promise((resolve, reject) => {
      this._window.__tcfapi('addEventListener', 2, (tcData, success) => {
        if (success && tcData.eventStatus === 'tcloaded') {
          const decoded = this._decodeTCString({TCString: tcData.tcString})
          resolve(decoded)
          this._window.__tcfapi(
            'removeEventListener',
            2,
            success => {
              if (success) {
                // oh good...
              }
            },
            tcData.listenerId
          )
        } else {
          reject(success)
        }
      })
    })
  }

  getPurposesAndVendors() {
    return new Promise((resolve, reject) => {
      this._window.__tcfapi('getVendorList', 2, (gvl, success) => {
        if (success) {
          resolve(gvl)
        } else {
          reject(success)
        }
      })
    })
  }

  sendConsents({purposeConsents, vendorConsents, uiVisible}) {
    const tsString = this._createTSString({purposeConsents, vendorConsents})
    this._cmpApi.update(tsString, uiVisible)
  }

  _createTCString({purposeConsents, vendorConsents}) {
    const consents = {purposeConsents, vendorConsents}
    // needs transformation to create a TCString
    return consents
  }

  _decodeTCString({TCString}) {
    // do something
    return TCString
  }
}

export {TcfRepository}
