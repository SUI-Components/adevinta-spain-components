import {FetcherFactory as SUIFetcherFactory} from '@s-ui/domain'

import HTTPUnauthenticatedFetcher from './HTTPUnauthenticatedFetcher.js'

export default class FetcherFactory {
  static unauthenticatedFetcher = ({config}) =>
    new HTTPUnauthenticatedFetcher({
      config,
      fetcher: SUIFetcherFactory.httpFetcher({})
    })
}
