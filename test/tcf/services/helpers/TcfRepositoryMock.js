import {TcfRepository} from '../../../../components/tcf/services/src/infrastructure/tcf/TcfRepository'
class TcfRepositoryMock extends TcfRepository {
  constructor({tcfApi}) {
    super({tcfApi})
  }
}

export {TcfRepositoryMock}
