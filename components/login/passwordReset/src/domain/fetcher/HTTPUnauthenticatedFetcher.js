import {Repository} from '@s-ui/domain'

export default class HTTPUnauthenticatedFetcher extends Repository {
  constructor({config, fetcher}) {
    super()
    this._config = config
    this._fetcher = fetcher
  }

  async get({path, params, options = {}}) {
    const optionsWithExtraHeaders = {
      ...options,
      headers: {
        ...(options.headers || {})
      }
    }

    const response = await this._fetcher.get(path, {
      ...optionsWithExtraHeaders,
      params
    })
    return response
  }

  async post({path, params, options = {}, skipCSRF = true}) {
    const optionsWithExtraHeaders = {
      ...options,
      headers: {
        ...(options.headers || {})
      }
    }

    const response = await this._fetcher.post(
      path,
      params,
      optionsWithExtraHeaders
    )
    return response
  }
}
