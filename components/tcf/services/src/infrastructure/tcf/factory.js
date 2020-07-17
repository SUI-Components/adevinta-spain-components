import {TcfRepository} from './TcfRepository'
import TcfApiInitializer from '@adv-ui/boros-tcf'

const tcfApi = TcfApiInitializer.init()

export function tcfRepositoryFactory() {
  return new TcfRepository({tcfApi, window})
}
