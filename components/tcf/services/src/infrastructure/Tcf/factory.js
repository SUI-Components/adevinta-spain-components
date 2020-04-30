import {TcfRepository} from './TcfRepository'
import {BorosTCF} from './borosMock'

const borosTCF = BorosTCF.init()

export function tcfRepositoryFactory() {
  return new TcfRepository({borosTCF, window})
}
