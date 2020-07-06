class GetVendorListUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({language} = {}) {
    return this._repository.getVendorList({language})
  }
}

export {GetVendorListUseCase}
