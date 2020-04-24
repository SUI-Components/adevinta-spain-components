import {TcfRepository} from '../../../../components/tcf/services/src/infrastructure/Tcf/TcfRepository'

class TcfRepositoryMock extends TcfRepository {
  constructor({borosTCF}) {
    super({borosTCF})
  }
}

export {TcfRepositoryMock}
