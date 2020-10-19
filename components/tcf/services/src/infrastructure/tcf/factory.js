import {TcfRepository} from './TcfRepository'
import TcfApiInitializer from '@adv-ui/boros-tcf'

export function tcfRepositoryFactory({language, reporter, scope}) {
  const tcfApi = TcfApiInitializer.init({language, reporter})
  return new TcfRepository({tcfApi, scope})
}
