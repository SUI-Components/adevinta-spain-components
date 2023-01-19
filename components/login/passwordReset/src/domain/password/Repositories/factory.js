import FetcherFactory from '../../fetcher/factory.js'
import {HTTPPasswordRepository} from './HTTPPasswordRepository.js'

export class PasswordRepositoriesFactory {
  static hTTPPasswordRepository = ({config}) =>
    new HTTPPasswordRepository({
      config,
      fetcher: FetcherFactory.unauthenticatedFetcher({config})
    })
}
