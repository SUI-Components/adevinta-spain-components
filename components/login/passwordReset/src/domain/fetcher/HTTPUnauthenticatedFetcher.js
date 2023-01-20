import {Repository} from '@s-ui/domain'

export default class HTTPUnauthenticatedFetcher extends Repository {
  constructor({config, fetcher}) {
    super()
    this._config = config
    this._fetcher = fetcher
  }

  get({path, params, options = {}}) {
    const optionsWithExtraHeaders = {
      ...options,
      headers: {
        ...(options.headers || {})
      }
    }

    return this._fetcher.get(path, {
      ...optionsWithExtraHeaders,
      params
    })
  }

  post({path, params, options = {}}) {
    const optionsWithExtraHeaders = {
      ...options,
      headers: {
        ...(options.headers || {})
      }
    }
    return this._fetcher.post(path, params, optionsWithExtraHeaders)
  }
}
