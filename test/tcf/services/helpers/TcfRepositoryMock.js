import {TcfRepository} from '../../../../components/tcf/services/src/infrastructure/tcfx/TcfRepository'
class TcfRepositoryMock extends TcfRepository {
  constructor({tcfApi}) {
    super({tcfApi})
  }
}

export {TcfRepositoryMock}
