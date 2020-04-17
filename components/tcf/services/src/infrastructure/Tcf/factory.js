import {TcfRepository} from './TcfRepository'
import {CmpApi} from '@iabtcf/cmpapi'
const cmpApi = new CmpApi(1, 3, true)

class TcfServicesRepositoriesFactory {
  static tcfRepository() {
    return new TcfRepository({cmpApi, window})
  }
}

export {TcfServicesRepositoriesFactory}
