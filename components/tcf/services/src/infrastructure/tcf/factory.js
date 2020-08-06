import {TcfRepository} from './TcfRepository'
import TcfApiInitializer from '@adv-ui/boros-tcf'

export function tcfRepositoryFactory({language, scope}) {
  const tcfApi = TcfApiInitializer.init({language})
  return new TcfRepository({tcfApi, scope})
}
