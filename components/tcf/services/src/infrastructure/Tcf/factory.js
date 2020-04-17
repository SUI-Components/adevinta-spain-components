import {TcfRepository} from './TcfRepository'
import {CmpApi} from '@iabtcf/cmpapi'
const cmpApi = new CmpApi(1, 3, true)

export function tcfRepositoryFactory() {
  return new TcfRepository({cmpApi, window})
}
